-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** module_user

CREATE TABLE module_user
(
 "id"            int NOT NULL,
 userrname     varchar(255) NOT NULL,
 first_name    varchar(255) NULL,
 last_name     varchar(255) NULL,
 auth_key      varchar(60) NULL,
 password_hash varchar(60) NULL,
 status        int NOT NULL,
 ssn           varchar(50) NOT NULL,
 email         varchar(255) NOT NULL,
 date_of_birth date NOT NULL,
 mobile        varchar(50) NOT NULL,
 gender        varchar(50) NULL,
 CONSTRAINT PK_module_user PRIMARY KEY ( "id" )
);








-- ************************************** module_school_subject

CREATE TABLE module_school_subject
(
 "id"          int NOT NULL,
 code        varchar(255) NOT NULL,
 name        varchar(255) NOT NULL,
 description varchar(255) NOT NULL,
 CONSTRAINT PK_module_school_subject PRIMARY KEY ( "id" )
);








-- ************************************** module_school_orientation

CREATE TABLE module_school_orientation
(
 "id"          int NOT NULL,
 code        varchar(255) NULL,
 name        varchar(255) NULL,
 description varchar(255) NULL,
 created_at  timestamp NULL,
 created_by  varchar(255) NULL,
 updated_at  timestamp NULL,
 updated_by  varchar(255) NULL,
 CONSTRAINT PK_module_school_orientation PRIMARY KEY ( "id" )
);








-- ************************************** module_question_media

CREATE TABLE module_question_media
(
 "id"         int NOT NULL,
 media_link varchar(255) NOT NULL,
 CONSTRAINT PK_table_288 PRIMARY KEY ( "id" )
);








-- ************************************** module_school_supervisor

CREATE TABLE module_school_supervisor
(
 supervisor_id int NOT NULL,
 CONSTRAINT PK_module_school_supervisor PRIMARY KEY ( supervisor_id ),
 CONSTRAINT FK_395 FOREIGN KEY ( supervisor_id ) REFERENCES module_user ( "id" )
);

CREATE INDEX fkIdx_396 ON module_school_supervisor
(
 supervisor_id
);








-- ************************************** module_school_parent

CREATE TABLE module_school_parent
(
 parent_id int NOT NULL,
 CONSTRAINT PK_table_212 PRIMARY KEY ( parent_id ),
 CONSTRAINT FK_212 FOREIGN KEY ( parent_id ) REFERENCES module_user ( "id" )
);

CREATE INDEX fkIdx_213 ON module_school_parent
(
 parent_id
);








-- ************************************** module_school_class

CREATE TABLE module_school_class
(
 "id"             int NOT NULL,
 code           varchar(255) NULL,
 name           varchar(255) NULL,
 description    varchar(255) NULL,
 created_at     timestamp NULL,
 created_by     varchar(255) NULL,
 updated_at     timestamp NULL,
 updated_by     varchar(255) NULL,
 orientation_id int NOT NULL,
 year           int NULL,
 level          int NOT NULL,
 CONSTRAINT _copy_2 PRIMARY KEY ( "id" ),
 CONSTRAINT fk_school_class1_school_orientation_1 FOREIGN KEY ( orientation_id ) REFERENCES module_school_orientation ( "id" )
);








-- ************************************** module_learniba_reference

CREATE TABLE module_learniba_reference
(
 "id"           int NOT NULL,
 name         varchar(255) NOT NULL,
 description  varchar(500) NOT NULL,
 publish_date timestamp NOT NULL,
 publisher    varchar(255) NOT NULL,
 level        int NOT NULL,
 subject_id   int NOT NULL,
 CONSTRAINT PK_module_learniba_reference PRIMARY KEY ( "id" ),
 CONSTRAINT FK_322 FOREIGN KEY ( subject_id ) REFERENCES module_school_subject ( "id" )
);

CREATE INDEX fkIdx_323 ON module_learniba_reference
(
 subject_id
);








-- ************************************** module_school_teacher

CREATE TABLE module_school_teacher
(
 teacher_id    int NOT NULL,
 supervisor_id int NOT NULL,
 CONSTRAINT PK_module_school_teacher PRIMARY KEY ( teacher_id ),
 CONSTRAINT FK_226 FOREIGN KEY ( teacher_id ) REFERENCES module_user ( "id" ),
 CONSTRAINT FK_406 FOREIGN KEY ( supervisor_id ) REFERENCES module_school_supervisor ( supervisor_id )
);

CREATE INDEX fkIdx_227 ON module_school_teacher
(
 teacher_id
);

CREATE INDEX fkIdx_407 ON module_school_teacher
(
 supervisor_id
);








-- ************************************** module_school_student

