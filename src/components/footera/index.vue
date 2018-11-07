<template>
  <div>
    <div class="footer">
      <div class="homeFooter-top">
        <div class="search">
            <div class="search-icon"></div>
            <input type="text" name="" placeholder="总裁" id="J_searchBottomKey">
            <div class="search-btn">
                <button data-touched="{&quot;isExist&quot;:true}" id="J_searchBottom">搜索</button>
            </div>
        </div>
        <div class="category">
            <a href="##"><span>首页</span></a>
            <a href="##"><span>分类</span></a>
            <a href="##"><span>排行</span></a>
            <a href="##"><span>书单</span></a>
            <a href="##"><span>我的</span></a>
        </div>
        <div class="co-info" style="width:100%;margin:0 auto; padding:20px 0 0 0;">
            <a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006103" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="//www.zhuishushenqi.com/images/icon/recordIcon.png" style="float:left;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31011202006103号</p></a>
        </div>
        <div class="co-info" style="padding: 0 0.3rem; line-height: 1.2;">上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022 网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号</div> 
        <div class="co-info">客服电话：021-54393188-8048</div>   
        <div class="cps-info" id="J_cpsInfo"></div>
      </div>
      <div class="c-bottom-app-download clearfix">
        <div class="app-icon"></div>
        <div class="app-desc">
          <p>追书神器服务号</p>
          <p>微信看书更方便，天天签到免费看</p>
        </div>
        <a class="app-link" href="/signin/weChatSubscription">立即关注</a>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
a{
  text-decoration: none;
}
.footer {
  background: #f4f4f4;
  width: 100%;
  .homeFooter-top{
    padding: .46667rem 0 .33333rem;
    .search{
      width:88%;
      position: relative;
      padding: 0 1.4rem;
      margin-bottom: .4rem;
      display: inline-block;
      .search-icon{
        position: absolute;
        top: 0;
        left: 1.4rem;
        width: 1.8rem;
        height: 1.8rem;
        background: url(~@/assets/image/搜索.png) no-repeat;
        background-size: 50%;
        background-position: 50%;
      }
      input{
        float: left;
        width: 70%;
        height: 1.8rem;
        padding-left: 1.8rem;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        -webkit-appearance: none;
        line-height: .8rem;
        outline:0;
      }
      .search-btn{
        width: 14.5%;
        display: inline-block;
        padding-left: .13333rem;
        position: absolute;
        right: .4rem;
        button{
          width: 90%;
          height: 2rem;
          border-radius: 2px;
          border: 1px solid #ebebeb;
          background: #fff;
          // outline:0;
        }
      }
    }
    .category{
      width: 100%;
      height: 1.8rem;
      a{
        height: .8rem;
        padding-top: 9px;
        float: left;
        display: block;
        width: 20%;
        color: #333;
        font-weight: 600;
        font-size: 12px;
        text-align: center;
        span{
          background-repeat: no-repeat;
          background-position: 100%;
        }
      }
    }
    .co-info{
      margin-top: .4rem;
      color: #999;
      text-align: center;
      font-size: 10px;
    }
  }
  .c-bottom-app-download{
    position: relative!important;
    background: #f4f4f4;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3.6rem;
    padding: .26667rem .4rem .26667rem .53333rem;
    .app-icon{
      display: inline-block;
      vertical-align: middle;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 2px;
      background-color: #ccc;
      background: url(~@/assets/image/logo.png) no-repeat;
      background-size: cover;
    }
    .app-desc{
      display: inline-block;
      vertical-align: middle;
      margin-left: .26667rem;
      line-height: .53333rem;
    }
    p:nth-child(1){
      color: #b93321;
      font-size: 12px;
      line-height: .53333rem;
    }
    p:nth-child(2){
      color: #999;
      font-size: 12px;
      line-height: .53333rem;
    }
    .app-link{
      float: right;
      width: 4.8rem;
      height: 1.7rem;
      line-height: 1.7rem;
      margin-top: 0.8rem;
      background-color: #b93321;
      color: #fff;
      border-radius: 2px;
      text-align: center;
      margin-right: .6rem;
    }
  }
  .clearfix:before{
    content: "";
    display: table;
  }
}
</style>
