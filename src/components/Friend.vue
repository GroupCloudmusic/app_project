<template>
    <div>  
      
        <tabaricon2 :active="3"></tabaricon2>
    </div>
</template>
<script>

import TabarIcon2 from "@/components/sub/Tabaricon/TabarIcon2.vue"



export default {
    components:{
        "tabaricon2":TabarIcon2,
     
    },
}
</script>
<style  scoped>
    .box{
        width:100%;
        height:40px;
    }
</style>