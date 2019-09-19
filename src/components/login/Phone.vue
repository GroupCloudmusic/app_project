<template>
    <div class="phone">
        <login-title></login-title>
        <p class="ph_tips">未注册手机号登录后将自动创建账号</p>
        <div class="ph_btn">
            <span>+86</span>
            <input type="number" placeholder="输入手机号">
        </div>
        
    </div>
</template>
<script>
import LoginTitle from "@/components/sub/login/LoginTitle.vue"
export default {
    components:{
        LoginTitle,
    },    
  
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
}
.ph_btn>input{
    border:0;
    outline: 0;
    padding-left: 10px;
}
</style>

