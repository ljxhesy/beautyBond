<template>
    <div class="beauty">
        <!-- 头部开始 -->
        <div class="userInfo-header clearfloat">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>{{titleName}}</span>
        </div>
        <!-- 头部结束 -->
        <!-- 条件筛选开始 -->
        <div class="sort-content">
            <ul class="clearfloat">
                <li id="sort-mix" class="sort-active" @click="sortChange($event,'isNew')">
                    <span>新品</span>
                    <!--   <i class="iconfont icon-change">&#xe60d;</i> -->
                </li>
                <li id="sort-sales" @click="sortChange($event,'saleCount')">
                    <span>销量优先</span>
                </li>
                <li id="sort-price" @click="sortChange($event,'price')">
                    <span>价格</span>
                    <i class="iconfont sort-top">&#xe620;</i>
                    <i class="iconfont sort-bottom">&#xe60d;</i>
                </li>
                <li id="sort-choose" @click="showPOP">
                    <span>筛选</span>
                    <i class="iconfont">&#xe61f;</i>
                </li>
            </ul>
        </div>
        <!-- 条件筛选结束 -->
        <!-- 内容开始 -->
        <div class="content-class clearfloat">
            <div class="content-list">
                <ol class="clearfloat">
                    <li v-for="item in productList">
                        <router-link to="/serveDeil">
                            <img :src="item.coverImg">
                            <h3>{{item.productName}}</h3>
                            <div>
                                <span>¥{{item.salePrice/100}}</span>
                                <span>¥{{item.originalPrice/100}}</span>
                            </div>
                        </router-link>
                    </li>
                </ol>
            </div>
        </div>
        <!-- 内容结束 -->
        <mt-popup v-model="popupVisible" position="right">
            <div class="beauty-alert">
                <h3>美容</h3>
                <h5>类型</h5>
                <div class="beauty-sign">
                    <button class="beauty-sign-active" @click="signChange">品牌服务</button>
                    <button @click="signChange">自营服务</button>
                </div>
                <h5>价格区间</h5>
                <div class="beauty-price">
                    <input type="number" id="lowPrice" name="" placeholder="最低价格">
                    <span>—</span>
                    <input type="number" id="highPrice" name="" placeholder="最高价格">
                </div>
                <h5>服务时长</h5>
                <div class="beauty-time">
                    <button @click="timeChange">30分钟以下</button>
                    <button @click="timeChange">30分钟-1个小时</button>
                    <button @click="timeChange">1个小时以上</button>
                </div>
                <div class="beauty-btn clearfloat">
                    <button @click="resetChoose">重置</button>
                    <button class="button-active" @click="closePOP">确定</button>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script type="text/javascript">
import Vue from "vue"
import "../../assets/global/public.css"
import '../../assets/css/classes/beauty.css';
import $ from 'jquery';
import axios from "axios";
import baseUrl from "../../../baseUrl.js";

import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

export default {
    name: 'beauty',
    data() {
        return {
            data: [],
            shopId:"",
            popupVisible: false,
            titleName: '',
            productList: [],
            pickClass:{
                "isNew":1001,
                "saleCount":1001,
                "price":1001
            }
        }
    },
    beforeMount() {
        $(".beauty").css("height", $("body").innerHeight() + "px");
        let shopStr = this.$route.path;
        let shopIdNum = shopStr.substring(shopStr.indexOf(":") + 1);
        this.shopId = shopIdNum;
        switch (this.shopId) {
            case "1":
                this.titleName = "美容";
                break;
            case "2":
                this.titleName = "健身";
                break;
            case "3":
                this.titleName = "化妆";
                break;
            case "4":
                this.titleName = "医美";
                break;
            case "5":
                this.titleName = "美发";
                break;
            default:
                console.log("titleName is not definded");
        }
        //首页分类数据接口
        axios.get(baseUrl["weigeUrl"] + "/product/front/findByPage", {
                params: {
                    "cateId": this.shopId,
                    "pageNo": 1,
                    "pageSize ": 4,
                    "conditions ": {
                        "isNew": 1001
                    }
                }
            })
            .then(function(res) {
                for (let value of res.data.queryResult) {
                    this.productList.push(value);
                }
            }.bind(this))
    },
    mounted() {
        $(".beauty").css("height", $("body").innerHeight() + "px");
        $(".mint-popup-right").css("height", $("body").innerHeight());
    },
    update() {

    },
    methods: {
        signChange: function(e) {
            $(".beauty-sign-active").removeClass("beauty-sign-active");
            $(e.target).addClass("beauty-sign-active");
        },
        timeChange: function(e) {
            $(".beauty-time-active").removeClass("beauty-time-active");
            $(e.target).addClass("beauty-time-active")
        },
        resetChoose: function() {
            $(".beauty-sign-active").removeClass("beauty-sign-active");
            $(".beauty-time-active").removeClass("beauty-time-active");
            $("#lowPrice").val("");
            $("#highPrice").val("");
            $(".beauty-sign").find("button").eq(0).addClass("beauty-sign-active");
        },
        showPOP: function() {
            this.popupVisible = true;
        },
        closePOP: function() {
            this.popupVisible = false;
        },
        sortChange: function(e,value) {
            $(".sort-active").removeClass("sort-active");
            $(e.target).addClass("sort-active");
            let conditions = {};

            conditions[value] = 1001;

            if(value=="price"){
                this.pickClass[value] == 1001? this.pickClass[value] == 1002:this.pickClass[value] == 1001;
                
            }

            // axios.get(baseUrl["weigeUrl"] + "/product/front/findByPage", {
            //     params: {
            //         "cateId": this.shopId,
            //         "pageNo": 1,
            //         "pageSize ": 4,
            //         "conditions ": conditions
            //     }
            // }).then(function(res){
            //     console.log(res);
            // }.bind(this));
        }
    }
}
</script>