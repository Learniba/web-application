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
        <h5 class="mb-4">{{ $t("install.create_classes_3.title") }}</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents/>
            <div class="card-body">
              <p>
                {{ $t("install.create_classes_3.description") }}
              </p>
              <div id="classapp">
                <div class="users-header">
                  <div class="left">
                    <button class="btn btn-success" id="newRow" v-on:click="addNew()">
                      <font-awesome-icon icon="plus"/>
                    </button>
                  </div>
                  <div class="right">
                    {{ $t("install.create_classes_3.class_header") }}
                  </div>
                </div>
                <div class="row-box">
                  <InstallClassFormRowComponent :sorted_orientations="sorted_orientations" v-model="has_not_new_row" v-for="item in classes" :cls="item"/>
                </div>
              </div>


            </div>
            <div class="card-saved-classes" v-if="saved_classes.length>0">
              <div class="container">
                <div class="col-md-12">
                  <p>
                    {{ $t("install.create_classes_3.next step descriptions") }}
                  </p>
                  <div class="col-md-4" v-for="(item,index) in saved_classes"
                       v-bind:url="item.url= '/install/students/upload/' + item.id + '/4'">

                    <div class="card-class">
                      <div class="users-header">
                        <h3 class="text-center">{{ item.name }}</h3>
                      </div>
                      <div class="card-body">
                        <ul class="class_ul">
                          <li>
                            <font-awesome-icon :color="item.has_student?'green':'red'"
                                               :icon="item.has_student?'check-circle':'times-circle'"/>
                            {{
                              item.has_student ? $t("install.create_classes_3.submitted students") : $t("install.create_classes_3.students of class are not submitted")
                            }}
                          </li>
                          <li v-if="item.has_student">
                            <font-awesome-icon :color="item.students_validated?'green':'red'"
                                               :icon="item.students_validated?'check-circle':'times-circle'"/>
                            {{
                              item.students_validated ? $t("install.create_classes_3.validated students") : $t("install.create_classes_3.student data has error")
                            }}
                          </li>
                          <li>
                            <font-awesome-icon :color="item.scheduled?'green':'red'"
                                               :icon="item.scheduled?'check-circle':'times-circle'"/>
                            {{
                              item.scheduled ? $t("install.create_classes_3.scheduled times") : $t("install.create_classes_3.times are not scheduled")
                            }}
                          </li>

                        </ul>
                      </div>
                      <div class="card-body">
                        <router-link :to="item.url" v-slot="{href}">
                          <a :href="href" class="btn btn-success prev-btn" type="button">تکمیل اطلاعات</a>
                        </router-link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-if="has_not_new_row && enabled_next_btn" v-on:click="next()" class="btn btn-success next-btn"
                      type="button">{{
                  $t("install.next")
                }}
              </button>
              <button v-if="!has_not_new_row" v-on:click="save_classes()" class="btn btn-success next-btn"
                      type="button">{{
                  $t("install.submit")
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
import Vue from "vue"
import InstallAnchorComponents from "./Components/InstallAnchorComponents";
import InstallStore from "../../Stores/InstallStore";
import "/theme/assets/js/vendor/jquery-3.3.1.min"
import "/theme/assets/js/vendor/bootstrap-notify.min"
import randomInteger from 'random-int';


import Validators from "/Views/InstallerWizard/Classes/InstallUsers1_validateForms"
import InstallClassFormRowComponent from "./Components/InstallClassFormRowComponent";
import {success, danger, warning} from "../../Helpers/Functions";

Vue.prototype.$installStore = InstallStore;
export default {
  name: "InstallClassesForm2View",
  components: {InstallClassFormRowComponent, InstallAnchorComponents},

  beforeCreate() {

  },
  computed: {
    classes() {
      return this.$installStore.getters.classes
    },
    levels() {
      return this.$installStore.getters.levels
    },
    orientation() {
      return this.$installStore.getters.orientations
    },
    saved_classes() {
      return this.$installStore.getters.saved_classes
    },

  },
  data() {
    return {
      sorted_orientations:[],
      has_not_new_row: false,
      enabled_next_btn: false,
      count: 1
    };
  },
  methods: {
    sort_orientations(arr){
      arr.forEach((value,index)=>{
        if (typeof this.sorted_orientations[value.level]==="undefined"){
          this.sorted_orientations[value.level]=[];
        }
        this.sorted_orientations[value.level].push(value);
      })
    },
    get_orientations() {

      this.$Axios.get('/g/orientations').then((response) => {
        this.$installStore.commit('SET_ORIENTATIONS', response.data);
        this.sort_orientations(response.data)
      })
    },
    get_levels() {
      this.$Axios.get('/g/levels').then((response) => {
        this.$installStore.commit('SET_LEVELS', response.data)
      })
    },
    get_saved_classes() {
      this.$Axios.get('/install/classes').then((data) => {
        if (Object.keys(data.data).length > 0) {
          this.$installStore.commit('SET_CLASSES', data.data);
          this.classes = data.data;
          this.$installStore.commit('SET_SAVED_CLASSES', data.data);
          this.has_not_new_row = true;
        }
      })
    },


    save_classes() {
      let has_error = this.validate_className_fields();


      if (!has_error) {
        this.save_classes_in_server();
      }
    },
    prev() {
      this.$router.push('/install/teachers/confirm/2');
    },
    next() {
      this.$router.push('/install/finish');
    },

    addNew() {
      let c = this.$installStore.getters.classes.length;

      this.$installStore.commit('ADD_CLASS', {
        id: (c + 1 + randomInteger(5000)),
        name: "",
        level: 1,
        orientation: 1,
        synced: false
      });
      this.has_not_new_row = false;
    },


    save_classes_in_server() {
      this.$Axios.post('/install/classes', this.classes).then((response) => {
        if (response.data.status === "ok") {
          success(this, "install.create_classes_3.alerts.classes_added");

          // < transfer saved classes in an array  >
          {
            this.$installStore.commit('SET_SAVED_CLASSES',this.classes);
          }
          // </ transfer saved classes in an array >


          this.has_not_new_row = true;
        } else {
          warning(this, response.data.message, false);
          this.has_not_new_row = false;
        }
      }).catch((error) => {
        warning(this, error, false);
        this.has_not_new_row = false;
      });


    },

    validate_className_fields() {
      let has_error = false;
      if (jQuery('#classapp').find('.u_name').length > 0) {
        jQuery('#classapp').find('.u_name').each((index, value) => {
          if (jQuery(value).val().length === 0) {
            jQuery(value).closest('.form-group').addClass('has-error');
            has_error = true;
          } else {
            jQuery(value).closest('.form-group').removeClass('has-error');
          }
        })
      }
      return has_error;
    }
  },

  created() {
    this.$store.commit("SET_LAYOUT", "loading-layout");
    this.get_orientations();
    this.get_levels();
    this.get_saved_classes();
    this.$store.commit("SET_LAYOUT", "wizard-layout");
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

.btn-success {
  margin-left: 20px
}

.card-class {
  box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
  width: 100%;
  background: white;
  float: right;
  margin-bottom: 40px;
}

.card-class .users-header {
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  margin-top: -10px;
  color: white;
  padding-top: 20px;
  padding-bottom: 10px !important;

}

.btn-toolbar {
  float: right;
  width: 100%;
}

.card-class a {
  margin: auto;
  display: block;
  text-align: center;
}

.class_ul {
  list-style: none;
}
.card-saved-classes{
  display: block;
  float:right;
  width:100%
}
</style>