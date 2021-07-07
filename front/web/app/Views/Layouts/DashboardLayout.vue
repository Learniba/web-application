<template>
  <div>
    <HeaderPartLayout></HeaderPartLayout>
    <MenuSideBarPartLayout></MenuSideBarPartLayout>
    <main>
      <router-view></router-view>
    </main>
    <FooterPartLayout></FooterPartLayout>
  </div>
</template>
<script>
import "/theme/assets/font/iconsmind-s/css/iconsminds.css"
import "/theme/assets/font/simple-line-icons/css/simple-line-icons.css"
import "/theme/assets/css/vendor/bootstrap.min.css"
import "/theme/assets/css/vendor/bootstrap.rtl.only.min.css"
import "/theme/assets/css/main.css"

import "/theme/assets/js/vendor/jquery-3.3.1.min.js"
import "/theme/assets/js/vendor/bootstrap.bundle.min.js"
// import "/theme/assets/js/vendor/perfect-scrollbar.min.js"
import "/theme/assets/js/vendor/progressbar.min.js"
import "/theme/assets/js/dore.script.js"
import "/theme/assets/js/scripts.js"

import HeaderPartLayout from "./Parts/HeaderPartLayout";
import MenuSideBarPartLayout from "./Parts/MenuSideBarPartLayout";
import FooterPartLayout from "./Parts/FooterPartLayout";

export default {
  name: "DashboardLayout",
  components: {FooterPartLayout, MenuSideBarPartLayout, HeaderPartLayout},

}

</script>
