<template>
  <div class="container">
    <!-- 面板选择键 -->
    <div class="song_select">
      <div class="new"> 
        <div id="newDiscs" @click="disc">新碟</div>
        <span>|</span>
        <div id="newSongs" @click="song">新歌</div>
      </div>
      <div class="recommend">新歌推荐</div>
    </div>

    <!-- 父面板
    <mt-tab-container v-model="active"> -->
    <div>
      <!-- 子面板1 -->
      <div class="newDiscs_list" v-show="first">
      <!-- <mt-tab-container-item id="newDiscs" class="newDiscs_list"> -->
        <div v-for="(item,index) of firstList" :key="index">
          <img :src="item.imgurl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      <!-- </mt-tab-container-item> -->
      </div>
      <!-- 子面板2 -->
      <div class="newSongs_list2" v-show="second">
      <!-- <mt-tab-container-item id="newSongs" class="newSongs_list2"> -->
        <div v-for="(item,index) of secondList" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{item.sname}}</p>
          <p>{{item.name}}</p>
        </div>
      <!-- </mt-tab-container-item> -->
      </div>
    <!-- </mt-tab-container> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // active:"newDiscs",
      first:true,
      second:false,
    }
  },
  props:{
    firstList:{default:""},
    secondList:{default:""},
  },
  methods:{
    disc:function(){
      this.first=true;
      this.second=false;
      
    },
    song(){
      this.second=true;
      this.first=false;
    }
  }
}
</script>

<style scoped>
  .container{
    text-align:center;
  }
  /* 面板选择键 */
  .song_select{
    width:100%;
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:14px;
    color:#858585;
  }
  /* 左边 */
  .new{
    display:flex;
    margin-left:10px;
  }
  .new>div{
    width:40px;
    height:100%;
  }
  /* 右边 */
  .recommend{
    width:75px;
    height:18px;
    color:#333;
    border:1px solid #858585;
    border-radius:10px;
    text-align:center;
    line-height:18px;
    margin-right:10px;
  }
  /* 面板 */
  /* 子面板 */
  .newDiscs_list,.newSongs_list2{
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
  p+p{
    color:#858585;
  }
</style>