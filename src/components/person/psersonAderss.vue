<template>
    <div>
        <!-- 头部开始 -->
        <div class="userInfo-header">
            <div onclick="window.history.go(-1)">
                <img src="../../assets/images/group6.png">
            </div>
            <span>常用地址</span>
        </div>
        <!-- 头部结束 -->
        <!-- 地址详细信息开始 -->
        <div class="user-adress">
            <div class="clearfix user-adress-info">
                <span>李先生</span>
                <span>13699798996</span>
            </div>
            <div>
                <span class="user-adress-active">默认地址</span>
                <span class="user-adress-deil">广东省深圳罗湖区嘉宾路城市天地广场东广场座7楼，艾美e族电子商务有限公司。</span>
            </div>
        </div>
        <div class="user-adress-button">
            <span>编辑</span><span>删除</span>
        </div>
        <div class="user-adress">
            <div class="clearfix user-adress-info">
                <span>李先生</span>
                <span>13699798996</span>
            </div>
            <div>
                <span class="user-adress-deil">广东省深圳罗湖区嘉宾路城市天地广场东广场座7楼，艾美e族电子商务有限公司。</span>
            </div>
        </div>
        <div class="user-adress-button">
            <span>编辑</span><span>删除</span>
        </div>
        <div class="user-adress">
            <div class="clearfix user-adress-info">
                <span>李先生</span>
                <span>13699798996</span>
            </div>
            <div>
                <span class="user-adress-deil">广东省深圳罗湖区嘉宾路城市天地广场东广场座7楼，艾美e族电子商务有限公司。</span>
            </div>
        </div>
        <div class="user-adress-button">
            <span>编辑</span><span>删除</span>
        </div>
        <!-- 地址详细信息结束 -->
        <!-- 页面尾部开始 -->
        <div class="userInfo-footer my-footer1">
            <router-link to="personAdressNew">
                <span>新建地址</span>
            </router-link>
        </div>
        <!-- 页面尾部结束 -->
    </div>
</template>
<script>
import '../../assets/css/user/userAdress.css'

export default {
    name: 'userAderss'
}
</script>