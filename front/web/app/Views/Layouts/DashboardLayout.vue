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
import HeaderPartLayout from "./Parts/HeaderPartLayout";
import MenuSideBarPartLayout from "./Parts/MenuSideBarPartLayout";
import FooterPartLayout from "./Parts/FooterPartLayout";

export default {
  name: "DashboardLayout",
  components: {FooterPartLayout, MenuSideBarPartLayout, HeaderPartLayout}
}
</script>
