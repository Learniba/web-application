<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>{{ $t("install.install_wizard") }}</h1>
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
          <ol class="breadcrumb pt-0">
            <li class="breadcrumb-item">
              <a href="#">صفحه اصلی</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">کتابخونه</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">داده ها</li>
          </ol>
        </nav>
        <div class="separator mb-5"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-4">
        <h5 class="mb-4">{{ $t("install.create_users_1.create_new_users") }}</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents />
            <div class="card-body">
              <p>
                {{ $t("install.create_users_1.description") }}
              </p>
              <div id="userapp">
                <div class="users-header">
                  <div class="left">
                    <button class="btn btn-success" id="newRow" v-on:click="addNew()">
                      <font-awesome-icon icon="plus"/>
                    </button>
                  </div>
                  <div class="right">
                    {{ $t("install.create_users_1.user_header") }}
                  </div>
                </div>
                <div class="row-box">
                  <InstallUsers1URowComponent  v-for="user in users" :user="user"/>
                </div>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button class="btn btn-secondary next-btn" type="button">{{ $t("install.next") }}</button>
              <button class="btn btn-secondary finish-btn" type="submit">{{ $t("install.prev") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import InstallAnchorComponents from "./Components/InstallAnchorComponents";
import InstallUsers1URowComponent from "./Components/InstallUsers1URowComponent";
import InstallStore from "../../Stores/InstallStore";
Vue.prototype.$installStore=InstallStore;
export default {
  name: "InstallUsers1View",
  components: {InstallUsers1URowComponent, InstallAnchorComponents},
  beforeCreate() {
    this.$store.commit("SET_LAYOUT", "wizard-layout")
  },

  data() {
    return {
      count:1,
      users: this.$installStore.getters.users
    };
  },
  methods: {

    addNew() {
      let c=this.count++;
      this.$installStore.commit('ADD_USER',{
        id: c,
        name: "",
        family: "",
        national_id: "",
        mobile: "",
        role: 2,
        synced: false
      })
    }
  },
  computed: {

  },
  created() {

  }
}
</script>
<style scoped>
.users-header {
  background: #000000cf;
  padding: 10px;
  border-radius: 5px;
  min-height: 60px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 12px -5px rgba(33, 33, 33, .46);
}

#newRow {
  border-radius: 100px;
  width: 40px;
  height: 40px;
  float: left;
  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, .42), 0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(76, 175, 80, .2) !important;
  color: white;
  padding: 0;
  padding-right: 14px;
  padding-top: 5px;
}

.users-header .right {
  color: white;
  font-size: 19px;
  padding-top: 7px;
}


.row-box {
  display: block;
  width: 100%;
  float: right;
  margin-bottom: 20px;
}

</style>