<template>
  <div>
    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板1 -->
      <mt-tab-container-item id="newDiscs">
        <div v-for="(item,index) of firstList" :key="index">
          <img :src="item.imgurl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      </mt-tab-container-item>
      <!-- 子面板2 -->
      <mt-tab-container-item id="newSongs">
        <div v-for="(item,index) of secondList" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 选择面板键 -->
    <div>
      <div>新碟</div>
      <span>|</span>
      <div>新歌</div>
      <div>歌单广场</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:"newDiscs",
    }
  },
  props:{
    firstList:{default:""},
    secondList:{default:""},
  }
}
</script>

<style>

</style>