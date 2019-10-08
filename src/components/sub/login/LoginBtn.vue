<template>
    <div class="loginBtn" @click="goNext">
        <div class="lb_btn">
            <p>{{detail}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        detail:{
            type:String,
            default:function(){
                return ''
            }
        },
        goNext:{type:Function}
    },
    // methods: {
    //     goNext() {
    //         this.$emit("click")
    //     }
    // }
}
</script>
<style>
.lb_btn{
    background: #ED382D;
    border-radius:20px;
    height:40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    margin: 0 10px;
}
</style>

