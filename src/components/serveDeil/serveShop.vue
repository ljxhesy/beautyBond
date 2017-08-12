<template>
  <div>
     <!-- 头部开始 -->
    <div class="userInfo-header clearfloat">
        <div onclick="window.history.go(-1)">
            <img src="../../assets/images/group6.png">
        </div>
        <span>店铺列表</span>
    </div>
    <!-- 头部结束 -->
    <!-- 店铺列表开始 -->
    <div class="choose-way clearfloat">
      <span class="choose-active">距离</span>
      <span>销量优先</span>
      <span>价格</span>
    </div>

    <div class="shop-intro">
        <router-link to="shopDeil">
        <div class="shop-content2 clearfloat">
            <img src="../../assets/images/list-img2.png">
            <ul>
                <li>
                    <h3>奈瑞儿塑身美颜（金光华店）</h3>
                </li>
                <li>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <span class="new-shop">新店</span>
                </li>
                <li>
                    <i class="iconfont site">&#xe60f;</i>
                    <span>罗湖区人民南麓2018号金光滑广场...</span>
                </li>
                <li class="list-site clearfloat">
                    <span>已售：254份</span>
                    <span>距我：1.5km</span>
                </li>
            </ul>
        </div>
        </router-link>
    </div>

    <div class="shop-intro">
    <router-link to="shopDeil">
        <div class="shop-content2 clearfloat">
            <img src="../../assets/images/list-img2.png">
            <ul>
                <li>
                    <h3>奈瑞儿塑身美颜（金光华店）</h3>
                </li>
                <li>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <i class="iconfont star">&#xe659;</i>
                    <span class="new-shop">新店</span>
                </li>
                <li>
                    <i class="iconfont site">&#xe60f;</i>
                    <span>罗湖区人民南麓2018号金光滑广场...</span>
                </li>
                <li class="list-site clearfloat">
                    <span>已售：254份</span>
                    <span>距我：1.5km</span>
                </li>
            </ul>
        </div>
        </router-link>
    </div>
    <!-- 店铺列表结束 -->
  </div>
</template>

<script type="text/javascript">
import '../../assets/css/serveDeil/serveShop.css';
import $ from 'jquery'
 export default {
  name:'serveShop',
  data:function(){
    return {
        data:[]
      }
  },
  created:function(){
  
  },
  methods:{
    
  }
 }

</script>
