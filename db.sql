/*
 Navicat Premium Data Transfer

 Source Server         : postgres local
 Source Server Type    : PostgreSQL
 Source Server Version : 130003
 Source Host           : localhost:5432
 Source Catalog        : learniba
 Source Schema         : development

 Target Server Type    : PostgreSQL
 Target Server Version : 130003
 File Encoding         : 65001

 Date: 19/07/2021 22:56:54
*/


-- ----------------------------
-- Sequence structure for module_auth_roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_auth_roles_id_seq";
CREATE SEQUENCE "module_auth_roles_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_auth_roles_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_exam_student_answer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_exam_student_answer_id_seq";
CREATE SEQUENCE "module_exam_student_answer_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_exam_student_answer_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_leaniba_difficulty_history_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_leaniba_difficulty_history_id_seq";
CREATE SEQUENCE "module_leaniba_difficulty_history_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_leaniba_difficulty_history_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_learniba_question_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_learniba_question_id_seq";
CREATE SEQUENCE "module_learniba_question_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_learniba_question_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_learniba_reference_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_learniba_reference_id_seq";
CREATE SEQUENCE "module_learniba_reference_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_learniba_reference_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_learniba_reference_index_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_learniba_reference_index_id_seq";
CREATE SEQUENCE "module_learniba_reference_index_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_learniba_reference_index_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_question_choices_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_question_choices_id_seq";
CREATE SEQUENCE "module_question_choices_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_question_choices_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_question_media_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_question_media_id_seq";
CREATE SEQUENCE "module_question_media_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_question_media_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_abcence_student_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_abcence_student_id_seq";
CREATE SEQUENCE "module_school_abcence_student_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_abcence_student_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_class_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_class_id_seq";
CREATE SEQUENCE "module_school_class_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_class_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_exercise_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_exercise_id_seq";
CREATE SEQUENCE "module_school_exercise_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_exercise_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_orientation_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_orientation_id_seq";
CREATE SEQUENCE "module_school_orientation_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_orientation_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_schedule_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_schedule_id_seq";
CREATE SEQUENCE "module_school_schedule_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_schedule_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_school_subject_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_school_subject_id_seq";
CREATE SEQUENCE "module_school_subject_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_school_subject_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for module_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "module_user_id_seq";
CREATE SEQUENCE "module_user_id_seq"
    INCREMENT 1
    MINVALUE 1
    MAXVALUE 2147483647
    START 1
    CACHE 1;
