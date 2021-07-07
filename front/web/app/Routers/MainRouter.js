import Vue from "vue"
import VueRouter from "vue-router"



import IndexView from "../Views/IndexView";
import InstallUsers1View from "../Views/InstallerWizard/InstallUsers1View";
import InstallTeachersUpload2View from "../Views/InstallerWizard/InstallTeachersUpload2View";
import InstallTeachersValidate2View from "../Views/InstallerWizard/InstallTeachersValidate2View";
import InstallTeachersConfirm2View from "../Views/InstallerWizard/InstallTeachersConfirm2View";
import InstallClassesForm3View from "../Views/InstallerWizard/InstallClassesForm3View";
import InstallStudentsUpload4View from "../Views/InstallerWizard/InstallStudentsUpload4View";
import InstallStudentsValidate3View from "../Views/InstallerWizard/InstallStudentsValidate3View";
import InstallStudentsConfirm4View from "../Views/InstallerWizard/InstallStudentsConfirm4View";
import InstallScheduleClass5View from "../Views/InstallerWizard/InstallScheduleClass5View";
import InstallWelcomeView from "../Views/InstallerWizard/InstallWelcomeView";
import InstallFinishView from "../Views/InstallerWizard/InstallFinishView";
import LoginView from "../Views/authPanel/LoginView";
import RegisterView from "../Views/authPanel/RegisterView";
import ResetPasswordView from "../Views/authPanel/ResetPasswordView";


Vue.use(VueRouter);
const routes=[
    { path: '/', component: IndexView ,name: 'IndexView'},

    { path: '/auth/login', component: LoginView ,name: 'login'},
    { path: '/auth/register', component: RegisterView ,name: 'register'},
    { path: '/auth/resetpassword', component: ResetPasswordView ,name: 'reset_password'},
    { path: '/auth/confirm', component: ResetPasswordView ,name: 'confirm_password'},



    { path: '/install/users/1', component: InstallUsers1View ,name: 'install_users_1'},
    { path: '/install/teachers/upload/2', component: InstallTeachersUpload2View ,name: 'install_teachers_upload_2'},
    { path: '/install/teachers/validate/2', component: InstallTeachersValidate2View ,name: 'install_teachers_validate_2'},
    { path: '/install/teachers/confirm/2', component: InstallTeachersConfirm2View ,name: 'install_teachers_confirm_2'},
    { path: '/install/classes/form/3', component: InstallClassesForm3View ,name: 'install_classes_form_3'},
    { path: '/install/students/upload/4', component: InstallStudentsUpload4View ,name: 'install_students_upload_4'},
    { path: '/install/students/validate/4', component: InstallStudentsValidate3View ,name: 'install_students_validate_4'},
    { path: '/install/students/confirm/4', component: InstallStudentsConfirm4View ,name: 'install_student_validate_4'},
    { path: '/install/schedule_class/5', component: InstallScheduleClass5View ,name: 'install_schedule_class_5'},
    { path: '/install/welcome', component: InstallWelcomeView ,name: 'install_welcome'},
    { path: '/install/finish', component: InstallFinishView ,name: 'install_finish'},
];

export default new VueRouter(
    {
        routes
    }
)