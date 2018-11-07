<template>
  <div>
    <router-view></router-view>
    <header class="header-bar-red">
      <span onclick="javascript:history.go(-1)" class="back">
        <i class="icon"></i> 
        <i>返回</i>
      </span> 
      <a href="/" class="index">
        <i class="homePage"></i>
      </a> 
      <h1>书籍详情</h1>
    </header>

    <div>
      <div class="book-detail clearfix">
        <img :src="img" alt="圣墟" class="cover"> 
        <div class="desc">
          <input type="hidden" value="5816b415b06d1d32157790b1" id="J_hiddenBookId"> 
          <input type="hidden" value="" id="J_hiddenBookCover"> 
          <input type="hidden" value="圣墟" id="J_hiddenBookTitle"> 
          <input type="hidden" value="0" id="J_hiddenAllowMonthly"> 
          <h1>{{title}}</h1> 
          <p class="sku">
            <a href=""><span class="c-red">{{author}}</span></a>
            <i>|</i> <span>{{cat}}</span><i>|</i> <span>{{wordCount}}字</span></p> <p class="update">9小时前更新</p>
        </div>
      </div>
      <div class="read-link">
        <i class="button subtract">加入书架</i>
        <i class="button" @click="startReading(id)">开始阅读</i>
      </div>
      <div class="reader-data">
        <p class="item"><span class="key">追人气</span> <span>{{latelyFollower | wan}}万</span></p> 
        <p class="item"><span class="key">读者留存率</span> <span>{{retentionRatio}}%</span></p> 
        <p class="item"><span class="key">日更字数/天</span> <span>{{serializeWordCount}}</span></p>
      </div>
      <div>
        <div class="introduction">
          <p class="" style="user-select: text;">{{longIntro}}</p> 
          <span class="arrow"></span>
        </div> 
        <a href="/book/5816b415b06d1d32157790b1/chapter" class="chapter-item">
          <div class="inner clearfix">目录
            <i class="arrow"></i> 
            <span>[9小时前更新]&nbsp;&nbsp;{{lastChapter}}</span>
          </div>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:""
    },
    author:{
      type:String,
      default:""
    },
    cat:{
      type:String,
      default:""
    },
    wordCount:{
      type:0,
      default:""
    },
    latelyFollower:{
      type:0,
      default:""
    },
    retentionRatio:{
      type:String,
      default:""
    },
    serializeWordCount:{
      type:0,
      default:""
    },
    longIntro:{
      type:String,
      default:""
    },
    lastChapter:{
      type:String,
      default:""
    },
    img:{
      type:String,
      default:""
    },
    id:{
      type:String,
      default:""
    }
  },
  methods:{
    startReading(id){
      // console.log(id)
      this.$router.push({path:`/reading/${id}`})
    }
  },
  filters:{
    wan(val){
      return (val/10000).toFixed(1);
    }
  }
}
</script>

 <style lang="less">
  a{
  text-decoration: none;
}
.header-bar-red{
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 2.6rem;
  overflow: hidden;
  background-color: #b93321;
  color: #fff;
  margin-top:-3rem;
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
.book-detail{
  padding:1rem;
  margin-top:3rem;
  .cover{
    float: left;
    width: 4.6rem;
    height: 6rem;
  }
  .desc{
    margin-left: 6rem;
    h1{
      vertical-align:top;
      height: 1.6rem;
      font-weight: 400;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top:0;
    }
    .sku{
      height: .66667rem;
      font-size: 12px;
      color: #999;
      i{
        margin: 0 .26667rem;
        font-style: normal;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .c-red{
        color: #b93321;
      }
    }
    .update{
      height: .53333rem;
      font-size: 12px;
      color:#999;
      padding: 0.3rem 0;
    }
  }
}
.clearfix:before{
  content: "";
  display: table;
}
.read-link{
  padding: 1rem;
  border-bottom: 1px solid #ebebeb;
  font-size: 0;
  background: #fff;
  display:flex;
  .button{
    display: inline-block;
    vertical-align: middle;
    height: 2.2rem;
    line-height: 2.2rem;
    background-color: #b93321;
    border: 1px solid #b93321;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    width: 45%;
    margin-right: 5%;
    i{
      font-style: normal;
    }
    .subtract{
      border: 1px solid #999;
      background: #999;
      color: #fff;
    }
  }
  .button:nth-child(1){
    color: #b93321;
    background-color: #fff;
  }
  .button:nth-child(2){
    margin:0 0 0 5%;
  }
}
.reader-data{
  padding: .53333rem 0;
  border-bottom: 1px solid #ebebeb;
  font-size: 0;
  background: #fff;
  .item{
    display: inline-block;
    vertical-align: middle;
    width: 33%;
    text-align: center;
    span{
      display: block;
      line-height: 1.53333rem;
      color: #999;
      font-size: 12px;
    }
    span:last-child{
      margin-top: .13333rem;
      font-size: 16px;
      color:black;
    }
  }
}
.introduction{
  position: relative;
  padding: .53333rem;
  background: #fff;
  p{
    line-height: 1.6rem;
    font-size: 13px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    -webkit-transition: all .4s ease;
  }
  .arrow{
    display: inline-block;
    position: absolute;
    right: .4rem;
    top: 5rem;
    width: 1rem;
    height: 1rem;
    background: url(~@/assets/image/下标.png) no-repeat;
    background-size: 80%;
    background-position: 50%;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
.chapter-item{
  display: block;
  background: #fff;
  padding: 0 0 0 .53333rem;
  border-bottom: 1px solid #ebebeb;
  line-height: 1.5rem;
  color: #333;
  .inner{
    position: relative;
    font-size: 14px;
    padding: .53333rem .26667rem .53333rem 0;
    border-top: 1px solid #f4f4f4;
    span{
      float: right;
      max-width: 60%;
      color: #999;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .clearfix:before{
    content: "";
    display: table;
  }
  .clearfix:after{
    clear: both;
  }
}
 </style>
 