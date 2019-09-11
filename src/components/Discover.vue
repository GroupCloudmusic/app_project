
<template>
<div id="container">
    <songlist-title :title="'用音乐恢复你的早上'"></songlist-title>
   <songlist-module :list="SonglistModule"></songlist-module>
    <!-- 底部导航栏tabbar -->
    <tabaricon2  :active="0"></tabaricon2>

</div>
</template>

<script>

import TabarIcon2 from "@/components/sub/Tabaricon/TabarIcon2.vue"
import SonglistTitle from "@/components/sub/discover/SonglistTitle.vue"
import SonglistModule from "@/components/sub/discover/SonglistModule.vue"


export default {
    // Home里的子组件对象列表 注册组件
    components:{
        "tabaricon2":TabarIcon2, 
        SonglistModule ,
        SonglistTitle,
    },
    data(){
        return{
            SonglistModule:[
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    ],
                }
            },


}
</script>

<style>
div.app-container{
    padding-top: 0;
}
#container{
    margin:5px 0;
}


</style>
