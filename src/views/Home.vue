<template>
  <div>
    <mainHeader></mainHeader>

    <bannerWarp></bannerWarp>
    <chanpin></chanpin>
    <teamwrap></teamwrap>
  </div>
</template>

<script>
import bannerWarp from '../components/home/bannerWarp.vue'
import chanpin from '../components/home/chanPin.vue'
import teamwrap from '../components/home/teamWrap.vue'
export default {
  name: 'HomeView',
  components: {
    bannerWarp,
    chanpin,
    teamwrap
  }
}
</script>

<style>
h2 {
  color: black;
}
</style>
