# development.module_auth_roles

| Type | Relation Name                                                                  | Target Schema | Target Table      |
| ---- | ------------------------------------------------------------------------------ | ------------- | ----------------- |
| o2m  | module_auth_roles->module_auth_users_2759                                      | development   | module_auth_users |
| m2m  | module_auth_roles(module_auth_roles_pkey)->module_user(module_user_pkey)\_9219 | development   | module_user       |

# development.module_auth_users

| Type | Relation Name                             | Target Schema | Target Table      |
| ---- | ----------------------------------------- | ------------- | ----------------- |
| m2o  | module_auth_users->module_auth_roles_7661 | development   | module_auth_roles |
| m2o  | module_auth_users->module_user_2089       | development   | module_user       |

# development.module_exam_student_answer

| Type | Relation Name                                           | Target Schema | Target Table            |
| ---- | ------------------------------------------------------- | ------------- | ----------------------- |
| m2o  | module_exam_student_answer->module_question_choices_951 | development   | module_question_choices |
| m2o  | module_exam_student_answer->module_school_exercise_7641 | development   | module_school_exercise  |
| m2o  | module_exam_student_answer->module_school_student_7619  | development   | module_school_student   |

# development.module_leaniba_difficulty_history

| Type | Relation Name                                                 | Target Schema | Target Table          |
| ---- | ------------------------------------------------------------- | ------------- | --------------------- |
| m2o  | module_leaniba_difficulty_history->module_school_student_5101 | development   | module_school_student |

# development.module_learniba_question

| Type | Relation Name                                                                                    | Target Schema | Target Table                    |
| ---- | ------------------------------------------------------------------------------------------------ | ------------- | ------------------------------- |
| o2m  | module_learniba_question->module_question_choices_8762                                           | development   | module_question_choices         |
| o2m  | module_learniba_question->module_school_exercise_6095                                            | development   | module_school_exercise          |
| m2o  | module_learniba_question->module_learniba_reference_index_7433                                   | development   | module_learniba_reference_index |
| m2o  | module_learniba_question->module_question_media_1263                                             | development   | module_question_media           |
| m2o  | module_learniba_question->module_question_media_5714                                             | development   | module_question_media           |
| m2m  | module_learniba_question(pk_table_2804)->module_question_media(pk_table_288)\_8248               | development   | module_question_media           |
| m2m  | module_learniba_question(pk_table_2804)->module_school_schedule(pk_module_school_schedule)\_7964 | development   | module_school_schedule          |

# development.module_learniba_reference

| Type | Relation Name                                                                                                            | Target Schema | Target Table                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | ------------- | ----------------------------------- |
| o2m  | module_learniba_reference->module_learniba_reference_index_1072                                                          | development   | module_learniba_reference_index     |
| o2m  | module_learniba_reference->module_school_reference_orientation_9171                                                      | development   | module_school_reference_orientation |
| m2o  | module_learniba_reference->module_school_subject_7636                                                                    | development   | module_school_subject               |
| m2m  | module_learniba_reference(pk_module_learniba_reference12)->module_learniba_reference_index(pk_table_29509)\_2593         | development   | module_learniba_reference_index     |
| m2m  | module_learniba_reference(pk_module_learniba_reference12)->module_school_orientation(pk_module_school_orientation)\_8023 | development   | module_school_orientation           |

# development.module_learniba_reference_index

| Type | Relation Name                                                                                                    | Target Schema | Target Table                    |
| ---- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_learniba_reference_index->module_learniba_question_3175                                                   | development   | module_learniba_question        |
| o2m  | module_learniba_reference_index->module_learniba_reference_index_3228                                            | development   | module_learniba_reference_index |
| o2m  | module_learniba_reference_index->module_school_schedule_3832                                                     | development   | module_school_schedule          |
| m2o  | module_learniba_reference_index->module_learniba_reference_6910                                                  | development   | module_learniba_reference       |
| m2o  | module_learniba_reference_index->module_learniba_reference_index_7658                                            | development   | module_learniba_reference_index |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_learniba_reference(pk_module_learniba_reference12)\_8742 | development   | module_learniba_reference       |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)\_2328                       | development   | module_question_media           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)\_461                        | development   | module_question_media           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_class(\_copy_23)\_3954                            | development   | module_school_class             |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_subject(pk_module_school_subject)\_4483           | development   | module_school_subject           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)\_2645         | development   | module_school_teacher           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)\_8679         | development   | module_school_teacher           |

