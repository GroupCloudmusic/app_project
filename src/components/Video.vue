<template>
    <div class="container">
        <!-- <div v-bind:for="n in 10"> -->
        <!-- <player :videolist="item.videolist" v-for="(item,index) in list" :key="index" :content="item.content" :name="item.name" :v_f_img="item.v_f_img" :v_h_img="item.v_h_img"></player> -->
        <!-- </div> -->

        <mt-navbar class="page-part" v-model="active">
            <mt-tab-item id="1">推荐</mt-tab-item>
            <mt-tab-item id="2">LOOK直播</mt-tab-item>
            <mt-tab-item id="3">崩天裂地</mt-tab-item>
            <mt-tab-item id="4">现场</mt-tab-item>
            <mt-tab-item id="5">翻唱</mt-tab-item>
            <!-- <mt-tab-item id="6">听BGM</mt-tab-item> -->
           
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="1">
                <player :videolist="item.videolist" v-for="(item,index) in list" :key="index" :content="item.content" :name="item.name" :v_f_img="item.v_f_img" :v_h_img="item.v_h_img"></player>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <look :list="list1" :megs="megs"></look>  
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <player :videolist="item.videolist" v-for="(item,index) in list" :key="index" :content="item.content" :name="item.name" :v_f_img="item.v_f_img" :v_h_img="item.v_h_img"></player>
            </mt-tab-container-item>
        </mt-tab-container>












        <tabaricon2  :active="1" fixed></tabaricon2>
    </div>
</template>
<script>

import TabarIcon2 from "@/components/sub/Tabaricon/TabarIcon2.vue"
import Player from "@/components/video/Player.vue"
import Look from "@/components/video/Look.vue"

export default {
    components:{
        "tabaricon2":TabarIcon2,
        "player":Player,
        "look":Look,
         
    },
    data(){
        return {
            list1:[
                {img:require("@/assets/video/01.jpg")},
                {img:require("@/assets/video/01.jpg")},
                {img:require("@/assets/video/01.jpg")},
            ],
            megs:[
                {meg:"热门"},
                {meg:"颜值"},
                {meg:"才艺"},
                {meg:"好声音"},
                {meg:"情感"},
            ],

            list:[
                {videolist:require("@/assets/video/01.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/02.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/01.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/02.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/01.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/02.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},
                {videolist:require("@/assets/video/01.jpg"),v_f_img:require("@/assets/video/02.jpg"),v_h_img:require("@/assets/video/02.jpg"),content:"三足天背后的男人们",name:"老狗烤鱼钓太岁"},

            ],
            
            active:"1",
        }
    },
    
}
</script>
<style  scoped>
    .container{
        width:100%;
        height:100%;
        background-color:#E7EAED;
    }
    .box{
        width:100%;
        height:40px;
    }
</style>
