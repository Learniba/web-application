<template>
  <div class="row data-row" :data-id="user.id" notsaved="true">
    <button class="rm-btn" v-on:click="remove()">
      <font-awesome-icon icon="trash"/>
    </button>
    <div class="col-md-12">
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label :for="id_attr('name')" class="">{{
                  $t("install.create_users_1.form.name")
                }}</label>

              <input required :name="name_attr('name')" :id="id_attr('name')"
                     :placeholder='$t("install.create_users_1.form.name")' type="text"
                     class="form-control u_name" v-model="name">

            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label :for="id_attr('family')" class="">{{
                  $t("install.create_users_1.form.family")
                }}</label>

              <input required :name="name_attr('family')" :id="id_attr('family')"
                     :placeholder='$t("install.create_users_1.form.family")' type="text"
                     class="form-control u_family" v-model="family">

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label :for="id_attr('nationCode')">{{
                  $t("install.create_users_1.form.national_id")
                }}</label>

              <input required :name="name_attr('nationCode')" :id="id_attr('nationCode')"
                     :placeholder='$t("install.create_users_1.form.national_id")' type="text"
                     class="form-control nationalCode" v-model="national_id">

            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label :for="id_attr('mobile')">{{
                  $t("install.create_users_1.form.mobile")
                }}</label>

              <input required :name="name_attr('mobile')" :id="id_attr('mobile')"
                     :placeholder='$t("install.create_users_1.form.mobile")' type="text"
                     class="form-control u_mobile" v-model="mobile">

            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label :for="id_attr('role')">{{
                  $t("install.create_users_1.form.role")
                }}</label>

              <select v-model="role" :name="name_attr('role')" :id="id_attr('role')"
                      :placeholder='$t("install.create_users_1.form.role")'
                      class="form-control">
                <option :value="value.id" v-for="(value,index) in roles">
                  {{ tRole(value.label) }}
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

export default {

  name: "InstallUsers1URowComponent",
  props: ["user"],
  computed: {
    name:{
      get(){
        return this.user.name;
      },
      set(v){
        this.user.name=v;
        this.$installStore.commit('UPDATE_USER',this.user)
      }
    },
    family:{
      get(){
        return this.user.family;
      },
      set(v){
        this.user.family=v;
        this.$installStore.commit('UPDATE_USER',this.user)
      }
    },
    mobile:{
      get(){
        return this.user.mobile;
      },
      set(v){
        this.user.mobile=v;
        this.$installStore.commit('UPDATE_USER',this.user)
      }
    },
    national_id:{
      get(){
        return this.user.national_id;
      },
      set(v){
        this.user.national_id=v;
        this.$installStore.commit('UPDATE_USER',this.user)
      }
    },
    role:{
      get(){
        return this.user.role;
      },
      set(v){
        this.user.national_id=v;
        this.$installStore.commit('UPDATE_USER',this.user)
      }
    },
    roles() {
      return this.$store.getters.configs.system_roles;
    },
  },
  methods: {
    remove() {
      let app = this;
      const id = this.user.id;
      let users = this.$installStore.getters.users;
      if (users.length > 1) {

        users.forEach((value, index) => {
          if (parseInt(value.id) === parseInt(id)) {
            if (value.synced) {
              // < User Is Saved In Server  >
              app.$Axios.delete('/install/user/'+value.id).then((data) => {
                jQuery('[data-id="' + this.user.id + '"]').remove();
                users.splice(index, 1);
                jQuery.notify({
                  message: app.$i18n.t("install.create_users_1.alerts.user_deleted"),
                  type: 'success'
                });
              })
              // </ User Is Saved In Server >

            } else {

              // < User Is Not In server  >

              jQuery('[data-id="' + this.user.id + '"]').remove();
              jQuery.notify({
                message: app.$i18n.t("install.create_users_1.alerts.user_deleted"),
                type: 'success'
              });
              users.splice(index, 1);
              // </ User Is Not In server >

            }

          }

        })


        this.$installStore.commit('SET_USERS', users);
      } else {
        jQuery.notify({
          message: app.$i18n.t("install.create_users_1.alerts.cannot_delete_single_row"),
          type: 'danger'
        });
      }
    },
    tRole(label) {
      return this.$i18n.t('system_roles.' + label)
    },
    name_attr(input_name) {
      return 'users[' + this.user.id + '][' + input_name + ']';
    },
    id_attr(id_attr_name) {
      return id_attr_name + this.user.id;
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