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
                    <div>
                        <img src="../../assets/images/group2.png">
                    </div>
                    <div class="right-deil">
                        <span>美约俏佳人美容院</span>
                        <div>
                            <img src="../../assets/images/shape-gold.png">
                            <img src="../../assets/images/shape-grey.png">
                            <img src="../../assets/images/shape-grey.png">
                            <img src="../../assets/images/shape-grey.png">
                            <img src="../../assets/images/shape-grey.png">
                        </div>
                        <span class="big-deil">认证商家</span>
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
                        <span>100%</span>
                    </li>
                </ul>
                <ul>
                    <li class="clearfloat">
                        <span>环境满意度</span>
                        <span>100%</span>
                    </li>
                    <li class="clearfloat" style="border:none;">
                        <span>粉丝</span>
                        <span>13000</span>
                    </li>
                </ul>
            </div>
            <div class="shop-content2">
                <ul>
                    <li class="clearfloat shop-adress">
                        <span>营业时间</span>
                        <div>
                            周一至周六 09：00-23：00
                        </div>
                        <!-- <span></span> -->
                    </li>
                    <li class="clearfloat">
                        <span>服务电话</span>
                        <span>027-88888888</span>
                    </li>
                </ul>
                <ul>
                    <li class="clearfloat shop-adress">
                        <span>门店地址</span>
                        <div>
                            <img src="../../assets/images/site-icon.png">
                            <div>
                                广东省深圳市罗湖区深南东路百货广场大厦东座1505
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
                <li class="clearfloat">
                    <img src="../../assets/images/icon2.png">
                    <div>
                        <p>艾小美</p>
                        <p>星级评分</p>
                        <p>满意度：90%</p>
                    </div>
                    <div class="deil-beauty-right">
                        <span>五年经验</span>
                        <img src="../../assets/images/group45.png">
                    </div>
                </li>
                <li class="clearfloat">
                    <img src="../../assets/images/icon2.png">
                    <div>
                        <p>艾小美</p>
                        <p>星级评分</p>
                        <p>满意度：90%</p>
                    </div>
                    <div class="deil-beauty-right">
                        <span>五年经验</span>
                        <img src="../../assets/images/group45.png">
                    </div>
                </li>
                <li class="clearfloat">
                    <img src="../../assets/images/icon2.png">
                    <div>
                        <p>艾小美</p>
                        <p>星级评分</p>
                        <p>满意度：90%</p>
                    </div>
                    <div class="deil-beauty-right">
                        <span>五年经验</span>
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


export default {
    name: 'shopDeil',
    data: function() {
        return {
            data: []
        }
    },
    created: function() {
        // $(".change-btn").find("li").click(function() {
        //     $(".active").removeClass("active");
        //     $(this).find("span").addClass("active");
        // });

        // $(".shop-adress").find("span").eq(0).css("line-height", $(".shop-adress").height() + "px");

        // $(".comment-btn").click(function() {
        //     $(".btn-active").removeClass("btn-active");
        //     $(this).addClass("btn-active");
        // })

        // $(".serve-btn").children("li").click(function() {
        //     $(".serve-active").removeClass("serve-active");
        //     $(this).find("span").addClass("serve-active");
        // })

        // $(".more-btn").click(function() {
        //     if ($(".show-link").hasClass("hide")) {
        //         $(".show-link").removeClass("hide");
        //     } else {
        //         $(".show-link").addClass("hide");
        //     }
        // })

        // $('[data-toggle="tooltip"]').tooltip()
        // let commentHeight = $(".comment-com").children(".tooltip").outerHeight();
        // $(".comment-com").css("height", $(".comment-com").children(".tooltip").outerHeight() + "px");
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