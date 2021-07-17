<template>
  <div class="form-group" v-if="mode==='simple'">
    <label :for="id"><slot name="label"></slot></label>
    <input :type="inputType" v-on:change="validate" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" v-model="value" class="form-control" :id="id" aria-describedby="emailHelp"
           :placeholder="placeholder">
    <small v-if="this.has_hint" :id="id+'Help'" class="form-text text-muted"><slot name="hint"></slot></small>
    <small v-if="this.has_error" :id="id+'Help'" class="form-text text-danger"><slot name="error"></slot></small>
  </div>


</template>

<script>


export default {
  name: "FormInputComponent",
  props:{

    placeholder:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:"text"
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    regex: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    mode:{
      default:'simple'
    }
  },
  data(){
    return {

      value:'',
      validated: false,
      has_error: false
    }
  },
  methods:{
    Joi() {
      return require('joi');
    },
    typeEmail() {
      let v = this.Joi().email({minDomainSegments: 2});

      if (this.required) {
        v.required();
      }
      return this.Joi().object({
        attr: v
      })
    },
    typeText() {
      let v = this.Joi().string()
          .min(this.min)
          .max(this.max);
      if (this.regex.length > 0) {
        v.pattern(new RegExp(this.regex));
      }
      if (this.required) {
        v.required();
      }
      return this.Joi().object({
        attr: v
      })
    },
    typeNation() {
      let v = this.Joi().string()
          .min(11)
          .max(11);
      if (this.required) {
        v.required();
      }
      return this.Joi().object({
        attr: v
      })
    },

    typePassword() {
      let v = this.Joi().string()
          .min(this.min)
          .max(this.max);
      if (this.regex.length > 0) {
        v.pattern(new RegExp(this.regex));
      } else {
        v.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
      }
      if (this.required) {
        v.required();
      }
      return this.Joi().object({
        attr: v
      })
    },
    typeNumber() {
      let v = this.Joi().number()
          .min(this.min)
          .max(this.max);

      if (this.required) {
        v.required();
      }
      return this.Joi().object({
        attr: v
      })
    },

    validateIranianNationCode(input) {
      if (!/^\d{10}$/.test(input)) return false;
      const check = +input[9];
      const sum = input.split('').slice(0, 9).map((x, i) => +x * (10 - i)).reduce((x, y) => x + y) % 11;
      return sum < 2 ? check == sum : check + sum == 11;
    },
    validate() {

      this.$emit('changed', event);
      switch (this.type) {
        case 'text':

          if (typeof this.typeText().validate({attr: event.target.value}).error==="undefined") {
            this.has_error = false;
            this.$emit('success', this);
          } else {
            this.has_error = true;
            this.$emit('danger', this);
          }
          break;
        case 'number':
          if (typeof this.typeNumber().validate({attr: event.target.value})==="undefined") {
            this.has_error = false;
            this.$emit('success', this);
          } else {
            this.has_error = true;
            this.$emit('danger', this);
          }
          break;
        case 'password':
          if (typeof this.typePassword().validate({attr: event.target.value})==="undefined") {
            this.has_error = false;
            this.$emit('success', this);
          } else {
            this.has_error = true;
            this.$emit('danger', this);
          }
          break;
        case 'email':
          if (typeof this.typeEmail().validate({attr: event.target.value})==="undefined") {
            this.has_error = false;
            this.$emit('success', this);
          } else {
            this.has_error = true;
            this.$emit('danger', this);
          }
          break;
        case 'nationCode':
          if (typeof this.typeNation().validate({attr: event.target.value})==="undefined") {
            if (this.validateIranianNationCode(event.target.value)) {
              this.has_error = false;
              this.$emit('success', this);
            } else {
              this.has_error = true;
              this.$emit('danger', this);
            }
          } else {
            this.has_error = true;
            this.$emit('danger', this);
          }
          break;
        case 'exist':

      }
      this.validated = true;
      return !this.has_error
    }
  },
  computed:{
    valuecom:{
      set:function(v){
        this.value=v;
        this.validate()
      },
      get:function(){
        return this.value
      }

    },
    inputType() {
      switch (this.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
          return this.type;
      }
      switch (this.type){
        case 'nationCode':
        case 'exist':
          return 'text';
      }
    },
    id(){
      return 'Input'+this._uid;
    },
    hint(){return ''},
    has_hint(){
      return this.hint.length>0;
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>