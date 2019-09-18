<template>
  <div class="rootstyle">
    <div class="my-chosen" v-for="(item,index) of opts" :key="index">
      <a href="">
        <img :src="item.imgurl" alt="">
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){return {}},
  props:{
    opts:{default:""}
    // opts:{
    //   type:Array,
    //   default:function(){
    //     return [
    //     // {imgurl:require("@/assets/m_day.png"),name:"每日推荐"},
    //     // {imgurl:require("@/assets/m_songs.png"),name:"歌单"},
    //     // {imgurl:require("@/assets/m_charts.png"),name:"排行榜"},
    //     // {imgurl:require("@/assets/m_radio.png"),name:"电台"},
    //     // {imgurl:require("@/assets/m_broadcast.png"),name:"直播"},
    //     ]
    //   }
    // },
  },
  
}
</script>

<style scoped>
  .rootstyle{
    width:100%;
    height:65px;
    display:flex;
    justify-content: space-around;
  }
  a{
    display:line-block;
    width:100%;
    height:65px;
    text-decoration-line:none;
    text-align:center;
  }
  img{
    width:50px;
    height:50px;
  }
  p{
    font-size:10px;
    color:#333;
    margin:-8px;
    top:0;
  }
</style>