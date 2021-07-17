<template>
  <div class="position-relative d-inline-block">
    <button class="header-icon btn btn-empty" type="button" id="notificationButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="simple-icon-bell"></i>
      <span class="count">3</span>
    </button>
    <div class="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="notificationDropdown">
      <div class="scroll">
        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
          <a href="#">
            <img src="#" alt="Notification Image" class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
          </a>
          <div class="pl-3">
            <a href="#">
              <p class="font-weight-medium mb-1">مهدی رحمتی یک دیدگاه جدید فرستاد</p>
              <p class="text-muted mb-0 text-small">4 آبان 1400 - 12:45</p>
            </a>
          </div>
        </div>
        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
          <a href="#">
            <img src="#" alt="Notification Image" class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
          </a>
          <div class="pl-3">
            <a href="#">
              <p class="font-weight-medium mb-1">یک محصول ناموجود شد</p>
              <p class="text-muted mb-0 text-small">4 آبان 1400 - 12:45</p>
            </a>
          </div>
        </div>
        <div class="d-flex flex-row mb-3 pb-3 border-bottom">
          <a href="#">
            <img src="#" alt="Notification Image" class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
          </a>
          <div class="pl-3">
            <a href="#">
              <p class="font-weight-medium mb-1">سفارش جدید دریافت شد! در کل 147،200 ت است.</p>
              <p class="text-muted mb-0 text-small">4 آبان 1400 - 12:45</p>
            </a>
          </div>
        </div>
        <div class="d-flex flex-row mb-3 pb-3 ">
          <a href="#">
            <img src="#" alt="Notification Image" class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
          </a>
          <div class="pl-3">
            <a href="#">
              <p class="font-weight-medium mb-1">3 محصول به لیست آرزوهای کاربر اضافه شد
              </p>
              <p class="text-muted mb-0 text-small">4 آبان 1400 - 12:45</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationsHeaderPartLayout"
}
</script>
