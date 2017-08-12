<template>
    <div class="index">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div>
                <span>深圳</span>
                <img src="../../assets/images/pull-down.png" style="display: none;">
            </div>
            <span>美容邦</span>
            <label>
                <img src="../../assets/images/search.png">
            </label>
        </div>
        <!-- 头部结束 -->
        <!-- 轮播图开始 -->
        <mt-swipe :auto="4000" class="swiper">
            <mt-swipe-item>
                <img src="../../assets/images/icon2.png" style="width:100%;height: 100%;">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/images/icon2.png" style="width:100%;height: 100%;">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/images/icon2.png" style="width:100%;height: 100%;">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
        <!-- 类目开始 -->
        <div class="index-list">
            <ul class="clearfloat">
                <li v-for="item in classList">
                    <router-link :to="'/beauty/:'+item.id">
                        <img :src="'./dist/list'+item.id+'.png'">
                        <p>{{item.categoryName}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 类目结束 -->
        <!-- 内容详情开始 -->
        <div class="index-content clearfloat" @click.prevent="showMore">
            <a href="#" class="first-img">
            <img src="../../assets/images/index1.jpg">
        </a>
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
        </div>
        <div class="count-link">
            <a href="#">
            <img src="../../assets/images/coupon.png">
        </a>
        </div>
        <div class="index-content clearfloat" @click.prevent="showMore">
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
            <a href="#">
            <img src="../../assets/images/index2.jpg">
        </a>
        </div>


        <div class="content-class clearfloat">
            <div class="content-header">
                <div class="header-left">
                    <h3>美容院推荐</h3>
                    <span>距离您最近</span>
                </div>
                <div class="header-right">
                    <router-link to="/shop">
                        <span>全部</span>
                        <img src="../../assets/images/group3.png">
                    </router-link>
                </div>
            </div>
            <div class="content-swiper1 swiper-container">
                <ul class="clearfloat swiper-wrapper">
                    <li class="clearfloat swiper-slide">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/index3.jpg">
                            <div>
                                <p>奈瑞儿塑身美颜</p>
                                <p><img src="../../assets/images/site-icon3.png">1.4km</p>
                                <img src="../../assets/images/shop-icon.png">
                                <span>好评率98%</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="clearfloat swiper-slide">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/index3.jpg">
                            <div>
                                <p>奈瑞儿塑身美颜</p>
                                <p><img src="../../assets/images/site-icon3.png">1.4km</p>
                                <img src="../../assets/images/shop-icon.png">
                                <span>好评率98%</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="clearfloat swiper-slide">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/index3.jpg">
                            <div>
                                <p>奈瑞儿塑身美颜</p>
                                <p><img src="../../assets/images/site-icon3.png">1.4km</p>
                                <img src="../../assets/images/shop-icon.png">
                                <span>好评率98%</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="clearfloat swiper-slide">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/index3.jpg">
                            <div>
                                <p>奈瑞儿塑身美颜</p>
                                <p><img src="../../assets/images/site-icon3.png">1.4km</p>
                                <img src="../../assets/images/shop-icon.png">
                                <span>好评率98%</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="clearfloat swiper-slide">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/index3.jpg">
                            <div>
                                <p>奈瑞儿塑身美颜</p>
                                <p><img src="../../assets/images/site-icon3.png">1.4km</p>
                                <img src="../../assets/images/shop-icon.png">
                                <span>好评率98%</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 商品列表循环开始 -->
        <div class="content-class clearfloat content-class-list" v-for="key in productList">
            <div class="content-header">
                <div class="header-left">
                    <h3>{{key.categoryName}}</h3>
                    <!-- <span>面部美容</span> -->
                </div>
                <div class="header-right">
                    <router-link to="/serveDeil">
                        <span>全部</span>
                        <img src="../../assets/images/group3.png">
                    </router-link>
                </div>
            </div>
            <div class="content-list">
                <ol class="clearfloat">
                    <li v-for="keys in key.productList">
                        <router-link to="/serveDeil">
                            <img :src="keys.coverImg">
                            <h3>{{keys.productName}}</h3>
                            <div>
                                <span>¥{{keys.originalPrice/100}}</span>
                                <span>¥{{keys.salePrice/100}}</span>
                            </div>
                        </router-link>
                    </li>
                </ol>
            </div>
        </div>
        <!-- 商品列表循环结束 -->
        <!-- 内容详情结束 -->
        <!-- 固定底部开始 -->
        <div class="index-footer clearfloat">
            <router-link to='/'>
                <img src="../../assets/images/index-beauty.png" class="turn-off-active">
                <img src="../../assets/images/index-beauty-active.png">
                <p class="p-active">美容</p>
            </router-link>
            <router-link to='/shop'>
                <img src="../../assets/images/index-shop.png">
                <img src="../../assets/images/index-shop-active.png" class="turn-off-active">
                <p>店铺</p>
            </router-link>
            <router-link to='/order'>
                <img src="../../assets/images/index-order.png">
                <img src="../../assets/images/index-order-active.png" class="turn-off-active">
                <p>订单</p>
            </router-link>
            <router-link to='/person'>
                <img src="../../assets/images/index-person.png">
                <img src="../../assets/images/index-person-active.png" class="turn-off-active">
                <p>我的</p>
            </router-link>
        </div>
        <!-- 固定底部结束 -->
    </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import $ from "jquery"
import { Swipe, SwipeItem } from 'mint-ui';
import '../../assets/swiper-3.4.2.min.css';
import '../../assets/plugins/swiper-3.4.2.min.js'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../../assets/global/public.css'
import '../../assets/css/home/home.css'
import axios from 'axios';
import baseUrl from '../../../baseUrl.js'

export default {
    data() {
        return {
            classList: [],
            productList:[]
        }
    },
    components: {

    },
    created() {

    },
    beforeMount() {
        // 首页分类名称接口
        axios.get(baseUrl["testUrl"] + "/product/category/front/findAll")
            .then(function(res) {
                for (let value of res.data) {
                    this.classList.push(value);
                }
            }.bind(this));
        //首页内容接口
        axios.get(baseUrl["testUrl"] + "/product/front/getHomePage")
            .then(function(res) {         
                for(let value of res.data.data.homeProductList){
                    this.productList.push(value);
                }
                console.log(this.productList);
            }.bind(this))
    },
    mounted() {
        $(".content-class-list").last().css("margin-bottom", "57px");
    },
    updated(){
        $(".content-class-list").last().css("margin-bottom", "57px");
    },
    methods: {
        showMore: function() {
            alert("敬请期待!");
        }
    }
}
</script>