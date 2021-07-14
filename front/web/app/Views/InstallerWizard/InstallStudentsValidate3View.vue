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
        <h5 class="mb-4">
          {{
            $t("install.create_teachers_validate_2.You submitted count teacher", {count: this.$InstallStore.getters.count})
          }}</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents/>
            <div class="card-body">
              <div v-if="!this.$InstallStore.getters.enable_next_button" class="alert alert-warning">
                {{ $t("install.create_teachers_validate_2.error_description") }}
              </div>
              <div v-if="this.$InstallStore.getters.enable_next_button" class="alert alert-success">
                {{ $t("install.create_teachers_validate_2.success_description") }}
              </div>

              <div id="teacherApp">
                <div class="card dow">
                  <InstallDataTableErrorsEditableComponent :validate_url="validate_url"
                                                           :list_url="error_list_url" :headers="headers"/>

                </div>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-if="this.$InstallStore.getters.enable_next_button" v-on:click="validate()"
                      class="btn btn-secondary next-btn" type="button">{{
                  $t("install.next")
                }}
              </button>
              <button class="btn btn-secondary finish-btn" v-on:click="last()" type="submit">{{
                  $t("install.delete all submitted and go back")
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstallAnchorComponents from "./Components/InstallAnchorComponents";
import "/theme/assets/css/vendor/dataTables.bootstrap4.min.css"
import "/theme/assets/css/vendor/datatables.responsive.bootstrap4.min.css"
import "/theme/assets/js/vendor/jquery-3.3.1.min"
import "/theme/assets/js/vendor/bootstrap-notify.min"
import InstallDataTableErrorsEditableComponent from "./Components/InstallDataTableErrorsEditableComponent";

export default {
  name: "InstallStudentsValidate3View",
  components: {InstallDataTableErrorsEditableComponent, InstallAnchorComponents},
  beforeCreate() {
    this.$store.commit('SET_LAYOUT', 'wizard-layout');
  },
  created() {
    this.$installStore.commit('ENABLE_NEXT_BUTTON', true)
    this.prepare_data();
  },

  data() {
    return {
      teachers: [],
      error_list_url: "/install/students/errors",
      validate_url: "/install/students/validate/row",
      headers: [
        this.$i18n.t("install.create_students_validate_4.form fields.id"),
        this.$i18n.t("install.create_students_validate_4.form fields.name"),
        this.$i18n.t("install.create_students_validate_4.form fields.family"),
        this.$i18n.t("install.create_students_validate_4.form fields.national_id"),
        this.$i18n.t("install.create_students_validate_4.form fields.mobile"),
        this.$i18n.t("install.create_students_validate_4.form fields.birthday"),

        this.$i18n.t("install.create_students_validate_4.form fields.parent_1_name"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_1_family"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_1_national_id"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_1_mobile"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_1_birthday"),


        this.$i18n.t("install.create_students_validate_4.form fields.parent_2_name"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_2_family"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_2_national_id"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_2_mobile"),
        this.$i18n.t("install.create_students_validate_4.form fields.parent_2_birthday"),


      ]
    }
  },
  methods: {
    last() {
      this.$Axios.delete('/install/students').then((res) => {
        if (res.data.status === "ok") {
          this.$router.push('/install/students/upload/2');
        } else {
          jQuery.notify({
            message: res.data.message,
            type: 'warning'
          });
        }
      })
    },
    validate() {
      this.$router.push('/install/students/confirm/'+this.$route.params.classid+'/4');
    },
    prepare_data() {
      let app = this;
      this.$Axios.get('/install/students').then((data) => {
        app.teachers = data.data;
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

#smartWizardValidation .card-body > div {
  height: auto;
}
</style>