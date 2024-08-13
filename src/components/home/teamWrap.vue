<template>
  <div class="teamwrap">
    <div class="teamcontent">
      <div class="teamname">
        <h5 class="text">美团简介</h5>
      </div>
      <div class="teamimg">
        <div class="imglist"></div>
        <p>。。。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.teamwrap {
  background-color: #fff;
  padding: 80px 0 68px;
}

.teamcontent {
  margin: auto;
  width: 1280px;
  min-width: 1280px;
}

.teamname {
  margin: auto;
  width: 1280px;
  min-width: 1280px;
  margin-bottom: -120px;
  height: 200px;
  color: #000;
}

.text {
  margin: 0;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #111925;
  line-height: 40px;
}

.teamimg {
  margin: 0;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #111925;
  line-height: 40px;
}

.imglist {
  height: 452px;
  width: 100%;
  min-width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  background-size: cover;
  background-image: url(../../assets/meituan2.png);
}
</style>
