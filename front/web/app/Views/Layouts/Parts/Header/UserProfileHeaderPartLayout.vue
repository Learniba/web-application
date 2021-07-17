<template>
  <div class="user d-inline-block">
    <button class="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="name">فاطمه کاظمی</span>
      <span>
                        <img alt="Profile Picture" src="#" />
                    </span>
    </button>

    <div class="dropdown-menu dropdown-menu-right mt-3">
      <a class="dropdown-item" href="#">حساب کاربری</a>
      <a class="dropdown-item" href="#">ویژگی ها</a>
      <a class="dropdown-item" href="#">تاریخچه</a>
      <a class="dropdown-item" href="#">پشتیبانی</a>
      <a class="dropdown-item" href="#">خروج</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileHeaderPartLayout"
}
</script>
