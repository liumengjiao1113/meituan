<template>
  <div class="teamwrap">
    <div class="teamcontent">
      <div class="teamname">
        <h5 class="text">美团简介</h5>
        <div class="textbg">MEITUAN</div>
      </div>
      <div class="teamimg">
        <div class="imglist">
          <template v-for="(item, index) in imgarr" :key="index">
            <transition :name="dir">
              <img :src="item" v-show="index === showind" />
            </transition>
          </template>
        </div>
      </div>
      <div class="dots">
        <ul class="slide-dots">
          <el-icon><ArrowLeft v-on:click="lastimg" /></el-icon>
          <template v-for="(item, index) in imgarr" :key="index">
            <li :class="{ active: index === showind }"></li>
          </template>
          <el-icon><ArrowRight v-on:click="nextimg" /></el-icon>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

var showind = ref(0)
var dir = ref('next')
const imgarr = ref([
  'src/assets/meituan2.png',
  'src/assets/meituan3.png',
  'src/assets/meituan4.png'
])

var timerdel = null

function nextimg() {
  dir.value = 'next'
  clearInterval(timers)
  clearTimeout(timerdel)
  showind.value = (showind.value + 1) % imgarr.value.length
  // showind.value = showind.value == 2 ? 0 : showind.value + 1
  timerdel = setTimeout(() => {
    timers = timer()
  }, 5000)
}
function lastimg() {
  dir.value = 'last'
  clearInterval(timers)
  clearTimeout(timerdel)
  showind.value = (showind.value - 1 + imgarr.value.length) % imgarr.value.length
  // showind.value = showind.value == 0 ? 2 : showind.value - 1
  timerdel = setTimeout(() => {
    timers = timer()
  }, 5000)
}

var timers = null

timers = timer()

function timer() {
  // return setInterval(() => {
  //   showind.value = showind.value === 2 ? 0 : showind.value + 1
  //   console.log(timers)
  // }, 3000)
  return setInterval(nextimg, 1000)
}
</script>

<style scoped>
.next-enter-active,
.next-leave-active {
  transition: transform 1s ease;
}

.next-enter-from {
  transform: translateX(100%);
}

.next-leave-to {
  transform: translateX(-100%);
}

.last-enter-active,
.last-leave-active {
  transition: transform 1s ease;
}

.last-enter-from {
  transform: translateX(-100%);
}

.last-leave-to {
  transform: translateX(100%);
}

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
  overflow: hidden;
  border-radius: 16px;
}

.imglist {
  position: relative;
  height: 452px;
}

.imglist img {
  height: 452px;
  width: 100%;
  min-width: 100%;
  overflow: hidden;
  position: absolute;
  background-size: cover;
}

.dots {
  width: 100%;
  height: 20px;
  text-align: center;
  display: block;
}
.dots li {
  width: 8px;
  height: 8px;
  margin: 7px;
  border-radius: 50%;
  display: inline-block;
  background-position: 3px -343px;
  opacity: 0.4;
  background: #917676;
}
.dots li:hover {
  background: #000000;
  cursor: pointer;
}
.slide-dots .active {
  background: #000000;
  opacity: 1;
}

.textbg {
  opacity: 0.5;
  font-family: MEITUANTYPE-BOLD;
  font-size: 190px;
  line-height: 200px;
  margin-top: -35px;
  background: linear-gradient(to bottom, #eff0f1, #f7f8f9);
  background-clip: text;
  color: transparent;
}
</style>
