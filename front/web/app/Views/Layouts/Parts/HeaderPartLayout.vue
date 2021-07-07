<template>
  <nav class="navbar fixed-top">
    <SearchHeaderPartLayout></SearchHeaderPartLayout>


    <LogoHeaderPartLayout></LogoHeaderPartLayout>

    <div class="navbar-right">
      <div class="header-icons d-inline-block align-middle">
        <div class="d-none d-md-inline-block align-text-bottom mr-3">
          <div class="custom-switch custom-switch-primary-inverse custom-switch-small pl-1" data-toggle="tooltip" data-placement="left" title="Dark Mode">
            <input class="custom-switch-input" id="switchDark" type="checkbox" checked>
            <label class="custom-switch-btn" for="switchDark"></label>
          </div>
        </div>

        <div class="position-relative d-none d-sm-inline-block">
          <button class="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="simple-icon-grid"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
            <a href="#" class="icon-menu-item">
              <i class="iconsminds-equalizer d-block"></i>
              <span>تنظیمات</span>
            </a>

            <a href="#" class="icon-menu-item">
              <i class="iconsminds-male-female d-block"></i>
              <span>Users</span>
            </a>

            <a href="#" class="icon-menu-item">
              <i class="iconsminds-puzzle d-block"></i>
              <span>اجــزا</span>
            </a>

            <a href="#" class="icon-menu-item">
              <i class="iconsminds-bar-chart-4 d-block"></i>
              <span>سود فروش</span>
            </a>

            <a href="#" class="icon-menu-item">
              <i class="iconsminds-file d-block"></i>
              <span>نظرسنجی ها</span>
            </a>

            <a href="#" class="icon-menu-item">
              <i class="iconsminds-suitcase d-block"></i>
              <span>تسک ها</span>
            </a>

          </div>
        </div>

        <NotificationsHeaderPartLayout></NotificationsHeaderPartLayout>

        <FullScreenHeaderPartLayout></FullScreenHeaderPartLayout>

      </div>

      <UserProfileHeaderPartLayout></UserProfileHeaderPartLayout>
    </div>
  </nav>
</template>

<script>
import "/theme/assets/css/vendor/component-custom-switch.min.css"

import LogoHeaderPartLayout from "./Header/LogoHeaderPartLayout";
import NotificationsHeaderPartLayout from "./Header/NotificationsHeaderPartLayout";
import UserProfileHeaderPartLayout from "./Header/UserProfileHeaderPartLayout";
import SearchHeaderPartLayout from "./Header/SearchHeaderPartLayout";
import FullScreenHeaderPartLayout from "./Header/FullScreenHeaderPartLayout";
export default {
  name: "HeaderPartLayout",
  components: {
    FullScreenHeaderPartLayout,
    SearchHeaderPartLayout, UserProfileHeaderPartLayout, NotificationsHeaderPartLayout, LogoHeaderPartLayout}
}
</script>
