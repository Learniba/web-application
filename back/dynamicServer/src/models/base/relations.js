import { BaseModuleAuthRole } from "./BaseModuleAuthRole.js";
import { BaseModuleAuthUser } from "./BaseModuleAuthUser.js";
import { BaseModuleExamStudentAnswer } from "./BaseModuleExamStudentAnswer.js";
import { BaseModuleLeanibaDifficultyHistory } from "./BaseModuleLeanibaDifficultyHistory.js";
import { BaseModuleLearnibaQuestion } from "./BaseModuleLearnibaQuestion.js";
import { BaseModuleLearnibaReference } from "./BaseModuleLearnibaReference.js";
import { BaseModuleLearnibaReferenceIndex } from "./BaseModuleLearnibaReferenceIndex.js";
import { BaseModuleQuestionChoice } from "./BaseModuleQuestionChoice.js";
import { BaseModuleQuestionMedium } from "./BaseModuleQuestionMedium.js";
import { BaseModuleSchoolAbcenceStudent } from "./BaseModuleSchoolAbcenceStudent.js";
import { BaseModuleSchoolClass } from "./BaseModuleSchoolClass.js";
import { BaseModuleSchoolCustodian } from "./BaseModuleSchoolCustodian.js";
import { BaseModuleSchoolExercise } from "./BaseModuleSchoolExercise.js";
import { BaseModuleSchoolOrientation } from "./BaseModuleSchoolOrientation.js";
import { BaseModuleSchoolParent } from "./BaseModuleSchoolParent.js";
import { BaseModuleSchoolReferenceOrientation } from "./BaseModuleSchoolReferenceOrientation.js";
import { BaseModuleSchoolSchedule } from "./BaseModuleSchoolSchedule.js";
import { BaseModuleSchoolStudent } from "./BaseModuleSchoolStudent.js";
import { BaseModuleSchoolSubject } from "./BaseModuleSchoolSubject.js";
import { BaseModuleSchoolSupervisor } from "./BaseModuleSchoolSupervisor.js";
import { BaseModuleSchoolTeacher } from "./BaseModuleSchoolTeacher.js";
import { BaseModuleUser } from "./BaseModuleUser.js";
import { Sequelize } from "sequelize";

/**
 * Builds all relations between models. It is provided as a function to prevent circular references during require.
 */
