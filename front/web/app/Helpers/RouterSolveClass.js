export default new class {
    /**
     * @var VueApp vue
     */
    vueApp;
    /**
     * @var router vue-router
     */
    router;

    init() {

    }

    routs = {
        install: () => {
            console.log(this);
            if (!this.is.installed()) {
                let InstallLoaded = false;
                switch (this.vueApp.$router.currentRoute.name) {
                    case      'install_users_1':
                    case      'install_teachers_upload_2':
                    case      'install_teachers_validate_2':
                    case      'install_teachers_confirm_2':
                    case      'install_classes_form_3':
                    case      'install_students_upload_4':
                    case      'install_students_validate_4':
                    case      'install_student_validate_4':
                    case      'install_schedule_class_5':
                    case      'install_welcome':
                    case      'install_finish':
                        InstallLoaded = true;
                        break;
                    default:
                        this.vueApp.$router.push({name: this.vueApp.$store.getters.configs.install_step})
                        break;
                }
            }
        },
        auth: () => {
            if (!this.is.logged_in()) {
                this.vueApp.$router.push({name: "register"})
            }
        }
    }

    is = {
        installed: () => {
            return this.vueApp.$store.getters.configs.installed;
        },
        logged_in: () => {
            return this.vueApp.$cookie.has('authHash');
        },
        install_step: () => {
            if (!this.is.installed()) {
                return this.vueApp.$store.getters.configs.install_step;
            } else {
                return false;
            }
        }
    }
}