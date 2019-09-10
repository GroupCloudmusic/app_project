import Vue from 'vue'
import Router from 'vue-router'

//主页
import Home from "./components/Discover.vue"
// Video
import Bookstore from "./components/Video.vue"
// Me
import Paimai from "./components/Me.vue"
//Friend
import Shoppingcart from "./components/Friend.vue"
//Zh
import Me from "./components/Zh.vue"
Vue.use(Router)
export default new Router({
  routes: [
   
    
    // 主页
    {path:'/Discover',component:Home},
    // Video
    {path:'/Video',component:Bookstore},
    //Me
    {path:'/Me',component:Me},
    //Friend
    {path:'/Friend',component:Shoppingcart},
    //Zh
    {path:'/Zh',component:Me},
  ]
})
