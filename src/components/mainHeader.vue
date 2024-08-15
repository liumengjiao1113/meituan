<template>
  <div main-container>
    <div class="container">
      <!-- 导航栏 -->
      <div class="header">
        <div class="logo">
          <img alt="logo" src="../assets/logo.png" width="192px" height="40px" />
        </div>

        <!-- 中间内容 -->
        <div class="content">
          <div class="navWarp actived">
            <RouterLink to="/home" active-class="active">
              <div class="navText">首页</div>
              <div class="line"></div>
            </RouterLink>
          </div>
          <div class="navWarp">
            <RouterLink to="/beidou" active-class="active">
              <div class="navText">北斗计划</div>
              <div class="line"></div>
            </RouterLink>
          </div>
          <div class="navWarp">
            <RouterLink to="/social" active-class="active">
              <div class="navText">社会招聘</div>
              <div class="line"></div>
            </RouterLink>
          </div>
          <div class="navWarp">
            <RouterLink to="/school" active-class="active">
              <div class="navText">校园招聘</div>
              <div class="line"></div>
            </RouterLink>
          </div>
          <div class="navWarp">
            <a href="">
              <div class="navText">工作兼职</div>
              <div class="line"></div>
            </a>
          </div>
          <div class="navWarp">
            <a href="">
              <div class="navText">了解美团</div>
              <div class="line"></div>
            </a>
          </div>
          <div class="navWarp">
            <a href="">
              <div class="navText">常见问题</div>
              <div class="line"></div>
            </a>
          </div>
        </div>

        <div class="personalCenter">
          <button class="english">
            <span>English</span>
          </button>
          <button class="login">
            <router-link to="/login">登录</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
a {
  text-decoration-line: none;
}
.logo {
  height: 40px;
  width: 192px;
  display: flex;
  align-items: center;
}

.logo img {
  margin-left: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 78px;
  overflow: hidden;
  background: #fe6201;
}

.header .content .navWarp {
  position: relative;
  width: 124px;
  height: 78px;
  text-align: center;
  line-height: 78px;
  font-size: 16px;
  font-weight: 600;
}

.header .content .navWarp:first-child {
  width: 72px;
}

.header .content {
  display: flex;
  align-items: center;
}

.header .content .navWarp .actived {
  position: relative;
  height: 78px;
  text-align: center;
  line-height: 78px;
  font-size: 16px;
  font-weight: 600;
}

.header .content .navText {
  color: #fff;
}

.active .line {
  display: block;
  background-color: #ffd000;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  border-radius: 2px;
  width: 24px;
  height: 4px;
  margin: 8px auto 0;
}

.personalCenter {
  display: flex;
  justify-content: flex-end;
  min-width: 150px;
}

.personalCenter .english,
.login {
  height: 32px;
  line-height: 30px;
  padding: 0 12px;
  font-size: 14px;
  border: solid 1px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
}
.personalCenter .english {
  border-color: #fff;
  color: #fff;
  margin-right: 12px;
  width: 80px;
}

.personalCenter .login {
  margin: 0;
  margin-right: 20px;
  border-color: #ffd100;
  background-color: #ffd100;
}

.neirong {
  width: 100%;
  height: 100px;
}
</style>