CREATE TABLE module_school_student
(
 student_id       int NOT NULL,
 class_id         int NOT NULL,
 difficulty_score int NOT NULL,
 CONSTRAINT module_school_students_pkey PRIMARY KEY ( student_id ),
 CONSTRAINT FK_203 FOREIGN KEY ( student_id ) REFERENCES module_user ( "id" ),
 CONSTRAINT FK_265 FOREIGN KEY ( class_id ) REFERENCES module_school_class ( "id" )
);

CREATE INDEX fkIdx_204 ON module_school_student
(
 student_id
);

CREATE INDEX fkIdx_266 ON module_school_student
(
 class_id
);








-- ************************************** module_school_reference_orientation

CREATE TABLE module_school_reference_orientation
(
 reference_id   int NOT NULL,
 orientation_id int NOT NULL,
 CONSTRAINT PK_table_424 PRIMARY KEY ( reference_id, orientation_id ),
 CONSTRAINT FK_429 FOREIGN KEY ( reference_id ) REFERENCES module_learniba_reference ( "id" ),
 CONSTRAINT FK_437 FOREIGN KEY ( orientation_id ) REFERENCES module_school_orientation ( "id" )
);

CREATE INDEX fkIdx_430 ON module_school_reference_orientation
(
 reference_id
);

CREATE INDEX fkIdx_438 ON module_school_reference_orientation
(
 orientation_id
);








-- ************************************** module_learniba_reference_index

CREATE TABLE module_learniba_reference_index
(
 "id"           int NOT NULL,
 name         varchar(255) NOT NULL,
 description  text NOT NULL,
 parent_id    int NOT NULL,
 reference_id int NOT NULL,
 type         varchar(255) NOT NULL,
 CONSTRAINT PK_table_295 PRIMARY KEY ( "id" ),
 CONSTRAINT FK_302 FOREIGN KEY ( parent_id ) REFERENCES module_learniba_reference_index ( "id" ),
 CONSTRAINT FK_319 FOREIGN KEY ( reference_id ) REFERENCES module_learniba_reference ( "id" )
);

CREATE INDEX fkIdx_303 ON module_learniba_reference_index
(
 parent_id
);

CREATE INDEX fkIdx_320 ON module_learniba_reference_index
(
 reference_id
);



COMMENT ON COLUMN module_learniba_reference_index.type IS 'section
chapter
sub-chapter
page';





-- ************************************** module_school_schedule

CREATE TABLE module_school_schedule
(
 "id"                 int NOT NULL,
 created_at         timestamp NULL,
 created_by         varchar(255) NULL,
 updated_at         timestamp NULL,
 updated_by         varchar(255) NULL,
 starttime          timestamp NULL,
 endtime            timestamp NULL,
 teacher_id         int NOT NULL,
 assistant_id       int NOT NULL,
 subject_id         int NOT NULL,
 class_id           int NOT NULL,
 reference_index_id int NOT NULL,
 CONSTRAINT PK_module_school_schedule PRIMARY KEY ( "id" ),
 CONSTRAINT FK_231 FOREIGN KEY ( teacher_id ) REFERENCES module_school_teacher ( teacher_id ),
 CONSTRAINT FK_234 FOREIGN KEY ( assistant_id ) REFERENCES module_school_teacher ( teacher_id ),
 CONSTRAINT FK_258 FOREIGN KEY ( subject_id ) REFERENCES module_school_subject ( "id" ),
 CONSTRAINT FK_262 FOREIGN KEY ( class_id ) REFERENCES module_school_class ( "id" ),
 CONSTRAINT FK_448 FOREIGN KEY ( reference_index_id ) REFERENCES module_learniba_reference_index ( "id" )
);

CREATE INDEX fkIdx_232 ON module_school_schedule
(
 teacher_id
);

CREATE INDEX fkIdx_235 ON module_school_schedule
(
 assistant_id
);

CREATE INDEX fkIdx_259 ON module_school_schedule
(
 subject_id
);

CREATE INDEX fkIdx_263 ON module_school_schedule
(
 class_id
);

CREATE INDEX fkIdx_449 ON module_school_schedule
(
 reference_index_id
);








-- ************************************** module_school_custodian

CREATE TABLE module_school_custodian
(
 parent_id  int NOT NULL,
 student_id int NOT NULL,
 CONSTRAINT PK_table_218 PRIMARY KEY ( parent_id, student_id ),
 CONSTRAINT FK_218 FOREIGN KEY ( parent_id ) REFERENCES module_school_parent ( parent_id ),
 CONSTRAINT FK_222 FOREIGN KEY ( student_id ) REFERENCES module_school_student ( student_id )
);

CREATE INDEX fkIdx_219 ON module_school_custodian
(
 parent_id
);

CREATE INDEX fkIdx_223 ON module_school_custodian
(
 student_id
);








-- ************************************** module_learniba_question

