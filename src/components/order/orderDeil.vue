<template>
    <div class="orderDeil">
        <!-- 头部开始 -->
        <div class="userInfo-header">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>订单详情</span>
        </div>
        <div class="header-info clearfloat">
            <ul>
                <li>
                    <span>等待支付</span>
                </li>
                <li>
                    <span>订单编号</span>
                    <span>20170531103059001</span>
                </li>
            </ul>
            <img src="../../assets/images/group10.png" style="display:none;">
            <img src="../../assets/images/group12.png" style="display: none;">
            <img src="../../assets/images/group18.png" style="display: none;">
            <img src="../../assets/images/package.png">
        </div>
        <div class="header-info clearfloat header-info1">
            <ul>
                <li>
                    <span>待退款</span>
                </li>
                <li>
                    <span>订单编号</span>
                    <span>20170531103059001</span>
                </li>
            </ul>
        </div>
        <!-- 头部结束 -->
        <!-- 商品详情开始 -->
        <div class="goodsDeil">
            <div class="goods-header">
                <div class="goods-shop">
                    <img src="../../assets/images/e.png">
                    <span>丽康颜美容馆</span>
                </div>
                <div class="go-btn">
                    <router-link to="/shopDeil">
                        <img src="../../assets/images/group3.png">
                    </router-link>
                </div>
            </div>
            <ul style="padding:0;">
                <!-- <li class="clearfloat goods-list">
                <img src="../../assets/images/goods-list1.png">
                <div>
                    <p>六胜肽无龄肌</p>
                    <p class="goods-btn">到店服务</p>
                    <span class="goods-price">¥480</span>
                </div>
            </li> -->
                <li class="clearfloat goods-list">
                    <router-link to="/serveDeil">
                        <img src="../../assets/images/goods-list1.png">
                        <div>
                            <p>六胜肽无龄肌<span>¥480</span></p>
                            <p class="goods-btn">到店服务</p>
                            <span>上门费</span>
                            <span class="goods-price goods-price1">¥50</span>
                        </div>
                    </router-link>
                </li>
                <li class="clearfloat" style="border-bottom:1px solid rgb(229,229,229);height:54px;">
                    <span class="buy-second btn-active">再次购买</span>
                </li>
                <li class="clearfloat" style="border-bottom:1px solid rgb(229,229,229);height:54px;">
                    <span class="buy-second book-btn">退款</span>
                    <span class="buy-second book-btn btn-active">预约服务时间</span>
                    <span class="buy-second">二维码验证</span>
                </li>
                <li class="clearfloat" style="border-bottom:1px solid rgb(229,229,229);height:54px;">
                    <router-link to="refundDeil">
                        <span class="buy-second btn-active connect-btn">
                    
                    退款详情
                    
                    </span>
                    </router-link>
                    <span class="buy-second connect-btn" style="margin-right:35px;">联系店铺</span>
                </li>
                <li class="clearfloat">
                    <span>订单总价</span>
                    <span>¥430</span>
                </li>
                <li class="clearfloat real-pay">
                    <span>实付金额</span>
                    <span>¥430</span>
                </li>
                <li class="clearfloat">
                    <span>支付方式</span>
                    <span>微信支付</span>
                </li>
                <li class="clearfloat">
                    <span>备注信息</span>
                    <input type="text" placeholder="填写备注">
                </li>
            </ul>
            <div class="serve-msg">
                <ul>
                    <li>
                        <h5>服务信息</h5>
                    </li>
                    <li class="clearfloat">
                        <span>店长</span>
                        <span>艾小美  13828394921</span>
                    </li>
                    <li class="clearfloat">
                        <span>美容师</span>
                        <span>艾小美</span>
                    </li>
                    <li class="clearfloat">
                        <span>预约人</span>
                        <span>艾小美</span>
                    </li>
                    <li class="clearfloat">
                        <span>服务门店</span>
                        <span>丽颜康美容院</span>
                    </li>
                    <li class="clearfloat site-show">
                        <span class="site-adress">门店地址</span>
                        <div class="clearfloat">
                            <img src="../../assets/images/site-icon.png">
                            <p>广东省深圳市罗湖区深南东路百货广场大厦东座1505</p>
                        </div>
                    </li>
                    <li class="clearfloat link-way">
                        <div>
                            <img src="../../assets/images/group45.png">
                            <span>联系店长</span>
                        </div>
                        <div>
                            <img src="../../assets/images/icon.png">
                            <span>拨打电话</span>
                        </div>
                    </li>
                    <li class="clearfloat link-way" style="display: none;">
                        <div>
                            <img src="../../assets/images/group45.png">
                            <span>联系美容师</span>
                        </div>
                        <div>
                            <img src="../../assets/images/icon.png">
                            <span>拨打电话</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="order-time clearfloat">
            <span>下单时间</span>
            <span>2017-05-31  10：30</span>
        </div>
        <div class="order-time clearfloat">
            <span>交易关闭时间</span>
            <span>2017-05-31  10：30</span>
        </div>
        <div class="order-time clearfloat">
            <span>申请退款时间</span>
            <span>2017-05-31  10：30</span>
        </div>
        <div class="order-btn clearfloat">
            <span>取消订单</span>
            <span><router-link to="/pay">去支付</router-link></span>
        </div>
        <!-- <div class="userInfo-footer my-footer">
        <span>删除订单</span>
    </div> -->
        <!-- 商品详情结束 -->
    </div>
</template>
<script type="text/javascript">
import '../../assets/css/order/orderDeil.css';
export default {
    name: 'order',
    data: function() {
        return {}
    },
    methods: {}
}
</script>
<style type="text/css">
h5 {
    font-weight: normal;
}
.orderDeil .order-btn span:nth-child(2) a{
    color:#fff;
}
</style>