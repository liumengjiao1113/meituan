<template>
  <div class="container">
    <div class="denglu">
      <div class="logintitle">
        <RouterLink>
          <img src="../assets/logo.png" alt="" />
        </RouterLink>
        <div class="goback" @click="goBack">
          <i
            ><el-icon><ArrowLeftBold /></el-icon
          ></i>
          <span>返回上一级</span>
        </div>
      </div>
      <div class="logintype">
        <div class="loginphone">
          <div class="phone">手机登录</div>
          <div class="phonewarp">
            <div class="code">
              <div class="mt-4">
                <el-input
                  style="width: 350px; height: 48px"
                  placeholder="请输入11位手机号码"
                  class="input-with-select"
                >
                  <template #prepend>
                    <el-select placeholder="+86" style="width: 100px">
                      <el-option label="中国大陆86" />
                      <el-option label="美国/加拿大1" />
                      <el-option label="巴哈马1242" />
                    </el-select>
                  </template>
                </el-input>
              </div>
            </div>
          </div>
          <div class="codewarp">
            <div class="vrcode">
              <span class="mtdinput">
                <input type="text" placeholder="验证码" />
              </span>
            </div>
            <button class="vrbutton">
              <span>获取验证码</span>
            </button>
          </div>
          <button class="loginbut">
            <span>立即登录</span>
          </button>
        </div>
        <div class="line"></div>
      </div>
      <div class="agreewarp">
        <div class="agreetext">
          <label for="" class="mtdcheck">
            <span>
              <el-checkbox size="small" class="mtdinput" />
            </span>
            <span class="agree">我已阅读并同意</span>
          </label>
        </div>
        <span class="agreement">《个人信息保护隐私政策》</span>
      </div>
    </div>
  </div>
</template>

<script name="DengLu">
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack
    }
  }
}
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  min-height: 100vh;
  min-width: 1280px;
  background-color: #ffd000;
  /* background-image: url(./loginBg02.png); */
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: center;
}

.denglu {
  padding: 20px;
  width: 890px;
  height: 458px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
}

.logintitle {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 32px 40px 0 32px;
  width: auto;
  height: 40p;
}
img {
  width: 192px;
  height: 100%;
}

.goback {
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  letter-spacing: 0;
  cursor: pointer;
}
.logintype {
  display: flex;
}

.loginphone {
  padding: 30px 80px 45px;
}

.phone {
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000;
  letter-spacing: 0;
  line-height: 30px;
  padding-bottom: 16px;
}

.phonewarp {
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 350px;
  height: 48px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 6px;
}

.codewarp {
  margin-top: 34px;
  padding: 0 4px;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 350px;
  height: 48px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 6px;
}

.vrcode {
  position: relative;
  flex-grow: 1;
}

.mtdinput {
  display: block;
  position: relative;
  width: 100%;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ffd100;
  border-color: #ffd100;
}

.vrcode input {
  height: 48px;
  border: none;
  background: none;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
  letter-spacing: 0;
  line-height: 24px;
}

.vrbutton {
  background: 0 0;
  border-width: 0;
  font-size: 14px;
  color: #166ff7;
}

.loginbut {
  margin-top: 18px;
  width: 350px;
  height: 48px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  border-color: #ffd100;
  background-color: #ffd100;
  line-height: 30px;
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  border-radius: 4px;
  display: inline-block;
}

.loginbut span {
  display: inline-block;
  outline: 0;
  vertical-align: top;
  user-select: none;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  line-height: 30px;
}

.line {
  width: 1px;
  height: 300px;
  background-image: linear-gradient(
    180deg,
    rgba(246, 247, 249, 0) 0%,
    #f0f2f4 28%,
    #eef0f3 75%,
    rgba(234, 236, 240, 0) 100%
  );
}

.agreewarp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  padding: 0 0 0 20px;
  -webkit-box-align: center;
}

.agreetext {
  align-self: flex-start;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-align: center;
}

.mtdcheck {
  display: inline-flex;
  position: relative;
  line-height: 22px;
}

.mtdcheck span {
  position: relative;
  vertical-align: text-top;
}

.checkinput {
  transform: scale(1.1);
}

.agree {
  margin-left: 8px;
  font-weight: 400;
  opacity: 0.35;
  font-size: 14px;
  color: #000;
  letter-spacing: 0;
  line-height: 22px;
}

.agreement {
  font-weight: 400;
  font-size: 14px;
  color: #166ff7;
  letter-spacing: 0;
  line-height: 22px;
}
</style>
