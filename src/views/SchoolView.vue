\
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
  </div>
  <mainFooter></mainFooter>
</template>

<script>
export default {
  data() {
    return {
      pagename: {
        pname: '校园招聘',
        subtitle: 'Campus Recruitment',
        description:
          '美团有多少年，校招就有多少年。美团创立之初，就开始招聘和培养应届生了，很多当年的应届生已经成长为业务骨干、团队负责人，成为美团的中流砥柱。 目前，校园招聘设有应届生校招、转正实习、日常实习等招聘项目。无论你在哪个年级、学什么专业，都有机会来美团学习实践，和我们一起成长，一起更好！更多疑问请查看《校招行程》、《常见问题》页面，也可以前往《了解美团》'
      },
      activeCity: [],
      title: '全部校招职位',

      jobs: [
        {
          jobname: '小象超市 - 营销财务BP - 实习生',
          location: '北京市、上海市',
          duty: '1、对于站内用户、营销活动等进行SQL数据提取；沉淀数据模板，支持分析业务   2、进行营销费用效率基础分析科目'
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
  background-image: url(/src/assets/school.png);
}
</style>
