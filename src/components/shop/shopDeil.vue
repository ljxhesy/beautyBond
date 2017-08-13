<template>
    <div class="collectionComponent">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>店铺详情</span>
            <div class="tooltip bottom show-link hide" role="tooltip">
                <div class="tooltip-arrow"></div>
                <div class="tooltip-inner">
                    <ul>
                        <li>
                            <span>消息</span>
                            <div class="message-num">
                                <span>20</span>
                            </div>
                        </li>
                        <li>
                            <span>首页</span>
                        </li>
                        <li>
                            <span>订单</span>
                        </li>
                        <li>
                            <span>我的</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more-btn">
                <img src="../../assets/images/more.png">
            </div>
            <div class="share-btn" style="display: none;">
                <img src="../../assets/images/share.png">
            </div>
        </div>
        <!-- 头部结束 -->
        <!-- 导航栏开始 -->
        <div class="shop-deil-list">
            <div class="big-pic">
                <div class="clearfloat">
                    <div id="shopDeilIcon">
                        <img :src="shopDeil.storeLogo">
                    </div>
                    <div class="right-deil">
                        <span>{{shopDeil.storeName}}</span>
                        <div>
                            <img src="../../assets/images/shape-gold.png" v-for="item in brightStar">
                            <img src="../../assets/images/shape-grey.png" v-for="key in grayStar">
                        </div>
                        <span class="big-deil" v-if="shopDeil.storeAuth">认证商家</span>
                        <span class="big-deil">保证金</span>
                    </div>
                </div>
                <i>关注</i>
            </div>
            <div class="shop-deil-btn">
                <ul class="clearfloat change-btn">
                    <li @click="allServe"><span>全部服务</span></li>
                    <li @click="allbeauty"><span>美容师</span></li>
                    <li @click="allComment"><span>评价</span></li>
                    <li @click="allShop"><span class="active">店铺介绍</span></li>
                </ul>
            </div>
        </div>
        <!-- 导航栏结束 -->
        <!-- 内容详情开始 -->
        <!-- 全部服务详情开始 -->
        <div class="shop-serve" style="display: none;">
            <ul class="clearfloat serve-btn">
                <li>
                    <span class="serve-active">热销</span>
                </li>
                <li>
                    <span>上新</span>
                </li>
                <li>
                    <span>价格</span>
                    <img src="../../assets/images/combinedShape.png">
                </li>
            </ul>
        </div>
        <div class="shop-serve-deil" style="display: none;">
            <ul class="clearfloat">
                <li>
                    <router-link to="serveDeil">
                        <img src="../../assets/images/deilList.png">
                        <p>无针水光活化细胞展现透亮，清爽美白第一步</p>
                        <div>
                            <span class="new-price-unit">￥</span><span class="new-price">280.00</span>
                            <span class="old-price">￥500</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="serveDeil">
                        <img src="../../assets/images/deilList.png">
                        <p>无针水光活化细胞展现透亮，清爽美白第一步</p>
                        <div>
                            <span class="new-price-unit">￥</span><span class="new-price">280.00</span>
                            <span class="old-price">￥500</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="serveDeil">
                        <img src="../../assets/images/deilList.png">
                        <p>无针水光活化细胞展现透亮，清爽美白第一步</p>
                        <div>
                            <span class="new-price-unit">￥</span><span class="new-price">280.00</span>
                            <span class="old-price">￥500</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="serveDeil">
                        <img src="../../assets/images/deilList.png">
                        <p>无针水光活化细胞展现透亮，清爽美白第一步</p>
                        <div>
                            <span class="new-price-unit">￥</span><span class="new-price">280.00</span>
                            <span class="old-price">￥500</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 全部服务详情结束 -->
        <!-- 店铺详情开始 -->
        <div class="shop-content">
            <div class="shop-content1">
                <ul>
                    <li class="clearfloat">
                        <span>开店时间</span>
                        <span>2017-07-30</span>
                    </li>
                    <li class="clearfloat">
                        <span>服务满意度</span>
                        <span>{{shopDeil.storeServicecredit+'%'}}</span>
                    </li>
                </ul>
                <ul>
                    <li class="clearfloat">
                        <span>环境满意度</span>
                        <span>{{shopDeil.storeDesccredit+'%'}}</span>
                    </li>
                    <li class="clearfloat" style="border:none;">
                        <span>粉丝</span>
                        <span>{{shopDeil.storeFocus}}</span>
                    </li>
                </ul>
            </div>
            <div class="shop-content2">
                <ul>
                    <li class="clearfloat shop-adress">
                        <span>营业时间</span>
                        <div>
                            {{shopDeil.storeTime}}
                        </div>
                        <!-- <span></span> -->
                    </li>
                    <li class="clearfloat">
                        <span>服务电话</span>
                        <span>{{shopDeil.storeTel}}</span>
                    </li>
                </ul>
                <ul>
                    <li class="clearfloat shop-adress">
                        <span>门店地址</span>
                        <div>
                            <img src="../../assets/images/site-icon.png">
                            <div id="shopDeil-site">
                                    {{shopDeil.storeAddressArea+shopDeil.storeAddress}}   
                            </div>
                        </div>
                    </li>
                    <li class="clearfloat">
                        <span>实拍照片</span>
                    </li>
                    <li style="border:none" class="clearfloat">
                        <img src="../../assets/images/list-img1.png">
                        <img src="../../assets/images/list-img2.png">
                    </li>
                </ul>
            </div>
            <div class="shop-content3">
                <ul>
                    <li>
                        <span>保证金</span>
                        <span>已缴纳保证金</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 店铺详情结束 -->
        <!-- 评价详情开始 -->
        <div class="comment-content1" style="display: none;">
            <div class="clearfloat">
                <div class="comment-btn btn-active">
                    <span>全部</span><span>(100)</span>
                </div>
                <div class="comment-btn">
                    <span>好评</span><span>(100)</span>
                </div>
                <div class="comment-btn">
                    <span>有图</span><span>(100)</span>
                </div>
                <div class="comment-btn">
                    <span>中评</span><span>(100)</span>
                </div>
                <div class="comment-btn">
                    <span>追加</span><span>(100)</span>
                </div>
                <div class="comment-btn">
                    <span>差评</span><span>(100)</span>
                </div>
            </div>
            <div class="all-comment">
                <div class="comment-deil clearfloat">
                    <img src="../../assets/images/group2.png">
                    <div>
                        <strong>136****1354</strong>
                        <span>超出预期</span>
                    </div>
                    <span>2017-07-30</span>
                </div>
                <p>不一样的体验，挺舒服、挺专业的、赞赞赞、服务也挺好、不错。</p>
                <div class="comment-pic clearfloat">
                    <img src="../../assets/images/list-img1.png">
                    <img src="../../assets/images/list-img1.png">
                    <img src="../../assets/images/list-img1.png">
                </div>
                <div class="comment-com">
                    <div class="tooltip bottom" role="tooltip" style="opacity: 1;">
                        <div class="tooltip-arrow"></div>
                        <div class="tooltip-inner">
                            美容师回复：谢谢亲的评价，我会继续努力加油、让亲体验更好的服务！
                        </div>
                    </div>
                </div>
            </div>
            <div class="all-comment">
                <div class="comment-deil clearfloat">
                    <img src="../../assets/images/group2.png">
                    <div>
                        <strong>136****1354</strong>
                        <span>超出预期</span>
                    </div>
                    <span>2017-07-30</span>
                </div>
                <p>不一样的体验，挺舒服、挺专业的、赞赞赞、服务也挺好、不错。</p>
                <div class="comment-pic clearfloat">
                    <img src="../../assets/images/list-img1.png">
                    <img src="../../assets/images/list-img1.png">
                    <img src="../../assets/images/list-img1.png">
                </div>
                <div class="comment-com">
                    <div class="tooltip bottom" role="tooltip" style="opacity: 1;">
                        <div class="tooltip-arrow"></div>
                        <div class="tooltip-inner">
                            美容师回复：谢谢亲的评价，我会继续努力加油、让亲体验更好的服务！
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 评价详情结束 -->
        <!-- 美容师详情开始 -->
        <div class="deil-beauty" style="display: none;">
            <ul>
                <li class="clearfloat" v-for="key in beautyPerson">
                    <img src="../../assets/images/icon2.png">
                    <div>
                        <p>{{key.name}}</p>
                        <p>星级评分</p>
                        <p>满意度：{{key.beauticianDesccredit}}%</p>
                    </div>
                    <div class="deil-beauty-right">
                        <span>{{key.years}}年经验</span>
                        <img src="../../assets/images/group45.png">
                    </div>
                </li>
            </ul>
        </div>
        <!-- 美容师详情结束 -->
        <!-- 内容详情结束 -->
        <!-- 页面尾部开始 -->
        <div class="userInfo-footer my-footer" style="display: none;">
            <span>联系TA</span>
        </div>
        <!-- 页面尾部结束 -->
    </div>
