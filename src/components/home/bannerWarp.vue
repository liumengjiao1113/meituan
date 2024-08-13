<template>
  <div class="bannerWarp">
    <video src="../../assets/zippedHomeVideo.mp4" class="homeVideo" autoplay loop></video>
    <div class="mask">
      <div class="textWarp">
        <p class="slocn">一起成长，一起更好</p>
        <p class="sloen">Grow Together, Better Together</p>
      </div>
      <div class="search">
        <input type="text" placeholder="美团全部岗位" />
        <span class="searbtn">
          <i
            ><el-icon style="font-size: 20px; font-weight: bold"><Search /></el-icon
          ></i>
        </span>
      </div>
    </div>
    <div class="recruit">
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/beidou">
          <div class="nameWarp">
            <div class="name">北斗计划</div>
            <span class="line"></span>
          </div>
          <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bannerWarp {
  position: relative;
  width: 100%;
  min-height: 720px;
  max-height: 100vh;
  overflow: hidden;
}

.mask {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textWarp .slocn {
  font-size: 52px;
  letter-spacing: 4px;
  line-height: 60px;
  text-align: center;
  color: #fff;
}

.homeVideo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
}

.textWarp .sloen {
  margin-top: 12px;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  color: #fff;
  text-align: center;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
  width: 640px;
  height: 68px;
  border-radius: 34px;
  overflow: hidden;
  background-color: white;
}

.search input {
  display: inline-block;
  padding: 0 10px 0 40px;
  width: 100%;
  height: 100%;
  line-height: 68px;
  font-size: 20px;
  border: none;
}

.search .searbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  width: 74px;
  height: 60px;
  background-image: linear-gradient(227deg, #ffd000 0%, #ffb814 100%);
  border-radius: 30px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  color: #000;
  letter-spacing: 0;
  line-height: 18px;
}

.recruit {
  position: absolute;
  display: flex;
  margin: auto;
  width: 1280px;
  min-width: 1280px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 10px 20px 0 rgba(0, 0, 0, 0.03),
    inset 0 0 5px 0 #fff;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}

.box {
  flex-grow: 0;
  padding: 32px 8px 26px 24px;
  min-height: 192px;
  font-size: 0;
}

.name {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  color: #111925;
  font-family: 'PingFangSC-Medium';
}

.line {
  display: inline-block;
  margin-top: 16px;
  width: 40px;
  height: 8px;
  background: transparent;
  border-radius: 4px;
  background: #e0e0e0;
}

.desc {
  margin-top: 16px;
  font-weight: 400;
  opacity: 0.75;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  color: #111925;
  font-family: 'PingFangSC-Regular';
  width: 179px;
}

p {
  margin: 0;
  padding: 0;
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
