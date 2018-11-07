<template>
  <div>
    <router-view></router-view>
    <div class="calssify">
      <div class="man">
        <h4>男生</h4>
        <div class="category-list">              
          <a v-for="item in man" :key='item.key' @click="detail(item.name)">
            <span class="name">{{item.name}}</span>
            <span class="count">{{item.monthlyCount}}</span>
          </a>
        </div>
      </div>
      <div class="women">
        <h4>女生</h4>
        <div class="category-list">              
          <a v-for="item in women" :key='item.key' @click="detail(item.name)">
            <span class="name">{{item.name}}</span>
            <span class="count">{{item.monthlyCount}}</span>
          </a>
        </div>
      </div>
      <div class="cartoon">
        <h4>漫画</h4>
        <div class="category-list">              
          <a v-for="item in cartoon" :key='item.key'>
            <span class="name">{{item.name}}</span>
            <span class="count">{{item.monthlyCount}}</span>
          </a>
        </div>
      </div>
      <div class="publish">
        <h4>出版</h4>
        <div class="category-list">              
          <a v-for="item in publish" :key='item.key'>
            <span class="name">{{item.name}}</span>
            <span class="count">{{item.monthlyCount}}</span>
          </a>
        </div>
      </div>
    </div>


    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data:function(){
    return{
      man:{},
      women:{},
      cartoon:{},
      publish:{}
    }
  },
    created(){
      this.getSlide()
    },
    methods:{
      detail(id){
        console.log(id)
        this.$router.push({path:`/classify/${id}`})
      },
      getSlide:function(){
        var _this = this;
        axios.get("/api/cats/lv2/statistics").then(function(res){
          // console.log(res)
          _this.women=res.data.female
          _this.man=res.data.male
          _this.cartoon=res.data.picture
          _this.publish=res.data.press
        })
      }
    }
}
</script>

<style lang="less">
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.calssify{
    h4{
      padding: 0 .4rem;
      height: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400;
      color: #999;
      font-size: 12px;
    }
    .category-list{
        a{
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          width: 29.6%;
          height: 2.6rem;
          padding: .26667rem;
          text-align: center;
          border-top: 1px solid #f8f8f8;
          border-right: 1px solid #f8f8f8;
          border-bottom: 1px solid #f8f8f8;
          .name{
            display: block;
            line-height: 1.8rem;
            font-size: 15px;
            font-weight: 700;
            color: #333;
          }
          .count{
            display: block;
            line-height: .6rem;
            font-size: 12px;
            color: #ccc;
          }
        }
      }
}



</style>