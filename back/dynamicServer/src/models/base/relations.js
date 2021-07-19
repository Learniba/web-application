import ModuleExamStudentAnswer from "./module-exam-student-answer";
import ModuleLeanibaDifficultyHistory from "./module-leaniba-difficulty-history";
import ModuleLearnibaQuestion from "./module-learniba-question";
import ModuleLearnibaReference from "./module-learniba-reference";
import ModuleLearnibaReferenceIndex from "./module-learniba-reference-index";
import ModuleQuestionChoice from "./module-question-choices";
import ModuleQuestionMedium from "./module-question-media";
import ModuleSchoolAbcenceStudent from "./module-school-abcence-student";
import ModuleSchoolClass from "./module-school-class";
import ModuleSchoolCustodian from "./module-school-custodian";
import ModuleSchoolExercise from "./module-school-exercise";
import ModuleSchoolOrientation from "./module-school-orientation";
import ModuleSchoolParent from "./module-school-parent";
import ModuleSchoolReferenceOrientation from "./module-school-reference-orientation";
import ModuleSchoolSchedule from "./module-school-schedule";
import ModuleSchoolStudent from "./module-school-student";
import ModuleSchoolSubject from "./module-school-subject";
import ModuleSchoolSupervisor from "./module-school-supervisor";
import ModuleSchoolTeacher from "./module-school-teacher";

/**
 * Builds all relations between models. It is provided as a function to prevent circular references during require.
 */
