<template>
  <div>
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import DashboardLayout from "./DashboardLayout";
import WizardLayout from "./WizardLayout";
import AuthLayout from "./AuthLayout";
import LoadingLayout from "./LoadingLayout";
export default {
  name: "LayoutView",
  components:{LoadingLayout, AuthLayout, WizardLayout, DashboardLayout},
  computed:{
    layout(){
      console.log(this)
      return this.$store.getters.layout
    }
  }
}
</script>
