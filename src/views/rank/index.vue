<template>
  <div>
    <router-view></router-view>
    <div id="J_rankingWraper" class="page-ranking-wraper">
      <div class="ranking-header"><h3>男生</h3></div>
      <div class="ranking-body">
        <ul class="ranking-list">
          <li v-for="(item,index) in men" :key="item.key" v-if="index<7" @click="detail(item._id,item.monthRank,item.totalRank)">
            <a class="name">
              <img :src="item.cover | getUrl">  
              <span>{{item.title}}</span>
            </a>
          </li>
          <li class="" @click="toggle()">
            <a href="javascript:void(0)">
              <i class="ranking-icon-4"></i> 
              <span ref="toggspan">别人家的排行榜</span> 
              <i id="ranking-list-icon" ref="toggs"></i>
            </a>
          </li>
        </ul>
        <ul class="ranking-list" v-show="isShow">
          <li v-for="(item,index) in men" :key="item.key" v-if="index>7" @click="detail(item._id)">
            <a href="##" class="name">
              <span>{{item.title}}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="ranking-header"><h3>女生</h3></div>
      <div class="ranking-body">
        <ul class="ranking-list">
          <li v-for="(item,index) in woman" :key="item.key" v-if="index<7" @click="detail(item.id,item.monthRank,item.totalRank)">
            <a class="name">
              <img :src="item.cover | getUrl"> 
              <span>{{item.title}}</span>
            </a>
          </li>
          <li class=""  @click="togg()">
            <a href="javascript:void(0)">
              <i class="ranking-icon-4"></i> 
              <span ref='toggli'>别人家的排行榜</span> 
              <i id="ranking-list-icon" ref="toggst"></i>
            </a>
          </li>
        </ul>
        <ul class="ranking-list" v-show="isChange">
          <li v-for="(item,index) in men" :key="item.key" v-if="index>7">
            <a href="##" class="name">
              <span>{{item.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data:function(){
    return{
      men:[],
      woman:[],
      isShow:false,
      isChange:false
    }
  },
    created(){
      this.getSlide()
    },
    methods:{
      detail(id){
        // console.log(id)
        this.$router.push({path:`/rank/${id}`})
      },
      getSlide:function(){
        var _this = this;
        axios.get("/api/ranking/gender").then(function(res){
          // console.log(res)
          _this.men=res.data.male
          _this.woman=res.data.female
        })
      },
      toggle(e){
        this.isShow = !this.isShow 
        if(this.isShow){
          this.$refs.toggspan.style.color="red"
          this.$refs.toggs.style.transform="rotate(90deg)"
        }else{
          this.$refs.toggspan.style.color=""
          this.$refs.toggs.style.transform=""
        }
      },
      togg:function(){
        this.isChange = !this.isChange
        if(this.isChange){
          this.$refs.toggli.style.color="red"
          this.$refs.toggst.style.transform="rotate(90deg)"
        }else{
          this.$refs.toggli.style.color=""
          this.$refs.toggst.style.transform=""
        }
      }
    },
    filters:{
      getUrl(val){
        // console.log(val)
        return `http://statics.zhuishushenqi.com/${val}`;
      }
    }
}
</script>

<style lang="less">
a{
  text-decoration: none;
  cursor: pointer;
}
.page-ranking-wraper{
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .ranking-header{
    box-sizing: border-box;
    font-size: 12px;
    h3{
      padding-left: .4rem;
      padding-top: .26667rem;
      height: 2.44rem;
      line-height: 2.17333rem;
      font-weight: 400;
      color: #999;
      background-color: #e6e6e6;
      margin-top:0;
    }
  }
  .ranking-body{
    .ranking-list{
      list-style: none;
      font-size: 12px;
      .nan{
        span{
          &:hover{
            color:#b93321;
          }
          &+.span{
            color:#b93321;
          }
        }
      }
      li{
        position: relative;
        height: 1.8rem;
        padding:1rem;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          i{
            float: left;
            display: block;
            width: 1.8rem;
            height: 100%;
            background-size: 100%;
            background-position: 50%;
          }
          img{
            float: left;
            width: 1.8rem;
            height: 1.8rem;
            margin: 0rem 0 0 -1.8rem;
          }
          span{
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: bottom;
            display: block;
            color: #333;
            font-size: 14px;
            font-weight: 500;
            height: 100%;
            line-height: 1.6rem;
            margin-left: 0.6rem;
            vertical-align: middle;
          }
        }
      }
    }
    .ranking-icon-4{
      margin-left: -1.6rem;
      background:url(~@/assets/image/更多.png);
    }
    #ranking-list-icon{
      display: inline-block;
      position: absolute;
      right: .4rem;
      top: 0;
      width: 1rem;
      height: 3.6rem;
      background: url(~@/assets/image/下标.png) no-repeat;
      background-size: 80%;
      background-position: 50%;
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
  }
}
</style>