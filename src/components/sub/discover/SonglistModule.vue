<template>
    <div class="songlistmodule">
        
        <div class="songlistModule" v-for="(item,index) of list" :key="index">
            <div class="slm-img">
            <div></div>
            <img  :src="item.imgUrl" alt="">
            <div class="slm-play-icon">
                <div>
                    <img src="@/assets/btn/cm4_act_icn_playtime@2x.png" alt="">
                </div>
                <p>{{item.playAmount}}</p>
            </div>
            <div class="slm-imgText">
                <i>{{item.imgText}}</i>
                <p>{{item.imgText2}}</p>
            </div>
            </div>
            <div class="slm-details">
                <p>{{item.imgDetail}}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        list:{
            type:Array,
            default:function(){
                return[
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"}
                ]
            }
        }
    }
}
</script>
<style scoped>
.songlistmodule{
    padding: 0px 15px;
    display: flex;
    justify-content: space-between
}
.songlistModule{
    position: relative;
}
.slm-img>img{
    width:105px;
    height:105px;
    border-radius:10px;}
.slm-play-icon{
    display: flex;
    position:absolute;
    top:0px;
    left: 55px;
    align-items: center;
}
.slm-play-icon>div>img{
    
    width:12px;
}
.slm-play-icon>p{
    font-size: 12px;
    color:#fff;
    
}
.slm-imgText{
    position: absolute;
    top:62px;
    left:0px;
    background-color: rgba(112,119,108,.3);
    width:105px;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(0deg,rgba(112,119,108.5),rgba(112,119,108,.1));
    
}
.slm-imgText>i,.slm-imgText>p{
    color:#fff;
    font-weight:600;
     font-family:"Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.slm-imgText>i{
   font-size: 12px;
   text-align: left;
}
.slm-imgText>p{
    text-align: center;
    font-size: 17px;
}
.slm-details>p{
    width:110px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 13px;
    color:#333;
    -webkit-line-clamp:2;
}
</style>

