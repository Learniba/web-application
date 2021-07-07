
export default new class {
    count=0;
    ar=[];
    css =
        {
            iconsMinds: "/theme/assets/font/iconsmind-s/css/iconsminds.css",
            simpleLineIcons: "/theme/assets/font/simple-line-icons/css/simple-line-icons",
            bootstrap: ["/theme/assets/css/vendor/bootstrap.min.css", "/theme/assets/css/vendor/bootstrap.rtl.only.min.css"],
            bootstrapRtl: "/theme/assets/css/vendor/bootstrap.rtl.only.min.css",
            fullCalendar: "/theme/assets/css/vendor/fullcalendar.min.css",
            dataTable: ["/theme/assets/css/vendor/dataTables.bootstrap4.min.css", "/theme/assets/css/vendor/datatables.responsive.bootstrap4.min.css"],
            select2: "/theme/assets/css/vendor/select2.min.css",
            scrollBar: "/theme/assets/css/vendor/perfect-scrollbar.css",
            glide: "/theme/assets/css/vendor/glide.core.min.css",
            star: "/theme/assets/css/vendor/bootstrap-stars.css",
            noUiSlider: "/theme/assets/css/vendor/nouislider.min.css",
            datePicker: "/theme/assets/css/vendor/bootstrap-datepicker3.min.css",
            switch: "/theme/assets/css/vendor/component-custom-switch.min.css",
            main: "/theme/assets/css/main.css",
            floatLabel: "/theme/assets/css/vendor/bootstrap-float-label.min.css",
            baguetteBox: "/theme/assets/css/vendor/baguetteBox.min.css",
            tagsInput: "/theme/assets/css/vendor/bootstrap-tagsinput.css",
            copper: "/theme/assets/css/vendor/cropper.min.css",
            dropZone: "/theme/assets/css/vendor/dropzone.min.css",
            contextMenu: "/theme/assets/css/vendor/jquery.contextMenu.min.css",
            jqueryDatatable: "/theme/assets/css/vendor/jquery.dataTables.min.css",
            qwl: "/theme/assets/css/vendor/owl.carousel.min.css",
            quillBubble: "/theme/assets/css/vendor/quill.bubble.css",
            quillSnow: "/theme/assets/css/vendor/quill.snow.css",
            slick: "/theme/assets/css/vendor/slick.css",
            smartWizard: "/theme/assets/css/vendor/smart_wizard.min.css",
            video: "/theme/assets/css/vendor/video-js.css",
        };

    js = {
        doreScript: '/theme/assets/js/dore.script.js',
        doreLanding: '/theme/assets/js/dore.scripts.landingpage.js',
        Scripts: '/theme/assets/js/scripts.js',
        scriptSingleTheme: '/theme/assets/js/scripts.single.theme.js',


        select: '/theme/assets/js/dore-plugins/select.from.library.js',


        chart: '/theme/assets/js/vendor/Chart.bundle.min.js',
        sortable: '/theme/assets/js/vendor/Sortable.js',
        baguetteBox: '/theme/assets/js/vendor/baguetteBox.min.js',
        datePicker: ['/theme/assets/js/vendor/moment.min.js', '/theme/assets/js/vendor/bootstrap-datepicker.js'],
        notify: '/theme/assets/js/vendor/bootstrap-notify.min.js',
        tagsInput: '/theme/assets/js/vendor/bootstrap-tagsinput.min.js',
        bootstrap: '/theme/assets/js/vendor/bootstrap.bundle.min.js',
        chartJs: '/theme/assets/js/vendor/chartjs-plugin-datalabels.js',
        ckEditor5: '/theme/assets/js/vendor/ckeditor5-build-classic',
        countDown: '/theme/assets/js/vendor/countdown.min.js',
        cropper: '/theme/assets/js/vendor/cropper.min.js',
        dataTables: '/theme/assets/js/vendor/datatables.min.js',
        dropZone: '/theme/assets/js/vendor/dropzone.min.js',
        fullCalendar: ['/theme/assets/js/vendor/moment.min.js', '/theme/assets/js/vendor/fullcalendar.min.js'],
        glide: '/theme/assets/js/vendor/glide.min.js',
        jquery: '/theme/assets/js/vendor/jquery-3.3.1.min.js',
        autoEllipsis: '/theme/assets/js/vendor/jquery.autoellipsis.js',
        barRating: '/theme/assets/js/vendor/jquery.barrating.min.js',
        contextMenu: '/theme/assets/js/vendor/jquery.contextMenu.min.js',
        smartWizard: '/theme/assets/js/vendor/jquery.smartWizard.min.js',
        validate: '/theme/assets/js/vendor/jquery.validate',
        landingPage: '/theme/assets/js/vendor/landing-page',
        moment: '/theme/assets/js/vendor/moment.min.js',
        mouseTrap: '/theme/assets/js/vendor/mousetrap.min.js',

        noUiSlider: '/theme/assets/js/vendor/nouislider.min.js',
        owl: '/theme/assets/js/vendor/owl.carousel.min.js',
        scrollBar: '/theme/assets/js/vendor/perfect-scrollbar.min.js',
        progressBar: '/theme/assets/js/vendor/progressbar.min.js',
        quill: '/theme/assets/js/vendor/quill.min.js',
        select2: '/theme/assets/js/vendor/select2.full.js',
        slick: '/theme/assets/js/vendor/slick.min.js',
        typeAhead: '/theme/assets/js/vendor/typeahead.bundle.js',
        video: ['/theme/assets/js/vendor/video.js', '/theme/assets/js/vendor/videojs-youtube.min.js'],


    };

    loadComponentList(list) {
        this.loadCssArray(list);
        this.loadJSArray(list);
    }

    loadCssArray(list = []) {
        var app=this;
        async function t(list,app) {
            let ev = '';
            list.forEach((value, index) => {
                if (typeof value === "object") {
                    value.forEach((v, i) => {
                        eval(`import `+v)
                    })
                } else {
                    eval(`import `+value)
                }
            })
        }

        return t(list,app);
    }

    loadJSArray(list = []) {
        var app=this;
        async function t(list,app) {

            let ev = '';
            list.forEach((value, index) => {
                if (typeof value === "object") {
                    value.forEach((v, i) => {
                        eval(`import `+v)
                    })
                } else {

                    eval(`import `+value)
                }
            })
        }

        return t(list,app);
    }

}