import Vue from 'vue'
import Router from 'vue-router'

//主页
import Discover from "./components/Discover.vue"
// Video
import Video from "./components/Video.vue"
// Me
import Me from "./components/Me.vue"
//Friend
import Friend from "./components/Friend.vue"
//Zh
import Zh from "./components/Zh.vue"
//Login
import Login from "./components/login/Login.vue"
//Phone
import Phone from "./components/login/Phone.vue"

Vue.use(Router)
export default new Router({
  routes: [
   
    
    // 主页
    {path:'/Discover',component:Discover},
    // Video
    {path:'/Video',component:Video},
    //Me
    {path:'/Me',component:Me},
    //Friend
    {path:'/Friend',component:Friend},
    //Zh
    {path:'/Zh',component:Zh},
    //登录
    {path:'/Login',component:Login},
    //电话登录
    {path:'/Phone',component:Phone},
  ]
})