# development.module_metadata

| Type | Relation Name | Target Schema | Target Table |
| ---- | ------------- | ------------- | ------------ |

# development.module_question_choices

| Type | Relation Name                                                                                     | Target Schema | Target Table               |
| ---- | ------------------------------------------------------------------------------------------------- | ------------- | -------------------------- |
| o2m  | module_question_choices->module_exam_student_answer_8623                                          | development   | module_exam_student_answer |
| m2o  | module_question_choices->module_learniba_question_2258                                            | development   | module_learniba_question   |
| m2o  | module_question_choices->module_question_media_1453                                               | development   | module_question_media      |
| m2m  | module_question_choices(pk_table_27276)->module_school_exercise(pk_module_school_test34)\_6306    | development   | module_school_exercise     |
| m2m  | module_question_choices(pk_table_27276)->module_school_student(module_school_students_pkey)\_8415 | development   | module_school_student      |

# development.module_question_media

| Type | Relation Name                                                                              | Target Schema | Target Table                    |
| ---- | ------------------------------------------------------------------------------------------ | ------------- | ------------------------------- |
| o2m  | module_question_media->module_learniba_question_1807                                       | development   | module_learniba_question        |
| o2m  | module_question_media->module_learniba_question_7602                                       | development   | module_learniba_question        |
| o2m  | module_question_media->module_question_choices_9176                                        | development   | module_question_choices         |
| m2m  | module_question_media(pk_table_288)->module_learniba_question(pk_table_2804)\_1576         | development   | module_learniba_question        |
| m2m  | module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)\_1565 | development   | module_learniba_reference_index |
| m2m  | module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)\_28   | development   | module_learniba_reference_index |
| m2m  | module_question_media(pk_table_288)->module_question_media(pk_table_288)\_3493             | development   | module_question_media           |
| m2m  | module_question_media(pk_table_288)->module_question_media(pk_table_288)\_7974             | development   | module_question_media           |

# development.module_school_abcence_student

| Type | Relation Name                                              | Target Schema | Target Table           |
| ---- | ---------------------------------------------------------- | ------------- | ---------------------- |
| m2o  | module_school_abcence_student->module_school_schedule_5178 | development   | module_school_schedule |
| m2o  | module_school_abcence_student->module_school_student_2454  | development   | module_school_student  |

# development.module_school_class

| Type | Relation Name                                                                           | Target Schema | Target Table                    |
| ---- | --------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_class->module_school_schedule_9053                                        | development   | module_school_schedule          |
| o2m  | module_school_class->module_school_student_5478                                         | development   | module_school_student           |
| m2o  | module_school_class->module_school_orientation_9120                                     | development   | module_school_orientation       |
| m2m  | module_school_class(\_copy_23)->module_learniba_reference_index(pk_table_29509)\_514    | development   | module_learniba_reference_index |
| m2m  | module_school_class(\_copy_23)->module_school_subject(pk_module_school_subject)\_9528   | development   | module_school_subject           |
| m2m  | module_school_class(\_copy_23)->module_school_teacher(pk_module_school_teacher13)\_2499 | development   | module_school_teacher           |
| m2m  | module_school_class(\_copy_23)->module_school_teacher(pk_module_school_teacher13)\_8028 | development   | module_school_teacher           |
| m2m  | module_school_class(\_copy_23)->module_user(module_user_pkey)\_2632                     | development   | module_user                     |

# development.module_school_custodian

