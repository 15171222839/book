<template>
  <div class="rankDetail">
    <rank-list :title=title :book=book :monthRank=monthRank :totalRank=totalRank></rank-list>
  </div>
</template>

<script>
import RankList from '@/components/rankList'
import axios from "axios"
export default {
  data:function(){
    return{
      id:0,
      title:"",
      book:[],
      monthRank:'',
      totalRank:""
    }
  },
  created(){
    this.getSlide()
  },
  methods:{
    getSlide:function(){
     this.id = this.$route.params.id;
    //  console.log(this.id)
      var _this = this;
      axios.get(`/api/ranking/${this.id}`).then(function(res){
        // console.log(res)
        //周榜
        _this.monthRank = res.data.ranking.monthRank
        //总榜
        _this.totalRank = res.data.ranking.totalRank
        _this.title = res.data.ranking.title
        _this.book = _this.ediSongs(res.data.ranking.books)
        // console.log(_this.monthRank)
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
    }
  },
  
  components:{
    RankList
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
