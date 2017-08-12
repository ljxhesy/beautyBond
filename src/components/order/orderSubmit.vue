<template>
    <div>
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>提交订单</span>
        </div>
        <!-- 头部结束 -->
        <!-- 订单内容开始 -->
        <div class="serve-msg">
            <ul>
                <li class="clearfloat">
                    <span>预约人</span>
                    <span>艾小美  13828394921</span>
                </li>
                <li class="clearfloat">
                    <span>门店</span>
                    <span>美丽有约美容 0755-88888888</span>
                </li>
                <li class="clearfloat site-show">
                    <span class="site-adress">门店地址</span>
                    <div class="clearfloat">
                        <i class="iconfont">&#xe60e;</i>
                        <p>广东省深圳市罗湖区深南东路百货广场大厦东座1505</p>
                    </div>
                </li>
                <li class="clearfloat">
                    <span>服务时间</span>
                    <span id="choose-time" @click="openPicker">下单后可预约服务时间</span>
                </li>
            </ul>
        </div>
      <mt-datetime-picker ref="picker" type="date" v-model="pickerValue"></mt-datetime-picker>
        <div class="goodsDeil">
            <div class="goods-header">
                <div class="goods-shop">
                    <span>订单信息</span>
                </div>
            </div>
            <ul>
                <!-- <li class="clearfloat goods-list">
                <img src="../../assets/images/goods-list1.png">
                <div>
                    <p>六胜肽无龄肌</p>
                    <p class="goods-btn">到店服务</p>
                    <span class="goods-price">¥480</span>
                </div>
            </li> -->
                <li class="clearfloat goods-list" style="background: #fff;">
                    <img src="../../assets/images/goods-list1.png">
                    <div>
                        <p>日本Calbee卡乐比水果果仁谷物<span>¥480</span></p>
                        <span class="shop-color">上门费</span>
                        <span class="goods-price goods-price1">¥50</span>
                    </div>
                </li>
                <li class="clearfloat">
                    <span>服务方式</span>
                    <span>到店服务</span>
                </li>
                <li class="clearfloat">
                    <span>优惠券</span>
                    <span>满200减20</span>
                </li>
                <li class="clearfloat">
                    <span>会员卡</span>
                    <span>无</span>
                </li>
                <li class="clearfloat">
                    <span>备注</span>
                    <span></span>
                </li>
            </ul>
        </div>
        <!-- 订单内容结束 -->
        <!-- 支付尾部开始 -->
        <div class="order-footer clearfloat">
            <div>
                <span>待支付:</span>
                <span>￥</span><span>480</span>
            </div>
            <div>
                <router-link to="/pay">
                    <span>提交订单</span>
                </router-link>
            </div>
        </div>
        <!-- 支付尾部结束 -->
    </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import '../../assets/css/order/orderSubmit.css';
import $ from 'jquery'
import { DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);

export default {
    name: 'orderSubmit',
    data: function() {
        return {
            pickerValue:new Date("January 12,2006 22:19:35")
        }
    },
    created: function() {

    },
    mounted: function() {

    },
    methods: {
         openPicker() {
         this.$refs.picker.open();
         $("#choose-time").text(this.pickerValue);
      }
    }
}
</script>