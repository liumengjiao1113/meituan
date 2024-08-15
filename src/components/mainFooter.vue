<template>
  <div class="footer">
    <div class="content">
      <div class="logoslo">
        <div><img src="../assets/logo.png" alt="" /></div>
        <div class="slogan">
          <p class="slogancn">一起成长，一起更好</p>
          <p class="sloganen">Grow Together, Better Together</p>
        </div>
      </div>

      <div class="copyfocus">
        <div class="copy">
          <div class="copytext">
            <span><a href="" class="tuanurl">美团</a></span>
            <span class="line">|</span>
            <span class="tuancopy">@ 2024 美团版权所有</span>
            <span><a href="" class="num1">京ICP备10211739号</a> </span>
            <span class="num2wrap">
              <i class="icon"></i>
              <a href="num2">京公网安备 11000002002052号</a>
            </span>
            <span class="line">|</span>
            <span>
              <a href="">隐私政策</a>
            </span>
            <span class="contact">
              &nbsp;&nbsp;&nbsp;&nbsp;招聘意见反馈： zhaopin@meituan.com
            </span>
          </div>
        </div>
        <div class="focus">
          <div class="focusus">
            <span class="subtext">关注我们</span>

            <div v-for="item in 7" :key="item" class="imgwrap">
              <img src="../assets/wechat.svg" alt="" class="subimg" />
              <div class="erwei">
                <div class="erweima">
                  <div class="code">
                    <img src="../assets/erweima.png" alt="" />
                  </div>
                  <div class="text">关注美团招聘公众号</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.footer {
  width: 100%;
  background-color: #f4f5f7;
  min-width: 1380px;
}

.content {
  margin: auto;
  width: 1280px;
}
/* logo */
/* #region */
.logoslo {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 48px 0 114px;
  border-bottom: 1px solid #e6e7eb;
}

.logoslo img {
  width: 287.5px;
  height: 60px;
}

.logoslo .slogan {
  width: auto;
  text-align: right;
}

.logoslo .slogan .slogancn {
  font-size: 36px;
  letter-spacing: 0;
  line-height: 44px;
  color: #111925;
}

.logoslo .slogan .sloganen {
  margin-top: 12px;
  font-weight: 300;
  font-family: PingFangSC-Light;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  color: #111925;
}

p {
  margin: 0;
  padding: 0;
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
}
/* #endregion */

/* copy */
/* #region */
.copyfocus {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 88px;
}

.copy {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
}

.copytext {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  align-self: flex-end;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 20px;
  color: #111925;
}

.copytext a {
  text-decoration: underline !important;
}

.copytext .line {
  margin: 0 8px;
  color: #e7e8e9;
}

.copytext a,
.tuancopy,
.contact {
  color: #111925;
  opacity: 0.35;
}

.num1 {
  margin-left: 8px;
}

.icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-image: url(../assets/jing.png);
  background-size: 14px 14px;
}

/* #endregion */

/* focus */
/* #region */
.focus {
  display: flex;
  -webkit-box-pack: justify;
  align-items: center;
  width: auto;
  font-size: 0;
  justify-content: space-between;
  -webkit-box-align: center;
}

.focusus {
  display: flex;
  align-items: center;
}

.subtext {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.84);
}

.imgwrap {
  position: relative;
  margin-left: 20px;
  cursor: pointer;
}

.subimg {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.erwei {
  display: none;
  position: absolute;
  left: 50%;
  top: -190px;
  transform: translateX(-50%);
  padding-bottom: 16px;
}
.imgwrap:hover .erwei {
  display: block;
}

.erweima {
  width: 152px;
  padding: 14px 16px 16px;
  background: #fff;
  border-radius: 4px;
  position: relative;
}

.code {
  width: 120px;
  height: 120px;
  border-radius: 9px;
}

.code img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  margin-top: 4px;
  text-align: center;
  font-weight: 400;
  opacity: 0.5;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #000;
  line-height: 20px;
}
</style>
