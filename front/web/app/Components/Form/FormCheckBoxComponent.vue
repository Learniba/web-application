<template>
  <fieldset class="form-group" v-if="mode==='horizontal'">
    <div class="row">
      <label class="col-form-label col-sm-2 pt-0">
        <slot name="label"></slot>
      </label>
      <div class="col-sm-10">
        <div :class="'form-check '+(typeof item.disabled!=='undefined' && item.disabled===true?'disabled':'')"
             v-for="(item,key) in items">
          <input class="form-check-input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :value="item.id" v-model="selected" type="checkbox" :id="'check'+_uid+item.id">
          <label class="form-check-label" :for="'check'+_uid+item.id">
            {{ item.label }}
          </label>
        </div>
      </div>
    </div>
  </fieldset>


  <fieldset class="form-group" v-else-if="mode==='vertical'">
    <div class="row">
      <div v-for="(item,key) in items" class="form-check form-check-inline">
        <input class="form-check-input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :value="item.id" v-model="selected" type="checkbox" :id="'check'+_uid+item.id" value="option3" v-bind:disabled="typeof item.disabled!=='undefined' && item.disabled">
        <label class="form-check-label" :for="'check'+_uid+item.id">{{ item.label }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script>

export default {
  name: "FormCheckBoxComponent",
  props: {
    id: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: []
    },
    mode: {
      type:String,
      default:'horizontal'
    },
    velue:{
      default:null
    }
  },
  data() {
    return {
      selected:[],
      value: '',
      validated: false,
      has_error: false
    }
  },
  computed: {

    valuecom: {
      set: function (v) {
        this.value = v;
        this.validate()
      },
      get: function () {
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
      switch (this.type) {
        case 'nationCode':
        case 'exist':
          return 'text';
      }
    }
  },
  methods: {

    validate() {

      this.$emit('changed', event);
      if (this.required) {
        if (this.value !== 0 && this.value !== "" && this.value !== "0") {
          this.has_error = false;
          this.$emit('success', this);
          this.validated = true;
          return !this.has_error
        }
      } else {
        this.has_error = false;
        this.$emit('success', this);
        this.validated = true;
        return !this.has_error
      }

      this.has_error = true;
      this.$emit('danger', this);

      this.validated = true;
      return !this.has_error
    }
  },
  mounted() {
    if (this.value === '') {
      this.value = 0;
    }
  }
}
</script>

<style scoped>

</style>