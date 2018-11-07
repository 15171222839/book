<template>
  <div class="rankDetail">
    <classify-list :classbook=classbook></classify-list>
  </div>
</template>

<script>
import ClassifyList from '@/components/classifyList'
import axios from "axios"
export default {
  data:function(){
    return{
      id:0,
      classbook:[],
    }
  },
  created(){
    this.getSlide()
  },
  methods:{
    getSlide:function(){
     this.id = this.$route.params.id;
      var _this = this;  
      axios.get(`/api/book/by-categories?gender=male&type=hot&major=${this.id}&minor=&start=0&limit=20`).then(function(res){
        console.log(res)
        _this.classbook = _this.ediSongs(res.data.books)
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
          _id:books[i]._id,
          majorCate:books[i].majorCate
        }
        nSongsList.push(edi)
      }
      return nSongsList
    }
  },
  components:{
    ClassifyList
  }
}
</script>

<style lang="less">
.rankDetail{
  position:fixed;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  overflow-y:scroll;
  overflow-x:hidden;
  z-index:50;
  background:white;
}
</style>