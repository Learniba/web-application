import "/theme/assets/js/vendor/jquery-3.3.1.min"

export function warning(vue,translate_index,is_translated_message=true){
    jQuery.notify({
        message:is_translated_message? vue.$i18n.t(translate_index):translate_index,
        type: 'warning'
    });
}


export function danger(vue,translate_index,is_translated_message=true){
    jQuery.notify({
        message:is_translated_message? vue.$i18n.t(translate_index):translate_index,
        type: 'danger'
    });
}


export function success(vue,translate_index,is_translated_message=true){
    jQuery.notify({
        message:is_translated_message? vue.$i18n.t(translate_index):translate_index,
        type: 'success'
    });
}



