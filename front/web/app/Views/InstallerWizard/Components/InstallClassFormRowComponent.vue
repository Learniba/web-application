<template>
  <div class="row data-row" :data-id="cls.id" notsaved="true">
    <button class="rm-btn" v-on:click="remove()">
      <font-awesome-icon icon="trash"/>
    </button>
    <div class="col-md-12">
      <div class="card">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label :for="id_attr('name')" class="">{{
                  $t("install.create_classes_3.form.name")
                }}</label>

              <input required :name="name_attr('name')" :id="id_attr('name')"
                     :placeholder='$t("install.create_classes_3.form.name")' type="text"
                     class="form-control u_name" v-model="name">

            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label :for="id_attr('level')">{{
                  $t("install.create_classes_3.form.level")
                }}</label>

              <select v-on:change="changed_level" v-model="level" :name="name_attr('level')" :id="id_attr('level')"
                      :placeholder='$t("install.create_classes_3.form.level")'
                      class="form-control">
                <option :value="value.id" v-for="(value,index) in levels">
                  {{ value.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group" v-if="level>0">
              <label :for="id_attr('orientation')" class="">{{
                  $t("install.create_classes_3.form.orientation")
                }}</label>

              <select v-model="orientation" :name="name_attr('orientation')" :id="id_attr('orientation')"
                      :placeholder='$t("install.create_classes_3.form.orientation")'
                      class="form-control">
                <option :value="value.id" v-for="(value,index) in orientations">
                  {{ value.name }}
                </option>
              </select>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import "/theme/assets/js/vendor/bootstrap-notify.min"
import {success, warning, danger} from "../../../Helpers/Functions";

export default {

  name: "InstallClassFormRowComponent",
  props: ["cls"],
  data() {
    return {
      orientations: []
    }
  },
  computed: {
    sorted_orientations(){console.log('co');return this.$installStore.getters.sorted_orientations;},
    levels() {
      return this.$installStore.getters.levels
    },
    name: {
      get() {
        return this.cls.name;
      },
      set(v) {
        this.$emit('changed');
        this.cls.name = v;
        this.$installStore.commit('UPDATE_CLASS', this.cls)
      }
    },
    level: {
      get() {
        return this.cls.level;
      },
      set(v) {
        this.$emit('changed');
        this.cls.level = v;
        this.$installStore.commit('UPDATE_CLASS', this.cls)
      }
    },
    orientation: {
      get() {
        return this.cls.orientation;
      },
      set(v) {
        this.$emit('changed');
        this.cls.orientation = v;
        this.$installStore.commit('UPDATE_CLASS', this.cls)
      }
    }

  },

  watch: {
    sorted_orientations:{
      handler(n, o) {
        this.get_orientations();
      },
      deep: true
    }
  },
  methods: {
    get_orientations(){
      console.log('changed')
      if (this.level){
        if(typeof this.sorted_orientations[this.level]!=="undefined"){
          this.orientations=this.sorted_orientations[this.level];
        }
      }
    },
    changed_level(event) {
      // this.$Axios.get('/g/orientation/' + event.target.value).then((response) => {
      //   this.orientations = response.data;
      // })
      this.get_orientations();
    },
    remove() {
      let app = this;
      const id = this.cls.id;
      let classes = this.$installStore.getters.classes;
      if (classes.length > 1) {

        classes.forEach((value, index) => {
          if (parseInt(value.id) === parseInt(id)) {
            if (value.synced) {
              // < User Is Saved In Server  >
              app.$Axios.delete('/install/class/' + value.id).then((data) => {
                jQuery('[data-id="' + this.cls.id + '"]').remove();
                classes.splice(index, 1);
                success(app, "install.create_classes_3.alerts.class_deleted_from_server")

              })
              // </ User Is Saved In Server >

            } else {

              // < User Is Not In server  >

              jQuery('[data-id="' + this.cls.id + '"]').remove();
              success(app, "install.create_classes_3.alerts.class_deleted")

              classes.splice(index, 1);
              // </ User Is Not In server >
            }
          }
        })
        this.$installStore.commit('SET_CLASSES', classes);
      } else {
        danger(app, "install.create_classes_3.alerts.cannot_delete_single_row")

      }
    },
    name_attr(input_name) {
      return 'classes[' + this.cls.id + '][' + input_name + ']';
    },
    id_attr(id_attr_name) {
      return id_attr_name + this.cls.id;
    },
    created() {
      this.get_orientations();
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: .75rem;
  padding: 15px;
}

.row-box .row {
  margin-top: 20px;
}

.rm-btn {
  background: #e91e63;
  border: none;
  border-radius: 5px;
  padding: 6px;
  width: 25px;
  height: 27px;
  color: white;
  padding-right: 7px;
  margin-top: -2px;
  margin-bottom: -13px;
  position: absolute;
  z-index: 9999;
  right: 30px;
  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, .14), 0 3px 1px -2px rgba(244, 67, 54, .2), 0 1px 5px 0 rgba(244, 67, 54, .12);
}

.form-group.has-error {
  border: red solid 1px;
  border-radius: 4px;
  background: red;
  color: white;
  /* line-height: 21px; */
}
</style>