</template>
<script type="text/javascript">
import '../../assets/css/shop/shopDeil.css';
import $ from 'jquery'
import axios from "axios";
import baseUrl from "../../../baseUrl.js"

export default {
    name: 'shopDeil',
    data: function() {
        return {
            data: [],
            brightStar: [],
            grayStar: [],
            shopDeil: {},
            beautyPerson:[]
        }
    },
    created: function() {},
    beforeMount: function() {
        let shopStr = this.$route.path;
        let shopIdNum = shopStr.substring(shopStr.indexOf(":") + 1);
        axios.get(baseUrl["listUrl"] + "/shop/front/findById?id=" + shopIdNum) //店铺详情
            .then(function(res) {
                this.shopDeil = res.data.data;
                console.log(this.shopDeil);
                let starNum = this.shopDeil.gradeId + 0;
                for (let i = 0; i < starNum; i++) { //金色等级
                    this.brightStar.push(i);
                }
                for (let k = 0; k < 5 - starNum; k++) { //灰色等级
                    this.grayStar.push(k);
                }
            }.bind(this));

        axios.get(baseUrl["listUrl"] + "/shopBeautician/front/selectByStoreId?storeId=" + shopIdNum)
        .then(function(res){
            this.beautyPerson = res.data.data;
        }.bind(this));          //店铺美容师
    },
    mounted: function() {

    },
    methods: {
        allServe: function(e) {
            $(".active").removeClass("active");
            $(e.target).addClass("active");
            $(e.target).find("span").addClass("active");
            $(".shop-serve").css("display", "block");
            $(".shop-serve-deil").css("display", "block");
            $(".deil-beauty").css("display", "none");
            $(".comment-content1").css("display", "none");
            $(".shop-content").css("display", "none");
        },
        allbeauty: function(e) {
            $(".active").removeClass("active");
            $(e.target).addClass("active");
            $(e.target).find("span").addClass("active");
            $(".shop-serve").css("display", "none");
            $(".shop-serve-deil").css("display", "none");
            $(".deil-beauty").css("display", "block");
            $(".comment-content1").css("display", "none");
            $(".shop-content").css("display", "none");
        },
        allComment: function(e) {
            $(".active").removeClass("active");
            $(e.target).addClass("active");
            $(e.target).find("span").addClass("active");
            $(".shop-serve-deil").css("display", "none");
            $(".shop-serve").css("display", "none");
            $(".deil-beauty").css("display", "none");
            $(".comment-content1").css("display", "block");
            $(".shop-content").css("display", "none");
        },
        allShop: function(e) {
            $(".active").removeClass("active");
            $(e.target).addClass("active");
            $(e.target).find("span").addClass("active");
            $(".shop-serve-deil").css("display", "none");
            $(".shop-serve").css("display", "none");
            $(".deil-beauty").css("display", "none");
            $(".comment-content1").css("display", "none");
            $(".shop-content").css("display", "block");
        }
    }
}
</script>