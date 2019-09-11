<template>
    <div class="songlistTitle">
        <p>{{title}}</p>
        <img src="@/assets/btn/cm2_mine_moredot@2x.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        title:{
            type:String,
            default:function(){
                return ''
            }
        }
    }
}
</script>
<style>
.songlistTitle{
    display: flex;
    justify-content: space-between;
    margin:20px 15px;
}
.songlistTitle>img{
    height:18px;
    
}
.songlistTitle>p{
    font-weight:600;
    font:15px;
    color:#333;
}
</style>


