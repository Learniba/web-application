<template>

  <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
    <table id="datatableRows" class="data-table responsive nowrap">
      <thead>
      <tr>
        <th v-for="head in headers">{{ head }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in rows">
        <td v-for="(item, index) in row">
          <p v-if="item.status==='ok'" :class="'list-item-heading '+item.layout">{{ item.text }}</p>
          <input :class="'form-control border-danger '+item.layout" v-if="item.status==='error'"
                 type="text" :value="item.text" v-on:change="validate($event,row.id.text,index)">
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

export default {
  name: "InstallDataTableErrorsEditableComponent",
  props: ["list_url", "headers", "validate_url"],
  data() {
    return {
      rows: [],
      error_count: 0
    }
  },

  methods: {
    add_error() {
      this.error_count = this.error_count + 1;
      this.$InstallStore.commit("ENABLE_NEXT_BUTTON",false) ;
      return true;
    },
    solve_error() {
      this.error_count = this.error_count - 1;
      if (this.error_count === 0) {
        this.$InstallStore.commit("ENABLE_NEXT_BUTTON",true) ;
      }
    },
    validate(event, id, attr) {
      var app = this;
      /**
       * response data model must be like this:
       *
       * {
       *   "status":"ok"|"error"
       *   "message":"" // if status === "error" then "message" has value
       * }
       *
       * */

      this.$Axios.post(this.validate_url, {
        id: id,
        attr: attr,
        value: event.target.value
      }).then((res) => {
        if (res.data.status === "ok") {
          const row = app.rows.find(r => r.id.text === id);

          event.target.className = "border-success";
          row[attr].text = event.target.value;
          row[attr].status = "ok";
          app.solve_error();
          // Object.assign(item, payload);
        }
      });
    }
  },
  created() {
    let app = this;
    this.$Axios.get(this.list_url).then((data) => {
      /**
       * data format must be like this:
       *
       * [
       {
            "id": {
              "text": 1,
              "status": "ok"
            },
            "name": {
              "text": "jessica*",
              "status": "error",
              "message": "must be alphametric"
            },
            "family": {
              "text": "hero teacher",
              "status": "ok"
            },
            "national_id": {
              "text": "0011695792",
              "status": "error",
              "message": "national code is not valid"
            },
            "mobile": {
              "text": "00989353466620",
              "status": "ok"
            }
          },
       {
            "id": {
              "text": 2,
              "status": "ok"
            },
            "name": {
              "text": "petter",
              "status": "ok"
            },
            "family": {
              "text": "prisson_",
              "status": "error",
              "message": "must be alphabetic"
            },
            "national_id": {
              "text": "0011695791",
              "status": "ok"
            },
            "mobile": {
              "text": "+989353466620",
              "status": "error",
              "message": "phone number can't contain simbol"
            }
          }
       ]
       *
       * @type {any}
       */
      app.rows = data.data.error_rows;
      app.$installStore.commit('SET_COUNT',data.data.count);
      if (app.rows.length > 0) {
        app.rows.forEach((value, index) => {
          for (const [i, v] of Object.entries(value)) {
            if (v.status === "error") {
              app.add_error();
            }
          }
        })
      }
    })
  }
}
</script>

<style scoped>
.data-table-rows table {
  border-spacing: 0 1rem;
  width: 100%;
}

.rtl {
  direction: rtl !important;
  text-align: right
}

.ltr {
  direction: ltr !important;
  text-align: left
}
</style>