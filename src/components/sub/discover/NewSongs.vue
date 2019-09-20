<template>
  <div class="container">
    <!-- 面板选择键 -->
    <div class="song_select">
      <div class="new"> 
        <div class="newdesc" id="newDiscs">新碟</div>
        <span>|</span>
        <div class="newsong" id="newSongs">新歌</div>
      </div>
      <div class="recommend">
        <div>新歌推荐</div>
      </div>
    </div>

    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板1 -->
      <mt-tab-container-item id="newDiscs" class="newDiscs_list">
        <div v-for="(item,index) of firstList" :key="index">
          <img :src="item.imgurl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      </mt-tab-container-item>
      <!-- 子面板2 -->
      <mt-tab-container-item id="newSongs" class="newSongs_list2">
        <div v-for="(item,index) of secondList" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
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

<style scoped>
  .container{
    text-align:center;
  }
  .song_select{
    width:100%;
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:14px;
    color:#858585;
  }
  .new{
    display:flex;
    margin-left:10px;
  }
  .newdesc{
    width:30px;
  }
  .newdesc + .newsong :hover{
    color:#333;
    font-size:18px;
  }
  .recommend{
    width:70px;
    height:15px;
    color:#333;
    border:1px solid #858585;
    border-radius:10px;
    text-align:center;
    line-height:15px;
    margin-right:10px;
  }
  .newDiscs_list{
    display:flex;
    justify-content:space-around;
  }
  .newSongs_list2{
    display:flex;
    justify-content:space-around;
  }
  img{
    width:100px;
    height:100px;
    border-radius:5px;
  }
  p{
    color:#333;
    font-size:12px;
  }
</style>