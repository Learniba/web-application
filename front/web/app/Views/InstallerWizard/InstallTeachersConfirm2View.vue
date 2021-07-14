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
              <div class="alert alert-success">
                {{ $t("install.create_teachers_confirm_2.description") }}
              </div>

              <div id="teacherApp">
                <div class="card dow">
                  <InstallDataTableConfirmComponent :single_url="single_url"
                                                    :list_url="list_url" :headers="headers" :has_select="true"/>
                </div>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-if="this.$InstallStore.getters.enable_next_button" v-on:click="validate()"
                      class="btn btn-success next-btn" type="button">{{
                  $t("install.next")
                }}
              </button>
              <button class="btn btn-secondary finish-btn" v-on:click="last()" type="submit">{{
                  $t("install.prev")
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
import InstallDataTableConfirmComponent from "./Components/InstallDataTableConfirmComponent";
import InstallAnchorComponents from "./Components/InstallAnchorComponents";

export default {
  name: "InstallTeachersConfirm2View",
  components: {InstallAnchorComponents, InstallDataTableConfirmComponent},
  methods: {
    validate() {
      this.$router.push('/install/classes/form/3');
    },
    last() {
      if (this.$installStore.getters.count === 0) {
        this.$router.push('/install/teachers/upload/2');
      } else {
        this.$router.push('/install/teachers/validate/2');
      }
    }
  },
  beforeCreate() {
    this.$store.commit("SET_LAYOUT", "wizard-layout");
  },
  created() {
    this.$installStore.commit('ENABLE_NEXT_BUTTON', true)
  },
  data() {
    return {
      single_url: "/install/teacher/edit",// will use (POST) method for edit and (DELETE) method for delete teacher
      list_url: "/install/teachers",
      headers: [
        this.$i18n.t("install.create_teachers_validate_2.form fields.id"),
        this.$i18n.t("install.create_teachers_validate_2.form fields.name"),
        this.$i18n.t("install.create_teachers_validate_2.form fields.family"),
        this.$i18n.t("install.create_teachers_validate_2.form fields.national_id"),
        this.$i18n.t("install.create_teachers_validate_2.form fields.mobile"),
      ]
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
.btn-success{
  margin-left:20px
}
</style>