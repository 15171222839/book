<template>
<div>
  <header class="c-header-bar-red">
    <span onclick="javascript:history.go(-1)" class="back">
      <i class="icon"></i> 
      <i>返回</i>
    </span> 
    <a href="/" class="index">
      <i class="homePage"></i>
    </a> 
    <h1>{{title}}</h1>
  </header>
  <div class="text">
    <div class="ranking-detail-header">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" class="active">周榜</mt-tab-item>
        <mt-tab-item id="2" ><div @click="gett(monthRank)">月榜</div></mt-tab-item>
        <mt-tab-item id="3"> <div @click="getAll(totalRank)">总榜</div></mt-tab-item>
      </mt-navbar>
    </div>
  </div>

  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <div class="contented">
        <a class="a-selection" v-for="item in book" :key='item.key' @click="novel(item._id)">
          <img :src="item.imga" class="cover">
          <div class="right">
              <h4 class="name">{{item.title}}</h4>
              <p class="desc">{{item.author}}</p>
              <p class="desc">{{item.shortIntro}}</p>
              <p class="important category"><span class="c-red">{{item.latelyFollower | wan}}</span>人气
                        <span class="split">|</span> <span><span class="c-red">{{item.retentionRatio}}%</span><span>读者留存</span></span></p>
          </div>
        </a>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <div class="contented">
        <a class="a-selection" v-for="item in mount" :key='item.key' @click="novel(item._id)">
          <img :src="item.imga" class="cover">
          <div class="right">
              <h4 class="name">{{item.title}}</h4>
              <p class="desc">{{item.author}}</p>
              <p class="desc">{{item.shortIntro}}</p>
              <p class="important category"><span class="c-red">{{item.latelyFollower | wan}}</span>人气
                        <span class="split">|</span> <span><span class="c-red">{{item.retentionRatio}}%</span><span>读者留存</span></span></p>
          </div>
        </a>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <div class="contented">
        <a class="a-selection" v-for="item in mountAll" :key='item.key' @click="novel(item._id)">
          <img :src="item.imga" class="cover">
          <div class="right">
              <h4 class="name">{{item.title}}</h4>
              <p class="desc">{{item.author}}</p>
              <p class="desc">{{item.shortIntro}}</p>
              <p class="important category"><span class="c-red">{{item.latelyFollower | wan}}</span>人气
                        <span class="split">|</span> <span><span class="c-red">{{item.retentionRatio}}%</span><span>读者留存</span></span></p>
          </div>
        </a>
      </div>
    </mt-tab-container-item>
  </mt-tab-container>

  
</div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import AllList from '@/components/allList'
import axios from 'axios';
export default {
  data(){
    return{
      selected:"1",
      mount:[],
      mountAll:[]
    }
  },
  props:{
    title:{
      type:String,
      default:""
    },
    book:{
      type:Array,
      default:[]
    },
    monthRank:{
      type:String,
      default:""
    },
    totalRank:{
      type:String,
      default:""
    }
  },
  methods:{
    gett:function(e){
      var _this = this;
       axios.get(`/api/ranking/${e}`).then(function(res){
          _this.mount = _this.ediSongs(res.data.ranking.books)
       })
    },
    getAll:function(ev){
      var _this = this;
       axios.get(`/api/ranking/${ev}`).then(function(res){
          _this.mountAll = _this.ediSongs(res.data.ranking.books)
       })
    },
    ediSongs(books){
      let nSongsList = [];
      for(let i=0;i<books.length;i++){
        let edi = {
          imga:`http://statics.zhuishushenqi.com${books[i].cover}`,
          author:books[i].author,
          title:books[i].title,
          shortIntro:books[i].shortIntro,
          retentionRatio:books[i].retentionRatio,
          latelyFollower:books[i].latelyFollower,
          _id:books[i]._id
        }
        nSongsList.push(edi)
      }
      return nSongsList
    },
    novel(id){
      console.log(id)
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
    TabItem,
    AllList
  }
}
</script>

<style lang="less">
.mint-tab-item-label{
  color:#999;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #b93321;
    margin-bottom: 0px;
}
.mint-tab-item-label{
  font-size: 14px;
}

a{
  text-decoration: none;
}
.c-header-bar-red{
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 2.6rem;
  overflow: hidden;
  background-color: #b93321;
  color: #fff;
  .back{
    position: absolute;
    width: 3.6rem;
    text-align: center;
    .icon{
      width: 1rem;
      height: 2.6rem;
      background: url(~@/assets/image/back.png) no-repeat;
      background-size: 125%;
      background-repeat: no-repeat;
      background-position: 50%;
    }
    i{
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
    line-height:3.4rem;
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
  h1{
    width: 70%;
    height: 100%;
    margin: 0 auto;
    line-height: 2.6rem;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.text{
  width:100%;
  height: 100%;
  font-size: 12px;
  .ranking-detail-header{
    width: 100%;
    z-index: 200;
    position: fixed;
    top: 2.6rem;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    display: inline-block;
    ul{
      list-style: none;
      height: 2.44rem;
      color: #999;
      font-size: 0;
      white-space: nowrap;
      margin-left:-41px;
      li{
        display: inline-block;
        width: 33.33%;
        height: 100%;
        line-height: 2.44rem;
        text-align: center;
        font-size: 14px;
      }
      .active{
        border-bottom: 2px solid #b93321;
        width: 33.33%;
      }
    }
  }
}
.contented{
  box-sizing: border-box;
  background:#f5f2ed;
  margin-top:16%;
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