ALTER SEQUENCE "module_user_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for module_auth_roles
-- ----------------------------
DROP TABLE IF EXISTS "module_auth_roles";
CREATE TABLE "module_auth_roles"
(
    "id"   int4                                        NOT NULL DEFAULT nextval('module_auth_roles_id_seq'::regclass),
    "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_auth_roles"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_auth_roles
-- ----------------------------
BEGIN;
INSERT INTO "module_auth_roles"
VALUES (1, 'superadmin');
INSERT INTO "module_auth_roles"
VALUES (2, 'principal');
COMMIT;

-- ----------------------------
-- Table structure for module_auth_users
-- ----------------------------
DROP TABLE IF EXISTS "module_auth_users";
CREATE TABLE "module_auth_users"
(
    "uid"  int4 NOT NULL,
    "role" int4 NOT NULL
)
;
ALTER TABLE "module_auth_users"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_auth_users
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_exam_student_answer
-- ----------------------------
DROP TABLE IF EXISTS "module_exam_student_answer";
CREATE TABLE "module_exam_student_answer"
(
    "id"                  int4         NOT NULL DEFAULT nextval('module_exam_student_answer_id_seq'::regclass),
    "question_choice"     int4,
    "student_id"          int4         NOT NULL,
    "ask_time"            timestamp(6) NOT NULL,
    "answer_time_sec"     int4         NOT NULL,
    "question_choices_id" int4         NOT NULL,
    "exercise_id"         int4         NOT NULL,
    "answer_score"        int4         NOT NULL,
    "down_time_sec"       int4
)
;
ALTER TABLE "module_exam_student_answer"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_exam_student_answer
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_leaniba_difficulty_history
-- ----------------------------
DROP TABLE IF EXISTS "module_leaniba_difficulty_history";
CREATE TABLE "module_leaniba_difficulty_history"
(
    "id"               int4         NOT NULL DEFAULT nextval(
            'module_leaniba_difficulty_history_id_seq'::regclass),
    "student_id"       int4         NOT NULL,
    "difficulty_score" int4         NOT NULL,
    "calculated_at"    timestamp(6) NOT NULL
)
;
ALTER TABLE "module_leaniba_difficulty_history"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_leaniba_difficulty_history
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_learniba_question
-- ----------------------------
DROP TABLE IF EXISTS "module_learniba_question";
CREATE TABLE "module_learniba_question"
(
    "id"                      int4 NOT NULL DEFAULT nextval('module_learniba_question_id_seq'::regclass),
    "question_text"           text COLLATE "pg_catalog"."default",
    "media_id"                int4 NOT NULL,
    "media_tip_id"            int4 NOT NULL,
    "reference_index_id"      int4 NOT NULL,
    "question_time_limit_sec" int4 NOT NULL,
    "difficulty_score"        int4 NOT NULL,
    "book_page_no"            int4 NOT NULL
)
;
ALTER TABLE "module_learniba_question"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_learniba_question
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_learniba_reference
-- ----------------------------
DROP TABLE IF EXISTS "module_learniba_reference";
CREATE TABLE "module_learniba_reference"
(
    "id"           int4                                        NOT NULL DEFAULT nextval('module_learniba_reference_id_seq'::regclass),
    "name"         varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "description"  varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
    "publish_date" timestamp(6)                                NOT NULL,
    "publisher"    varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "level"        int4                                        NOT NULL,
    "subject_id"   int4                                        NOT NULL
)
;
ALTER TABLE "module_learniba_reference"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_learniba_reference
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_learniba_reference_index
-- ----------------------------
DROP TABLE IF EXISTS "module_learniba_reference_index";
CREATE TABLE "module_learniba_reference_index"
(
    "id"           int4                                        NOT NULL DEFAULT nextval(
            'module_learniba_reference_index_id_seq'::regclass),
    "name"         varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "description"  text COLLATE "pg_catalog"."default"         NOT NULL,
    "parent_id"    int4                                        NOT NULL,
    "reference_id" int4                                        NOT NULL,
    "type"         varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_learniba_reference_index"
    OWNER TO "postgres";
COMMENT ON COLUMN "module_learniba_reference_index"."type" IS 'section
chapter
sub-chapter
page';

-- ----------------------------
-- Records of module_learniba_reference_index
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_metadata
-- ----------------------------
DROP TABLE IF EXISTS "module_metadata";
CREATE TABLE "module_metadata"
(
    "module"     varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
    "module_key" int4                                       NOT NULL,
    "key"        varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
    "value"      text COLLATE "pg_catalog"."default"        NOT NULL
)
;
ALTER TABLE "module_metadata"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_metadata
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_question_choices
-- ----------------------------
DROP TABLE IF EXISTS "module_question_choices";
CREATE TABLE "module_question_choices"
(
    "id"          int4                                        NOT NULL DEFAULT nextval('module_question_choices_id_seq'::regclass),
    "choice_text" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "is_correct"  bool                                        NOT NULL,
    "question_id" int4                                        NOT NULL,
    "media_id"    int4                                        NOT NULL
)
;
ALTER TABLE "module_question_choices"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_question_choices
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_question_media
-- ----------------------------
DROP TABLE IF EXISTS "module_question_media";
CREATE TABLE "module_question_media"
(
    "id"         int4                                        NOT NULL DEFAULT nextval('module_question_media_id_seq'::regclass),
    "media_link" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_question_media"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_question_media
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_abcence_student
-- ----------------------------
DROP TABLE IF EXISTS "module_school_abcence_student";
CREATE TABLE "module_school_abcence_student"
(
    "id"          int4                                        NOT NULL DEFAULT nextval(
            'module_school_abcence_student_id_seq'::regclass),
    "schedule_id" int4                                        NOT NULL,
    "student_id"  int4                                        NOT NULL,
    "description" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_school_abcence_student"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_abcence_student
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_class
-- ----------------------------
DROP TABLE IF EXISTS "module_school_class";
CREATE TABLE "module_school_class"
(
    "id"             int4 NOT NULL DEFAULT nextval('module_school_class_id_seq'::regclass),
    "code"           varchar(255) COLLATE "pg_catalog"."default",
    "name"           varchar(255) COLLATE "pg_catalog"."default",
    "description"    varchar(255) COLLATE "pg_catalog"."default",
    "created_at"     timestamp(6),
    "created_by"     varchar(255) COLLATE "pg_catalog"."default",
    "updated_at"     timestamp(6),
    "updated_by"     varchar(255) COLLATE "pg_catalog"."default",
    "orientation_id" int4 NOT NULL,
    "year"           int4,
    "level"          int4 NOT NULL
)
;
ALTER TABLE "module_school_class"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_class
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_custodian
-- ----------------------------
DROP TABLE IF EXISTS "module_school_custodian";
CREATE TABLE "module_school_custodian"
(
    "parent_id"  int4 NOT NULL,
    "student_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_custodian"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_custodian
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_exercise
-- ----------------------------
DROP TABLE IF EXISTS "module_school_exercise";
CREATE TABLE "module_school_exercise"
(
    "id"            int4                                       NOT NULL DEFAULT nextval('module_school_exercise_id_seq'::regclass),
    "question_id"   int4                                       NOT NULL,
    "schedule_id"   int4                                       NOT NULL,
    "exercise_type" int4                                       NOT NULL,
    "name"          varchar(50) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_school_exercise"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_exercise
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_orientation
-- ----------------------------
DROP TABLE IF EXISTS "module_school_orientation";
CREATE TABLE "module_school_orientation"
(
    "id"          int4 NOT NULL DEFAULT nextval('module_school_orientation_id_seq'::regclass),
    "code"        varchar(255) COLLATE "pg_catalog"."default",
    "name"        varchar(255) COLLATE "pg_catalog"."default",
    "description" varchar(255) COLLATE "pg_catalog"."default",
    "created_at"  timestamp(6),
    "created_by"  varchar(255) COLLATE "pg_catalog"."default",
    "updated_at"  timestamp(6),
    "updated_by"  varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "module_school_orientation"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_orientation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_parent
-- ----------------------------
DROP TABLE IF EXISTS "module_school_parent";
CREATE TABLE "module_school_parent"
(
    "parent_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_parent"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_parent
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_reference_orientation
-- ----------------------------
DROP TABLE IF EXISTS "module_school_reference_orientation";
CREATE TABLE "module_school_reference_orientation"
(
    "reference_id"   int4 NOT NULL,
    "orientation_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_reference_orientation"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_reference_orientation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_schedule
-- ----------------------------
DROP TABLE IF EXISTS "module_school_schedule";
CREATE TABLE "module_school_schedule"
(
    "id"                 int4 NOT NULL DEFAULT nextval('module_school_schedule_id_seq'::regclass),
    "created_at"         timestamp(6),
    "created_by"         varchar(255) COLLATE "pg_catalog"."default",
    "updated_at"         timestamp(6),
    "updated_by"         varchar(255) COLLATE "pg_catalog"."default",
    "starttime"          timestamp(6),
    "endtime"            timestamp(6),
    "teacher_id"         int4 NOT NULL,
    "assistant_id"       int4 NOT NULL,
    "subject_id"         int4 NOT NULL,
    "class_id"           int4 NOT NULL,
    "reference_index_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_schedule"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_schedule
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_student
-- ----------------------------
DROP TABLE IF EXISTS "module_school_student";
CREATE TABLE "module_school_student"
(
    "student_id"       int4 NOT NULL,
    "class_id"         int4 NOT NULL,
    "difficulty_score" int4 NOT NULL
)
;
ALTER TABLE "module_school_student"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_student
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_subject
-- ----------------------------
DROP TABLE IF EXISTS "module_school_subject";
CREATE TABLE "module_school_subject"
(
    "id"          int4                                        NOT NULL DEFAULT nextval('module_school_subject_id_seq'::regclass),
    "code"        varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "name"        varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "description" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "module_school_subject"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_subject
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_supervisor
-- ----------------------------
DROP TABLE IF EXISTS "module_school_supervisor";
CREATE TABLE "module_school_supervisor"
(
    "supervisor_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_supervisor"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_supervisor
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_school_teacher
-- ----------------------------
DROP TABLE IF EXISTS "module_school_teacher";
CREATE TABLE "module_school_teacher"
(
    "teacher_id"    int4 NOT NULL,
    "supervisor_id" int4 NOT NULL
)
;
ALTER TABLE "module_school_teacher"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_school_teacher
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for module_user
-- ----------------------------
DROP TABLE IF EXISTS "module_user";
CREATE TABLE "module_user"
(
    "id"            int4                                        NOT NULL DEFAULT nextval('module_user_id_seq'::regclass),
    "username"      varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
    "first_name"    varchar(255) COLLATE "pg_catalog"."default",
    "last_name"     varchar(255) COLLATE "pg_catalog"."default",
    "auth_key"      varchar(60) COLLATE "pg_catalog"."default",
    "password_hash" varchar(60) COLLATE "pg_catalog"."default",
    "status"        int4                                        NOT NULL,
    "ssn"           varchar(50) COLLATE "pg_catalog"."default",
    "email"         varchar(255) COLLATE "pg_catalog"."default",
    "date_of_birth" date,
    "mobile"        varchar(50) COLLATE "pg_catalog"."default"  NOT NULL,
    "gender"        varchar(50) COLLATE "pg_catalog"."default",
    "createdAt"     timestamptz(6)                              NOT NULL,
    "updatedAt"     timestamptz(6)                              NOT NULL
)
;
ALTER TABLE "module_user"
    OWNER TO "postgres";

-- ----------------------------
-- Records of module_user
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_auth_roles_id_seq"
    OWNED BY "module_auth_roles"."id";
SELECT setval('"module_auth_roles_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_exam_student_answer_id_seq"
    OWNED BY "module_exam_student_answer"."id";
SELECT setval('"module_exam_student_answer_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_leaniba_difficulty_history_id_seq"
    OWNED BY "module_leaniba_difficulty_history"."id";
SELECT setval('"module_leaniba_difficulty_history_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_learniba_question_id_seq"
    OWNED BY "module_learniba_question"."id";
SELECT setval('"module_learniba_question_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_learniba_reference_id_seq"
    OWNED BY "module_learniba_reference"."id";
SELECT setval('"module_learniba_reference_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_learniba_reference_index_id_seq"
    OWNED BY "module_learniba_reference_index"."id";
SELECT setval('"module_learniba_reference_index_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_question_choices_id_seq"
    OWNED BY "module_question_choices"."id";
SELECT setval('"module_question_choices_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_question_media_id_seq"
    OWNED BY "module_question_media"."id";
SELECT setval('"module_question_media_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_abcence_student_id_seq"
    OWNED BY "module_school_abcence_student"."id";
SELECT setval('"module_school_abcence_student_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_class_id_seq"
    OWNED BY "module_school_class"."id";
SELECT setval('"module_school_class_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_exercise_id_seq"
    OWNED BY "module_school_exercise"."id";
SELECT setval('"module_school_exercise_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_orientation_id_seq"
    OWNED BY "module_school_orientation"."id";
SELECT setval('"module_school_orientation_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_schedule_id_seq"
    OWNED BY "module_school_schedule"."id";
SELECT setval('"module_school_schedule_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_school_subject_id_seq"
    OWNED BY "module_school_subject"."id";
SELECT setval('"module_school_subject_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "module_user_id_seq"
    OWNED BY "module_user"."id";
SELECT setval('"module_user_id_seq"', 2, false);

-- ----------------------------
-- Primary Key structure for table module_auth_roles
-- ----------------------------
ALTER TABLE "module_auth_roles"
    ADD CONSTRAINT "module_auth_roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_exam_student_answer
-- ----------------------------
CREATE INDEX "fkidx_269" ON "module_exam_student_answer" USING btree (
                                                                      "student_id" "pg_catalog"."int4_ops"
                                                                      ASC NULLS LAST
    );
CREATE INDEX "fkidx_274" ON "module_exam_student_answer" USING btree (
                                                                      "question_choices_id"
                                                                      "pg_catalog"."int4_ops" ASC NULLS
                                                                      LAST
    );
CREATE INDEX "fkidx_446" ON "module_exam_student_answer" USING btree (
                                                                      "exercise_id"
                                                                      "pg_catalog"."int4_ops" ASC NULLS
                                                                      LAST
    );

-- ----------------------------
-- Primary Key structure for table module_exam_student_answer
-- ----------------------------
ALTER TABLE "module_exam_student_answer"
    ADD CONSTRAINT "module_exam_student_answer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_leaniba_difficulty_history
-- ----------------------------
CREATE INDEX "fkidx_382" ON "module_leaniba_difficulty_history" USING btree (
                                                                             "student_id"
                                                                             "pg_catalog"."int4_ops" ASC
                                                                             NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_leaniba_difficulty_history
-- ----------------------------
ALTER TABLE "module_leaniba_difficulty_history"
    ADD CONSTRAINT "pk_table_38135" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_learniba_question
-- ----------------------------
CREATE INDEX "fkidx_290" ON "module_learniba_question" USING btree (
                                                                    "media_id" "pg_catalog"."int4_ops" ASC
                                                                    NULLS LAST
    );
CREATE INDEX "fkidx_297" ON "module_learniba_question" USING btree (
                                                                    "reference_index_id"
                                                                    "pg_catalog"."int4_ops" ASC NULLS LAST
    );
CREATE INDEX "fkidx_452" ON "module_learniba_question" USING btree (
                                                                    "media_tip_id" "pg_catalog"."int4_ops"
                                                                    ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_learniba_question
-- ----------------------------
ALTER TABLE "module_learniba_question"
    ADD CONSTRAINT "pk_table_2804" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_learniba_reference
-- ----------------------------
CREATE INDEX "fkidx_323" ON "module_learniba_reference" USING btree (
                                                                     "subject_id" "pg_catalog"."int4_ops"
                                                                     ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_learniba_reference
-- ----------------------------
ALTER TABLE "module_learniba_reference"
    ADD CONSTRAINT "pk_module_learniba_reference12" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_learniba_reference_index
-- ----------------------------
CREATE INDEX "fkidx_303" ON "module_learniba_reference_index" USING btree (
                                                                           "parent_id"
                                                                           "pg_catalog"."int4_ops" ASC
                                                                           NULLS LAST
    );
CREATE INDEX "fkidx_320" ON "module_learniba_reference_index" USING btree (
                                                                           "reference_id"
                                                                           "pg_catalog"."int4_ops" ASC
                                                                           NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_learniba_reference_index
-- ----------------------------
ALTER TABLE "module_learniba_reference_index"
    ADD CONSTRAINT "pk_table_29509" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table module_metadata
-- ----------------------------
ALTER TABLE "module_metadata"
    ADD CONSTRAINT "pk_module_metadata5" PRIMARY KEY ("module", "module_key", "key");

-- ----------------------------
-- Indexes structure for table module_question_choices
-- ----------------------------
CREATE INDEX "fkidx_282" ON "module_question_choices" USING btree (
                                                                   "question_id" "pg_catalog"."int4_ops"
                                                                   ASC NULLS LAST
    );
CREATE INDEX "fkidx_442" ON "module_question_choices" USING btree (
                                                                   "media_id" "pg_catalog"."int4_ops" ASC
                                                                   NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_question_choices
-- ----------------------------
ALTER TABLE "module_question_choices"
    ADD CONSTRAINT "pk_table_27276" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table module_question_media
-- ----------------------------
ALTER TABLE "module_question_media"
    ADD CONSTRAINT "pk_table_288" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_school_abcence_student
-- ----------------------------
CREATE INDEX "fkidx_332" ON "module_school_abcence_student" USING btree (
                                                                         "schedule_id"
                                                                         "pg_catalog"."int4_ops" ASC NULLS
                                                                         LAST
    );
CREATE INDEX "fkidx_340" ON "module_school_abcence_student" USING btree (
                                                                         "student_id"
                                                                         "pg_catalog"."int4_ops" ASC NULLS
                                                                         LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_abcence_student
-- ----------------------------
ALTER TABLE "module_school_abcence_student"
    ADD CONSTRAINT "pk_module_school_abcence_student" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table module_school_class
-- ----------------------------
ALTER TABLE "module_school_class"
    ADD CONSTRAINT "_copy_23" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_school_custodian
-- ----------------------------
CREATE INDEX "fkidx_219" ON "module_school_custodian" USING btree (
                                                                   "parent_id" "pg_catalog"."int4_ops" ASC
                                                                   NULLS LAST
    );
CREATE INDEX "fkidx_223" ON "module_school_custodian" USING btree (
                                                                   "student_id" "pg_catalog"."int4_ops"
                                                                   ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_custodian
-- ----------------------------
ALTER TABLE "module_school_custodian"
    ADD CONSTRAINT "pk_table_2187" PRIMARY KEY ("parent_id", "student_id");

-- ----------------------------
-- Indexes structure for table module_school_exercise
-- ----------------------------
CREATE INDEX "fkidx_349" ON "module_school_exercise" USING btree (
                                                                  "question_id" "pg_catalog"."int4_ops"
                                                                  ASC NULLS LAST
    );
CREATE INDEX "fkidx_355" ON "module_school_exercise" USING btree (
                                                                  "schedule_id" "pg_catalog"."int4_ops"
                                                                  ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_exercise
-- ----------------------------
ALTER TABLE "module_school_exercise"
    ADD CONSTRAINT "pk_module_school_test34" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table module_school_orientation
-- ----------------------------
ALTER TABLE "module_school_orientation"
    ADD CONSTRAINT "pk_module_school_orientation" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_school_parent
-- ----------------------------
CREATE INDEX "fkidx_213" ON "module_school_parent" USING btree (
                                                                "parent_id" "pg_catalog"."int4_ops" ASC
                                                                NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_parent
-- ----------------------------
ALTER TABLE "module_school_parent"
    ADD CONSTRAINT "pk_table_2121" PRIMARY KEY ("parent_id");

-- ----------------------------
-- Indexes structure for table module_school_reference_orientation
-- ----------------------------
CREATE INDEX "fkidx_430" ON "module_school_reference_orientation" USING btree (
                                                                               "reference_id"
                                                                               "pg_catalog"."int4_ops" ASC
                                                                               NULLS LAST
    );
CREATE INDEX "fkidx_438" ON "module_school_reference_orientation" USING btree (
                                                                               "orientation_id"
                                                                               "pg_catalog"."int4_ops" ASC
                                                                               NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_reference_orientation
-- ----------------------------
ALTER TABLE "module_school_reference_orientation"
    ADD CONSTRAINT "pk_table_4248" PRIMARY KEY ("reference_id", "orientation_id");

-- ----------------------------
-- Indexes structure for table module_school_schedule
-- ----------------------------
CREATE INDEX "fkidx_232" ON "module_school_schedule" USING btree (
                                                                  "teacher_id" "pg_catalog"."int4_ops" ASC
                                                                  NULLS LAST
    );
CREATE INDEX "fkidx_235" ON "module_school_schedule" USING btree (
                                                                  "assistant_id" "pg_catalog"."int4_ops"
                                                                  ASC NULLS LAST
    );
CREATE INDEX "fkidx_259" ON "module_school_schedule" USING btree (
                                                                  "subject_id" "pg_catalog"."int4_ops" ASC
                                                                  NULLS LAST
    );
CREATE INDEX "fkidx_263" ON "module_school_schedule" USING btree (
                                                                  "class_id" "pg_catalog"."int4_ops" ASC
                                                                  NULLS LAST
    );
CREATE INDEX "fkidx_449" ON "module_school_schedule" USING btree (
                                                                  "reference_index_id"
                                                                  "pg_catalog"."int4_ops" ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_schedule
-- ----------------------------
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "pk_module_school_schedule" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_school_student
-- ----------------------------
CREATE INDEX "fkidx_204" ON "module_school_student" USING btree (
                                                                 "student_id" "pg_catalog"."int4_ops" ASC
                                                                 NULLS LAST
    );
CREATE INDEX "fkidx_266" ON "module_school_student" USING btree (
                                                                 "class_id" "pg_catalog"."int4_ops" ASC
                                                                 NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_student
-- ----------------------------
ALTER TABLE "module_school_student"
    ADD CONSTRAINT "module_school_students_pkey" PRIMARY KEY ("student_id");

-- ----------------------------
-- Primary Key structure for table module_school_subject
-- ----------------------------
ALTER TABLE "module_school_subject"
    ADD CONSTRAINT "pk_module_school_subject" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table module_school_supervisor
-- ----------------------------
CREATE INDEX "fkidx_3968" ON "module_school_supervisor" USING btree (
                                                                     "supervisor_id"
                                                                     "pg_catalog"."int4_ops" ASC NULLS
                                                                     LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_supervisor
-- ----------------------------
ALTER TABLE "module_school_supervisor"
    ADD CONSTRAINT "pk_module_school_supervisor6" PRIMARY KEY ("supervisor_id");

-- ----------------------------
-- Indexes structure for table module_school_teacher
-- ----------------------------
CREATE INDEX "fkidx_227" ON "module_school_teacher" USING btree (
                                                                 "teacher_id" "pg_catalog"."int4_ops" ASC
                                                                 NULLS LAST
    );
CREATE INDEX "fkidx_407" ON "module_school_teacher" USING btree (
                                                                 "supervisor_id" "pg_catalog"."int4_ops"
                                                                 ASC NULLS LAST
    );

-- ----------------------------
-- Primary Key structure for table module_school_teacher
-- ----------------------------
ALTER TABLE "module_school_teacher"
    ADD CONSTRAINT "pk_module_school_teacher13" PRIMARY KEY ("teacher_id");

-- ----------------------------
-- Primary Key structure for table module_user
-- ----------------------------
ALTER TABLE "module_user"
    ADD CONSTRAINT "module_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table module_auth_users
-- ----------------------------
ALTER TABLE "module_auth_users"
    ADD CONSTRAINT "module_auth_users_role_fkey" FOREIGN KEY ("role") REFERENCES "module_auth_roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "module_auth_users"
    ADD CONSTRAINT "module_auth_users_uid_fkey" FOREIGN KEY ("uid") REFERENCES "module_user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table module_exam_student_answer
-- ----------------------------
ALTER TABLE "module_exam_student_answer"
    ADD CONSTRAINT "fk_26857" FOREIGN KEY ("student_id") REFERENCES "module_school_student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_exam_student_answer"
    ADD CONSTRAINT "fk_272654" FOREIGN KEY ("question_choices_id") REFERENCES "module_question_choices" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_exam_student_answer"
    ADD CONSTRAINT "fk_445346" FOREIGN KEY ("exercise_id") REFERENCES "module_school_exercise" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_leaniba_difficulty_history
-- ----------------------------
ALTER TABLE "module_leaniba_difficulty_history"
    ADD CONSTRAINT "fk_38168" FOREIGN KEY ("student_id") REFERENCES "module_school_student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_learniba_question
-- ----------------------------
ALTER TABLE "module_learniba_question"
    ADD CONSTRAINT "fk_2883" FOREIGN KEY ("media_id") REFERENCES "module_question_media" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_learniba_question"
    ADD CONSTRAINT "fk_29578" FOREIGN KEY ("reference_index_id") REFERENCES "module_learniba_reference_index" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_learniba_question"
    ADD CONSTRAINT "fk_45176" FOREIGN KEY ("media_tip_id") REFERENCES "module_question_media" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_learniba_reference
-- ----------------------------
ALTER TABLE "module_learniba_reference"
    ADD CONSTRAINT "fk_32211" FOREIGN KEY ("subject_id") REFERENCES "module_school_subject" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_learniba_reference_index
-- ----------------------------
ALTER TABLE "module_learniba_reference_index"
    ADD CONSTRAINT "fk_30256" FOREIGN KEY ("parent_id") REFERENCES "module_learniba_reference_index" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_learniba_reference_index"
    ADD CONSTRAINT "fk_31945" FOREIGN KEY ("reference_id") REFERENCES "module_learniba_reference" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_question_choices
-- ----------------------------
ALTER TABLE "module_question_choices"
    ADD CONSTRAINT "fk_28075" FOREIGN KEY ("question_id") REFERENCES "module_learniba_question" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_question_choices"
    ADD CONSTRAINT "fk_44143" FOREIGN KEY ("media_id") REFERENCES "module_question_media" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_abcence_student
-- ----------------------------
ALTER TABLE "module_school_abcence_student"
    ADD CONSTRAINT "fk_33165" FOREIGN KEY ("schedule_id") REFERENCES "module_school_schedule" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_abcence_student"
    ADD CONSTRAINT "fk_33989" FOREIGN KEY ("student_id") REFERENCES "module_school_student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_class
-- ----------------------------
ALTER TABLE "module_school_class"
    ADD CONSTRAINT "fk_school_class1_school_orientation_14" FOREIGN KEY ("orientation_id") REFERENCES "module_school_orientation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_custodian
-- ----------------------------
ALTER TABLE "module_school_custodian"
    ADD CONSTRAINT "fk_2186" FOREIGN KEY ("parent_id") REFERENCES "module_school_parent" ("parent_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_custodian"
    ADD CONSTRAINT "fk_2225" FOREIGN KEY ("student_id") REFERENCES "module_school_student" ("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_exercise
-- ----------------------------
ALTER TABLE "module_school_exercise"
    ADD CONSTRAINT "fk_34856" FOREIGN KEY ("question_id") REFERENCES "module_learniba_question" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_exercise"
    ADD CONSTRAINT "fk_35467" FOREIGN KEY ("schedule_id") REFERENCES "module_school_schedule" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_reference_orientation
-- ----------------------------
ALTER TABLE "module_school_reference_orientation"
    ADD CONSTRAINT "fk_42976" FOREIGN KEY ("reference_id") REFERENCES "module_learniba_reference" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_reference_orientation"
    ADD CONSTRAINT "fk_4370" FOREIGN KEY ("orientation_id") REFERENCES "module_school_orientation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_schedule
-- ----------------------------
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "fk_2312" FOREIGN KEY ("teacher_id") REFERENCES "module_school_teacher" ("teacher_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "fk_2343" FOREIGN KEY ("assistant_id") REFERENCES "module_school_teacher" ("teacher_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "fk_2584" FOREIGN KEY ("subject_id") REFERENCES "module_school_subject" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "fk_2625" FOREIGN KEY ("class_id") REFERENCES "module_school_class" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "module_school_schedule"
    ADD CONSTRAINT "fk_4486" FOREIGN KEY ("reference_index_id") REFERENCES "module_learniba_reference_index" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_student
-- ----------------------------
ALTER TABLE "module_school_student"
    ADD CONSTRAINT "fk_26556" FOREIGN KEY ("class_id") REFERENCES "module_school_class" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table module_school_teacher
-- ----------------------------
ALTER TABLE "module_school_teacher"
    ADD CONSTRAINT "fk_4065" FOREIGN KEY ("supervisor_id") REFERENCES "module_school_supervisor" ("supervisor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
