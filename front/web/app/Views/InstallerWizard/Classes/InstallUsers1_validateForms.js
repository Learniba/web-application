export default new class {
    VueApp;
    Joi;
    Schema;

    users;

    isValidIranianNationalCode(input) {
        if (!/^\d{10}$/.test(input)) return false;
        const check = +input[9];
        const sum = input.split('').slice(0, 9).map((x, i) => +x * (10 - i)).reduce((x, y) => x + y) % 11;
        return sum < 2 ? check == sum : check + sum == 11;
    }

    init() {
        this.Joi = require('joi');
        this.Schema = this.Joi.object({
            name: this.Joi.string()
                .pattern(new RegExp('^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$'))
                .min(3)
                .max(30)
                .required(),
            family: this.Joi.string()
                .pattern(new RegExp('^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$'))
                .min(3)
                .max(30)
                .required(),
            mobile: this.Joi.string()
                .pattern(new RegExp('^[0-9]{11,16}$')),
        })
    }

    validate() {
        let hasError = false;
        this.init();
        let app = this;
        let users = [];
        $('.data-row').each((index, value) => {
            $(value).find(".u_name").closest('.form-group').removeClass('has-error');
            $(value).find(".u_family").closest('.form-group').removeClass('has-error');
            $(value).find(".u_mobile").closest('.form-group').removeClass('has-error');
            let result = this.Schema.validate(
                {
                    name: $(value).find(".u_name").val(),
                    family: $(value).find(".u_family").val(),
                    mobile: $(value).find(".u_mobile").val(),
                }
            );

            if (result.error) {
                hasError = true;
                const attrName = result.error.details[0].path[0];
                const message = result.error.details[0].message;
                $(value).find(".u_" + attrName).closest('.form-group').addClass('has-error');
            }

            let nationCode = $(value).find(".nationalCode").val();
            if (!app.isValidIranianNationalCode(nationCode)) {
                hasError=true;
                $(value).find(".nationalCode").closest('.form-group').addClass('has-error');
            } else {
                $(value).find(".nationalCode").closest('.form-group').removeClass('has-error');
            }


        })
        return !hasError;
    }


}