<template>
    <div class="classifi">
        <header class="header" v-for="(item,index) in classbook" :key="item.key" v-if="index<1">
            <span class="back" @click="back">
                <i class="icon"></i>
                <i>返回</i>
            </span>
            <a href="/" class="index">
                <i class="homePage"></i>
            </a> 
            <h1>{{item.majorCate}}</h1>
        </header>
        <div class="filter-item-wraper">
            <div class="filter-item">
                <div class="inner">
                    <mt-navbar >
                        <mt-tab-item id="1" class="active">热门</mt-tab-item>
                        <mt-tab-item id="2">新书</mt-tab-item>
                        <mt-tab-item id="3">好评</mt-tab-item>
                        <mt-tab-item id="4">完结</mt-tab-item>
                        <mt-tab-item id="5">包月</mt-tab-item>
                    </mt-navbar>
                </div>
            </div> 
            <div class="filter-item">
                <div class="inner">
                    <mt-navbar >
                        <mt-tab-item id="6" class="active">全部</mt-tab-item>
                        <mt-tab-item id="7">东方玄幻</mt-tab-item>
                        <mt-tab-item id="8">异界大陆</mt-tab-item>
                        <mt-tab-item id="9">异界争霸</mt-tab-item>
                        <mt-tab-item id="10">远古神话</mt-tab-item>
                    </mt-navbar>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <div class="cont">
          <a class="a-selection" v-for="item in classbook" :key="item.key" @click="novels(item._id)">
            <img :src="item.imga" class="cover">
            <div class="right">
                <h4 class="name">{{item.title}}</h4>
                <p class="desc">{{item.author}}</p>
                <p class="desc">{{item.shortIntro}}</p>
                <p class="important category"><span class="c-red">{{item.latelyFollower | wan}}</span>人气
					<span class="split">|</span> 
                    <span><span class="c-red">{{item.retentionRatio}}%</span><span>读者留存</span></span>
                </p>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
    props:{
        classbook:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        novels(id){
            this.$router.push({path:`/novel/${id}`})
        }
    },
    filters:{
        wan(val){
            return (val/10000).toFixed(1)
        }
    },
    components:{
        Navbar,
        TabItem
    }
}
</script>

<style lang="less" scoped>
.active{
    color:red;
}
.header{
    position: relative;
    z-index: 20;
    width: 100%;
    height: 2.2rem;
    overflow: hidden;
    background-color: #b93321;
    color: #fff;
    .back {
        position: absolute;
        width: 3.6rem;
        text-align: center;
        line-height: 1rem;
        .icon {
            width: .8rem;
            height: 2.2rem;
            background: url(~@/assets/image/back.png) no-repeat;
            background-size: 125%;
            background-repeat: no-repeat;
            background-position: 50%;
            margin-left:0.4rem;
        }
        i {
            display: inline-block;
            vertical-align: middle;
            font-style: normal;
            font-size: 12px;
        }
    }
    .index{
        position: absolute;
        right: 0;
        width: 3.4rem;
        text-align: center;
        height: 100%;
        line-height:2.4rem;
        color: #fff;
        .homePage{
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        background: url(~@/assets/image/下载.png) no-repeat;
        background-size: 125%;
        background-repeat: no-repeat;
        background-position: 50%;
        }
    }
    h1 {
        width: 70%;
        height: 100%;
        margin: 0 auto;
        line-height: 2.2rem;
        text-align: center;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
.filter-item-wraper {
    position: absolute;
    left: 0;
    width: 100%;
    color: #666;
    opacity: 1;
    -webkit-transition: all .1s ease;
    z-index: 100;
    .filter-item {
        background-size: 100% 1px;
        background-image: linear-gradient(180deg,transparent 50%,#ddd 0);
        background-repeat: no-repeat;
        background-position: bottom;
    }
    .filter-item {
        position: relative;
        width: 100%;
        height: 2.6rem;
        line-height: 2.6rem;
        overflow: hidden;
        .inner {
            height: 100%;
            overflow-x: auto;
            ul {
                width: auto;
                height: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0;
                li {
                    display: inline-block;
                    height: 100%;
                    padding: 0 .26667rem;
                    font-size: 13px;
                }
                li:first-child {
                    padding-left: .4rem;
                }
                li.active {
                    color: #b93321;
                }
            }
        }
    }
}
.cont{
  box-sizing: border-box;
  background:#f5f2ed;
  margin-top:22%;
  position: fixed;
  height: 552px;
  overflow-y: auto;
  .a-selection{
    border-bottom: 0.01rem solid #b6b6b6;
  }
  a{
    display: block;
    padding: 1rem;
    padding-top: 1rem;
    .cover{
      float: left;
      width: 5rem;
      height: 6rem;
      overflow: hidden;
    }
    img{
      max-width: 100%;
      border: none;
    }
    .right{
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      height: 6.6rem;
      padding-left: 1rem;
      overflow: hidden;
      .name{
        height: .61333rem;
        color: #333!important;
        font-weight: 400;
        margin-top:0;
        font-weight: 700;
      }
      .complete{
          display: inline-block;
          margin-left: .10667rem;
          border-radius: 2px;
          font-style: normal;
          color: #fff;
          font-size: 11px;
          padding: 1px 2px;
      }
      .complete{
        background-color: green;
      }
    }
    .desc{
      height: 1rem;
      line-height: 1rem;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
      color:grey;
    }
    .category{
      position: relative;
      line-height: 1rem;
      overflow: hidden;
      color: #666;
      font-size: 12px;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .split{
        padding: 0 .2rem;
      }
      .c-red{
        color: #b93321;
      }
    }
    .tag{
        position: absolute;
        right: 0;
        top: .05333rem;
        padding: 0 .10667rem;
        height: 0.8rem;
        line-height: 0.6rem;
        border: 1px solid #ff8400;
        color: #ff8400;
        font-style: normal;
        font-size: 12px;
        border-radius: 2px;
    }
  }
}
</style>
