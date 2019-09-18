<template>
  <div>
    <div class="my-chosen" v-for="(item,index) in list" :key="index">
      <a href="">
        <img src="" alt="">
        <p></p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){return {}},
  props:{
    list:[
      {imgurl:"@/assets/m_day.png",name:"每日推荐"},
      {imgurl:"@/assets/m_songs.png",name:"歌单"},
      {imgurl:"@/assets/m_charts.png",name:"排行榜"},
      {imgurl:"@/assets/m_radio.png",name:"电台"},
      {imgurl:"@/assets/m_broadcast.png",name:"直播"},
    ]
  }
}
</script>

<style>

</style>