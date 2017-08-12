<template>
<div class="refundDeil">
    <!-- 头部开始 -->
    <div class="userInfo-header clearfloat">
        <div onclick="window.history.go(-1)">
            <img src="../../assets/images/group6.png">
        </div>
        <span>退款详情</span>
        <div class="consult" style="display: none;">
            <span>协商记录</span>
        </div>
    </div>
    <!-- 头部结束 -->
    <!-- 内容开始 -->
    <div class="consult-time clearfloat" style="display: none;">
        <span>已申请客服介入，待处理</span>
        <span>2017-05-31  10:40</span>
    </div>
    <div class="consult-time consult-time1 clearfloat" style="display: none;">
        <span>卖家拒绝了您的退款申请</span>
        <span>2017-05-31  10:40</span>
    </div>
    <div class="consult-time consult-time2 clearfloat">
        <span>卖家已同意退款，退款成功</span>
        <span>2017-05-31  10:40</span>
    </div>
    <div class="consult-time consult-time2 clearfloat">
        <img src="../../assets/images/clock.png">
        <span>倒计时：23时28分30秒</span>
        <span></span>
    </div>
    <div class="consult-due">
        <span>请店家处理退款申请</span>
    </div>
    <!--  <div class="consult-deil consult-return">
    	<ul>
    		<li class="clearfloat">
    			<span>退款金额</span>
    			<span>¥300</span>
    		</li>
    		<li class="clearfloat">
    			<span>退款金额已原路退换到支付账户，优惠券已退还
    			</span>
    			<span></span>
    		</li>
    	</ul>
    </div>
    <div class="return-date">
    	<span>到账时间按照银行到账时间为准（约需1-3个工作日）</span>
    </div> -->
    <div class="consult-choose">
        <ul>
            <li>
                <!-- <ol class="normal-style">
                    <li>
                        <span>您也可以选择撤销该退款申请，继续接受该服务</span>
                    </li>
                    <li>
                        <span>您可以修改客服介入申请</span>
                    </li>
                </ol>
                <ol class="normal-style">
                    <li>
                        <span>您可以选择修改退款申请，再次提交给卖家</span>
                    </li>
                    <li>
                        <span>您也可以选择撤销该退款申请，继续接受该服务</span>
                    </li>
                    <li>
                        <span>您可以申请客服介入，并说明您的退款理由，由平台进行仲裁</span>
                    </li>
                </ol> -->
                <ol class="normal-style">
                    <li>
                        <span>如果同意，将直接退款给买家</span>
                    </li>
                    <li>
                        <span>如果拒绝，可以要求客服介入处理</span>
                    </li>
                    <li>
                        <span>如果逾期未处理，系统将自动退款给买家</span>
                    </li>
                </ol>
            </li>
            <li class="clearfloat choose-btn">
                <div>
                    <span>撤销退款申请</span>
                </div>
                <div>
                    <span>申请客服介入</span>
                </div>
            </li>
            <!-- <li class="clearfloat choose-btn choose-btn1">
                <div>
                    <span>撤销退款申请</span>
                </div>
                <div>
                	<span>修改退款申请</span>
                </div>
                <div>
                    <span>申请客服介入</span>
                </div>
            </li> -->
        </ul>
    </div>
    <div class="consult-deil">
        <ul>
            <li class="clearfloat">
                <span>退款编号</span>
                <span>ET775279070221523</span>
            </li>
            <li class="clearfloat">
                <span>申请退款时间</span>
                <span>2017-06-08  15：30：20</span>
            </li>
            <li class="clearfloat">
                <span>需要退款金额</span>
                <span>¥300</span>
            </li>
            <li class="clearfloat">
                <span>退款原因</span>
                <span>其他</span>
            </li>
            <li class="clearfloat">
                <span>退款说明</span>
                <div>
                    <input type="text" name="" placeholder="填写退款说明">
                </div>
            </li>
        </ul>
    </div>
    </div>
    <!-- 内容结束 -->
</template>
<script type="text/javascript">
import '../../assets/css/refund/refundDeil.css';
export default {
    name: 'refundDeil',
    data: function() {
        return {}
    },
    methods: {}
}
</script>