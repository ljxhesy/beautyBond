<template>
    <div class="payFinish">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>支付成功</span>
        </div>
        <!-- 头部结束 -->
        <div class="payFinish-notice">
            <div>
                <div>
                    <img src="../../assets/images/payOk.png">
                    <p>恭喜您，购买成功</p>
                </div>
            </div>
        </div>
        <div class="order-list">
            <div class="order-list-deil">
                <div class="list-header clearfloat">
                    <div class="list-header-left">
                        <img src="../../assets/images/order-shop.png">
                        <span>丽延康美容店</span>
                        <img src="../../assets/images/group3.png">
                    </div>
                    <div class="list-header-right">
                        <span>等待支付</span>
                    </div>                </div>
                <ul class="order-goods">
                    <li class="goods-list clearfloat">
                        <router-link to="orderDeil">
                            <img src="../../assets/images/goods-list1.png">
                            <div>
                                <p>六胜肽无龄肌<span>¥480</span></p>
                                <span class="goods-price goods-price1">¥50</span>
                                <span class="goods-price">已付款：</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="order-btn1 clearfloat">
                    <span>预约服务时间</span>
                    <span class="a-pay" @click="checkCode">查看二维码</span>
                </div>
            </div>
        </div>
        <!-- 尾部开始 -->
        <div class="payFinish-btn clearfloat">
            <button id="indexGo">
                <router-link to="/">返回首页</router-link>
            </button>
            <button class="payFinish-btn-active" id="checkOrder">
                <router-link to="/orderDeil">查看订单</router-link>
            </button>
        </div>
        <!-- 尾部结束 -->
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
import Vue from "vue"
import "../../assets/global/public.css"
import '../../assets/css/pay/payFinish.css';
import $ from 'jquery'

import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

export default {
    name: 'payFinish',
    data: function() {
        return {
        	popupVisible:false,
        }
    },
    mounted: function() {

    },
    created: function() {

    },
    methods: {
    	checkCode:function(){
    		this.popupVisible = true;
    	},
    	closePopUp:function(){
    		this.popupVisible = false;
    	}
    }
}
</script>