<template>
    <div class="shop">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfix">
            <div>
                <span>深圳</span>
                <img src="../../assets/images/pull-down.png" style="display: none;">
            </div>
            <input id="shop-search" type="text" name="" placeholder="搜索附近美容店">
            <img src="../../assets/images/search.png" id="searchImg">
            <label @click="showChooseSite">
                <span style="font-size: 13px;color:rgb(102,102,102);line-height:49px;">筛选</span>
            </label>
        </div>
        <!-- 头部结束 -->
        <!-- 店铺列表开始 -->
        <div class="shop-list" v-for="item in shopData">
            <router-link :to="'shopDeil/:'+item.id">
                <div class="shop-name">
                    <img src="../../assets/images/shop-bj.png" v-if="!item.storeLogo">
                    <img :src="item.storeLogo" v-if="item.storeLogo">
                    <p>{{item.storeName}}</p>
                    <div><i class="iconfont">&#xe60f;&nbsp;</i><span>{{item.storeAddress}}&nbsp;&nbsp;{{item.distance+"km"}}</span></div>
                </div>
                <div class="shop-list-footer clearfix">
                    <span>{{item.storeBookNumbers}}人已预约</span>
                    <ul class="clearfix">
                        <li>
                            <i class="iconfont">&#xe61a;</i>
                            <span>{{item.storeFocus}}</span>
                        </li>
                        <li>
                            <i class="iconfont">&#xe61c;</i>
                            <span>{{item.storeServicecredit+"%"}}</span>
                        </li>
                    </ul>
                </div>
            </router-link>
        </div>
        <!-- 店铺列表结束 -->
        <div class="index-footer clearfix">
            <router-link to='/'>
                <img src="../../assets/images/index-beauty.png">
                <img src="../../assets/images/index-beauty-active.png" class="turn-off-active">
                <p>美容</p>
            </router-link>
            <router-link to='/shop'>
                <img src="../../assets/images/index-shop.png" class="turn-off-active">
                <img src="../../assets/images/index-shop-active.png">
                <p class="p-active">店铺</p>
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
        <div id="site-Choose" v-if="popupsite">
            <h3>区域</h3>
            <div>
                <button @click="changeColor">南山区</button>
                <button @click="changeColor">罗湖区</button>
                <button @click="changeColor">福田区</button>
                <button class="site-btn-active firstOn" @click="changeColor">宝安区</button>
                <button @click="changeColor">龙岗区</button>
                <button @click="changeColor">盐田区</button>
                <button @click="changeColor">龙华区</button>
                <button @click="changeColor">其它</button>
            </div>
            <h3>类目</h3>
            <div>
                <button @click="changeColor">面目美颜</button>
                <button class="site-btn-active firstOn" @click="changeColor">纤体塑形</button>
                <button @click="changeColor">四季养生</button>
                <button @click="changeColor">光电医学</button>
            </div>
            <h3>优惠</h3>
            <div style="border:none">
                <button @click="changeColor">一卡通折扣</button>
            </div>
            <div style="border:none;padding-bottom: 0;" id="site-choose-footer" class="clearfloat">
                <button @click="resetSite">重置</button>
                <button @click="closeChooseSite" id="confirm-btn">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import '../../assets/css/shop/shop.css';
import baseUrl from "../../../baseUrl.js";
import { Search } from 'mint-ui';
import { Popup } from 'mint-ui';
import axios from "axios";
import $ from "jquery";

Vue.component(Popup.name, Popup);
Vue.component(Search.name, Search);
export default {
    name: 'shop',
    data() {
        return {
            popupsite: false,
            shopData: []
        }
    },
    beforeMount() {
        let self = this;
        //查询商铺列表
        axios.get(baseUrl["listUrl"] + "/shop/front/findByPage?pageNo=1&pageSize=5")
            .then(function(res) {
                for (let value of res.data["queryResult"]) {
                    self.shopData.push(value);
                }
            })
    },
    mounted() {
        
    },
    updated() {
        $("#site-Choose").css({ "height": $("body").innerHeight() - 50 + "px" });
        $(".shop-list").last().css("margin-bottom", "55px");
    },
    methods: {
        showChooseSite: function() {
            this.popupsite = true;
        },
        closeChooseSite: function() {
            this.popupsite = false;
        },
        changeColor: function(e) {
            $(e.target).siblings('button').removeClass("site-btn-active");
            $(e.target).addClass('site-btn-active');
        },
        resetSite: function() {
            $(".site-btn-active").removeClass('site-btn-active');
            $(".firstOn").addClass('site-btn-active');
        }
    }
}
</script>
<style type="text/css">
.shop .mint-popup-right {
    width: 100% !important;
    background: rgb(250, 250, 250);
}

#confirm-btn {
    background: #804090 !important;
    color: #fff !important;
}
</style>