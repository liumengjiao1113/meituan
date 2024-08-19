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
import backgroundImage from '@/assets/beidou.png'
export default {
  data() {
    return {
      pagename: {
        pname: '北斗计划',
        subtitle: 'Beidou Program',
        description:
          '北斗计划是美团面向全球精尖校园科技人才的招聘项目，目标是基于美团多元的业务场景和广阔的职业平台，培养及储备能引领未来科技发展的技术专家，携手打造多层次科技服务平台。该项目自启动以来，吸引了海内外高校诸多优秀科技人才加入，经过多年的耕耘及沉淀，逐渐形成了助力专业人才成长和发展的项目体系。现诚邀各技术领域的优秀同学加入“北斗计划”，一起成长，一起更好，共同践行“帮大家吃得更好，生活更好”的使命！'
      },
      backgroundUrl: backgroundImage,
      activeCity: [],
      title: '全部北斗计划职位',

      jobs: [
        {
          id: '1',
          jobname: '【北斗】大模型机器学习引擎工程师',
          location: '北京市、上海市',
          duty: '面向GPU和高性能网络设计分布式训练架构'
        },
        {
          id: '2',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市、深圳市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '3',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '深圳市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '4',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '5',
          jobname: '【北斗】自动驾驶仿真算法工程师',
          location: '上海市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '6',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市、武汉市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '7',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '武汉市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '8',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '9',
          jobname: '【北斗】大模型推理引擎工程师',
          location: '北京市',
          duty: '负责LLM大语言模型的推理优化'
        },
        {
          id: '10',
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
  background-image: url(/src/assets/beidou.png);
}
</style>
