<template>
<div>
    
    <!-- 底部导航栏tabbar -->
    <mt-tabbar fixed>
        <mt-tab-item id="index" @click.native="changeState(0,index)" :class="active == 0 ? 'actived' : ''">
            <tabbaricon 
            :selectedImage="require('@/assets/index.png')" 
            :normalImage="require('@/assets/ic_index.png')" :focused="currentIndex[0].isSelect"></tabbaricon> 
        发现
        </mt-tab-item>

        <mt-tab-item id="bookstore" @click.native="changeState(1,store)" :class="active == 1 ? 'actived' : ''">
            <tabbaricon
            :selectedImage="require('@/assets/video.png')" 
            :normalImage="require('@/assets/ic_video.png')" :focused="currentIndex[1].isSelect"
            ></tabbaricon>
        视频
        </mt-tab-item>
        <mt-tab-item id="paimai" @click.native="changeState(2,paimai)" :class="active == 2 ? 'actived' : ''">
            <tabbaricon 
            :selectedImage="require('@/assets/me.png')" 
            :normalImage="require('@/assets/ic_me.png')" :focused="currentIndex[2].isSelect"></tabbaricon>
        我的
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="changeState(3,cart)" :class="active == 3 ? 'actived' : ''">
            <tabbaricon 
            :selectedImage="require('@/assets/friend.png')" 
            :normalImage="require('@/assets/ic_friend.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
        朋友
        </mt-tab-item><mt-tab-item id="me" @click.native="changeState(4,me)" :class="active == 4 ? 'actived' : ''">
            <tabbaricon 
            :selectedImage="require('@/assets/zh.png')" 
            :normalImage="require('@/assets/ic_zh.png')" :focused="currentIndex[4].isSelect"></tabbaricon> 
        账号
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>
<script>
import TabarIcon from "@/components/sub/Tabaricon/TabarIcon.vue"

export default {
    components:{
        "tabbaricon":TabarIcon,
        
    },
    props:["active"],
    
    data(){
    return {
      //面板中显示子组件id
    //   active:"index",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ],
      index:'./Discover',
      store:'./Video',
      paimai:'./Me',
      cart:'./Friend',
      me:'./Zh'
    }
  },
  created() {
        this.currentIndex[this.active].isSelect=true
    },
  methods: {

    changeState(n,url){
        console.log(url);
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
         this.$router.push(url)
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
      }
    },
  }
}
</script>
<style scoped>
  .mint-tabbar{
    background-color: #fff !important;
  }
  .mint-tab-item.actived{
    color: #D33A31;
  }
</style>