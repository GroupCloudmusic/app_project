
<template>
<div id="container">
    
   
    <!-- 底部导航栏tabbar -->
    <tabaricon2  :active="0"></tabaricon2>

</div>
</template>

<script>

import TabarIcon2 from "@/components/sub/Tabaricon/TabarIcon2.vue"


export default {
    // Home里的子组件对象列表 注册组件
    components:{
        "tabaricon2":TabarIcon2,
    },
    data(){
        return{
        
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
.carousel{
    margin-top: 5px;
}

</style>
