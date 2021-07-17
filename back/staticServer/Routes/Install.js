
export default (server, c) => {
    let UniqId=(arr)=>{
        let id=c.integer({min:1,max:10000});
        if(typeof arr.find(item=>item.id===id)!=="undefined"){
            return UniqId(arr);
        }else{
            return id;
        }
    };
    server.post('/v1_install_teachers_validate_row', (req, res) => {

        let status = c.bool();
        res.jsonp({
            "status": status ? "ok" : "error",
            "message": !status ? "این ردیف دارای خطا است" : ""
        })
    })

    server.get('/v1_install_teachers_has_error', (req, res) => {
        let arr = [];
        let i = 0;
        let min = 3;
        let max = 5;
        for (i; i < c.integer({min: min, max: max}); i++) {
            let nameError = c.bool();
            let familyError = c.bool();
            let a = {
                "id": {
                    "text": c.integer({min: 1, max: 100}),
                    "status": "ok",
                    "layout": "ltr"
                },
                "name": {
                    "text": c.first() + (nameError ? "*" : ""),
                    "status": nameError ? "error" : "ok",
                    "message": nameError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "family": {
                    "text": c.last() + (familyError ? "_" : ""),
                    "status": familyError ? "error" : "ok",
                    "message": familyError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "national_id": {
                    "text": "0011695792",
                    "status": "error",
                    "message": "کد ملی اشتباه است",
                    "layout": "ltr"
                },
                "mobile": {"text": c.phone(), "status": "ok", "layout": "ltr"}
            };

            arr.push(a)


        }
        let output =
            {
                "error_rows": arr,
                "count": c.integer({min: max, max: max + 30})
            };
        res.status(200).jsonp(output)
    });

    server.delete("/v1_install_teachers", (req, res) => {
        let status = c.bool();
        res.status(200).jsonp({
            status: status ? "ok" : "error",
            message: status ? "" : "متاسفانه مشکلی در حذف اطلاعات بوجود آمد, لطفا مجددا امتحان کنید."
        })
    });

    // < Delete/Edit Teacher  >
    server.delete('/v1_install_teacher_edit', (req, res) => {
        /**
         * received data model:
         * {
              "bulk": true,
              "ids": [10,20,23]
            }
         */
        let status = c.bool();
        res.status(200).jsonp({
            status: status ? "ok" : "error",
            message: status ? "" : "خطایی حین حذف دبیران پیش آمد, لطفا مجددا امتحان کنید."
        })
    });

    server.post('/v1_install_teacher_edit', (req, res) => {
        /**
         * request data model is :
         *  {
         *      id:23,
         *      attr:"phone",
         *      value:"00989353466620"
         *  }
         */

        /**
         * response model for valid data is :
         * {
         *     status:"ok"
         * }
         */

        /**
         * response data for invalid data is:
         * {
         *     status:"error",
         *     message:"some message"
         * }
         */
        let status = c.bool();
        res.status(200).jsonp({
            status: status ? "ok" : "error",
            message: status ? "" : "داده معتبر نیست"
        });
    })
    // </ Delete/Edit Teacher >

    // < list of teachers  >
    server.get('/v1_install_teachers', (req, res) => {
        let arr = [];
        let i = 0;
        const min = 5;
        const max = 30;
        for (i; i < c.integer({min: min, max: max}); i++) {
            arr.push({
                "id": {"text": c.integer({min: 10, max: 10000}), "editting": false},
                "name": {"text": c.first(), "editting": false},
                "family": {"text": c.last(), "editting": false},
                "national_id": {"text": "0011695791", "editting": false},
                "mobile": {"text": c.phone(), "editting": false}
            })
        }

        res.status(200).jsonp({
            rows: arr,
            count: c.integer({min: max, max: max + 100})
        })
    })
    // </ list of teachers >


    // < list of students  >
    server.post('/v1_install_students_validate_row', (req, res) => {

        let status = c.bool();
        res.jsonp({
            "status": status ? "ok" : "error",
            "message": !status ? "این ردیف دارای خطا است" : ""
        })
    })


    server.get('/v1_install_students_has_error', (req, res) => {
        let arr = [];
        let i = 0;
        let min = 1;
        let max = 3;
        for (i; i < c.integer({min: min, max: max}); i++) {
            let nameError = c.bool();
            let familyError = c.bool();
            let a = {
                "id": {
                    "text": c.integer({min: 1, max: 100}),
                    "status": "ok",
                    "layout": "ltr"
                },
                "name": {
                    "text": c.first() + (nameError ? "*" : ""),
                    "status": nameError ? "error" : "ok",
                    "message": nameError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "family": {
                    "text": c.last() + (familyError ? "_" : ""),
                    "status": familyError ? "error" : "ok",
                    "message": familyError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "national_id": {
                    "text": "0011695792",
                    "status": "error",
                    "message": "کد ملی اشتباه است",
                    "layout": "ltr"
                },
                "mobile": {"text": c.phone(), "status": "ok", "layout": "ltr"},
                "birthday": {"text": "1399/12/02", "status": "ok", "layout": "ltr"},

                "parent_1_name": {
                    "text": c.first() + (nameError ? "*" : ""),
                    "status": nameError ? "error" : "ok",
                    "message": nameError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "parent_1_family": {
                    "text": c.last() + (familyError ? "_" : ""),
                    "status": familyError ? "error" : "ok",
                    "message": familyError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "parent_1_national_id": {
                    "text": "0011695792",
                    "status": "error",
                    "message": "کد ملی اشتباه است",
                    "layout": "ltr"
                },
                "parent_1_mobile": {"text": c.phone(), "status": "ok", "layout": "ltr"},
                "parent_1_birthday": {"text": "1399/12/02", "status": "ok", "layout": "ltr"},

                "parent_2_name": {
                    "text": c.first() + (nameError ? "*" : ""),
                    "status": nameError ? "error" : "ok",
                    "message": nameError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "parent_2_family": {
                    "text": c.last() + (familyError ? "_" : ""),
                    "status": familyError ? "error" : "ok",
                    "message": familyError ? "باید فقط شامل حروف باشد" : "",
                    "layout": "rtl"
                },
                "parent_2_national_id": {
                    "text": "0011695792",
                    "status": "error",
                    "message": "کد ملی اشتباه است",
                    "layout": "ltr"
                },
                "parent_2_mobile": {"text": c.phone(), "status": "ok", "layout": "ltr"},
                "parent_2_birthday": {"text": "1399/12/02", "status": "ok", "layout": "ltr"},

            };

            arr.push(a)


        }
        let output =
            {
                "error_rows": arr,
                "count": c.integer({min: max, max: max + 30})
            };
        res.status(200).jsonp(output)
    });

    server.delete("/v1_install_students", (req, res) => {
        let status = c.bool();
        res.status(200).jsonp({
            status: status ? "ok" : "error",
            message: status ? "" : "متاسفانه مشکلی در حذف اطلاعات بوجود آمد, لطفا مجددا امتحان کنید."
        })
    });

    // < Delete/Edit Teacher  >
    {
        server.delete('/v1_install_student_edit', (req, res) => {
            /**
             * received data model:
             * {
                  "bulk": true,
                  "ids": [10,20,23]
                }
             */
            let status = c.bool();
            res.status(200).jsonp({
                status: status ? "ok" : "error",
                message: status ? "" : "خطایی حین حذف دانش آموزان پیش آمد, لطفا مجددا امتحان کنید."
            })
        })

        server.post('/v1_install_student_edit', (req, res) => {
            /**
             * request data model is :
             *  {
             *      id:23,
             *      attr:"phone",
             *      value:"00989353466620"
             *  }
             */

            /**
             * response model for valid data is :
             * {
             *     status:"ok"
             * }
             */

            /**
             * response data for invalid data is:
             * {
             *     status:"error",
             *     message:"some message"
             * }
             */
            let status = c.bool();
            res.status(200).jsonp({
                status: status ? "ok" : "error",
                message: status ? "" : "داده معتبر نیست"
            });
        })
    }
    // </ Delete/Edit Teacher >

    server.get('/v1_install_students', (req, res) => {
        let arr = [];
        let i = 0;
        const min = 5;
        const max = 30;
        for (i; i < c.integer({min: min, max: max}); i++) {

            arr.push({
                "id": {"text": c.integer({min: 10, max: 10000}), "editting": false},
                "name": {"text": c.first(), "editting": false},
                "family": {"text": c.last(), "editting": false},
                "national_id": {"text": "0011695791", "editting": false},
                "mobile": {"text": c.phone(), "editting": false},
                "birthday": {"text": "1399/12/02", "editting": false},


                "parent_1_name": {
                    "text": c.first(),
                    "editting": false
                },
                "parent_1_family": {
                    "text": c.last(),
                    "editting": false
                },
                "parent_1_national_id": {
                    "text": "0011695792",
                    "editting": false
                },
                "parent_1_mobile": {"text": c.phone(), "editting": false},
                "parent_1_birthday": {"text": "1399/12/02", "editting": false},

                "parent_2_name": {
                    "text": c.first(),
                    "editting": false
                },
                "parent_2_family": {
                    "text": c.last(),
                    "editting": false
                },
                "parent_2_national_id": {
                    "text": "0011695792",
                    "editting": false
                },
                "parent_2_mobile": {"text": c.phone(), "editting": false},
                "parent_2_birthday": {"text": "1399/12/02", "editting": false},

            })
        }

        res.status(200).jsonp({
            rows: arr,
            count: c.integer({min: max, max: max + 100})
        })
    })

    /**
     * save classes in server
     */
    server.post('/v1_install_classes', (req, res) => {
        /**
         * response model is:
         * [
         *  'status':"ok"|"error",
         *  'message':"some message if status = error"
         * ]
         */
        let status = c.bool();
        res.status(!status ? c.pickone([200, 404, 500]) : 200).jsonp({
            status: status ? "ok" : "error",
            message: status ? "" : "خطایی در ثبت کلاس ها بوجود آمدولطفا مجددا امتحان کنید."
        })
    })
    // </ list of students >


    server.get('/v1_class_schedules', (req, res) => {

        let min = c.integer({min: 1, max: 10});
        let max = c.integer({min: min, max: 500});
        let i = 0;
        let arr = [];

        for (i; i < max; i++) {
            let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
            let month=c.integer({min:1,max:12});
            let day=c.integer({min:1,max:29});

            let start = '2021-'+(month<10?'0':'')+month+'-'+(day<10?'0':'')+day+'T';
            let hour = c.integer({min: 0, max: 20});
            let timeStart =(hour<10?'0':'')+ hour + ':01:01';
            let timeEnd = ((hour+3)<10?'0':'')+(hour + 3) + ':01:01';




            arr.push({
                id: UniqId(arr),
                title: c.name(),
                start: start + timeStart,
                end: start + timeEnd
            });
        }
        res.status(200).jsonp(arr)
    })
}