export default function buildRelations() {
  ModuleExamStudentAnswer.belongsTo(ModuleQuestionChoice, {
    foreignKey: "question_choices_id",
    targetKey: "id",
    as: "module_exam_student_answer->module_question_choices_4516",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleExamStudentAnswer.belongsTo(ModuleSchoolExercise, {
    foreignKey: "exercise_id",
    targetKey: "id",
    as: "module_exam_student_answer->module_school_exercise_2230",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleExamStudentAnswer.belongsTo(ModuleSchoolStudent, {
    foreignKey: "student_id",
    targetKey: "student_id",
    as: "module_exam_student_answer->module_school_student_6556",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleLeanibaDifficultyHistory.belongsTo(ModuleSchoolStudent, {
    foreignKey: "student_id",
    targetKey: "student_id",
    as: "module_leaniba_difficulty_history->module_school_student_9089",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleLearnibaQuestion.hasMany(DevelopmentModuleQuestionChoice, {
    foreignKey: "question_id",
    sourceKey: "id",
    as: "module_learniba_question->module_question_choices_3874",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleLearnibaQuestion.hasMany(DevelopmentModuleSchoolExercise, {
    foreignKey: "question_id",
    sourceKey: "id",
    as: "module_learniba_question->module_school_exercise_1771",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleLearnibaQuestion.belongsTo(ModuleLearnibaReferenceIndex, {
    foreignKey: "reference_index_id",
    targetKey: "id",
    as: "module_learniba_question->module_learniba_reference_index_5953",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleLearnibaQuestion.belongsTo(ModuleQuestionMedium, {
    foreignKey: "media_id",
    targetKey: "id",
    as: "module_learniba_question->module_question_media_4018",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleLearnibaQuestion.belongsTo(ModuleQuestionMedium, {
    foreignKey: "media_tip_id",
    targetKey: "id",
    as: "module_learniba_question->module_question_media_6919",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleLearnibaQuestion.belongsToMany(
    DevelopmentModuleQuestionMedium,
    {
      through: "DevelopmentModuleQuestionChoice",
      otherKey: "question_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_question(pk_table_2804)->module_question_media(pk_table_288)_6455",
    }
  );

  DevelopmentModuleLearnibaQuestion.belongsToMany(
    DevelopmentModuleSchoolSchedule,
    {
      through: "DevelopmentModuleSchoolExercise",
      otherKey: "question_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_question(pk_table_2804)->module_school_schedule(pk_module_school_schedule)_2159",
    }
  );
  DevelopmentModuleLearnibaReference.hasMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      foreignKey: "reference_id",
      sourceKey: "id",
      as: "module_learniba_reference->module_learniba_reference_index_9631",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleLearnibaReference.hasMany(
    DevelopmentModuleSchoolReferenceOrientation,
    {
      foreignKey: "reference_id",
      sourceKey: "id",
      as: "module_learniba_reference->module_school_reference_orientation_5712",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );

  ModuleLearnibaReference.belongsTo(ModuleSchoolSubject, {
    foreignKey: "subject_id",
    targetKey: "id",
    as: "module_learniba_reference->module_school_subject_8799",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleLearnibaReference.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleLearnibaReferenceIndex",
      otherKey: "reference_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference(pk_module_learniba_reference12)->module_learniba_reference_index(pk_table_29509)_3462",
    }
  );

  DevelopmentModuleLearnibaReference.belongsToMany(
    DevelopmentModuleSchoolOrientation,
    {
      through: "DevelopmentModuleSchoolReferenceOrientation",
      otherKey: "reference_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference(pk_module_learniba_reference12)->module_school_orientation(pk_module_school_orientation)_981",
    }
  );
  DevelopmentModuleLearnibaReferenceIndex.hasMany(
    DevelopmentModuleLearnibaQuestion,
    {
      foreignKey: "reference_index_id",
      sourceKey: "id",
      as: "module_learniba_reference_index->module_learniba_question_8949",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleLearnibaReferenceIndex.hasMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      foreignKey: "parent_id",
      sourceKey: "id",
      as: "module_learniba_reference_index->module_learniba_reference_index_4529",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleLearnibaReferenceIndex.hasMany(
    DevelopmentModuleSchoolSchedule,
    {
      foreignKey: "reference_index_id",
      sourceKey: "id",
      as: "module_learniba_reference_index->module_school_schedule_3464",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );

  ModuleLearnibaReferenceIndex.belongsTo(ModuleLearnibaReference, {
    foreignKey: "reference_id",
    targetKey: "id",
    as: "module_learniba_reference_index->module_learniba_reference_6928",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleLearnibaReferenceIndex.belongsTo(ModuleLearnibaReferenceIndex, {
    foreignKey: "parent_id",
    targetKey: "id",
    as: "module_learniba_reference_index->module_learniba_reference_index_6687",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleLearnibaReference,
    {
      through: "DevelopmentModuleLearnibaReferenceIndex",
      otherKey: "parent_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference_index(pk_table_29509)->module_learniba_reference(pk_module_learniba_reference12)_8785",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleQuestionMedium,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)_3108",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleQuestionMedium,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)_3862",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleSchoolClass,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference_index(pk_table_29509)->module_school_class(_copy_23)_2704",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleSchoolSubject,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_learniba_reference_index(pk_table_29509)->module_school_subject(pk_module_school_subject)_548",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleSchoolTeacher,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "teacher_id",
      as: "module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)_1381",
    }
  );

  DevelopmentModuleLearnibaReferenceIndex.belongsToMany(
    DevelopmentModuleSchoolTeacher,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "reference_index_id",
      sourceKey: "id",
      targetKey: "teacher_id",
      as: "module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)_8499",
    }
  );
  DevelopmentModuleQuestionChoice.hasMany(DevelopmentModuleExamStudentAnswer, {
    foreignKey: "question_choices_id",
    sourceKey: "id",
    as: "module_question_choices->module_exam_student_answer_5580",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleQuestionChoice.belongsTo(ModuleLearnibaQuestion, {
    foreignKey: "question_id",
    targetKey: "id",
    as: "module_question_choices->module_learniba_question_8302",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleQuestionChoice.belongsTo(ModuleQuestionMedium, {
    foreignKey: "media_id",
    targetKey: "id",
    as: "module_question_choices->module_question_media_5964",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleQuestionChoice.belongsToMany(
    DevelopmentModuleSchoolExercise,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "question_choices_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_choices(pk_table_27276)->module_school_exercise(pk_module_school_test34)_6117",
    }
  );

  DevelopmentModuleQuestionChoice.belongsToMany(
    DevelopmentModuleSchoolStudent,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "question_choices_id",
      sourceKey: "id",
      targetKey: "student_id",
      as: "module_question_choices(pk_table_27276)->module_school_student(module_school_students_pkey)_2719",
    }
  );
  DevelopmentModuleQuestionMedium.hasMany(DevelopmentModuleLearnibaQuestion, {
    foreignKey: "media_id",
    sourceKey: "id",
    as: "module_question_media->module_learniba_question_2091",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleQuestionMedium.hasMany(DevelopmentModuleLearnibaQuestion, {
    foreignKey: "media_tip_id",
    sourceKey: "id",
    as: "module_question_media->module_learniba_question_6840",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleQuestionMedium.hasMany(DevelopmentModuleQuestionChoice, {
    foreignKey: "media_id",
    sourceKey: "id",
    as: "module_question_media->module_question_choices_4170",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleQuestionMedium.belongsToMany(
    DevelopmentModuleLearnibaQuestion,
    {
      through: "DevelopmentModuleQuestionChoice",
      otherKey: "media_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_media(pk_table_288)->module_learniba_question(pk_table_2804)_5831",
    }
  );

  DevelopmentModuleQuestionMedium.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "media_tip_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)_3170",
    }
  );

  DevelopmentModuleQuestionMedium.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "media_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)_7278",
    }
  );

  DevelopmentModuleQuestionMedium.belongsToMany(
    DevelopmentModuleQuestionMedium,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "media_tip_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_media(pk_table_288)->module_question_media(pk_table_288)_6131",
    }
  );

  DevelopmentModuleQuestionMedium.belongsToMany(
    DevelopmentModuleQuestionMedium,
    {
      through: "DevelopmentModuleLearnibaQuestion",
      otherKey: "media_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_question_media(pk_table_288)->module_question_media(pk_table_288)_8945",
    }
  );

  ModuleSchoolAbcenceStudent.belongsTo(ModuleSchoolSchedule, {
    foreignKey: "schedule_id",
    targetKey: "id",
    as: "module_school_abcence_student->module_school_schedule_3070",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolAbcenceStudent.belongsTo(ModuleSchoolStudent, {
    foreignKey: "student_id",
    targetKey: "student_id",
    as: "module_school_abcence_student->module_school_student_8633",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolClass.hasMany(DevelopmentModuleSchoolSchedule, {
    foreignKey: "class_id",
    sourceKey: "id",
    as: "module_school_class->module_school_schedule_6658",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolClass.hasMany(DevelopmentModuleSchoolStudent, {
    foreignKey: "class_id",
    sourceKey: "id",
    as: "module_school_class->module_school_student_3761",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolClass.belongsTo(ModuleSchoolOrientation, {
    foreignKey: "orientation_id",
    targetKey: "id",
    as: "module_school_class->module_school_orientation_6032",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolClass.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "class_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_school_class(_copy_23)->module_learniba_reference_index(pk_table_29509)_3039",
    }
  );

  DevelopmentModuleSchoolClass.belongsToMany(DevelopmentModuleSchoolSubject, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "class_id",
    sourceKey: "id",
    targetKey: "id",
    as: "module_school_class(_copy_23)->module_school_subject(pk_module_school_subject)_1927",
  });

  DevelopmentModuleSchoolClass.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "class_id",
    sourceKey: "id",
    targetKey: "teacher_id",
    as: "module_school_class(_copy_23)->module_school_teacher(pk_module_school_teacher13)_2463",
  });

  DevelopmentModuleSchoolClass.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "class_id",
    sourceKey: "id",
    targetKey: "teacher_id",
    as: "module_school_class(_copy_23)->module_school_teacher(pk_module_school_teacher13)_803",
  });

  ModuleSchoolCustodian.belongsTo(ModuleSchoolParent, {
    foreignKey: "parent_id",
    targetKey: "parent_id",
    as: "module_school_custodian->module_school_parent_4064",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolCustodian.belongsTo(ModuleSchoolStudent, {
    foreignKey: "student_id",
    targetKey: "student_id",
    as: "module_school_custodian->module_school_student_1820",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolExercise.hasMany(DevelopmentModuleExamStudentAnswer, {
    foreignKey: "exercise_id",
    sourceKey: "id",
    as: "module_school_exercise->module_exam_student_answer_2063",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolExercise.belongsTo(ModuleLearnibaQuestion, {
    foreignKey: "question_id",
    targetKey: "id",
    as: "module_school_exercise->module_learniba_question_401",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolExercise.belongsTo(ModuleSchoolSchedule, {
    foreignKey: "schedule_id",
    targetKey: "id",
    as: "module_school_exercise->module_school_schedule_7332",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolExercise.belongsToMany(
    DevelopmentModuleQuestionChoice,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "exercise_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_school_exercise(pk_module_school_test34)->module_question_choices(pk_table_27276)_1819",
    }
  );

  DevelopmentModuleSchoolExercise.belongsToMany(
    DevelopmentModuleSchoolStudent,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "exercise_id",
      sourceKey: "id",
      targetKey: "student_id",
      as: "module_school_exercise(pk_module_school_test34)->module_school_student(module_school_students_pkey)_4550",
    }
  );
  DevelopmentModuleSchoolOrientation.hasMany(DevelopmentModuleSchoolClass, {
    foreignKey: "orientation_id",
    sourceKey: "id",
    as: "module_school_orientation->module_school_class_5903",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolOrientation.hasMany(
    DevelopmentModuleSchoolReferenceOrientation,
    {
      foreignKey: "orientation_id",
      sourceKey: "id",
      as: "module_school_orientation->module_school_reference_orientation_9412",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );

  DevelopmentModuleSchoolOrientation.belongsToMany(
    DevelopmentModuleLearnibaReference,
    {
      through: "DevelopmentModuleSchoolReferenceOrientation",
      otherKey: "orientation_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_school_orientation(pk_module_school_orientation)->module_learniba_reference(pk_module_learniba_reference12)_8254",
    }
  );
  DevelopmentModuleSchoolParent.hasMany(DevelopmentModuleSchoolCustodian, {
    foreignKey: "parent_id",
    sourceKey: "parent_id",
    as: "module_school_parent->module_school_custodian_285",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolParent.belongsToMany(DevelopmentModuleSchoolStudent, {
    through: "DevelopmentModuleSchoolCustodian",
    otherKey: "parent_id",
    sourceKey: "parent_id",
    targetKey: "student_id",
    as: "module_school_parent(pk_table_2121)->module_school_student(module_school_students_pkey)_1389",
  });

  ModuleSchoolReferenceOrientation.belongsTo(ModuleLearnibaReference, {
    foreignKey: "reference_id",
    targetKey: "id",
    as: "module_school_reference_orientation->module_learniba_reference_2429",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolReferenceOrientation.belongsTo(ModuleSchoolOrientation, {
    foreignKey: "orientation_id",
    targetKey: "id",
    as: "module_school_reference_orientation->module_school_orientation_5260",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolSchedule.hasMany(
    DevelopmentModuleSchoolAbcenceStudent,
    {
      foreignKey: "schedule_id",
      sourceKey: "id",
      as: "module_school_schedule->module_school_abcence_student_7258",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleSchoolSchedule.hasMany(DevelopmentModuleSchoolExercise, {
    foreignKey: "schedule_id",
    sourceKey: "id",
    as: "module_school_schedule->module_school_exercise_2271",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolSchedule.belongsTo(ModuleLearnibaReferenceIndex, {
    foreignKey: "reference_index_id",
    targetKey: "id",
    as: "module_school_schedule->module_learniba_reference_index_9099",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolSchedule.belongsTo(ModuleSchoolClass, {
    foreignKey: "class_id",
    targetKey: "id",
    as: "module_school_schedule->module_school_class_9392",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolSchedule.belongsTo(ModuleSchoolSubject, {
    foreignKey: "subject_id",
    targetKey: "id",
    as: "module_school_schedule->module_school_subject_8455",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolSchedule.belongsTo(ModuleSchoolTeacher, {
    foreignKey: "assistant_id",
    targetKey: "teacher_id",
    as: "module_school_schedule->module_school_teacher_1248",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolSchedule.belongsTo(ModuleSchoolTeacher, {
    foreignKey: "teacher_id",
    targetKey: "teacher_id",
    as: "module_school_schedule->module_school_teacher_7283",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolSchedule.belongsToMany(
    DevelopmentModuleLearnibaQuestion,
    {
      through: "DevelopmentModuleSchoolExercise",
      otherKey: "schedule_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_school_schedule(pk_module_school_schedule)->module_learniba_question(pk_table_2804)_4248",
    }
  );

  DevelopmentModuleSchoolSchedule.belongsToMany(
    DevelopmentModuleSchoolStudent,
    {
      through: "DevelopmentModuleSchoolAbcenceStudent",
      otherKey: "schedule_id",
      sourceKey: "id",
      targetKey: "student_id",
      as: "module_school_schedule(pk_module_school_schedule)->module_school_student(module_school_students_pkey)_3438",
    }
  );
  DevelopmentModuleSchoolStudent.hasMany(DevelopmentModuleExamStudentAnswer, {
    foreignKey: "student_id",
    sourceKey: "student_id",
    as: "module_school_student->module_exam_student_answer_3333",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolStudent.hasMany(
    DevelopmentModuleLeanibaDifficultyHistory,
    {
      foreignKey: "student_id",
      sourceKey: "student_id",
      as: "module_school_student->module_leaniba_difficulty_history_8713",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleSchoolStudent.hasMany(
    DevelopmentModuleSchoolAbcenceStudent,
    {
      foreignKey: "student_id",
      sourceKey: "student_id",
      as: "module_school_student->module_school_abcence_student_6201",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    }
  );
  DevelopmentModuleSchoolStudent.hasMany(DevelopmentModuleSchoolCustodian, {
    foreignKey: "student_id",
    sourceKey: "student_id",
    as: "module_school_student->module_school_custodian_786",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolStudent.belongsTo(ModuleSchoolClass, {
    foreignKey: "class_id",
    targetKey: "id",
    as: "module_school_student->module_school_class_5424",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolStudent.belongsToMany(
    DevelopmentModuleQuestionChoice,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "student_id",
      sourceKey: "student_id",
      targetKey: "id",
      as: "module_school_student(module_school_students_pkey)->module_question_choices(pk_table_27276)_2450",
    }
  );

  DevelopmentModuleSchoolStudent.belongsToMany(
    DevelopmentModuleSchoolExercise,
    {
      through: "DevelopmentModuleExamStudentAnswer",
      otherKey: "student_id",
      sourceKey: "student_id",
      targetKey: "id",
      as: "module_school_student(module_school_students_pkey)->module_school_exercise(pk_module_school_test34)_7122",
    }
  );

  DevelopmentModuleSchoolStudent.belongsToMany(DevelopmentModuleSchoolParent, {
    through: "DevelopmentModuleSchoolCustodian",
    otherKey: "student_id",
    sourceKey: "student_id",
    targetKey: "parent_id",
    as: "module_school_student(module_school_students_pkey)->module_school_parent(pk_table_2121)_2940",
  });

  DevelopmentModuleSchoolStudent.belongsToMany(
    DevelopmentModuleSchoolSchedule,
    {
      through: "DevelopmentModuleSchoolAbcenceStudent",
      otherKey: "student_id",
      sourceKey: "student_id",
      targetKey: "id",
      as: "module_school_student(module_school_students_pkey)->module_school_schedule(pk_module_school_schedule)_1268",
    }
  );
  DevelopmentModuleSchoolSubject.hasMany(DevelopmentModuleLearnibaReference, {
    foreignKey: "subject_id",
    sourceKey: "id",
    as: "module_school_subject->module_learniba_reference_8691",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolSubject.hasMany(DevelopmentModuleSchoolSchedule, {
    foreignKey: "subject_id",
    sourceKey: "id",
    as: "module_school_subject->module_school_schedule_2938",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolSubject.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "subject_id",
      sourceKey: "id",
      targetKey: "id",
      as: "module_school_subject(pk_module_school_subject)->module_learniba_reference_index(pk_table_29509)_8155",
    }
  );

  DevelopmentModuleSchoolSubject.belongsToMany(DevelopmentModuleSchoolClass, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "subject_id",
    sourceKey: "id",
    targetKey: "id",
    as: "module_school_subject(pk_module_school_subject)->module_school_class(_copy_23)_8339",
  });

  DevelopmentModuleSchoolSubject.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "subject_id",
    sourceKey: "id",
    targetKey: "teacher_id",
    as: "module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)_2020",
  });

  DevelopmentModuleSchoolSubject.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "subject_id",
    sourceKey: "id",
    targetKey: "teacher_id",
    as: "module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)_2918",
  });
  DevelopmentModuleSchoolSupervisor.hasMany(DevelopmentModuleSchoolTeacher, {
    foreignKey: "supervisor_id",
    sourceKey: "supervisor_id",
    as: "module_school_supervisor->module_school_teacher_2873",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolTeacher.hasMany(DevelopmentModuleSchoolSchedule, {
    foreignKey: "teacher_id",
    sourceKey: "teacher_id",
    as: "module_school_teacher->module_school_schedule_1837",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });
  DevelopmentModuleSchoolTeacher.hasMany(DevelopmentModuleSchoolSchedule, {
    foreignKey: "assistant_id",
    sourceKey: "teacher_id",
    as: "module_school_teacher->module_school_schedule_7941",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  ModuleSchoolTeacher.belongsTo(ModuleSchoolSupervisor, {
    foreignKey: "supervisor_id",
    targetKey: "supervisor_id",
    as: "module_school_teacher->module_school_supervisor_6862",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "assistant_id",
      sourceKey: "teacher_id",
      targetKey: "id",
      as: "module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)_5731",
    }
  );

  DevelopmentModuleSchoolTeacher.belongsToMany(
    DevelopmentModuleLearnibaReferenceIndex,
    {
      through: "DevelopmentModuleSchoolSchedule",
      otherKey: "teacher_id",
      sourceKey: "teacher_id",
      targetKey: "id",
      as: "module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)_9348",
    }
  );

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolClass, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "assistant_id",
    sourceKey: "teacher_id",
    targetKey: "id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_class(_copy_23)_1794",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolClass, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "teacher_id",
    sourceKey: "teacher_id",
    targetKey: "id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_class(_copy_23)_8600",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolSubject, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "assistant_id",
    sourceKey: "teacher_id",
    targetKey: "id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)_3317",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolSubject, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "teacher_id",
    sourceKey: "teacher_id",
    targetKey: "id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)_5237",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "teacher_id",
    sourceKey: "teacher_id",
    targetKey: "teacher_id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)_1066",
  });

  DevelopmentModuleSchoolTeacher.belongsToMany(DevelopmentModuleSchoolTeacher, {
    through: "DevelopmentModuleSchoolSchedule",
    otherKey: "assistant_id",
    sourceKey: "teacher_id",
    targetKey: "teacher_id",
    as: "module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)_7659",
  });
}
