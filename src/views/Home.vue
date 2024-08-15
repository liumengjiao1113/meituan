<template>
  <div>
    <mainHeader></mainHeader>

    <bannerWarp></bannerWarp>
    <chanpin></chanpin>
    <teamwrap></teamwrap>
    <workWrap></workWrap>
    <QuesNotice></QuesNotice>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import bannerWarp from '../components/home/bannerWarp.vue'
import chanpin from '../components/home/chanPin.vue'
import teamwrap from '../components/home/teamWrap.vue'
import workWrap from '@/components/home/workWrap.vue'
import QuesNotice from '@/components/home/quesNotice.vue'
import MainFooter from '@/components/mainFooter.vue'

export default {
  name: 'HomeView',
  components: {
    bannerWarp,
    chanpin,
    teamwrap,
    workWrap,
    QuesNotice,
    MainFooter
  }
}
</script>

<style></style>
