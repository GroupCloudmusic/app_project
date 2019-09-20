<template>
    <div class="container">
        <div class="lg_del" @click="goback">
            <img src="@/assets/login/cm2_vehicle_icn_close@2x.png" alt="">
        </div>
        <div class="lg_icon">
            <img src="@/assets/login/cm2_watch_logo_38@2x.png" alt="">
            <div class="circle first"></div>
            <div class="circle last"></div>
        </div>
        <div class="lg_btn" @click="toPhone">
            <p>手机号登录</p>
        </div>
        <div>
            <div class="lg_app">
                <img src="@/assets/login/qq.png" alt="">
                <img src="@/assets/login/wechat.png" alt="">
                <img src="@/assets/login/wangyi.png" alt="">
                <img src="@/assets/login/sina.png" alt="">
                
            </div>
            <div class="lg_item">
                <input class="lg_select" type="checkbox" v-model="select"/>
                <span>同意</span>
                <span class="lg_service">《服务条款》</span>
                <span>和</span>
                <span class="lg_service">《隐私政策》</span>
            </div>
        </div>
        <toast v-show="showTips" :detail="'请先勾选同意《服务条款》和 《隐私政策》'"></toast>
    </div>
</template>

<script>
import Toast from "@/components/sub/login/Toast.vue"
export default {
    data(){
        return{
            select:false,
            showTips:false
        }
    },
    components:{
        Toast
    },
  methods:{
      goback:function(){
          this.$router.back();
      },
      toPhone:function(){
          if(!this.select){
              this.showTips=true;
              setTimeout(()=>{
                  this.showTips=false
              },1000)
              return
          }else{
              this.$router.push("/Phone")
          }
          
         
      },
    
  }  
}
</script>
<style scoped>
.container{
    background-color:#DB372B;
    padding:10px 10px;
    
}
.lg_del>img{
    width:40px;
    height:40px;
}
.lg_icon{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    position: relative;
}
.lg_icon>img{
    width: 54px;
    height:54px;
    border-radius: 50%;
}
.circle{
    width: 54px;
    height:54px;
    border:1px solid rgba(255, 255, 255, .15);
    border-radius: 50%;
    position: absolute;
}
.circle.first {
    animation: ripple 3s linear 1s infinite;
}
.circle.last {
    animation: ripple 3s linear 2s infinite;
}
@keyframes ripple {
    0% {
        width: 0px;
        height: 0px;
    }
    100% {
        width: 100vw;
        height: 100vw;
    }
}
.lg_btn{
    background-color: #fff;
    width:280px;
    text-align: center;
    border-radius: 40px;
    height:40px;
    line-height: 39px;
    margin:0 auto;
    margin-top:140px;

}
.lg_btn>p{
    color:#ED382D;
    font-weight: 600;
    font-size: 16px; 
}
.lg_btn:active{
    background-color:#F1D3D1;
}
.lg_app>img{
    width:25px;
    height:25px;
    border:1px solid rgba(255, 255, 255, .15);
    border-radius:50%;
    padding:8px;
}
.lg_app{
    display: flex;
    justify-content: space-around;
    padding:0 20px;
    margin-top:30px;
}
.lg_item{
    color:#ccc;
    font-size: 12px;
    text-align: center;
    margin-top:30px;
    
}
.lg_service{
    color:#fff;
}
.lg_select{
    position:absolute;
    left:81px;
    bottom:15px;;
}

</style>


