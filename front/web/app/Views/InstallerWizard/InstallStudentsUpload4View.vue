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
        <h5 class="mb-4">{{ $t("install.create_students_upload_2.create_new_student", {"class": class_name}) }}</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents/>
            <div class="card-body">
              <p>
                {{ $t("install.create_students_upload_2.description", {"class": class_name}) }}
              </p>
              <div id="teacherApp">
                <div class="card dow">
                  <p>
                    {{ $t("install.create_students_upload_2.download file and after edit,upload again") }}
                  </p>
                  <div class="col-md-12">
                    <button class="btn btn-success" v-on:click="download()">
                      {{ $t("install.create_students_upload_2.download") }}
                    </button>
                  </div>
                </div>
                <div class="card dow">
                  <h5 class="mb-4">{{ $t("install.create_students_upload_2.upload array") }}</h5>
                  <p>
                    {{ $t("install.create_students_upload_2.upload filled excel here") }}
                  </p>
                  <vue-dropzone class="dropzone" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"
                                v-on:vdropzone-success="onFileUploaded"/>
                </div>
                <div v-if="has_student" class="card dow">
                  <h3>قبل تر اطلاعات برخی دبیران را ثبت نموده اید</h3>
                  <div class="col-md-12">
                    <button v-on:click="viewData()" class="btn btn-secondary next-btn" type="button">{{
                        $t("install.view submitted data")
                      }}
                    </button>
                  </div>

                </div>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-if="enable_next_button" v-on:click="validate()" class="btn btn-success next-btn"
                      type="button">{{
                  $t("install.next")
                }}
              </button>
              <button class="btn btn-secondary finish-btn" v-on:click="prev()">{{ $t("install.prev") }}</button>
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
import vue2Dropzone from "vue2-dropzone"
import '/theme/assets/css/vendor/dropzone.min.css'
import Vue from "vue"

Vue.prototype.$InstallStore = InstallStore;

export default {
  name: "InstallStudentUpload4View",
  components: {InstallAnchorComponents, vueDropzone: vue2Dropzone},
  beforeCreate() {
    let app = this;
    this.$store.commit('SET_LAYOUT', "wizard-layout");
    // < check students excel template file address  >
    if (Object.keys(this.$installStore.getters.templateFiles).length === 0) {
      this.$Axios.get('/install/files').then((data) => {
        console.log(data.data);
        app.$installStore.commit("UPDATE_TEMPLATE_FILES", data.data);
      })
    }
    // </ check students excel template file address >


    // < get class name  >
    this.$Axios.get('/install/class/' + this.$route.params.classid).then((response) => {
      this.class_name = response.data.name;
    })
    // </ get class name >

    // < check if system has some students  >
    app.$Axios.get('/install/students').then((data) => {
      app.has_student = data.data.length > 0;
      if (data.data.length > 0) {
        app.enable_next_button = true;
      }
    })
    // </ check if system has some students >
  },
  computed: {

    excel() {
      return this.$installStore.getters.templateFiles.students_excel;
    }
  },
  data() {
    let app = this;
    return {
      class_name: "",
      enable_next_button: false,
      has_student: false,
      dropzoneOptions: {
        url: this.$store.getters.configs.server.production_server + '/v1/install/students/upload',
        // thumbnailWidth: 150,
        maxFilesize: 4000,
        acceptFiles: "application/vnd.ms-excel",
        // init: function () {
        //   this.on("success", function (file, responseText) {
        //     console.log(responseText);
        //   });
        // },
        headers: {"My-Awesome-Header": "header value"},
        previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>',
      }
    }
  },
  methods: {
    prev() {
      this.$router.push('/install/classes/form/3');
    },
    onFileUploaded() {

      this.enable_next_button = true;
    },
    viewData() {
      this.$router.push('/install/students/validate/' + this.$route.params.classid + '/2');
    },
    validate() {
      this.$router.push('/install/students/validate/' + this.$route.params.classid + '/2');
    },
    download() {
      const FileDownload = require('js-file-download');
      let app = this;
      let url = (app.$store.getters.configs.server.static ? app.$store.getters.configs.server.static_file_server : app.$store.getters.configs.server.production_server) + app.$installStore.getters.templateFiles.students_excel;
      console.log(url)
      this.$Axios({
        url: url,
        method: 'GET',
        responseType: 'blob', // Important
      }).then((response) => {
        FileDownload(response.data, 'students_excel.xlsx');
      });
    }
  }
}
</script>

<style scoped>
.card.dow {
  padding: 20px;
}

.card.dow {
  float: right;
  width: 100%;
  margin-bottom: 20px;
}

.btn-success {
  margin-left: 20px
}
</style>