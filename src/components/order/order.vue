<template>
    <div>
        <!-- 头部开始 -->
        <div class="userInfo-header userInfo-header2">
            <div class="order-class clearfloat">
                <span class="class-active" @click="onShop">到店订单</span>
                <span @click="onShop">上门订单</span>
            </div>
        </div>
        <!-- 头部结束 -->
        <!-- 筛选列表开始 -->
        <div class="class-choose">
            <ul class="clearfloat" id="barTap">
                <li @click="onChoose" value="all">
                    <span class="choose-active" value="all">全部</span>
                </li>
                <li @click="onChoose" value="pay">
                    <span value="pay">待付款</span>
                </li>
                <li @click="onChoose" value="serve">
                    <span value="serve">待服务</span>
                </li>
                <li @click="onChoose" value="onDo">
                    <span value="onDo">进行中</span>
                </li>
                <li @click="onChoose" value="comment">
                    <span value="comment">待评价</span>
                </li>
                <li @click="onChoose" value="after">
                    <span value="after">退款/售后</span>
                </li>
            </ul>
        </div>
        <!-- 筛选列表结束 -->
        <!-- 订单列表开始 -->
        <div class="order-list">
            <div class="order-list-deil" v-if="pay">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <img src="../../assets/images/order-shop.png">
                        <span>丽延康美容店</span>
                        <img src="../../assets/images/group3.png">
                    </div>
                    <div class="list-header-right">
                        <span>等待支付</span>
                    </div>
                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <span class="goods-price goods-price1">¥50</span>
                                <span class="goods-price">需付款：</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>取消订单</span>
                    <span class="a-pay"><router-link to="/pay">去支付</router-link></span>
                </div>
            </div>
            <div class="order-list-deil" v-if="pay">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/order-shop.png">
                            <span>丽延康美容店</span>
                            <img src="../../assets/images/group3.png">
                        </router-link>
                    </div>
                    <div class="list-header-right">
                        <span>等待支付</span>
                    </div>
                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <p class="">上门费 <span>¥30</span></p>
                                <div class="order-list-all">
                                    <span class="goods-price goods-price1">¥50</span>
                                    <span class="goods-price">需付款：</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>取消订单</span>
                    <span class="a-pay"><router-link to="/pay">去支付</router-link></span>
                </div>
            </div>
            <div class="order-list-deil" v-if="after">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/order-shop.png">
                            <span>丽延康美容店</span>
                            <img src="../../assets/images/group3.png">
                        </router-link>
                    </div>
                    <div class="list-header-right">
                        <span>交易关闭</span>
                    </div>
                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <p class="">上门费 <span>¥30</span></p>
                                <div class="order-list-all">
                                    <span class="goods-price goods-price1">¥50</span>
                                    <span class="goods-price">需付款：</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>删除订单</span>
                    <span>再次购买</span>
                </div>
            </div>
            <div class="order-list-deil" v-if="comment">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/order-shop.png">
                            <span>丽延康美容店</span>
                            <img src="../../assets/images/group3.png">
                        </router-link>
                    </div>
                    <div class="list-header-right">
                        <span>待评价</span>
                    </div>
                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <p class="">上门费 <span>¥30</span></p>
                                <div class="order-list-all">
                                    <span class="goods-price goods-price1">¥50</span>
                                    <span class="goods-price">需付款：</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>退款</span>
                    <span>去评价</span>
                </div>
            </div>
            <div class="order-list-deil" v-if="serve">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <router-link to="/shopDeil">
                            <img src="../../assets/images/order-shop.png">
                            <span>丽延康美容店</span>
                            <img src="../../assets/images/group3.png">
                        </router-link>
                    </div>
                    <div class="list-header-right">
                        <span>待服务</span>
                    </div>
                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <p class="">上门费 <span>¥30</span></p>
                                <div class="order-list-all">
                                    <span class="goods-price goods-price1">¥50</span>
                                    <span class="goods-price">需付款：</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>退款</span>
                    <span @click="checkCode">查看二维码</span>
                </div>
            </div>
        </div>
        <!-- 订单列表结束 -->
        <div class="index-footer clearfloat">
            <router-link to='/'>
                <img src="../../assets/images/index-beauty.png">
                <img src="../../assets/images/index-beauty-active.png" class="turn-off-active">
                <p>美容</p>
            </router-link>
            <router-link to='/shop'>
                <img src="../../assets/images/index-shop.png">
                <img src="../../assets/images/index-shop-active.png" class="turn-off-active">
                <p>店铺</p>
            </router-link>
            <router-link to='/order'>
                <img src="../../assets/images/index-order.png" class="turn-off-active">
                <img src="../../assets/images/index-order-active.png">
                <p class="p-active">订单</p>
            </router-link>
            <router-link to='/person'>
                <img src="../../assets/images/index-person.png">
                <img src="../../assets/images/index-person-active.png" class="turn-off-active">
                <p>我的</p>
            </router-link>
        </div>
         <mt-popup v-model="popupVisible" popup-transition="popup-fade">
            <div class="code-content">
                <h3>六胜肽无龄肌</h3>
                <img src="../../assets/images/checkCode.png">
                <div>
                    <p>验证码：f2949w91</p>
                    <p>让门店扫一扫，完成验证</p>
                </div>
                <i class="iconfont" @click="closePopUp">&#xe622;</i>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
import Vue from "vue";
import '../../assets/css/order/order.css';
import $ from "jquery";
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);
export default {
    name: 'orderDeil',
    data: function() {
        return {
            serve: true,
            comment: true,
            after: true,
            pay: true,
            onDo: true,
            popupVisible:false,
        }
    },
    mounted: function() {
        $(".order-list-deil").last().css("margin-bottom", "55px");
    },
    updated:function(){
        $(".order-list-deil").last().css("margin-bottom", "55px");
    },
    methods: {
        onShop: function(e) {
            $(".class-active").removeClass("class-active");
            $(e.target).addClass("class-active")
        },
        onChoose: function(e) {
            $(".choose-active").removeClass("choose-active");
            $(e.target).find("span").addClass("choose-active");
            $(e.target).addClass("choose-active");
            let sitePage = $(e.target).attr("value");
            console.log(sitePage);
            if (sitePage == "serve") {
                
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                this.comment = this.after = this.pay = this.onDo = false;
                console.log(this.serve);
            } else if (sitePage == "comment") {
                console.log(this.serve);
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                this.serve = this.after = this.pay = this.onDo = false;
            } else if (sitePage == "after") {
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                this.serve = this.comment = this.pay = this.onDo = false;
            } else if (sitePage == "pay") {
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                this.serve = this.comment = this.after = this.onDo = false;
            } else if (sitePage == "onDo") {
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                this.serve = this.comment = this.after = this.pay = false;
            } else {
                this.serve = this.comment = this.after = this.pay = this.onDo = false;
                this.serve = this.comment = this.after = this.pay = this.onDo = true;
                $(".order-list-deil").css("margin-bottom", "8px");
            }
        },
        checkCode:function(){
            this.popupVisible = true;
        },
        closePopUp:function(){
            this.popupVisible = false;
        }
    }
}
</script>

<style type="text/css">
    .a-pay a{
        color:#804090;
    }
    .a-pay a:visited{
        color:#804090;
    }
</style>