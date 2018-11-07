<template>
  <div class="novel">
    <router-view></router-view>
    <all-List :id=id :longIntro=longIntro :lastChapter=lastChapter :img=img :title=title :author=author :cat=cat :wordCount=wordCount :latelyFollower=latelyFollower :retentionRatio=retentionRatio :serializeWordCount=serializeWordCount ></all-List>
    
  </div>
</template>
 <script>
 import axios from "axios"
 import AllList from '@/components/allList'
 export default {
   data:function(){
     return{
       id:0,
       title:"",
       author:"",
       cat:"",
       wordCount:Number,
       latelyFollower:"",
       retentionRatio:"",
       retentionRatio:"",
       serializeWordCount:"",
       longIntro:"",
       lastChapter:"",
       img:"",
       id:""
     }
   },

   created(){
     this.getSlide()
   },
    methods:{
      getSlide:function(){
        this.id = this.$route.params.id;
        var _this = this;
        axios.get(`/api/book/${this.id}`).then(function(res){
          console.log(res)
          //小说
          _this.title = res.data.title,
          //作者
          _this.author = res.data.author,
          //类型
          _this.cat = res.data.cat,
          //字数
          _this.wordCount =res.data.wordCount,
          //追人气
          _this.latelyFollower =res.data.latelyFollower,
          //读者留存率
          _this.retentionRatio = res.data.retentionRatio,
          //日更新字数
          _this.serializeWordCount = res.data.serializeWordCount,
          //简介
          _this.longIntro = res.data.longIntro,
          //目录
          _this.lastChapter = res.data.lastChapter,
          //图片
          _this.img = `http://statics.zhuishushenqi.com${res.data.cover}`,
          //——id
          _this.id = res.data._id
          // console.log(_this.id)
        })
      }
    },
    components:{
      AllList
    }
 }
 </script>
 
 <style lang="less">
 .novel{
    position:fixed;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow-y:scroll;
    overflow-x:hidden;
    z-index:101;
    background:white;
 }
 
 </style>
 