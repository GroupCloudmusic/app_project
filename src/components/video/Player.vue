<template>
  <div class="rootstyle"> 
    <div class="first">
      <img :src="videolist" alt="">
      <div class="firsttop">
        <p>{{content}}</p>
        <img :src="v_f_img" alt="">
      </div>
      
    </div>
    <div class="second">
      <div class="leftimg">
        <img :src="v_h_img" alt="">
        <p>{{name}}</p>
      </div>
      <div class="rightimg">
        <img src="@/assets/video/cm2_act_icn_praise@2x.png" alt="">
        <img src="@/assets/video/content.png" alt="">
        <img src="@/assets/video/ellipsis.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    videolist:{default:""},
    content:{default:""},
    v_f_img:{default:""},
    v_h_img:{default:""},
    name:{default:""},
  }
}
</script>

<style scoped>
  .rootstyle{
    background-color:#fff;
    border-top:1px solid #E7EAED;
    margin-bottom:10px;
  }
  .first{
    width:100%;
    height:220px;
  }
  .first>img{
    width:95%;
    height:170px;
    border-radius:5px;
    margin:10px 10px 3px;
  }
  .firsttop{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .firsttop>p{
    font-size:14px;
    margin-left:5px
  }
  .firsttop>img{
    width:20px;
    height:20px;
    border-radius:50%;
    margin-right:15px;
  }
  .second{
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid #E7EAED;
    font-size:14px;
  }
  .leftimg{
    display:flex;
    align-items:center;
  }
  .leftimg>img{
    width:20px;
    height:20px;
    border-radius:50%;
    margin:5px;
  }
  .rightimg>img{
    width:20px;
    height:20px;
    margin-right:10px;
    margin-left:30px;
  }
</style>