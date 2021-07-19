# development.module_auth_roles

| Type | Relation Name | Target Schema | Target Table |
| ---- | ------------- | ------------- | ------------ |

# development.module_auth_users

| Type | Relation Name | Target Schema | Target Table |
| ---- | ------------- | ------------- | ------------ |

# development.module_exam_student_answer

| Type | Relation Name                                            | Target Schema | Target Table            |
| ---- | -------------------------------------------------------- | ------------- | ----------------------- |
| m2o  | module_exam_student_answer->module_question_choices_4516 | development   | module_question_choices |
| m2o  | module_exam_student_answer->module_school_exercise_2230  | development   | module_school_exercise  |
| m2o  | module_exam_student_answer->module_school_student_6556   | development   | module_school_student   |

# development.module_leaniba_difficulty_history

| Type | Relation Name                                                 | Target Schema | Target Table          |
| ---- | ------------------------------------------------------------- | ------------- | --------------------- |
| m2o  | module_leaniba_difficulty_history->module_school_student_9089 | development   | module_school_student |

# development.module_learniba_question

| Type | Relation Name                                                                                    | Target Schema | Target Table                    |
| ---- | ------------------------------------------------------------------------------------------------ | ------------- | ------------------------------- |
| o2m  | module_learniba_question->module_question_choices_3874                                           | development   | module_question_choices         |
| o2m  | module_learniba_question->module_school_exercise_1771                                            | development   | module_school_exercise          |
| m2o  | module_learniba_question->module_learniba_reference_index_5953                                   | development   | module_learniba_reference_index |
| m2o  | module_learniba_question->module_question_media_4018                                             | development   | module_question_media           |
| m2o  | module_learniba_question->module_question_media_6919                                             | development   | module_question_media           |
| m2m  | module_learniba_question(pk_table_2804)->module_question_media(pk_table_288)\_6455               | development   | module_question_media           |
| m2m  | module_learniba_question(pk_table_2804)->module_school_schedule(pk_module_school_schedule)\_2159 | development   | module_school_schedule          |

# development.module_learniba_reference

| Type | Relation Name                                                                                                           | Target Schema | Target Table                        |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------- |
| o2m  | module_learniba_reference->module_learniba_reference_index_9631                                                         | development   | module_learniba_reference_index     |
| o2m  | module_learniba_reference->module_school_reference_orientation_5712                                                     | development   | module_school_reference_orientation |
| m2o  | module_learniba_reference->module_school_subject_8799                                                                   | development   | module_school_subject               |
| m2m  | module_learniba_reference(pk_module_learniba_reference12)->module_learniba_reference_index(pk_table_29509)\_3462        | development   | module_learniba_reference_index     |
| m2m  | module_learniba_reference(pk_module_learniba_reference12)->module_school_orientation(pk_module_school_orientation)\_981 | development   | module_school_orientation           |

# development.module_learniba_reference_index

| Type | Relation Name                                                                                                    | Target Schema | Target Table                    |
| ---- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_learniba_reference_index->module_learniba_question_8949                                                   | development   | module_learniba_question        |
| o2m  | module_learniba_reference_index->module_learniba_reference_index_4529                                            | development   | module_learniba_reference_index |
| o2m  | module_learniba_reference_index->module_school_schedule_3464                                                     | development   | module_school_schedule          |
| m2o  | module_learniba_reference_index->module_learniba_reference_6928                                                  | development   | module_learniba_reference       |
| m2o  | module_learniba_reference_index->module_learniba_reference_index_6687                                            | development   | module_learniba_reference_index |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_learniba_reference(pk_module_learniba_reference12)\_8785 | development   | module_learniba_reference       |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)\_3108                       | development   | module_question_media           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_question_media(pk_table_288)\_3862                       | development   | module_question_media           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_class(\_copy_23)\_2704                            | development   | module_school_class             |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_subject(pk_module_school_subject)\_548            | development   | module_school_subject           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)\_1381         | development   | module_school_teacher           |
| m2m  | module_learniba_reference_index(pk_table_29509)->module_school_teacher(pk_module_school_teacher13)\_8499         | development   | module_school_teacher           |

# development.module_metadata

| Type | Relation Name | Target Schema | Target Table |
| ---- | ------------- | ------------- | ------------ |

# development.module_question_choices

| Type | Relation Name                                                                                     | Target Schema | Target Table               |
| ---- | ------------------------------------------------------------------------------------------------- | ------------- | -------------------------- |
| o2m  | module_question_choices->module_exam_student_answer_5580                                          | development   | module_exam_student_answer |
| m2o  | module_question_choices->module_learniba_question_8302                                            | development   | module_learniba_question   |
| m2o  | module_question_choices->module_question_media_5964                                               | development   | module_question_media      |
| m2m  | module_question_choices(pk_table_27276)->module_school_exercise(pk_module_school_test34)\_6117    | development   | module_school_exercise     |
| m2m  | module_question_choices(pk_table_27276)->module_school_student(module_school_students_pkey)\_2719 | development   | module_school_student      |

