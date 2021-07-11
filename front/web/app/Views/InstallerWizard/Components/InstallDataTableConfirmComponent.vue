<template>
  <div class="validate-box">

    <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
      <table id="datatableRows" class="data-table responsive nowrap">
        <thead>
        <tr>
          <th v-for="head in headers">{{ head }}</th>
          <th v-if="has_select" v-on:click="selectAll($event)">
            <label
                class="custom-control custom-checkbox mb-1 align-self-center data-table-rows-check">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-label">&nbsp;</span>
            </label>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,rowIndex) in rows">
          <td v-for="(item, index) in row" v-on:dblclick="edit($event,rowIndex,item,index,row.id)">
            <p v-if="item.editting!==true" class="list-item-heading">{{ item.text }}</p>
            <input :class="'form-control border-info '" v-if="item.editting===true"
                   type="text" :value="item.text" v-on:change="changed($event,row.id,index,rowIndex)">
          </td>
          <td v-if="has_select" v-on:click="select($event)">
            <label
                class="custom-control custom-checkbox mb-1 align-self-center data-table-rows-check">
              <input type="checkbox" class="custom-control-input" :dataID="row.id">
              <span class="custom-control-label">&nbsp;</span>
            </label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="row" v-if="this.$installStore.getters.count===0">
      <div class="col-md-12">
        <div class="alert alert-info">
          {{ $t("install.create_teachers_confirm_2.alerts.data is empty, go back and fill data") }}
        </div>
      </div>
    </div>
    <div class="row-sticky" v-if="has_selected">
      <div class="col-md-12">
        <button class="btn btn-danger" v-on:click="deleteSelected($event)">
          {{ $t("install.create_teachers_confirm_2.delete selected") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "/theme/assets/js/vendor/jquery-3.3.1.min"
import "/theme/assets/js/dore.script"
import "/theme/assets/js/vendor/bootstrap-notify.min"

export default {
  name: "InstallDataTableConfirmComponent",
  props: ["headers", "single_url", "list_url"],
  methods: {
    edit(event, rowIndex, item, fieldName, id) {
      this.rows[rowIndex][fieldName].editting = true;
    },
    changed(event, tableId, fieldName, rowIndex) {
      this.$Axios.post(this.single_url, {
        id: tableId,
        attr: fieldName,
        value: event.target.value
      }).then((res) => {
        if (res.data.status === "ok") {
          let td=$(event.target).closest('td');
          this.rows[rowIndex][fieldName].text = event.target.value;
          this.rows[rowIndex][fieldName].editting = false;
          setTimeout(()=>{
            td.find('p').addClass('border-success');
          },500)

        } else {
          jQuery.notify({
            message: res.data.message,
            type: 'warning'
          });
        }
      })
    },
    deleteSelected(event) {
      let el = $(event.target);
      let arr = [];
      el.closest('.validate-box').find("input[type='checkbox']:checked").each((index, value) => {
        arr.push($(value).attr("dataID"));
      });
      this.$Axios.delete(this.single_url, {
        "bulk": true,
        "ids": arr
      }).then((res) => {
        if (res.data.status === "ok") {
          el.closest('.validate-box').find("input[type='checkbox']:checked").closest('tr').remove();
          this.has_selected = false;
          this.$installStore.commit("SET_COUNT", $('.validate-box').find("input[type='checkbox']").length);
          this.$installStore.commit("ENABLE_NEXT_BUTTON", this.$installStore.getters.count > 0)
        } else {
          jQuery.notify({
            message: res.data.message,
            type: 'warning'
          });
        }
      })
    },
    select(event) {
      let label = $(event.target);
      let input = label.find('input');
      input.prop("checked", !input.prop("checked"));
      this.has_selected = input.closest('table').find("input[type='checkbox']:checked").length > 0;
    },
    selectAll(event) {
      let el = $(event.target);
      let is_select_all = !el.find("input").prop("checked");
      el.find('input').prop("checked", is_select_all);
      el.closest('table').find("input[type='checkbox']").each((index, value) => {
        $(value).prop("checked", is_select_all)
      });
      this.has_selected = el.closest('table').find("input[type='checkbox']:checked").length > 0;
    }
  },

  created() {
    let app = this;
    this.$Axios.get(this.list_url).then((res) => {
      app.rows = res.data.rows;
      app.$installStore.commit('SET_COUNT', res.data.count);
    })
  },
  data() {
    return {
      rows: [],
      has_selected: false,//enable when select some rows
      has_select: true
    }
  }
}
</script>

<style scoped>
.data-table-rows table {
  border-spacing: 0 1rem;
  width: 100%;
}

.row-sticky {
  position: fixed;
  bottom: 0;
  background: #d1dbd1;
  width: 100%;
  right: 0;
  padding: 15px;
  z-index: 999999;
  box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
}
td p{
  border: solid 1px;
  padding: 5px;
  border-color: transparent;
}
</style>