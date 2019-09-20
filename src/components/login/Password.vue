<template>
    <div>
        <login-title></login-title>
        <div class="pwd_btn">
            <input class="pwd_input" type="password" placeholder="输入密码" v-model="phoneNumber">
            <div class="clear" @click="cleart" v-show="phoneNumber.length">
                <img src="@/assets/login/close.png" alt="">
            </div>
            
        </div>
        <login-btn class="ph_lgBtn" :detail="'立即登录'" :goNext="next"></login-btn>
        <toast v-show="showTips" :detail="'手机号或者密码错误'"></toast>
    </div>
</template>
<script>
import LoginTitle from "@/components/sub/login/LoginTitle.vue" 
import LoginBtn from "@/components/sub/login/LoginBtn.vue"
import Toast from "@/components/sub/login/Toast.vue"
export default {
     components:{
        LoginTitle,
        LoginBtn,
        Toast
    }, 
    data(){
        return{
            phoneNumber:"",
            showTips:false
        }
      
    },
    methods:{
      cleart:function(){
          if(this.phoneNumber!=""){
              this.phoneNumber="";
          }
      },
      next:function(){
          if(!this.select){
              this.showTips=true;
              setTimeout(()=>{
                  this.showTips=false
              },1000)}
          var reg=/^[0-9a-z]{6,11}$/;
          if(!reg.test(this.phoneNumber)){
              
              return;
          }else{
              this.$router.push("/Zh")
          }
      }
    }  
    
}
</script>
<style scoped>
.pwd_btn{
    border-bottom: 1px solid #ddd;
    margin:50px 15px 0 15px;
    position: relative;
}
.pwd_btn>input{
    border:0;
    outline: 0;
    padding: 10px;
    font-size: 16px;
}
.ph_num{
    font-size: 17px;
}
.ph_lgBtn{
    margin-top:80px;
    
}
.clear{
    position: absolute;
    right: 5px;
    top:15px;
}
.clear>img{
    width:15px;
    height:15px;
}
</style>