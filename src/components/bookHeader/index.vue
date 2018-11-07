<template>
    <div class="bookHeader">
        <div class="nav">
            <div>
                <span class="on">男</span>
                <span>女</span>
            </div>
        </div>
        <div class="text"><h2>追书神器</h2></div>
        <div class="logo"><img src="" alt=""></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
body{
    margin:0;
}
    .bookHeader{
        height:2.6rem;
        position:relative;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .nav{
        flex:1;
    }
    .nav>div{
        width:3.44rem;
        height:1.66667rem;
        color: #fff;
        background:#9a9a9a;
        border-radius: 1.33333rem;
        margin-left:0.5rem;
    }
    .nav>div>.on{
        display:inline-block;
        width:50%;
        height:1.66667rem;
        background: #b93321;
        border-radius: 1.33333rem;
        -align: center;
    }
    .logo{
      margin-right:0.4rem;
      width:1.5rem;
      height:1.5rem;
      display:inline-block;
      background:url('logo.png');
      background-size:100% 100%;
    }
    .text{
      flex:1;
      display:inline-block;
      line-height:0.38rem;
      color:#9b2b1d;
      position:relative;
      font-weight: 700;
      font-size: 1.2rem;
      margin-right:2rem;
    }
</style>
