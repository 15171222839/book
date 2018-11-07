<template>
  <div id="app">
    <bookHeader></bookHeader>
    <tabs></tabs>

    <router-view></router-view>
    <footera></footera>
  </div>
</template>

<script>
import BookHeader from '@/components/bookHeader'
import Tabs from '@/components/tabs'
import Footera from '@/components/footera'
export default {
  components:{
    BookHeader,
    Tabs,
    Footera
  }
}
</script>

<style lang="less" scoped>
html{
  font-size:~"calc(100vw/7.5)";
}
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
</style>
