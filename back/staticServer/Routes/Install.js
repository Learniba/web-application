export default (server, c) => {

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
}