# development.module_question_media

| Type | Relation Name                                                                              | Target Schema | Target Table                    |
| ---- | ------------------------------------------------------------------------------------------ | ------------- | ------------------------------- |
| o2m  | module_question_media->module_learniba_question_2091                                       | development   | module_learniba_question        |
| o2m  | module_question_media->module_learniba_question_6840                                       | development   | module_learniba_question        |
| o2m  | module_question_media->module_question_choices_4170                                        | development   | module_question_choices         |
| m2m  | module_question_media(pk_table_288)->module_learniba_question(pk_table_2804)\_5831         | development   | module_learniba_question        |
| m2m  | module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)\_3170 | development   | module_learniba_reference_index |
| m2m  | module_question_media(pk_table_288)->module_learniba_reference_index(pk_table_29509)\_7278 | development   | module_learniba_reference_index |
| m2m  | module_question_media(pk_table_288)->module_question_media(pk_table_288)\_6131             | development   | module_question_media           |
| m2m  | module_question_media(pk_table_288)->module_question_media(pk_table_288)\_8945             | development   | module_question_media           |

# development.module_school_abcence_student

| Type | Relation Name                                              | Target Schema | Target Table           |
| ---- | ---------------------------------------------------------- | ------------- | ---------------------- |
| m2o  | module_school_abcence_student->module_school_schedule_3070 | development   | module_school_schedule |
| m2o  | module_school_abcence_student->module_school_student_8633  | development   | module_school_student  |

# development.module_school_class

| Type | Relation Name                                                                           | Target Schema | Target Table                    |
| ---- | --------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_class->module_school_schedule_6658                                        | development   | module_school_schedule          |
| o2m  | module_school_class->module_school_student_3761                                         | development   | module_school_student           |
| m2o  | module_school_class->module_school_orientation_6032                                     | development   | module_school_orientation       |
| m2m  | module_school_class(\_copy_23)->module_learniba_reference_index(pk_table_29509)\_3039   | development   | module_learniba_reference_index |
| m2m  | module_school_class(\_copy_23)->module_school_subject(pk_module_school_subject)\_1927   | development   | module_school_subject           |
| m2m  | module_school_class(\_copy_23)->module_school_teacher(pk_module_school_teacher13)\_2463 | development   | module_school_teacher           |
| m2m  | module_school_class(\_copy_23)->module_school_teacher(pk_module_school_teacher13)\_803  | development   | module_school_teacher           |

# development.module_school_custodian

| Type | Relation Name                                       | Target Schema | Target Table          |
| ---- | --------------------------------------------------- | ------------- | --------------------- |
| m2o  | module_school_custodian->module_school_parent_4064  | development   | module_school_parent  |
| m2o  | module_school_custodian->module_school_student_1820 | development   | module_school_student |

# development.module_school_exercise

| Type | Relation Name                                                                                             | Target Schema | Target Table               |
| ---- | --------------------------------------------------------------------------------------------------------- | ------------- | -------------------------- |
| o2m  | module_school_exercise->module_exam_student_answer_2063                                                   | development   | module_exam_student_answer |
| m2o  | module_school_exercise->module_learniba_question_401                                                      | development   | module_learniba_question   |
| m2o  | module_school_exercise->module_school_schedule_7332                                                       | development   | module_school_schedule     |
| m2m  | module_school_exercise(pk_module_school_test34)->module_question_choices(pk_table_27276)\_1819            | development   | module_question_choices    |
| m2m  | module_school_exercise(pk_module_school_test34)->module_school_student(module_school_students_pkey)\_4550 | development   | module_school_student      |

# development.module_school_orientation

| Type | Relation Name                                                                                                            | Target Schema | Target Table                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | ------------- | ----------------------------------- |
| o2m  | module_school_orientation->module_school_class_5903                                                                      | development   | module_school_class                 |
| o2m  | module_school_orientation->module_school_reference_orientation_9412                                                      | development   | module_school_reference_orientation |
| m2m  | module_school_orientation(pk_module_school_orientation)->module_learniba_reference(pk_module_learniba_reference12)\_8254 | development   | module_learniba_reference           |

# development.module_school_parent

| Type | Relation Name                                                                                 | Target Schema | Target Table            |
| ---- | --------------------------------------------------------------------------------------------- | ------------- | ----------------------- |
| o2m  | module_school_parent->module_school_custodian_285                                             | development   | module_school_custodian |
| m2m  | module_school_parent(pk_table_2121)->module_school_student(module_school_students_pkey)\_1389 | development   | module_school_student   |

# development.module_school_reference_orientation

