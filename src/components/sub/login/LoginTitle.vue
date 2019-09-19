<template>
    <div class="loginTitle">
        <div class="lg_title" @click="goback">
            <img src="@/assets/login/back.png"/>
            <span>手机号登录</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
      goback:function(){
          this.$router.back();
      }
    }
}
</script>
<style scoped>
.lg_title{
    text-align: center;
    position:relative;
    padding: 10px 0;
    
}
.lg_title>img{
    width:20px;
    height:20px;
    position: absolute;
    left:5px;

}
.lg_title>span{
    font-size: 15px;
    color: #000;
    font-weight:600;
}
</style>


