import Vue from 'vue'
import VueRouter from "vue-router";
import MSite from '../pages/MSite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '@/pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)
/**
 * 路由器模块
 */
export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/msite',
            component: MSite,
            //这个对象是一个源数据，是一个对象，可以用来指定某个组件在某个地方来确定是否显示
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login
        },
    ]
})