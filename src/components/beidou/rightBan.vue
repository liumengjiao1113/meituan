<template>
  <div class="postitle">全部北斗计划职位（49）</div>
  <posotionList :activeCity="activeCity" :jobs="jobs"> </posotionList>
</template>

<script>
import posotionList from './posotionList.vue'
export default {
  components: {
    posotionList
  },
  props: {
    activeCity: Array
  },
  data() {
    return {
      jobs: [
        {
          jobname: '【北斗】大模型机器学习引擎工程师',
          location: '北京市、上海市',
          duty: '面向GPU和高性能网络设计分布式训练架构'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市、深圳市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '深圳市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】自动驾驶仿真算法工程师',
          location: '上海市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市、武汉市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '武汉市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          jobname: '【北斗】大模型推理引擎工程师',
          location: '厦门',
          duty: '负责LLM大语言模型的推理优化'
        }
      ]
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
