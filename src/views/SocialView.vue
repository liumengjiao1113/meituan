<template>
  <div class="parent-container">
    <mainHeader></mainHeader>
    <pageBanner :pagename="pagename" :backgroundImage="backgroundUrl"></pageBanner>
    <el-container class="main-layout">
      <el-aside>
        <menuSide @update:activeCity="handleactive"></menuSide>
      </el-aside>
      <el-main>
        <rightBan :title="title" :activeCity="activeCity" :jobs="jobs"></rightBan>
      </el-main>
    </el-container>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagename: {
        pname: '社会招聘',
        subtitle: 'Experienced Recruitment',
        description:
          '社会招聘主要面向有一定工作经验的优秀人才。聚焦“零售 + 科技”战略，美团为优秀人才提供了更丰富的机会、更广阔的发展空间，欢迎大家与我们一起在多元的业务场景中学习实践，一起“帮大家吃得更好，生活更好”！更多疑问可以浏览《常见问题》页面，也可以前往《了解美团》'
      },
      activeCity: [],
      title: '全部社招职位',

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
  },
  methods: {
    handleactive(activeCity) {
      this.activeCity = activeCity
    }
  }
}
</script>

<style scoped>
.pagebg {
  background-image: url(/src/assets/social.png);
}
</style>
