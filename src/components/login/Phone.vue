<template>
    <div class="phone">
        <login-title></login-title>
        <p class="ph_tips">未注册手机号登录后将自动创建账号</p>
        <div class="ph_btn">
            <span class="ph_num">+86</span>
            <input class="ph_input" type="number" placeholder="输入手机号" v-model="phoneNumber">
            <div class="clear"  @click="cleart" v-show="phoneNumber.length">
                <img src="@/assets/login/close.png" alt="">
            </div>
            
        </div>
        <login-btn class="ph_lgBtn" :detail="'下一步'" @click="next"></login-btn>
        
    </div>
</template>
<script>
import LoginTitle from "@/components/sub/login/LoginTitle.vue"
import LoginBtn from "@/components/sub/login/LoginBtn.vue"
export default {
    components:{
        LoginTitle,
        LoginBtn,
    }, 
    data(){
        return{
            phoneNumber:"",
            
        }
      
    },
    methods:{
      cleart:function(){
          if(!this.phoneNumber==""){
              this.phoneNumber="";
          }
      },
      next:function(){
          var reg=/^[0-9]{11}$/;
          if(!reg.test(this.phoneNumber)){
              return;
          }else{
              this.$router.push("/discover")
          }
      }
    }  
  
}
</script>
<style scoped>
.ph_tips{
    font-size: 12px;
    color:#666;
    margin-top:30px;
    padding:0 15px;
}
.ph_btn{
    border-bottom: 1px solid #ddd;
    margin:50px 15px 0 15px;
    position: relative;
}
.ph_btn>input{
    border:0;
    outline: 0;
    padding-left: 10px;
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
    top:3px;
}
.clear>img{
    width:15px;
    height:15px;
}
</style>

