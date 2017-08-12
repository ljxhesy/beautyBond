<template>
    <div class="pay">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>订单支付</span>
        </div>
        <!-- 头部结束 -->
        <!-- 内容开始 -->
        <div class="pay-header">
            <span>支付剩余时间：15:00</span>
        </div>
        <div class="pay-money clearfloat">
            <span>订单金额</span>
            <span>¥430</span>
        </div>
        <h3>选择支付方式</h3>
        <mt-radio align="right" v-model="value" :options="options">
        </mt-radio>
        <ul>
        	<li><img src="../../assets/images/lackmoney.png"></li>
        	<li><img src="../../assets/images/paybao.png"></li>
        	<li><img src="../../assets/images/weChat.png"></li>
        </ul>
        <div class="pay-footer clearfloat">
        	<span>待支付:</span>
        	<span>￥480</span>
        	<button id="payGo"><router-link to="/payFinish">确认支付</router-link></button>
        </div>
        <!-- 内容结束 -->

    </div>
</template>
<script type="text/javascript">
import Vue from "vue"
import '../../assets/css/pay/pay.css';
import $ from "jquery"
import { Radio } from 'mint-ui';

Vue.component(Radio.name, Radio);

export default {
    name: 'pay',
    data: function() {
        return {
            value: "",
            options: [{
                    label: '余额',
                    value: 'valueF',
                },
                {
                    label: '支付宝',
                    value: 'valueE',
                },
                {
                    label: '微信支付',
                    value: 'valueA'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style type="text/css">
    #payGo a{
        color:#fff;
    }
</style>