CREATE TABLE module_learniba_question
(
 "id"                      int NOT NULL,
 question_text           text NULL,
 media_id                int NOT NULL,
 media_tip_id            int NOT NULL,
 reference_index_id      int NOT NULL,
 question_time_limit_sec int NOT NULL,
 difficulty_score        int NOT NULL,
 book_page_no            int NOT NULL,
 CONSTRAINT PK_table_280 PRIMARY KEY ( "id" ),
 CONSTRAINT FK_288 FOREIGN KEY ( media_id ) REFERENCES module_question_media ( "id" ),
 CONSTRAINT FK_295 FOREIGN KEY ( reference_index_id ) REFERENCES module_learniba_reference_index ( "id" ),
 CONSTRAINT FK_451 FOREIGN KEY ( media_tip_id ) REFERENCES module_question_media ( "id" )
);

CREATE INDEX fkIdx_290 ON module_learniba_question
(
 media_id
);

CREATE INDEX fkIdx_297 ON module_learniba_question
(
 reference_index_id
);

CREATE INDEX fkIdx_452 ON module_learniba_question
(
 media_tip_id
);








-- ************************************** difficulty_history

CREATE TABLE difficulty_history
(
 "id"               int NOT NULL,
 student_id       int NOT NULL,
 difficulty_score int NOT NULL,
 calculated_at    timestamp NOT NULL,
 CONSTRAINT PK_table_381 PRIMARY KEY ( "id" ),
 CONSTRAINT FK_381 FOREIGN KEY ( student_id ) REFERENCES module_school_student ( student_id )
);

CREATE INDEX fkIdx_382 ON difficulty_history
(
 student_id
);








-- ************************************** module_school_exercise

CREATE TABLE module_school_exercise
(
 "id"            int NOT NULL,
 question_id   int NOT NULL,
 schedule_id   int NOT NULL,
 exercise_type int NOT NULL,
 CONSTRAINT PK_module_school_test PRIMARY KEY ( "id" ),
 CONSTRAINT FK_348 FOREIGN KEY ( question_id ) REFERENCES module_learniba_question ( "id" ),
 CONSTRAINT FK_354 FOREIGN KEY ( schedule_id ) REFERENCES module_school_schedule ( "id" )
);

CREATE INDEX fkIdx_349 ON module_school_exercise
(
 question_id
);

CREATE INDEX fkIdx_355 ON module_school_exercise
(
 schedule_id
);








-- ************************************** module_school_abcence_student

CREATE TABLE module_school_abcence_student
(
 "id"          int NOT NULL,
 schedule_id int NOT NULL,
 student_id  int NOT NULL,
 description varchar(255) NOT NULL,
 CONSTRAINT PK_module_school_abcence_student PRIMARY KEY ( "id" ),
 CONSTRAINT FK_331 FOREIGN KEY ( schedule_id ) REFERENCES module_school_schedule ( "id" ),
 CONSTRAINT FK_339 FOREIGN KEY ( student_id ) REFERENCES module_school_student ( student_id )
);

CREATE INDEX fkIdx_332 ON module_school_abcence_student
(
 schedule_id
);

CREATE INDEX fkIdx_340 ON module_school_abcence_student
(
 student_id
);








-- ************************************** module_question_choices

CREATE TABLE module_question_choices
(
 "id"          int NOT NULL,
 choice_text varchar(255) NOT NULL,
 is_correct  boolean NOT NULL,
 question_id int NOT NULL,
 media_id    int NOT NULL,
 CONSTRAINT PK_table_272 PRIMARY KEY ( "id" ),
 CONSTRAINT FK_280 FOREIGN KEY ( question_id ) REFERENCES module_learniba_question ( "id" ),
 CONSTRAINT FK_441 FOREIGN KEY ( media_id ) REFERENCES module_question_media ( "id" )
);

CREATE INDEX fkIdx_282 ON module_question_choices
(
 question_id
);

CREATE INDEX fkIdx_442 ON module_question_choices
(
 media_id
);








-- ************************************** module_exam_student_answer

CREATE TABLE module_exam_student_answer
(
 "id"                  int NOT NULL,
 question_choice     int NULL,
 student_id          int NOT NULL,
 ask_time            timestamp NULL,
 answer_time_sec     int NULL,
 question_choices_id int NOT NULL,
 exercise_id         int NOT NULL,
 CONSTRAINT module_exam_student_answer_pkey PRIMARY KEY ( "id" ),
 CONSTRAINT FK_268 FOREIGN KEY ( student_id ) REFERENCES module_school_student ( student_id ),
 CONSTRAINT FK_272 FOREIGN KEY ( question_choices_id ) REFERENCES module_question_choices ( "id" ),
 CONSTRAINT FK_445 FOREIGN KEY ( exercise_id ) REFERENCES module_school_exercise ( "id" )
);

CREATE INDEX fkIdx_269 ON module_exam_student_answer
(
 student_id
);

CREATE INDEX fkIdx_274 ON module_exam_student_answer
(
 question_choices_id
);

CREATE INDEX fkIdx_446 ON module_exam_student_answer
(
 exercise_id
);







