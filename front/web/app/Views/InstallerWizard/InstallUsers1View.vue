<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>فرم ویزاردی</h1>
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
          <ol class="breadcrumb pt-0">
            <li class="breadcrumb-item">
              <a href="#">صفحه اصلی</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">کتابخونه</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">داده ها</li>
          </ol>
        </nav>
        <div class="separator mb-5"></div>
      </div>
    </div>

    <div class="row">

      <div class="col-12 mb-4">
        <h5 class="mb-4">اعتبار سنجی</h5>
        <div class="card mb-4">
          <div id="smartWizardValidation">
            <ul class="card-header">
              <li><a href="#step-0">گام اول<br /><small>توضیح گام اول</small></a></li>
              <li><a href="#step-1">گام دوم<br /><small>توضیح گام دوم</small></a></li>
              <li><a href="#step-2">گام سوم<br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="step-0">
                <form id="form-step-0" class="tooltip-label-right" novalidate>
                  <div class="form-group position-relative error-l-100">
                    <label for="email">پست الکترونیک</label>
                    <input type="email" class="form-control" name="emailValidation" id="emailValidation" placeholder="پست الکترونیک" required>
                  </div>
                  <div class="form-group position-relative error-l-100">
                    <label for="password">کلمه عبور</label>
                    <input type="password" class="form-control" name="passwordValidation" id="passwordValidation" placeholder="کلمه عبور" required>
                  </div>
                </form>
              </div>
              <div id="step-1">
                <form id="form-step-1" class="tooltip-label-right" novalidate>
                  <div class="form-group position-relative error-l-75">
                    <label for="name">نام</label>
                    <input type="text" class="form-control" name="nameValidation" id="nameValidation" placeholder="نام" required>
                  </div>
                  <div class="form-group position-relative error-l-75">
                    <label for="lastName">نام خانوادگی</label>
                    <input type="text" class="form-control" name="lastNameValidation" id="lastNameValidation" placeholder="نام خانوادگی" required>
                  </div>
                </form>
              </div>
              <div id="step-2">
                <h4 class="text-center">Thank you for your feedback!</h4>
                <p class="muted text-center p-4">
                  Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.
                </p>
              </div>
            </div>

            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button class="btn btn-secondary prev-btn" type="button">قبلی</button>
              <button class="btn btn-secondary next-btn" type="button">بعدی</button>
              <button class="btn btn-secondary finish-btn" type="submit">پایان</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <h5 class="mb-4">پایان گام آخر</h5>
        <div class="card mb-4">
          <div id="smartWizardCustomButtons">
            <ul class="card-header">
              <li><a href="#customButtons1">گام اول<br /><small>توضیح گام اول</small></a></li>
              <li><a href="#customButtons2">گام دوم<br /><small>توضیح گام دوم</small></a>
              </li>
              <li><a href="#customButtons3">گام سوم<br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="customButtons1">
                <h4 class="pb-2">محتوای گام اول</h4>
                <form>
                  <label class="form-group has-top-label">
                    <input class="form-control" />
                    <span>نام</span>
                  </label>

                  <label class="form-group has-top-label">
                    <input class="form-control" type="password" placeholder="" />
                    <span>نام خانوادگی</span>
                  </label>
                </form>
              </div>
              <div id="customButtons2">
                <h4 class="pb-2">محتوای گام دوم</h4>
                <form>
                  <label class="form-group has-top-label">
                    <input class="form-control" />
                    <span>پست الکترونیک</span>
                  </label>

                  <label class="form-group has-top-label">
                    <input class="form-control" id="password" type="password" placeholder="" />
                    <span>کلمه عبور</span>
                  </label>
                </form>
              </div>
              <div id="customButtons3">
                <h4 class="pb-2">محتوای گام سوم</h4>
                <form>
                  <label class="form-group has-top-label">
                    <textarea class="form-control" rows="3"></textarea>
                    <span>جزئیات</span>
                  </label>
                </form>
              </div>
            </div>

            <div class="btn-toolbar custom-toolbar text-center card-body pt-0">
              <button class="btn btn-secondary prev-btn" type="button">قبلی</button>
              <button class="btn btn-secondary next-btn" type="button">بعدی</button>
              <button class="btn btn-secondary reset-btn" type="submit">بازنشانی</button>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <h5 class="mb-4">غیر فعال شدن منوی نویگیشن</h5>
        <div class="card mb-4">
          <div id="smartWizardClickable">
            <ul class="card-header">
              <li><a href="#clickable1">گام اول<br /><small>توضیح گام اول</small></a></li>
              <li><a href="#clickable2">گام دوم<br /><small>توضیح گام دوم</small></a></li>
              <li><a href="#clickable3">گام سوم<br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="clickable1">
                <h4 class="pb-2">محتوای گام اول</h4>
                محتوای گام اول
              </div>
              <div id="clickable2">
                <h4 class="pb-2">محتوای گام دوم</h4>
                <div>محتوای گام دوم</div>
              </div>
              <div id="clickable3">
                <h4 class="pb-2">محتوای گام سوم</h4>
                <div>محتوای گام سوم </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <h5 class="mb-4"> تم پیش فرض </h5>
        <div class="card mb-4">
          <div id="smartWizardDefault">
            <ul class="card-header">
              <li><a href="#defaultStep1"> گام اول <br /><small>توضیح گام اول</small></a></li>
              <li><a href="#defaultStep2"> گام دوم <br /><small>توضیح گام دوم</small></a></li>
              <li><a href="#defaultStep3"> گام سوم <br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="defaultStep1">
                <h4 class="pb-2">محتوای گام اول</h4>
                محتوای گام اول
              </div>
              <div id="defaultStep2">
                <h4 class="pb-2">محتوای گام دوم</h4>
                <div>محتوای گام دوم </div>
              </div>
              <div id="defaultStep3">
                <h4 class="pb-2">محتوای گام سوم</h4>
                <div>محتوای گام سوم</div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <h5 class="mb-4"> تم نقطه </h5>
        <div class="card mb-4">
          <div id="smartWizardDot">
            <ul class="card-header">
              <li><a href="#dotStep1"> گام اول <br /><small>توضیح گام اول</small></a></li>
              <li><a href="#dotStep2"> گام دوم <br /><small>توضیح گام دوم</small></a></li>
              <li><a href="#dotStep3"> گام سوم <br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="dotStep1">
                <h4 class="pb-2">محتوای گام اول</h4>
                محتوای گام اول
              </div>
              <div id="dotStep2">
                <h4 class="pb-2">محتوای گام دوم</h4>
                <div>محتوای گام سوم</div>
              </div>
              <div id="dotStep3">
                <h4 class="pb-2">محتوای گام سوم</h4>
                <div>محتوای گام سوم</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <h5 class="mb-4"> بررسی تم </h5>
        <div class="card mb-4">
          <div id="smartWizardCheck">
            <ul class="card-header">
              <li><a href="#checkStep1"> گام اول <br /><small>توضیح گام اول</small></a></li>
              <li><a href="#checkStep2"> گام دوم <br /><small>توضیح گام دوم</small></a></li>
              <li><a href="#checkStep3"> گام سوم <br /><small>توضیح گام سوم</small></a></li>
            </ul>

            <div class="card-body">
              <div id="checkStep1">
                <h4 class="pb-2">محتوای گام اول</h4>
                محتوای گام اول
              </div>
              <div id="checkStep2">
                <h4 class="pb-2">محتوای گام دوم</h4>
                <div>محتوای گام سوم</div>
              </div>
              <div id="checkStep3">
                <h4 class="pb-2">محتوای گام سوم</h4>
                <div>محتوای گام سوم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstallUsers1View"
}
</script>
