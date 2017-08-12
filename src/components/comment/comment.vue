<template>
   <div class="comment">
   	 <!-- 头部开始 -->
    <div class="userInfo-header clearfloat">
        <div onclick="window.history.go(-1)">
            <img src="../../assets/images/group6.png">
        </div>
        <span>发表评价</span>
    </div>
    <!-- 头部结束 -->
    <!-- 内容开始 -->
    <div class="comment-inside-content">
    	<div class="comment-content-header">
    		<img src="../../assets/images/goods-list1.png" alt="">
    		<span>六胜肽无龄肌</span>
    	</div>
    	
    </div>
    <!-- 内容结束 -->
   </div>
</template>
 <script type="text/javascript">
    import '../../assets/css/comment/comment.css';
    import $ from "jquery"
    import "../../assets/plugins/jquery-1.12.3.js"
    
    export default {
        name: 'comment',
        data: function() {
            return {
              
            }
        },
        mounted: function() {
            
        },
        updated: function() {
            
        },
        methods: {
          
        }
    }
    </script>