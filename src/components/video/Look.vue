<template>
  <div>
    <!-- 上面的信息 -->
    <div class="topmsg">
      <div>
        <p>明星榜</p>
        <img :src="item.img" alt="" v-for="(item,index) in list" :key="index">
      </div>
      <div>
        <p>我的关注</p>
        <p>暂无关注主播开播</p>
      </div>
    </div>
    <!-- 中间按钮 -->
    <div class="middlemsg">
      <div v-bind:for="(item,index) in megs" v-bind:key="index">{{item.meg}}</div>
    </div>
    <!-- 下面图片 -->
    <div class="bottommsg">
      <img :src="item.imgurl" alt="" v-bind:for="(item) in imgs">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  props:{
    list:{default:""},
    megs:{default:""},
    imgs:{default:""},
  }
}
</script>

<style scoped>
  .topmsg{
    width:100%;
    display:flex;
    justify-content:space-around;
  }
</style>