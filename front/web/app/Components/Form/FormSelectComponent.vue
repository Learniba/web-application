<template>
  <div v-if="mode==='simple'" class="form-group">
    <label :for="id"><slot name="label"></slot></label>
    <select v-on:change="validate" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :type="inputType" v-model="value"  class="form-control" :id="id" aria-describedby="emailHelp">
      <option value="0">{{ $t("components.form.selectbox.default option label") }}</option>
      <option :value="item.id" v-for="(item,key) in items">{{item.label}}</option>
    </select>
    <small v-if="typeof this.$slots.hint!=='undefined'" :id="id+'Help'" class="form-text text-muted"><slot name="hint"></slot></small>
    <small v-if="this.has_error" :id="id+'Help'" class="form-text text-danger"><slot name="error"></slot></small>
  </div>
</template>

<script>

export default {
  name: "FormSelectComponent",
  props: {
    id: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    items:{
      type:Array,
      default:[]
    },
    mode:{
      default:'simple'
    }
  },
  data() {
    return {

      value:'',
      validated: false,
      has_error: false
    }
  },
  computed: {

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
    }
  },
  methods: {

    validate() {

      this.$emit('changed', event);
      if (this.required) {
        if (this.value!==0 && this.value!=="" && this.value!=="0" ){
          this.has_error = false;
          this.$emit('success', this);
          this.validated = true;
          return !this.has_error
        }
      }else{
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
    if (this.value===''){
      this.value=0;
    }
  }
}
</script>

<style scoped>

</style>