
<template>
<div id="container">
    <classify :opts="classifylist"></classify>
    <newsongs :firstList="list1" :secondList="list2"></newsongs>
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
import Classify from "@/components/sub/discover/Classify.vue"
import NewSongs from "@/components/sub/discover/NewSongs.vue"




export default {
    // Home里的子组件对象列表 注册组件
    components:{
        "tabaricon2":TabarIcon2, 
        SonglistModule ,
        SonglistTitle,
        "classify":Classify,
        "newsongs":NewSongs,
        
        
    },
    data(){
        return{
            SonglistModule:[
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    {imgUrl:require("@/assets/songlist/6.jpg"),playAmount:"287万",imgText:"Breaktime",imgText2:"来杯咖啡吧",imgDetail:"[来杯咖啡吧]忙里偷闲来点音乐犒劳下"},
                    ],  
            
            classifylist:[
                {imgurl:require("@/assets/m_day.png"),name:"每日推荐"},
                {imgurl:require("@/assets/m_songs.png"),name:"歌单"},
                {imgurl:require("@/assets/m_charts.png"),name:"排行榜"},
                {imgurl:require("@/assets/m_radio.png"),name:"电台"},
                {imgurl:require("@/assets/m_broadcast.png"),name:"直播"},
            ],
            list1:[
                {imgurl:require("@/assets/new_songs/n_disc_1.png"),sname:"霉霉新专甜蜜上线",name:""},
                {imgurl:require("@/assets/new_songs/n_disc_2.png"),sname:"Imperfections",name:"Celine"},
                {imgurl:require("@/assets/new_songs/n_disc_3.png"),sname:"千洵",name:"Ace组合"},
            ],
            list2:[
                {imgUrl:require("@/assets/new_songs/n_song_1.png"),sname:"Lying Down",name:"Celine Dion"},
                {imgUrl:require("@/assets/new_songs/n_song_2.png"),sname:"蚀日",name:"路嘉欣"},
                {imgUrl:require("@/assets/new_songs/n_song_3.png"),sname:"木偶人",name:"薛之谦"},
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
