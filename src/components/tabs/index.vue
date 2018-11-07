<template>
  <div class="tabs">
    <router-link to="/selection">
      <span class="tabs_txt">精选</span>
    </router-link>
    <router-link to="/vip">
      <span class="tabs_txt">VIP</span>
    </router-link>
    <router-link to="/classify">
      <span class="tabs_txt">分类</span>
    </router-link>
    <router-link to="/rank">
      <span class="tabs_txt">排行</span>
    </router-link>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/variable.less';
.tabs{
    height:2.8rem;
    display:flex;
    background:#9b2b1d;
  }
  a{
      flex:1;
      text-align:center;
      line-height:2.8rem;
      text-decoration: none;
      color:#ddada9;
      &.router-link-active{
        color:#fff;
        .tabs_txt{
          padding-bottom:0.36rem;
          border-bottom:0.12rem solid #fff;
        }
      }
    }
</style>
