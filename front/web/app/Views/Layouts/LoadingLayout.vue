<template>
  <div>
    <main>

    </main>
  </div>
</template>

<script>
import "/theme/assets/font/iconsmind-s/css/iconsminds.css"
import "/theme/assets/font/simple-line-icons/css/simple-line-icons.css"
// import "/theme/assets/css/vendor/bootstrap.min.css"
// import "/theme/assets/css/vendor/bootstrap.rtl.only.min.css"
import "/theme/assets/css/main.css"
import "/theme/assets/js/vendor/jquery-3.3.1.min.js"
export default {
  name: "LoadingLayout",

  created() {
    jQuery('body').addClass('show-spinner');
    console.log(jQuery('body'))
    console.log(jQuery('body').attr('class'));

  },
  destroyed() {
    console.log('depre')
    jQuery('body').removeClass('show-spinner');
  },
}
</script>
