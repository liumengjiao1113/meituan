<template>
  <div class="postitle">{{ title }}({{ jobcount }})</div>
  <posotionList :activeCity="activeCity" :jobs="jobs" @updatecount="handleJob"> </posotionList>
</template>

<script>
import posotionList from './posotionList.vue'
export default {
  components: {
    posotionList
  },
  props: {
    activeCity: Array,
    jobs: Array,
    title: String
  },
  data() {
    return {
      jobcount: 10
    }
  },
  methods: {
    handleJob(count) {
      this.jobcount = count
    }
  }
}
</script>

<style scoped>
.postitle {
  padding: 0 0 12px 29px;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  line-height: 32px;
}
</style>
