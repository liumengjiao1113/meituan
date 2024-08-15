<template>
  <div class="parent-container">
    <mainHeader></mainHeader>
    <el-container class="main-layout">
      <el-aside>
        <menuSide @update:activeCity="handleactive"></menuSide>
      </el-aside>
      <el-main>
        <rightBan :activeCity="activeCity"></rightBan>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import menuSide from '../components/beidou/menuSide.vue'
import rightBan from '../components/beidou/rightBan.vue'
export default {
  components: {
    menuSide,
    rightBan
  },
  data() {
    return {
      activeCity: []
    }
  },
  methods: {
    handleactive(activeCity) {
      this.activeCity = activeCity
    }
  }
}
</script>

<style></style>
