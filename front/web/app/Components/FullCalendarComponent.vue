<template>
  <div class='demo-app'>
    <ModalComponent v-model="modalChange" ref="modal">
      <template #body>
        <div class="row" v-if="selected_time_from!==null && selected_time_to !==null">
          <div class="col-md-6">
            <div style="direction:ltr">{{selected_time_from}} - {{selected_time_to}}</div>
          </div>
        </div>
        <slot name="modalBody"></slot>
      </template>
      <template #header v-if="typeof $slots.modalHeader!=='undefined'">
        <slot name="modalHeader" ></slot>
      </template>

    </ModalComponent>


    <div v-if="enable_sidebar" class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
        <label>
          <input
              type='checkbox'
              :checked='calendarOptions.weekends'
              @change='handleWeekendsToggle'
          />
          toggle weekends
        </label>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <full-calendar
          ref="fullCalendar"
          class='demo-app-calendar'
          :options='config'
      >
        <template v-slot:eventContent='arg'>
          <b class="event-b">{{ (new Date(arg.event.start)).getUTCHours()+':'+(new Date(arg.event.start)).getUTCMinutes() }} - {{ (new Date(arg.event.end)).getUTCHours()+':'+(new Date(arg.event.end)).getUTCMinutes() }}</b>

<!--          <i class="img-author"><img src="/assets/img/profiles/1.jpg" alt=""></i>-->
          <i class="event-i">{{ arg.event.title }}</i>
        </template>
      </full-calendar>
    </div>
  </div>
</template>

<style lang='css'>
i.img-author img {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: block;
  float: left;
  position: relative;
}
.event-b {
  display: block !important;
  float: right;
  word-break: break-word;
  width: 100% !important;
  text-align: center !important;
}
.event-i {
  display: block !important;
  float: right;
  text-align: center;
  word-break: break-word;
  width: 100% !important;
}
.img-author {
  display: block !important;
  float: left;
  width: 50%;
}
h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

</style>


<script>
import { mapGetters, mapActions } from 'vuex'
import '@fullcalendar/core/vdom' // solve problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "/theme/assets/js/vendor/jquery-3.3.1.min"
import "/theme/assets/js/vendor/bootstrap.bundle.min"
import ModalComponent from "./ModalComponent";

export default {
  name: "FullCalendarComponent",
  props:{
    events:{
      type:Array,
      default:[],
      required:true
    },
    enable_allDay:{
      default:true,
      type:Boolean
    },
    enable_sidebar:{
      default:true,
      type:Boolean
    },
  },
  components: {

    ModalComponent,
    FullCalendar // make the <FullCalendar> tag available
  },
  computed: {
    modal_title(){
      return this.$i18n.t("fullcalendar.default_modal_title")
    },
    ModalID(){return ''},
    computed_events(){
      return this.events;
    },
    calendarOptions() {
      return {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        // initialEvents: this.events, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,

        events: this.computed_events,

        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      }

    },
    eventHandlers() {
      return {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,//when click on event
        eventDrop: this.onEventDrop,//change location of event with drag
        eventResize: this.onEventResize,//when event time resized
        select: this.onDateSelect,//click on day that has no any event
        eventsSet: this.onEvents,//when click next,prev of load calendar
      }
    },
    config() {
      return {
        ... this.calendarOptions,
        ... this.eventHandlers
      }
    },
  },
  watch:{
    modalChange(old, newval) {
      this.$emit('modalChanged',{oldVal:old,newVal:newval})
    }
  },
  data: function () {
    return {
      currentEvents: [],
      modalChange:null,
      selected_time_from:null,
      selected_time_to:null
    }
  },


  methods: {

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },

    onDateClick(selectInfo){
      console.log("onDateClick:")
      console.log(this)
      console.log(selectInfo);
      jQuery('#'+this.$refs.modal.ModalId).modal('show');

      this.onDateClickCustom(selectInfo);
    },
    onDateClickCustom(selectInfo){
      console.log('i am amin')
    },

    onEventDrop(selectInfo){
      console.log("onEventDrop:")
      console.log(selectInfo)
    },

    onEventResize(selectInfo){
      console.log("onEventResize:")
      console.log(selectInfo)
    },

    onDateSelect(selectInfo) {
      console.log('onDate Selected:');
      if(selectInfo.allDay && !this.enable_allDay){
        console.log("allDay is disabled")
        return false;
      }
      jQuery('#'+this.$refs.modal.ModalId).modal('show');
      let start=new Date(selectInfo.start);
      let end=new Date(selectInfo.end);


      this.selected_time_from=start.getHours()+':'+start.getMinutes();
      this.selected_time_to=end.getHours()+':'+end.getMinutes();
    },

    onEventClick(clickInfo) {
      console.log("onEventClick:")
      console.log(clickInfo)
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },

    onEvents(events) {
      console.log("onEvents:")
      console.log(events);
      this.currentEvents = events
    },


  },

}
</script>
