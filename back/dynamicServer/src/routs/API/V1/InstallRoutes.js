

import UsersController from "../../../Controllers/Install/UsersController.js";
import TeachersController from "../../../Controllers/Install/TeachersController.js";

const rout_map = {
  "/v1/*": "/v1/$1",
  "/v1/public/*": "/$1",
  "/v1/install/users": "/v1_install_users",
  "/v1/install/user/:id": "/v1_install_users/:id",
  "/v1/install/teachers": "/v1_install_teachers",
  "/v1/install/teacher/edit": "/v1_install_teacher_edit",
  "/v1/install/teachers/errors": "/v1_install_teachers_has_error",
  "/v1/install/teachers/validate/row": "/v1_install_teachers_validate_row",
  "/v1/install/teachers/upload": "/v1_install_teachers_upload",
  "/v1/install/teacher/:id": "/v1_install_teachers/:id",
  "/v1/install/files": "/v1_install_files",
  "/v1/install/classes": "/v1_install_classes",
  "/v1/install/class/:id": "/v1_install_classes/:id",


  "/v1/install/students": "/v1_install_students",
  "/v1/install/student/edit": "/v1_install_student_edit",
  "/v1/install/students/errors": "/v1_install_students_has_error",
  "/v1/install/students/validate/row": "/v1_install_students_validate_row",
  "/v1/install/students/upload": "/v1_install_students_upload",
  "/v1/install/student/:id": "/v1_install_students",


  "/v1/install/classes/schedules/:id": "/v1_class_schedules",

  "/v1/g/levels": "/levels",
  "/v1/g/orientations": "/orientations",
  "/v1/g/orientation/:level": "/orientations?level=:level",
}
export default function (fastify,db) {
  UsersController(fastify,db);
  TeachersController(fastify,db)
}
