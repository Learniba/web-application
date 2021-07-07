<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 mb-4">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <h1>به لرنیبا خوش آمدید</h1>
                <h5>در ابتدا باید اطلاعات مورد نیاز سیستم را توسط این بسته ی نصبی اعلام نمایید</h5>
              </div>
            </div>
          </div>

          <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
            <router-link to="/install/users/1" v-slot="{href}">
              <a :href="href" class="btn btn-secondary prev-btn" type="button">آغاز نصب</a>
            </router-link>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "InstallWelcomeView",
  beforeCreate() {
    this.$store.commit('SET_LAYOUT', 'wizard-layout')
  }
}
</script>

<style scoped>

</style>