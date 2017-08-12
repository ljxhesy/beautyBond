<template>
    <div class="userAdressChange">
        <!-- 头部开始 -->
        <div class="userInfo-header">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>新增地址</span>
        </div>
        <!-- 头部结束 -->
        <!-- 修改地址明细开始 -->
        <div>
            <div class="user-name clearfloat">
                <span>姓名</span>
                <input type="text" name="">
            </div>
            <div class="user-name clearfloat">
                <span>手机号码</span>
                <input type="text" name="">
            </div>
        </div>
        <div class="site-choose">
            <img src="../../assets/images/site-icon.png">
            <span>广东深圳市罗湖区</span>
        </div>
        <!-- 详细地址开始 -->
        <div>
            <div class="clearfloat adress-deil">
                <span>详细地址</span>
                <input type="text" name="" placeholder="小区／大厦或街道名称">
            </div>
            <div class="clearfloat adress-deil">
                <input type="text" name="" placeholder="详细地址，如：3号4单元603">
            </div>
        </div>
        <div class="modified-site">
            <span>默认地址</span>
            <mt-switch v-model="changeValue"></mt-switch>
        </div>
        <!-- 详细地址结束 -->
        <!-- 修改地址明细结束 -->
        <!-- 页面尾部开始 -->
        <div class="userInfo-footer my-footer">
            <span>保存地址</span>
        </div>
        <!-- 页面尾部结束 -->
    </div>
</template>
<script>
import Vue from "vue"
import '../../assets/css/user/userAdressChange.css'
import $ from 'jquery'
import { Switch } from 'mint-ui';

Vue.component(Switch.name, Switch);

export default {
    name: 'personAdressNew',
    data() {
    	return {
    		changeValue:true
    	}
    }
}
</script>

<style type="text/css">
	.mint-switch{
		position: absolute !important;
		right: 15px;
		top:50%;
		transform: translateY(-50%);
	}
	.mint-switch-input:checked + .mint-switch-core {
		border-color: green !important;
    background-color: green !important;
	}
</style>