| Type | Relation Name                                       | Target Schema | Target Table          |
| ---- | --------------------------------------------------- | ------------- | --------------------- |
| m2o  | module_school_custodian->module_school_parent_9086  | development   | module_school_parent  |
| m2o  | module_school_custodian->module_school_student_8189 | development   | module_school_student |

# development.module_school_exercise

| Type | Relation Name                                                                                             | Target Schema | Target Table               |
| ---- | --------------------------------------------------------------------------------------------------------- | ------------- | -------------------------- |
| o2m  | module_school_exercise->module_exam_student_answer_7274                                                   | development   | module_exam_student_answer |
| m2o  | module_school_exercise->module_learniba_question_6756                                                     | development   | module_learniba_question   |
| m2o  | module_school_exercise->module_school_schedule_6267                                                       | development   | module_school_schedule     |
| m2m  | module_school_exercise(pk_module_school_test34)->module_question_choices(pk_table_27276)\_9178            | development   | module_question_choices    |
| m2m  | module_school_exercise(pk_module_school_test34)->module_school_student(module_school_students_pkey)\_1167 | development   | module_school_student      |

# development.module_school_orientation

| Type | Relation Name                                                                                                           | Target Schema | Target Table                        |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------- |
| o2m  | module_school_orientation->module_school_class_1825                                                                     | development   | module_school_class                 |
| o2m  | module_school_orientation->module_school_reference_orientation_8829                                                     | development   | module_school_reference_orientation |
| m2m  | module_school_orientation(pk_module_school_orientation)->module_learniba_reference(pk_module_learniba_reference12)\_289 | development   | module_learniba_reference           |

# development.module_school_parent

| Type | Relation Name                                                                                 | Target Schema | Target Table            |
| ---- | --------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| o2m  | module_school_parent->module_school_custodian_2939                                            | development   | module_school_custodian |
| m2m  | module_school_parent(pk_table_2121)->module_school_student(module_school_students_pkey)\_5029 | development   | module_school_student   |

# development.module_school_reference_orientation

| Type | Relation Name                                                       | Target Schema | Target Table              |
| ---- | ------------------------------------------------------------------- | ------------- | ------------------------- |
| m2o  | module_school_reference_orientation->module_learniba_reference_7577 | development   | module_learniba_reference |
| m2o  | module_school_reference_orientation->module_school_orientation_629  | development   | module_school_orientation |

# development.module_school_schedule

| Type | Relation Name                                                                                               | Target Schema | Target Table                    |
| ---- | ----------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_schedule->module_school_abcence_student_946                                                   | development   | module_school_abcence_student   |
| o2m  | module_school_schedule->module_school_exercise_244                                                          | development   | module_school_exercise          |
| m2o  | module_school_schedule->module_learniba_reference_index_2195                                                | development   | module_learniba_reference_index |
| m2o  | module_school_schedule->module_school_class_5278                                                            | development   | module_school_class             |
| m2o  | module_school_schedule->module_school_subject_1286                                                          | development   | module_school_subject           |
| m2o  | module_school_schedule->module_school_teacher_7604                                                          | development   | module_school_teacher           |
| m2o  | module_school_schedule->module_school_teacher_8141                                                          | development   | module_school_teacher           |
| m2m  | module_school_schedule(pk_module_school_schedule)->module_learniba_question(pk_table_2804)\_2723            | development   | module_learniba_question        |
| m2m  | module_school_schedule(pk_module_school_schedule)->module_school_student(module_school_students_pkey)\_3498 | development   | module_school_student           |

# development.module_school_student