export default async function buildRelations() {
  if (typeof Sequelize.prototype.relationsExecuted === "undefined") {
    Sequelize.prototype.relationsExecuted = true;
    await BaseModuleAuthRole.hasMany(BaseModuleAuthUser, {
      foreignKey: "role",
      sourceKey: "id",
      //as: "module_auth_roles->module_auth_users_2759",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleAuthRole.belongsToMany(BaseModuleUser, {
      through: BaseModuleAuthUser,
      foreignKey: "role",
      otherKey: "uid",
      //targetKey: "id",dom
    });

    await BaseModuleAuthUser.belongsTo(BaseModuleAuthRole, {
      foreignKey: "role",
      targetKey: "id",
      //as: "module_auth_users->module_auth_roles_7661",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await BaseModuleAuthUser.belongsTo(BaseModuleUser, {
      foreignKey: "uid",
      targetKey: "id",
      //as: "module_auth_users->module_user_2089",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await BaseModuleExamStudentAnswer.belongsTo(BaseModuleQuestionChoice, {
      foreignKey: "question_choices_id",
      targetKey: "id",
      //as: "module_exam_student_answer->module_question_choices_951",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleExamStudentAnswer.belongsTo(BaseModuleSchoolExercise, {
      foreignKey: "exercise_id",
      targetKey: "id",
      //as: "module_exam_student_answer->module_school_exercise_7641",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleExamStudentAnswer.belongsTo(BaseModuleSchoolStudent, {
      foreignKey: "student_id",
      targetKey: "student_id",
      //as: "module_exam_student_answer->module_school_student_7619",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleLeanibaDifficultyHistory.belongsTo(
      BaseModuleSchoolStudent,
      {
        foreignKey: "student_id",
        targetKey: "student_id",
        //as: "module_leaniba_difficulty_history->module_school_student_5101",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    await BaseModuleLearnibaQuestion.hasMany(BaseModuleQuestionChoice, {
      foreignKey: "question_id",
      sourceKey: "id",
      //as: "module_learniba_question->module_question_choices_8762",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleLearnibaQuestion.hasMany(BaseModuleSchoolExercise, {
      foreignKey: "question_id",
      sourceKey: "id",
      //as: "module_learniba_question->module_school_exercise_6095",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleLearnibaQuestion.belongsTo(
      BaseModuleLearnibaReferenceIndex,
      {
        foreignKey: "reference_index_id",
        targetKey: "id",
        //as: "module_learniba_question->module_learniba_reference_index_7433",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );

    await BaseModuleLearnibaQuestion.belongsTo(BaseModuleQuestionMedium, {
      foreignKey: "media_tip_id",
      targetKey: "id",
      //as: "module_learniba_question->module_question_media_1263",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleLearnibaQuestion.belongsTo(BaseModuleQuestionMedium, {
      foreignKey: "media_id",
      targetKey: "id",
      //as: "module_learniba_question->module_question_media_5714",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaQuestion.belongsToMany(BaseModuleQuestionMedium, {
      through: BaseModuleQuestionChoice,
      foreignKey: "question_id",
      otherKey: "media_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaQuestion.belongsToMany(BaseModuleSchoolSchedule, {
      through: BaseModuleSchoolExercise,
      foreignKey: "question_id",
      otherKey: "schedule_id",
      //targetKey: "id",dom
    });
    await BaseModuleLearnibaReference.hasMany(
      BaseModuleLearnibaReferenceIndex,
      {
        foreignKey: "reference_id",
        sourceKey: "id",
        //as: "module_learniba_reference->module_learniba_reference_index_1072",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    await BaseModuleLearnibaReference.hasMany(
      BaseModuleSchoolReferenceOrientation,
      {
        foreignKey: "reference_id",
        sourceKey: "id",
        //as: "module_learniba_reference->module_school_reference_orientation_9171",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );

    await BaseModuleLearnibaReference.belongsTo(BaseModuleSchoolSubject, {
      foreignKey: "subject_id",
      targetKey: "id",
      //as: "module_learniba_reference->module_school_subject_7636",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReference.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleLearnibaReferenceIndex,
        foreignKey: "reference_id",
        otherKey: "parent_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReference.belongsToMany(
      BaseModuleSchoolOrientation,
      {
        through: BaseModuleSchoolReferenceOrientation,
        foreignKey: "reference_id",
        otherKey: "orientation_id",
        //targetKey: "id",dom
      }
    );
    await BaseModuleLearnibaReferenceIndex.hasMany(BaseModuleLearnibaQuestion, {
      foreignKey: "reference_index_id",
      sourceKey: "id",
      //as: "module_learniba_reference_index->module_learniba_question_3175",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleLearnibaReferenceIndex.hasMany(
      BaseModuleLearnibaReferenceIndex,
      {
        foreignKey: "parent_id",
        sourceKey: "id",
        //as: "module_learniba_reference_index->module_learniba_reference_index_3228",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    await BaseModuleLearnibaReferenceIndex.hasMany(BaseModuleSchoolSchedule, {
      foreignKey: "reference_index_id",
      sourceKey: "id",
      //as: "module_learniba_reference_index->module_school_schedule_3832",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleLearnibaReferenceIndex.belongsTo(
      BaseModuleLearnibaReference,
      {
        foreignKey: "reference_id",
        targetKey: "id",
        //as: "module_learniba_reference_index->module_learniba_reference_6910",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );

    await BaseModuleLearnibaReferenceIndex.belongsTo(
      BaseModuleLearnibaReferenceIndex,
      {
        foreignKey: "parent_id",
        targetKey: "id",
        //as: "module_learniba_reference_index->module_learniba_reference_index_7658",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    //await BaseModuleLearnibaReferenceIndex.belongsToMany(BaseModuleLearnibaReference, {
    //  through: BaseModuleLearnibaReferenceIndex,
    //  foreignKey: "id",
    //  otherKey: "parent_id",
    //  targetKey: "id",
    //});
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleQuestionMedium,
      {
        through: BaseModuleLearnibaQuestion,
        foreignKey: "reference_index_id",
        otherKey: "media_tip_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleQuestionMedium,
      {
        through: BaseModuleLearnibaQuestion,
        foreignKey: "reference_index_id",
        otherKey: "media_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleSchoolClass,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "reference_index_id",
        otherKey: "class_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleSchoolSubject,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "reference_index_id",
        otherKey: "subject_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleSchoolTeacher,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "reference_index_id",
        otherKey: "teacher_id",
        //targetKey: "teacher_id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleLearnibaReferenceIndex.belongsToMany(
      BaseModuleSchoolTeacher,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "reference_index_id",
        otherKey: "assistant_id",
        //targetKey: "teacher_id",dom
      }
    );
    await BaseModuleQuestionChoice.hasMany(BaseModuleExamStudentAnswer, {
      foreignKey: "question_choices_id",
      sourceKey: "id",
      //as: "module_question_choices->module_exam_student_answer_8623",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleQuestionChoice.belongsTo(BaseModuleLearnibaQuestion, {
      foreignKey: "question_id",
      targetKey: "id",
      //as: "module_question_choices->module_learniba_question_2258",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleQuestionChoice.belongsTo(BaseModuleQuestionMedium, {
      foreignKey: "media_id",
      targetKey: "id",
      //as: "module_question_choices->module_question_media_1453",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionChoice.belongsToMany(BaseModuleSchoolExercise, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "question_choices_id",
      otherKey: "exercise_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionChoice.belongsToMany(BaseModuleSchoolStudent, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "question_choices_id",
      otherKey: "student_id",
      //targetKey: "student_id",dom
    });
    await BaseModuleQuestionMedium.hasMany(BaseModuleLearnibaQuestion, {
      foreignKey: "media_id",
      sourceKey: "id",
      //as: "module_question_media->module_learniba_question_1807",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleQuestionMedium.hasMany(BaseModuleLearnibaQuestion, {
      foreignKey: "media_tip_id",
      sourceKey: "id",
      //as: "module_question_media->module_learniba_question_7602",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleQuestionMedium.hasMany(BaseModuleQuestionChoice, {
      foreignKey: "media_id",
      sourceKey: "id",
      //as: "module_question_media->module_question_choices_9176",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionMedium.belongsToMany(BaseModuleLearnibaQuestion, {
      through: BaseModuleQuestionChoice,
      foreignKey: "media_id",
      otherKey: "question_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionMedium.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleLearnibaQuestion,
        foreignKey: "media_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionMedium.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleLearnibaQuestion,
        foreignKey: "media_tip_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionMedium.belongsToMany(BaseModuleQuestionMedium, {
      through: BaseModuleLearnibaQuestion,
      foreignKey: "media_tip_id",
      otherKey: "media_id",
      //targetKey: "id",dom
      as: "module_question_media(pk_table_288)->module_question_media(pk_table_288)_3493",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleQuestionMedium.belongsToMany(BaseModuleQuestionMedium, {
      through: BaseModuleLearnibaQuestion,
      foreignKey: "media_id",
      otherKey: "media_tip_id",
      //targetKey: "id",dom
      as: "module_question_media(pk_table_288)->module_question_media(pk_table_288)_7974",
    });

    await BaseModuleSchoolAbcenceStudent.belongsTo(BaseModuleSchoolSchedule, {
      foreignKey: "schedule_id",
      targetKey: "id",
      //as: "module_school_abcence_student->module_school_schedule_5178",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolAbcenceStudent.belongsTo(BaseModuleSchoolStudent, {
      foreignKey: "student_id",
      targetKey: "student_id",
      //as: "module_school_abcence_student->module_school_student_2454",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolClass.hasMany(BaseModuleSchoolSchedule, {
      foreignKey: "class_id",
      sourceKey: "id",
      //as: "module_school_class->module_school_schedule_9053",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolClass.hasMany(BaseModuleSchoolStudent, {
      foreignKey: "class_id",
      sourceKey: "id",
      //as: "module_school_class->module_school_student_5478",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolClass.belongsTo(BaseModuleSchoolOrientation, {
      foreignKey: "orientation_id",
      targetKey: "id",
      //as: "module_school_class->module_school_orientation_9120",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolClass.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "class_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolClass.belongsToMany(BaseModuleSchoolSubject, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "class_id",
      otherKey: "subject_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolClass.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "class_id",
      otherKey: "teacher_id",
      //targetKey: "teacher_id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolClass.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "class_id",
      otherKey: "assistant_id",
      //targetKey: "teacher_id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolClass.belongsToMany(BaseModuleUser, {
      through: BaseModuleSchoolStudent,
      foreignKey: "class_id",
      otherKey: "student_id",
      //targetKey: "id",dom
    });

    await BaseModuleSchoolCustodian.belongsTo(BaseModuleSchoolParent, {
      foreignKey: "parent_id",
      targetKey: "parent_id",
      //as: "module_school_custodian->module_school_parent_9086",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolCustodian.belongsTo(BaseModuleSchoolStudent, {
      foreignKey: "student_id",
      targetKey: "student_id",
      //as: "module_school_custodian->module_school_student_8189",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolExercise.hasMany(BaseModuleExamStudentAnswer, {
      foreignKey: "exercise_id",
      sourceKey: "id",
      //as: "module_school_exercise->module_exam_student_answer_7274",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolExercise.belongsTo(BaseModuleLearnibaQuestion, {
      foreignKey: "question_id",
      targetKey: "id",
      //as: "module_school_exercise->module_learniba_question_6756",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolExercise.belongsTo(BaseModuleSchoolSchedule, {
      foreignKey: "schedule_id",
      targetKey: "id",
      //as: "module_school_exercise->module_school_schedule_6267",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolExercise.belongsToMany(BaseModuleQuestionChoice, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "exercise_id",
      otherKey: "question_choices_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolExercise.belongsToMany(BaseModuleSchoolStudent, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "exercise_id",
      otherKey: "student_id",
      //targetKey: "student_id",dom
    });
    await BaseModuleSchoolOrientation.hasMany(BaseModuleSchoolClass, {
      foreignKey: "orientation_id",
      sourceKey: "id",
      //as: "module_school_orientation->module_school_class_1825",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolOrientation.hasMany(
      BaseModuleSchoolReferenceOrientation,
      {
        foreignKey: "orientation_id",
        sourceKey: "id",
        //as: "module_school_orientation->module_school_reference_orientation_8829",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolOrientation.belongsToMany(
      BaseModuleLearnibaReference,
      {
        through: BaseModuleSchoolReferenceOrientation,
        foreignKey: "orientation_id",
        otherKey: "reference_id",
        //targetKey: "id",dom
      }
    );
    await BaseModuleSchoolParent.hasMany(BaseModuleSchoolCustodian, {
      foreignKey: "parent_id",
      sourceKey: "parent_id",
      //as: "module_school_parent->module_school_custodian_2939",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolParent.belongsToMany(BaseModuleSchoolStudent, {
      through: BaseModuleSchoolCustodian,
      foreignKey: "parent_id",
      otherKey: "student_id",
      //targetKey: "student_id",dom
    });

    await BaseModuleSchoolReferenceOrientation.belongsTo(
      BaseModuleLearnibaReference,
      {
        foreignKey: "reference_id",
        targetKey: "id",
        //as: "module_school_reference_orientation->module_learniba_reference_7577",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );

    await BaseModuleSchoolReferenceOrientation.belongsTo(
      BaseModuleSchoolOrientation,
      {
        foreignKey: "orientation_id",
        targetKey: "id",
        //as: "module_school_reference_orientation->module_school_orientation_629",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      }
    );
    await BaseModuleSchoolSchedule.hasMany(BaseModuleSchoolAbcenceStudent, {
      foreignKey: "schedule_id",
      sourceKey: "id",
      //as: "module_school_schedule->module_school_abcence_student_946",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolSchedule.hasMany(BaseModuleSchoolExercise, {
      foreignKey: "schedule_id",
      sourceKey: "id",
      //as: "module_school_schedule->module_school_exercise_244",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSchedule.belongsTo(BaseModuleLearnibaReferenceIndex, {
      foreignKey: "reference_index_id",
      targetKey: "id",
      //as: "module_school_schedule->module_learniba_reference_index_2195",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSchedule.belongsTo(BaseModuleSchoolClass, {
      foreignKey: "class_id",
      targetKey: "id",
      //as: "module_school_schedule->module_school_class_5278",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSchedule.belongsTo(BaseModuleSchoolSubject, {
      foreignKey: "subject_id",
      targetKey: "id",
      //as: "module_school_schedule->module_school_subject_1286",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSchedule.belongsTo(BaseModuleSchoolTeacher, {
      foreignKey: "teacher_id",
      targetKey: "teacher_id",
      //as: "module_school_schedule->module_school_teacher_7604",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSchedule.belongsTo(BaseModuleSchoolTeacher, {
      foreignKey: "assistant_id",
      targetKey: "teacher_id",
      //as: "module_school_schedule->module_school_teacher_8141",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSchedule.belongsToMany(BaseModuleLearnibaQuestion, {
      through: BaseModuleSchoolExercise,
      foreignKey: "schedule_id",
      otherKey: "question_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSchedule.belongsToMany(BaseModuleSchoolStudent, {
      through: BaseModuleSchoolAbcenceStudent,
      foreignKey: "schedule_id",
      otherKey: "student_id",
      //targetKey: "student_id",dom
    });
    await BaseModuleSchoolStudent.hasMany(BaseModuleExamStudentAnswer, {
      foreignKey: "student_id",
      sourceKey: "student_id",
      //as: "module_school_student->module_exam_student_answer_4946",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolStudent.hasMany(BaseModuleLeanibaDifficultyHistory, {
      foreignKey: "student_id",
      sourceKey: "student_id",
      //as: "module_school_student->module_leaniba_difficulty_history_6539",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolStudent.hasMany(BaseModuleSchoolAbcenceStudent, {
      foreignKey: "student_id",
      sourceKey: "student_id",
      //as: "module_school_student->module_school_abcence_student_5063",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolStudent.hasMany(BaseModuleSchoolCustodian, {
      foreignKey: "student_id",
      sourceKey: "student_id",
      //as: "module_school_student->module_school_custodian_681",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolStudent.belongsTo(BaseModuleSchoolClass, {
      foreignKey: "class_id",
      targetKey: "id",
      //as: "module_school_student->module_school_class_2414",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolStudent.belongsTo(BaseModuleUser, {
      foreignKey: "student_id",
      targetKey: "id",
      //as: "module_school_student->module_user_3472",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolStudent.belongsToMany(BaseModuleQuestionChoice, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "student_id",
      otherKey: "question_choices_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolStudent.belongsToMany(BaseModuleSchoolExercise, {
      through: BaseModuleExamStudentAnswer,
      foreignKey: "student_id",
      otherKey: "exercise_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolStudent.belongsToMany(BaseModuleSchoolParent, {
      through: BaseModuleSchoolCustodian,
      foreignKey: "student_id",
      otherKey: "parent_id",
      //targetKey: "parent_id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolStudent.belongsToMany(BaseModuleSchoolSchedule, {
      through: BaseModuleSchoolAbcenceStudent,
      foreignKey: "student_id",
      otherKey: "schedule_id",
      //targetKey: "id",dom
    });
    await BaseModuleSchoolSubject.hasMany(BaseModuleLearnibaReference, {
      foreignKey: "subject_id",
      sourceKey: "id",
      //as: "module_school_subject->module_learniba_reference_846",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolSubject.hasMany(BaseModuleSchoolSchedule, {
      foreignKey: "subject_id",
      sourceKey: "id",
      //as: "module_school_subject->module_school_schedule_7844",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSubject.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "subject_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSubject.belongsToMany(BaseModuleSchoolClass, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "subject_id",
      otherKey: "class_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSubject.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "subject_id",
      otherKey: "teacher_id",
      //targetKey: "teacher_id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSubject.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "subject_id",
      otherKey: "assistant_id",
      //targetKey: "teacher_id",dom
    });
    await BaseModuleSchoolSupervisor.hasMany(BaseModuleSchoolTeacher, {
      foreignKey: "supervisor_id",
      sourceKey: "supervisor_id",
      //as: "module_school_supervisor->module_school_teacher_669",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolSupervisor.belongsTo(BaseModuleUser, {
      foreignKey: "supervisor_id",
      targetKey: "id",
      //as: "module_school_supervisor->module_user_8567",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolSupervisor.belongsToMany(BaseModuleUser, {
      through: BaseModuleSchoolTeacher,
      foreignKey: "supervisor_id",
      otherKey: "teacher_id",
      //targetKey: "id",dom
    });
    await BaseModuleSchoolTeacher.hasMany(BaseModuleSchoolSchedule, {
      foreignKey: "teacher_id",
      sourceKey: "teacher_id",
      //as: "module_school_teacher->module_school_schedule_3135",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleSchoolTeacher.hasMany(BaseModuleSchoolSchedule, {
      foreignKey: "assistant_id",
      sourceKey: "teacher_id",
      //as: "module_school_teacher->module_school_schedule_9912",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolTeacher.belongsTo(BaseModuleSchoolSupervisor, {
      foreignKey: "supervisor_id",
      targetKey: "supervisor_id",
      //as: "module_school_teacher->module_school_supervisor_585",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });

    await BaseModuleSchoolTeacher.belongsTo(BaseModuleUser, {
      foreignKey: "teacher_id",
      targetKey: "id",
      //as: "module_school_teacher->module_user_5061",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "assistant_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(
      BaseModuleLearnibaReferenceIndex,
      {
        through: BaseModuleSchoolSchedule,
        foreignKey: "teacher_id",
        otherKey: "reference_index_id",
        //targetKey: "id",dom
      }
    );
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolClass, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "assistant_id",
      otherKey: "class_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolClass, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "teacher_id",
      otherKey: "class_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolSubject, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "teacher_id",
      otherKey: "subject_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolSubject, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "assistant_id",
      otherKey: "subject_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "teacher_id",
      otherKey: "assistant_id",
      //targetKey: "teacher_id",dom
      as: "module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)_2598",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleSchoolTeacher.belongsToMany(BaseModuleSchoolTeacher, {
      through: BaseModuleSchoolSchedule,
      foreignKey: "assistant_id",
      otherKey: "teacher_id",
      //targetKey: "teacher_id",dom
      as: "module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)_747",
    });
    await BaseModuleUser.hasMany(BaseModuleAuthUser, {
      foreignKey: "uid",
      sourceKey: "id",
      //as: "module_user->module_auth_users_4272",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await BaseModuleUser.hasMany(BaseModuleSchoolStudent, {
      foreignKey: "student_id",
      sourceKey: "id",
      //as: "module_user->module_school_student_4082",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    });
    await BaseModuleUser.hasMany(BaseModuleSchoolSupervisor, {
      foreignKey: "supervisor_id",
      sourceKey: "id",
      //as: "module_user->module_school_supervisor_6114",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    await BaseModuleUser.hasMany(BaseModuleSchoolTeacher, {
      foreignKey: "teacher_id",
      sourceKey: "id",
      //as: "module_user->module_school_teacher_5711",
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleUser.belongsToMany(BaseModuleAuthRole, {
      through: BaseModuleAuthUser,
      foreignKey: "uid",
      otherKey: "role",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleUser.belongsToMany(BaseModuleSchoolClass, {
      through: BaseModuleSchoolStudent,
      foreignKey: "student_id",
      otherKey: "class_id",
      //targetKey: "id",dom
    });
    /** 1 **/
    /** 1 **/

    await BaseModuleUser.belongsToMany(BaseModuleSchoolSupervisor, {
      through: BaseModuleSchoolTeacher,
      foreignKey: "teacher_id",
      otherKey: "supervisor_id",
      //targetKey: "supervisor_id",dom
    });
  }
}
