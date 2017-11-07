<template>
	<div class="look-rule">
        <div class="close">
            <span @click="ruleShow"><em>×</em>关闭</span>
        </div>
        <div class="rule-content" id="rule">
<!--         	<div class="brands"></div>
        	<div class="hr"></div>
        	<div class="context" data-noscroll="true">
        		<p>1、11月6-11日卡友快速擦出卡车车模，挑战手速</p>
        		<p>2、参与活动成绩可多次提交，记录最短用时</p>
        		<p>3、每天截止24点，次日10点展示排行榜</p>
        		<p>4、每位参与用户均可获得1卡路里奖励</p>
        		<p>5、每天排行榜前5名获得车模奖励</p>
        		<p>6、排名第6-10可获得99卡路里奖励，11-100可获得28卡路里奖励，100-300可获得8卡路里奖励</p>
        		<p>7、为方便奖品顺利送到您手中，请将个人中心绑定有效手机号</p>
        		<p>8、最终解释权归卡车之家所有</p>
        	</div>
        	<div class="images">
        		<div class="car">
        			<img src="https://s.kcimg.cn/wap/images/shaveImg/car.png" alt="">
        		</div>
        		<div class="car1">
        			<img src="https://s.kcimg.cn/wap/images/shaveImg/car1.png" alt="">
        		</div>
        	</div> -->
        </div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      ruleShow () {
        this.$emit('ruleShow')
      }
    },
    mounted(){
        let rule = document.querySelector('#rule');
        let ruleContent = document.querySelector('#ruleContent')
        if(ruleContent){
            rule.innerHTML = ruleContent.innerHTML
        }
    }
  }
</script>

<style>
	.look-rule{position: fixed;top:0;left:0;width:100%;height: 100%;background-color: rgba(0,0,0,.6);z-index:50;}
	.look-rule .close{clear:both;overflw:hidden;text-align: right;font-family: 'font';}
    .look-rule .close span{display:inline-block;margin-top: 20px;margin-right:50px;width:160px;height:62px;color:#fff;font-size:30px;line-height:62px;text-align: center;background:url('https://s.kcimg.cn/wap/images/shaveImg/clone.png') no-repeat 0 0;}
    .look-rule .close em{font-size:36px;margin-right: 5px}
    .look-rule .rule-content{width:720px;height:1072px;padding:0 75px;margin:10px auto 0;overflow:hidden;box-sizing:border-box;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/rule-bg.png');}
    .look-rule .brands{width:570px;height:330px;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/brands.png');margin:50px auto 0;}
    .look-rule .hr{width: 550px;height:2px;margin:30px auto;background-color:rgba(61,15,140,.5);}
    .look-rule .context{height:440px;overflow-y: scroll;-webkit-overflow-scrolling: touch;}
    .look-rule .context p{color:#fff;font-size:26px;line-height: 46px;text-align: left}
    .look-rule .context p a{color:#fff;text-decoration: underline;}
    .look-rule .images{margin-top:10px;clear: both;overflow: hidden;}
	.look-rule .images div{float:left;border-radius: 10px;background-color:rgba(255,255,255,.1);}
	.look-rule .car{width:302px;height:135px;margin-right:16px;}
	.look-rule .car1{width:252px;height:136px;}
</style>