<template>
    <div>
        <div class="lg_disable" >
            <img src="@/assets/login/cm2_icn_close@3x.png" alt="">
            <p>{{detail}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        detail:{
            type:String,
            default:function(){
                return''
            }
        },
    },
}
</script>
<style scoped>
.lg_disable{
    background-color:rgba(0, 0, 0, .8);
    color:#f5f5f5;
    font-size:13px;
    text-align: center;
    width:200px;
    border-radius: 8px;
    padding:15px 10px;
    box-sizing: border-box;
    position: absolute;
    bottom:50%;
    left:50%;
    margin-left: -90px;
    margin-top:-35px;
}
.lg_disable>img{
    width:20px;
    height:20px;
    border:1px solid #fff;
    border-radius: 50%;
}
.lg_disable>p{
    margin-top:10px;
}
</style>