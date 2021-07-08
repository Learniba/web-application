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
        <h5 class="mb-4">{{ $t("install.create_teachers_upload_2.create_new_teachers") }}</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents/>
            <div class="card-body">
              <p>
                {{ $t("install.create_teachers_upload_2.description") }}
              </p>
              <div id="teacherApp">
                <button class="btn btn-success" v-on:click="download()">{{ $t("install.create_teachers_upload_2.download") }}</button>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-on:click="validate()" class="btn btn-secondary next-btn" type="button">{{
                  $t("install.submit")
                }}
              </button>
              <button class="btn btn-secondary finish-btn" type="submit">{{ $t("install.prev") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstallAnchorComponents from "./Components/InstallAnchorComponents";
import InstallStore from "/Stores/InstallStore"
import Vue from "vue"

Vue.prototype.$InstallStore = InstallStore;

export default {
  name: "InstallTeachersUpload2View",
  components: {InstallAnchorComponents},
  beforeCreate() {
    let app = this;
    this.$store.commit('SET_LAYOUT', "wizard-layout");
    // < check teacher excel template file address  >
    if (Object.keys(this.$installStore.getters.templateFiles).length === 0) {
      this.$Axios.get('/install/files').then((data) => {
        console.log(data.data);
        app.$installStore.commit("UPDATE_TEMPLATE_FILES", data.data);
      })
    }
    // </ check teacher excel template file address >

  },
  computed: {
    excel() {
      return this.$installStore.getters.templateFiles.teachers_excel;
    }
  },
  methods: {
    download() {
      const FileDownload = require('js-file-download');
      let app=this;
      let url=(app.$store.getters.configs.server.static?app.$store.getters.configs.server.static_file_server:app.$store.getters.configs.server.production_server)+app.$installStore.getters.templateFiles.teachers_excel;
      console.log(url)
      this.$Axios({
        url: url,
        method: 'GET',
        responseType: 'blob', // Important
      }).then((response) => {
        FileDownload(response.data, 'teachers_excel.xlsx');
      });
    },

  }
}
</script>

<style scoped>

</style>