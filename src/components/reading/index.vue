<template>
  <div class="reading">
    <section id="J_cpIndex_4" class="reader-content-details">
      <i onclick="javascript:history.go(-1)">< 返回</i>
      <h1 style="font-size: 22px;">{{title}}</h1> 
      <div>
        <article class="read-content">
          <div class="inner" style="font-size: 18px; min-height: 667px;">
            <div class="brr" v-html="$options.filters.msg(cpContent)"></div>
          </div> 
        </article>
      </div> 
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      id:0,
      chapters:[],
      currentId:0,
      title:"",
      cpContent:""
    }
  },
  created(){
    this.getSlide()
  },
  methods:{
    getSlide(){
      this.id = this.$route.params.id;
      //http://novel.juhe.im/book-sources?view=summary&book=567d2cb9ee0e56bc713cb2c0
      axios.get(`/im/book-sources?view=summary&book=${this.id}`).then(res=>{
        this.id = res.data[0]._id
        console.log(this.id)
        axios.get(`/im/book-chapters/${this.id}`).then(res =>{
          console.log(res)
          this.chapters = res.data.chapters;
          axios.get(`/im/chapters/${encodeURIComponent(this.chapters[this.currentId].link)}`).then(res=>{
            // console.log(res)
            this.title = res.data.chapter.title
            this.cpContent = res.data.chapter.cpContent;
          })

        })
      })
    }
  },
    filters:{
      msg(val){
        // 7878 0.7878万
        return val.replace(/\n|\r\n/g,"<br/>");
      }
    }
}
</script>

<style lang="less" scoped>
.reading{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  overflow-y: auto;
  background-color:rgb(238,230,221); 
  .reader-content-details{
    padding-top: .66667rem;
    h1{
      font-weight: 400;
      color: #333;
      padding: 0 .53333rem;
      line-height: 1.5;
    }
    .read-content{
      position: relative;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      .inner{
        font-size: 16px;
        line-height: 1.5;
        padding: .26667rem .53333rem 0;
        text-align: justify;
        .brr{
          font-size: inherit!important;
          line-height: 1.5;
          margin: .13333rem 0;
          text-indent: 2em;
          text-align: justify;
        }
      }
    }
  }
}
</style>
