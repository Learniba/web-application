<template>

  <div :class="'modal fade '+size" :id="ModalId" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" v-if="typeof $slots.header==='undefined'">
          <h5 class="modal-title">{{ modal_title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-header" v-if="typeof $slots.header!=='undefined'">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" data-dismiss="modal">{{ close_btn_label }}
          </button>
          <button type="button" class="btn btn-primary" v-on:click="clicked">{{ submit_btn_label }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      type: String,
      default: "this is header"
    },
    size: {
      type: String,
      default: ""
    },
    modal_title: {
      type: String,
      default: "this is modal"
    }
  },
  data() {
    return {
      ModalId: 'Modal' + this._uid
    }
  },
  computed: {
    close_btn_label() {
      return this.$i18n.t('components.modal.close btn');
    },
    submit_btn_label() {
      return this.$i18n.t('components.modal.submit btn')
    }
  },
  methods:{
    clicked(event){

    }
  }
}
</script>

<style scoped>

</style>