<template>
    <div>
        <!-- 头部开始 -->
        <div class="userInfo-header">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>个人信息</span>
        </div>
        <!-- 头部结束 -->
        <!-- nav详情开始 -->
        <div class="my-nav">
            <ul>
                <li class="my-nav-icon nav-safe-li">
                    <span>头像</span>
                    <div>
                        <div>
                            <img src="../../assets/images/icon2.png">
                        </div>
                    </div>
                </li>
                <li>
                    <span>用户昵称</span>
                    <div>
                        <span>Dragon</span>
                    </div>
                </li>
                <li>
                    <span>手机账号</span>
                    <div>
                        <span>18324587415</span>
                    </div>
                </li>
                <li>
                    <span>会员等级</span>
                    <div>
                        <span>V1</span>
                    </div>
                </li>
                <li>
                    <router-link to="userAderss">
                        <span>常用地址</span>
                        <div>
                            <img src="../../assets/images/group3@2x.png">
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- nav详情结束 -->
        <!-- 账户安全开始 -->
        <div class="nav-safe">
            账户安全
        </div>
        <div class="my-nav">
            <ul>
                <li class="nav-safe-li">
                    <span>修改登录密码</span>
                    <div>
                        <img src="../../assets/images/group3@2x.png">
                    </div>
                </li>
                <li>
                    <span>修改支付密码</span>
                    <div>
                        <img src="../../assets/images/group3@2x.png">
                    </div>
                </li>
            </ul>
        </div>
        <!-- 账户安全结束 -->
        <!-- 页面尾部开始 -->
        <div class="userInfo-footer my-footer1">
            <span>退出登录</span>
        </div>
        <!-- 页面尾部结束 -->
        <!-- 内容结束 -->
        <div class="index-footer clearfix">
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
                <img src="../../assets/images/index-order.png">
                <img src="../../assets/images/index-order-active.png" class="turn-off-active">
                <p>订单</p>
            </router-link>
            <router-link to='/person'>
                <img src="../../assets/images/index-person.png" class="turn-off-active">
                <img src="../../assets/images/index-person-active.png">
                <p class="p-active">我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import '../../assets/css/user/userInfo.css'

export default {
    name: 'person'
}
</script>