| Type | Relation Name                                                                                               | Target Schema | Target Table                      |
| ---- | ----------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------- |
| o2m  | module_school_student->module_exam_student_answer_4946                                                      | development   | module_exam_student_answer        |
| o2m  | module_school_student->module_leaniba_difficulty_history_6539                                               | development   | module_leaniba_difficulty_history |
| o2m  | module_school_student->module_school_abcence_student_5063                                                   | development   | module_school_abcence_student     |
| o2m  | module_school_student->module_school_custodian_681                                                          | development   | module_school_custodian           |
| m2o  | module_school_student->module_school_class_2414                                                             | development   | module_school_class               |
| m2o  | module_school_student->module_user_3472                                                                     | development   | module_user                       |
| m2m  | module_school_student(module_school_students_pkey)->module_question_choices(pk_table_27276)\_2660           | development   | module_question_choices           |
| m2m  | module_school_student(module_school_students_pkey)->module_school_exercise(pk_module_school_test34)\_7401   | development   | module_school_exercise            |
| m2m  | module_school_student(module_school_students_pkey)->module_school_parent(pk_table_2121)\_8867               | development   | module_school_parent              |
| m2m  | module_school_student(module_school_students_pkey)->module_school_schedule(pk_module_school_schedule)\_4412 | development   | module_school_schedule            |

# development.module_school_subject

| Type | Relation Name                                                                                            | Target Schema | Target Table                    |
| ---- | -------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_subject->module_learniba_reference_846                                                     | development   | module_learniba_reference       |
| o2m  | module_school_subject->module_school_schedule_7844                                                       | development   | module_school_schedule          |
| m2m  | module_school_subject(pk_module_school_subject)->module_learniba_reference_index(pk_table_29509)\_9585   | development   | module_learniba_reference_index |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_class(\_copy_23)\_4129                    | development   | module_school_class             |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)\_3325 | development   | module_school_teacher           |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)\_6498 | development   | module_school_teacher           |

# development.module_school_supervisor

| Type | Relation Name                                                                              | Target Schema | Target Table          |
| ---- | ------------------------------------------------------------------------------------------ | ------------- | --------------------- |
| o2m  | module_school_supervisor->module_school_teacher_669                                        | development   | module_school_teacher |
| m2o  | module_school_supervisor->module_user_8567                                                 | development   | module_user           |
| m2m  | module_school_supervisor(pk_module_school_supervisor6)->module_user(module_user_pkey)\_181 | development   | module_user           |

# development.module_school_teacher

| Type | Relation Name                                                                                              | Target Schema | Target Table                    |
| ---- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_teacher->module_school_schedule_3135                                                         | development   | module_school_schedule          |
| o2m  | module_school_teacher->module_school_schedule_9912                                                         | development   | module_school_schedule          |
| m2o  | module_school_teacher->module_school_supervisor_585                                                        | development   | module_school_supervisor        |
| m2o  | module_school_teacher->module_user_5061                                                                    | development   | module_user                     |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)\_404    | development   | module_learniba_reference_index |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)\_9438   | development   | module_learniba_reference_index |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_class(\_copy_23)\_2766                    | development   | module_school_class             |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_class(\_copy_23)\_7951                    | development   | module_school_class             |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)\_1287   | development   | module_school_subject           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)\_7402   | development   | module_school_subject           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)\_2598 | development   | module_school_teacher           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)\_747  | development   | module_school_teacher           |

# development.module_user

| Type | Relation Name                                                                               | Target Schema | Target Table             |
| ---- | ------------------------------------------------------------------------------------------- | ------------- | ------------------------ |
| o2m  | module_user->module_auth_users_4272                                                         | development   | module_auth_users        |
| o2m  | module_user->module_school_student_4082                                                     | development   | module_school_student    |
| o2m  | module_user->module_school_supervisor_6114                                                  | development   | module_school_supervisor |
| o2m  | module_user->module_school_teacher_5711                                                     | development   | module_school_teacher    |
| m2m  | module_user(module_user_pkey)->module_auth_roles(module_auth_roles_pkey)\_3582              | development   | module_auth_roles        |
| m2m  | module_user(module_user_pkey)->module_school_class(\_copy_23)\_566                          | development   | module_school_class      |
| m2m  | module_user(module_user_pkey)->module_school_supervisor(pk_module_school_supervisor6)\_3081 | development   | module_school_supervisor |
