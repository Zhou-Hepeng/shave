<template>
    <div class="index">
        <div class="rule">
            <span @click="ruleShow">奖品规则</span>
        </div>
        <div class="title">
        </div>
        <div class="sub-title">
        </div>
        <div class="goat">
            <!-- 眼睛 -->
            <div class="eye">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <!-- 胳膊 -->
            <div class="head"></div>
        </div>
        <!-- 美女背影 -->
        <div class="belle">
        </div>
        <!-- 按钮 -->
        <div class="buttons">
          <div class="begin-button" @click="beginGame">
            开始游戏
          </div>
          <div class="ranking-button" @click="lookRank">
            查看排行
          </div>
        </div>
        <lookRule v-if="ruleShowPop" @ruleShow="ruleShow"></lookRule>
    </div>
</template>

<style scoped>
    .index{width:100%;height:100%;overflow: hidden;background:url('https://s.kcimg.cn/wap/images/shaveImg/index-bg.jpg') no-repeat 0 0;background-size:100% 100%;}
    .rule{clear:both;overflw:hidden;text-align: right;
    font-family: 'font';}
    .rule span{display:inline-block;margin-top: 46px;margin-right:32px;width:130px;height:48px;color:#fff;font-size:24px;line-height:48px;text-align: center;background:url('https://s.kcimg.cn/wap/images/shaveImg/look-rule.png') no-repeat 0 0;}
    .title{margin: 35px auto 0;width:653px;height:194px;background:url('https://s.kcimg.cn/wap/images/shaveImg/title.png') no-repeat center center;transform: translate3d(-1000px,0,0) ;-webkit-transform: translate3d(-1000px,0,0);animation: title .6s ease-out .6s forwards;}
    @keyframes title {
      0% {
        -webkit-transform: translate3d(-1000px,0,0);
        transform: translate3d(-1000px,0,0);
      }

      100% {
        -webkit-transform: translate3d(0,0,0) scale(1);
        transform: translate3d(0,0,0) scale(1);
      }
    }
    .sub-title{margin: 16px auto 0;width:653px;height:86px;background-image:url('https://s.kcimg.cn/wap/images/shaveImg/sub-title.png');transform: translate3d(1000px,0,0);-webkit-transform: translate3d(1000px,0,0);animation: subtitle .6s ease-out .6s forwards;}
    @keyframes subtitle {
      0% {
        -webkit-transform: translate3d(1000px,0,0);
        transform: translate3d(1000px,0,0);
      }

      100% {
        -webkit-transform: translate3d(0,0,0) scale(1);
        transform: translate3d(0,0,0) scale(1);
      }
    }
    .goat{margin:45px 0 0 417px;width:274px;height:799px;background-image:url('https://s.kcimg.cn/wap/images/shaveImg/goat1.png');transform: translate3d(-463px,-355px,0) scale(.35);-webkit-transform: translate3d(-463px,-355px,0) scale(.35);opacity: .35;animation: goat .6s ease-out .6s forwards;}
    @keyframes goat {
      0% {
        -webkit-transform: translate3d(-443px,-335px,0) scale(.35);
        transform: translate3d(-443px,-335px,0) scale(.35);
        opacity: .35;
      }

      100% {
        -webkit-transform: translate3d(0,0,0) scale(1);
        transform: translate3d(0,0,0) scale(1);
        opacity: 1;
      }
    }
    .eye{clear: both;overflow: hidden;margin-right:29px;}
    .eye .left{position:absolute;left:27px;right:0;width:118px;height:109px;margin-top:133px;transform: scale(.7);-webkit-transform: scale(.7);animation: eye .2s ease-out 1s infinite;background-image:url('https://s.kcimg.cn/wap/images/shaveImg/eye2.png');}
    .eye .right{width:118px;height:109px;margin-top:133px;float: right;transform: scale(.7);-webkit-transform: scale(.7);animation: eye .2s ease-out 1s infinite;background-image:url('https://s.kcimg.cn/wap/images/shaveImg/eye2.png');}
    @keyframes eye {
      0% {
        -webkit-transform: scale(.4);
        transform: scale(.4);
      }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    .head{position:absolute;top:185px;left:-244px;width:320px;height:218px;background: url('https://s.kcimg.cn/wap/images/shaveImg/hand1.png') no-repeat top left;animation: head .25s linear 1.2s infinite;transform-origin:100% 100%;}
    @keyframes head {
      0% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }

      100% {
        -webkit-transform:scale(1);
        transform: scale(1);
      }
    }
    .belle{position:absolute;left:0;bottom:0;width:171px;height:938px;background-image:url('https://s.kcimg.cn/wap/images/shaveImg/belle.png');-webkit-transform: translate3d(-10px,0,0); transform: translate3d(-10px,0,0); animation: belle 1s ease-out;}
    @keyframes belle {
      0% {
        -webkit-transform: translate3d(-171px,0,0);
        transform: translate3d(-171px,0,0);
      }

      50% {
        -webkit-transform: translate3d(0,0,0);
        ransform: translate3d(0,0,0);
      }

      100% {
        -webkit-transform: translate3d(-20,0,0);
        transform: translate3d(-10px,0,0);
      }
    }
  .buttons{position:absolute;left:0;right:0;bottom:0;z-index:20;}
  .begin-button{width:396px;height:110px;margin:0 auto;color:#8123dc;font-size:52px;line-height: 100px;text-align: center;font-family: 'font';background-image:url('https://s.kcimg.cn/wap/images/shaveImg/begin-button.png');-webkit-transform: translate3d(0,329px,0);transform: translate3d(0,329px,0);animation: begin .3s linear .7s forwards;}
    @keyframes begin {
      0% {
        -webkit-transform: translate3d(0,329px,0);
        transform: translate3d(0,329px,0);
      }
      25% {
        -webkit-transform: translate3d(0,250px,0);
        transform: translate3d(0,250px,0)
      }

      50% {
        -webkit-transform: translate3d(0,147px,0);
        transform: translate3d(0,147px,0)
      }
      75% {
        -webkit-transform: translate3d(0,147px,0);
        ransform: translate3d(0,147px,0);
      }

      100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }
    }
  .ranking-button{width:344px;height:95px;margin:37px auto 87px;color:#8123dc;font-size:40px;line-height:95px;text-align: center;font-family: 'font';background-image:url('https://s.kcimg.cn/wap/images/shaveImg/ranking-button.png');-webkit-transform: translate3d(0,182px,0);transform: translate3d(0,182px,0);animation: ranking .2s ease-out .8s forwards;}
    @keyframes ranking {
      0% {
        -webkit-transform: translate3d(0,330px,0);
        transform: translate3d(0,330px,0);
      }

      50% {
        -webkit-transform: translate3d(0,110px,0);
        ransform: translate3d(0,110px,0);
      }

      100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }
    }
</style>

<script>
  import lookRule from './lookRule.vue'
  export default {
    components: {
      lookRule
    },
    data () {
      return {
        ruleShowPop:false,
        // 排行榜数据
        rankData:{
          myRankData:{}
        }
      }
    },
    created () {
      let info = sessionStorage.getItem('info')
      if(info){
          this.$router.push({name:'game',params:{getData:{}}})
      }
    },
    mounted(){
    },
    methods: {
      ruleShow () {
        this.ruleShowPop = !this.ruleShowPop
      },
      //点击开始游戏
      beginGame(){
        this.ajax('/m/2017110201/getgame.aspx',{},data => {
          if(data.data.result == 1){
            this.getData = data.data.data;
            this.$router.push({name:'game',params:{getData:this.getData}})
          }else{
            alert(data.data.data.mess)
          }
        },err => {
          alert('请连接网络')
        })
      },
      //进入排行榜
      lookRank(){
        this.$router.push({name:'rank'})
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to,'to')
        // 对路由变化作出响应...
      }
    }
  }
</script>