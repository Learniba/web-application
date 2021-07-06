<template>
  <div class="d-flex align-items-center navbar-left">
    <a href="#" class="menu-button d-none d-md-block">
      <svg class="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
        <rect x="0.48" y="0.5" width="7" height="1" />
        <rect x="0.48" y="7.5" width="7" height="1" />
        <rect x="0.48" y="15.5" width="7" height="1" />
      </svg>
      <svg class="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
        <rect x="1.56" y="0.5" width="16" height="1" />
        <rect x="1.56" y="7.5" width="16" height="1" />
        <rect x="1.56" y="15.5" width="16" height="1" />
      </svg>
    </a>

    <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
        <rect x="0.5" y="0.5" width="25" height="1" />
        <rect x="0.5" y="7.5" width="25" height="1" />
        <rect x="0.5" y="15.5" width="25" height="1" />
      </svg>
    </a>

    <div class="search" data-search-path="Pages.Search.html?q=">
      <input placeholder="اینجا بگرد...">
      <span class="search-icon">
                    <i class="simple-icon-magnifier"></i>
                </span>
    </div>

    <a class="btn btn-sm btn-outline-primary ml-3 d-none d-md-inline-block" href="https://www.rtl-theme.com/?p=84826">&nbsp;خرید قالب&nbsp;</a>
  </div>
</template>

<script>
export default {
  name: "SearchHeaderPartLayout"
}
</script>
