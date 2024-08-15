<template>
  <div class="quesnotice">
    <div class="ques">
      <a href="">
        <div class="titlewrap">
          <span class="title">常见问题</span>
          <span class="more">
            查看更多
            <i class="mtdicorn"
              ><el-icon><ArrowRight /></el-icon
            ></i>
          </span>
        </div>
      </a>
      <div class="messwrap">
        <div v-for="(question, index) in questions" :key="index" class="message">
          <span class="messtitle"
            ><a href="">{{ question.title }}</a></span
          >
          <span class="messdata"></span>
        </div>
      </div>
    </div>
    <div class="linewrap">
      <span class="line"></span>
    </div>
    <div class="notice">
      <a href="">
        <div class="titlewrap">
          <span class="title">公告</span>
          <span class="more">
            查看更多
            <i class="mtdicorn"
              ><el-icon><ArrowRight /></el-icon
            ></i>
          </span>
        </div>
      </a>
      <div class="messwrap">
        <div v-for="(notice, index) in notices" :key="index" class="message">
          <span class="messtitle"
            ><a href="">{{ notice.title }}</a></span
          >
          <span class="messdata">{{ notice.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // 常见问题的数据
    const questions = ref([
      { title: '【社招】美团的社招招聘流程是什么？' },
      { title: '【社招】填写简历时有哪些注意事项？' },
      { title: '【校招】本次校招面向哪些同学开放？' },
      { title: '【校招】招聘职位的工作地点在哪儿？' }
    ])

    // 公告的数据
    const notices = ref([
      { title: '2024年秋季校园招聘行程介绍', date: '2024/07/29' },
      { title: '美团2025届北斗计划启动，让科技走向烟火人间', date: '2024/06/11' },
      {
        title: '来美团启航计划，极速开启面试，早拿offer早入职！欢迎零售类人才',
        date: '2022/08/15'
      },
      { title: '详解8大技术方向，美团校招技术岗位投递指南来了', date: '2022/09/05' }
    ])

    return {
      questions,
      notices
    }
  }
}
</script>

<style scoped>
.quesnotice {
  display: flex;
  -webkit-box-pack: justify;
  position: relative;
  margin: auto;
  width: 1280px;
  min-width: 1280px;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  padding: 80px 0 60px;
  background-color: white;
}
/* question */
/* #region */
.ques {
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.titlewrap {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #111925;
  line-height: 40px;
}

.more {
  font-weight: 400;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #111925;
  line-height: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.mtdicorn {
  display: inline-block;
  font-family: mtdicon !important;
  line-height: 1;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
/* #endregion */

/* message*/
/* #region */
.messwrap {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.message {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px dashed #eaecf0;
}

.message:first-child {
  padding-top: 40px;
}

.messtitle {
  width: 460px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  opacity: 0.75;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #111925;
  line-height: 24px;
}

a {
  text-decoration: none;
}

.messtitle a {
  color: #000;
}

.messdata {
  font-weight: 400;
  opacity: 0.35;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #111925;
  line-height: 24px;
}
/* #endregion */

/* line */
/* #region */
.linewrap {
  align-self: center;
  margin: 0 80px;
}

.line {
  position: absolute;
  top: 150px;
  bottom: 50px;
  border-right: 1px solid #eaecf0;
}
/* #endregion */

.notice {
  -webkit-box-flex: 1;
  flex-grow: 1;
}
</style>
