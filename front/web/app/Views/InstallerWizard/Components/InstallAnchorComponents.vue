<template>
  <ul class="card-header nav nav-tabs step-anchor" >
    <li class="nav-item" v-for="(step,key) in steps">
        <a class="nav-link" :href="step.href">
          {{ gam[key] }}<br/><small>{{step.label}}
          </small>
        </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "InstallAnchorComponents",
  computed: {
    gam(){
      return [
        "سرآغاز",
        "گام دوم",
        "گام سوم",
        "گام چهارم",
        "گام پنجم",
        "گام ششم",
        "اتمام",
      ];
    },
    steps() {
      const routName_steps = {
        install_users_1: 1,

        install_teachers_upload_2: 2,
        install_teachers_validate_2: 2,
        install_teachers_confirm_2: 2,

        install_classes_form_3: 3,

        install_students_upload_4: 4,
        install_students_validate_4: 4,
        install_student_validate_4: 4,

        install_schedule_class_5: 5,

        install_welcome: 0,
        install_finish: 0
      };

      return [
        {label: "خوش آمدید", href: "#/install/welcome"},
        {label: "تعریف کاربران", href: "#/install/users/1"},
        {label: "تعریف مدرسان", href: "#/install/teachers/upload/2"},
        {label: "تعریف کلاس ها", href: "#/install/classes/form/3"},
        {label: "تعریف دانش آموزان", href: "#/install/students/upload/4"},
        {label: "تعریف برنامه کلاسی", href: "#/install/schedule_class/5"},
        {label: "اتمام نصب", href: "#/install/finish"}
      ];
    }
  }
}
</script>

<style scoped>

</style>