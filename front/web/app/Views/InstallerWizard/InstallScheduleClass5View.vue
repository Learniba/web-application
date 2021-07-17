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
          ثبت برنامه ی کلاسی برای کلاس دوم غنچه
        </h5>
        <div class="card mb-4">
          <div id="smartWizardValidation" class="sw-main sw-theme-check">
            <InstallAnchorComponents/>
            <div class="card-body">
              <div class="alert alert-success">
                در این مرحله میتوانید برنامه ریزی کلاسی مربوط به کلاس (اول غنچه) را انجام دهید. برای شروع کافیست روی یکی
                از زمان ها کلیک کنید.
              </div>
              <div id="teacherApp">
                <div class="card dow">
                  <FullCalendarComponent v-model="fullcalendarChanged" ref="fullcalendar" :events="class_events"
                                         :enable_sidebar="false" :enable_all-day="false">
                    <template #modalBody>
                      <div class="row">
                        <div class="col-md-12">
                          <FormRadioBoxComponent v-model="periodMode" ref="period" mode="vertical"
                                                 :items="[{label:'دوره ای',id:1},{label:'فقط یکبار',id:2}]">
                            <template #label>
                              وضعیت تکرار
                            </template>
                          </FormRadioBoxComponent>
                          <FormCheckBoxComponent v-model="days" v-if="periodMode===1" mode="vertical" :items="[
                          {label:'شنبه',id:1},
                          {label:'یکشنبه',id:2},
                          {label:'دوشنبه',id:3},
                          {label:'سه شنبه',id:4},
                          {label:'چهارشنبه',id:5},
                          {label:'پنج شنبه',id:6},
                          {label:'جمعه',id:7}
                          ]"

                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <FormSelectComponent ref="course" :items="courses" value="amin" :required="true">
                            <template #label>درس</template>
                            <template #hint>this is hint</template>
                            <template #error>this is error</template>
                          </FormSelectComponent>

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <FormSelectComponent ref="teacherMaster" :items="courses" value="1" :required="true">
                            <template #label>دبیر اصلی</template>
                            <template #hint>this is hint</template>
                            <template #error>this is error</template>
                          </FormSelectComponent>
                        </div>
                        <div class="col-md-4">

                          <FormSelectComponent ref="teacherHelper" :items="courses" value="2" :required="false">
                            <template #label>دبیر کمکی</template>
                            <template #hint>this is hint</template>
                            <template #error>this is error</template>
                          </FormSelectComponent>

                        </div>
                        <div class="col-md-4">

                          <FormSelectComponent v-if="periodMode===1" ref="supervisor" :items="courses" value="" :required="true">
                            <template #label>سوپروایزر</template>
                            <template #hint>this is hint</template>
                            <template #error>this is error</template>
                          </FormSelectComponent>

                        </div>
                      </div>
                    </template>
                  </FullCalendarComponent>
                </div>
              </div>
            </div>
            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button v-if="this.$InstallStore.getters.enable_next_button" v-on:click="next()"
                      class="btn btn-success next-btn" type="button">{{
                  $t("install.next")
                }}
              </button>
              <button class="btn btn-secondary finish-btn" v-on:click="prev()">{{
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
import InstallAnchorComponents from "./Components/InstallAnchorComponents";
import FullCalendarComponent from "../../Components/FullCalendarComponent";
import FormSelectComponent from "../../Components/Form/FormSelectComponent";
import FormRadioBoxComponent from "../../Components/Form/FormRadioBoxComponent";
import FormCheckBoxComponent from "../../Components/Form/FormCheckBoxComponent";


export default {
  name: "InstallScheduleClass5View",
  components: {
    FormCheckBoxComponent,
    FormRadioBoxComponent, FormSelectComponent, FullCalendarComponent, InstallAnchorComponents
  },
  data() {
    return {
      class_events: [],
      days:[],
      periodMode:1,
      courses: [
        {id: 1, label: "درس اول"},
        {id: 2, label: "درس دوم"},
      ],
      fullcalendarChanged: null
    }
  },
  watch: {
    fullcalendarChanged(old, newval) {
      console.log('fullcalendar changed:');
      console.log(old);
      console.log(newval);
    }
  },
  methods: {

    get_events() {
      this.$Axios.get('/install/classes/schedules/' + this.$route.params.classid).then((response) => {
        this.$installStore.commit('SET_CLASS_EVENTS', response.data);
        this.class_events = response.data;
      })
    },
    next() {
      this.$router.push('/install/classes/form/3')
    },
    prev() {
      this.$router.push('/install/students/confirm/' + this.$route.params.classid + '/4');
    },
    /**
     * when user click on submit button on modal event this method will trigger
     * @param event
     */
    eventSubmit(event) {
      let validated = this.$refs.course.validate() *
          this.$refs.teacherMaster.validate() *
          this.$refs.teacherHelper.validate() *
          this.$refs.supervisor.validate()


    },
    onDateSelected(selectInfo) {
      console.log('parent selected')
    },
  },
  mounted() {
    this.get_events();
    this.$refs.fullcalendar.$refs.modal.clicked = this.eventSubmit;
    // < event click  >
    this.$refs.fullcalendar.onDateClickCustom = this.onDateSelected;


    // </ event click >
  },

  created() {

  },
  beforeCreate() {
    this.$store.commit('SET_LAYOUT', 'wizard-layout')

  }
}
</script>

<style scoped>
#smartWizardValidation .card-body > div {
  height: auto;
}

.btn-success {
  margin-left: 20px
}
</style>