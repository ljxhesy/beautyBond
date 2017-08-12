import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import indexComponent from '../components/index/indexComponent.vue'
import LoginComponent from '../components/login/LoginComponent.vue'
import orderComponent from '../components/order/order.vue'
import personComponent from '../components/person/person.vue'
import shopComponent from '../components/shop/shop.vue'
import shopDeilComponent from '../components/shop/shopDeil.vue'
import beautyComponent from '../components/beauty/beauty.vue'
import serveDeilComponent from '../components/serveDeil/serveDeil.vue'
import serveShopComponent from '../components/serveDeil/serveShop.vue'
import userAdressComponent from '../components/person/psersonAderss.vue'
import orderDeilComponent from '../components/order/orderDeil.vue'
import payComponent from '../components/pay/pay.vue'
import refundReasonComponent from '../components/refund/refundReson.vue'
import payFinishComponent from '../components/pay/payFinish.vue'
import commentComponent from '../components/comment/comment.vue'
import orderSubmitComponent from '../components/order/orderSubmit.vue'
import refundDeilComponent from '../components/refund/refundDeil.vue'
import personAdressNewComponent from '../components/person/personAdressNew.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'index',
        component: indexComponent
    }, {
        path: '/beauty/:id',
        name: 'beauty',
        component: beautyComponent
    }, {
        path: '/person',
        name: 'person',
        component: personComponent
    }, {
        path: '/shopDeil',
        name: 'shopDeil',
        component: shopDeilComponent
    }, {
        path: '/serveDeil',
        name: 'serveDeil',
        component: serveDeilComponent
    }, {
        path: '/serveShop',
        name: 'serveShop',
        component: serveShopComponent
    }, {
        path: '/order',
        name: 'order',
        component: orderComponent
    }, {
        path: '/shop',
        name: 'shop',
        component: shopComponent
    }, {
        path: '/userAderss',
        name: 'userAderss',
        component: userAdressComponent
    }, {
        path: '/orderDeil',
        name: 'orderDeil',
        component: orderDeilComponent
    }, {
        path: '/refundDeil',
        name: 'refundDeil',
        component: refundDeilComponent
    }, {
        path: '/orderSubmit',
        name: 'orderSubmit',
        component: orderSubmitComponent
    }, {
        path: '/personAdressNew',
        name: 'personAdressNew',
        component: personAdressNewComponent
    }, {
        path: '/pay',
        name: 'pay',
        component: payComponent
    }, {
        path: '/comment',
        name: 'comment',
        component: commentComponent
    }, {
        path: '/payFinish',
        name: 'payFinish',
        component: payFinishComponent
    }, {
        path: '/refundReason',
        name: 'refundReason',
        component: refundReasonComponent
    }]
})

//对将要进入的路由进行权判断
router.beforeEach((to, from, next) => {
    if (to.path == '/collection') {

    }
    next();
})

export default router