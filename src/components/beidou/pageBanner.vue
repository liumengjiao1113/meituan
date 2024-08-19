<template>
  <div class="pagebg" style="{ backgroundImage: `url(${backgroundImage})`}">
    <div class="mainbanner">
      <div class="bannerleft">
        <div class="leftt">
          <div class="title">{{ pagename.pname }}</div>
          <div class="subtitle">{{ pagename.subtitle }}</div>
          <div class="description">
            <p>{{ pagename.description }}</p>
          </div>
        </div>
        <div class="search">
          <input type="text" placeholder="输入关键词搜索岗位" />
          <span class="searbtn">
            <i
              ><el-icon style="font-size: 20px; font-weight: bold"><Search /></el-icon
            ></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagename: Object,
    backgroundImage: String
  }
}
</script>

<style scoped>
.pagebg {
  height: 476px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}
.mainbanner {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.bannerleft {
  width: 740px;
}

.leftt {
  padding-bottom: 36px;
}

.title {
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 40px;
  color: #fff;
  line-height: 48px;
}

.subtitle {
  padding: 4px 0 12px;
  font-weight: 400;
  opacity: 0.7;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #fff;
  line-height: 24px;
}

.description {
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fff;
  line-height: 22px;
}

p {
  margin: 0;
  padding: 0;
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.search {
  display: flex;
  align-items: center;
  padding: 0 4px 0 16px;
  width: 640px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  background: white;
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
  width: 74px;
  height: 60px;
  background-image: linear-gradient(227deg, #ffd000 0%, #ffb814 100%);
  border-radius: 30px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  color: #000;
  letter-spacing: 0;
}
</style>