| Type | Relation Name                                                       | Target Schema | Target Table              |
| ---- | ------------------------------------------------------------------- | ------------- | ------------------------- |
| m2o  | module_school_reference_orientation->module_learniba_reference_2429 | development   | module_learniba_reference |
| m2o  | module_school_reference_orientation->module_school_orientation_5260 | development   | module_school_orientation |

# development.module_school_schedule

| Type | Relation Name                                                                                               | Target Schema | Target Table                    |
| ---- | ----------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_schedule->module_school_abcence_student_7258                                                  | development   | module_school_abcence_student   |
| o2m  | module_school_schedule->module_school_exercise_2271                                                         | development   | module_school_exercise          |
| m2o  | module_school_schedule->module_learniba_reference_index_9099                                                | development   | module_learniba_reference_index |
| m2o  | module_school_schedule->module_school_class_9392                                                            | development   | module_school_class             |
| m2o  | module_school_schedule->module_school_subject_8455                                                          | development   | module_school_subject           |
| m2o  | module_school_schedule->module_school_teacher_1248                                                          | development   | module_school_teacher           |
| m2o  | module_school_schedule->module_school_teacher_7283                                                          | development   | module_school_teacher           |
| m2m  | module_school_schedule(pk_module_school_schedule)->module_learniba_question(pk_table_2804)\_4248            | development   | module_learniba_question        |
| m2m  | module_school_schedule(pk_module_school_schedule)->module_school_student(module_school_students_pkey)\_3438 | development   | module_school_student           |

# development.module_school_student

| Type | Relation Name                                                                                               | Target Schema | Target Table                      |
| ---- | ----------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------- |
| o2m  | module_school_student->module_exam_student_answer_3333                                                      | development   | module_exam_student_answer        |
| o2m  | module_school_student->module_leaniba_difficulty_history_8713                                               | development   | module_leaniba_difficulty_history |
| o2m  | module_school_student->module_school_abcence_student_6201                                                   | development   | module_school_abcence_student     |
| o2m  | module_school_student->module_school_custodian_786                                                          | development   | module_school_custodian           |
| m2o  | module_school_student->module_school_class_5424                                                             | development   | module_school_class               |
| m2m  | module_school_student(module_school_students_pkey)->module_question_choices(pk_table_27276)\_2450           | development   | module_question_choices           |
| m2m  | module_school_student(module_school_students_pkey)->module_school_exercise(pk_module_school_test34)\_7122   | development   | module_school_exercise            |
| m2m  | module_school_student(module_school_students_pkey)->module_school_parent(pk_table_2121)\_2940               | development   | module_school_parent              |
| m2m  | module_school_student(module_school_students_pkey)->module_school_schedule(pk_module_school_schedule)\_1268 | development   | module_school_schedule            |

# development.module_school_subject

| Type | Relation Name                                                                                            | Target Schema | Target Table                    |
| ---- | -------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_subject->module_learniba_reference_8691                                                    | development   | module_learniba_reference       |
| o2m  | module_school_subject->module_school_schedule_2938                                                       | development   | module_school_schedule          |
| m2m  | module_school_subject(pk_module_school_subject)->module_learniba_reference_index(pk_table_29509)\_8155   | development   | module_learniba_reference_index |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_class(\_copy_23)\_8339                    | development   | module_school_class             |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)\_2020 | development   | module_school_teacher           |
| m2m  | module_school_subject(pk_module_school_subject)->module_school_teacher(pk_module_school_teacher13)\_2918 | development   | module_school_teacher           |

# development.module_school_supervisor

| Type | Relation Name                                        | Target Schema | Target Table          |
| ---- | ---------------------------------------------------- | ------------- | --------------------- |
| o2m  | module_school_supervisor->module_school_teacher_2873 | development   | module_school_teacher |

# development.module_school_teacher

| Type | Relation Name                                                                                              | Target Schema | Target Table                    |
| ---- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------- |
| o2m  | module_school_teacher->module_school_schedule_1837                                                         | development   | module_school_schedule          |
| o2m  | module_school_teacher->module_school_schedule_7941                                                         | development   | module_school_schedule          |
| m2o  | module_school_teacher->module_school_supervisor_6862                                                       | development   | module_school_supervisor        |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)\_5731   | development   | module_learniba_reference_index |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_learniba_reference_index(pk_table_29509)\_9348   | development   | module_learniba_reference_index |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_class(\_copy_23)\_1794                    | development   | module_school_class             |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_class(\_copy_23)\_8600                    | development   | module_school_class             |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)\_3317   | development   | module_school_subject           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_subject(pk_module_school_subject)\_5237   | development   | module_school_subject           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)\_1066 | development   | module_school_teacher           |
| m2m  | module_school_teacher(pk_module_school_teacher13)->module_school_teacher(pk_module_school_teacher13)\_7659 | development   | module_school_teacher           |

# development.module_user

| Type | Relation Name | Target Schema | Target Table |
| ---- | ------------- | ------------- | ------------ |
