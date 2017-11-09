<template>
	<div class="game">
		<div class="header">
			<div class="checkpoint">
				第<span>{{checkpoint}}</span>关
			</div>
			<div class="time">
				<span class="surface"></span>
				<span> {{minute ? minute : '00'}}</span>:
				<span> {{second ? second : '00'}}</span>:
				<span>{{millisecond ? millisecond : '000'}}</span>
			</div>
		</div>
		<!-- 刮刮乐内容 -->
		<div class="shave">
			<div :class="['content','content' + checkpoint,!loadBelle ? 'loadBelle' + checkpoint : '']" id="Container">
        <canvas id="canvas"></canvas>
      </div>
		</div>
		<!-- footer -->
		<div class="footer">
			<div class="finger"></div>
			<div class="subtitle">
				手指涂抹屏幕
				<p>刮开车模<span>背后的秘密...</span></p>
			</div>
		</div>
		<!-- 挑战成功 -->
		<div class="shave-end" v-if="shavePop">
			<div class="pop">
				<p class="evaluate">{{evaluate}}</p>
				<span>{{brandName[checkpoint-1]}}{{brandEvaluate}}</span>
				<div class="game-time">
					<em>用时:</em>
					<div>
						<span>{{minute}}</span>'
						<span>{{second}}</span>''
						<span>{{millisecond}}</span>
					</div>
				</div>
			</div>

      <!-- 下一关按钮 -->
			<div class="button" @click="nextBelle" v-if="checkpoint != 7">
				挑战新妹子
			</div>
      <!-- 第七关按钮 -->
      <div v-if="checkpoint == 7">
        <div class="button" @click="submit">
          提交成绩
        </div>
        <div class="button" @click="again">
          重新挑战
        </div>
      </div>
		</div>
    <!-- 提交成功 || 提交失败弹层 -->
    <!-- 挑战成功 -->
    <div class="shave-end" v-if="submitSuccess">
      <div class="status">
        <img src="https://s.kcimg.cn/wap/images/shaveImg/success-hand.png">
        <p class="tip">提交成功</p>
        <span>约小伙伴一起来擦擦擦吧~</span>
      </div>
      <div class="next-button" @click="again">
        重新挑战
      </div>
      <div class="next-button look-ranking" @click="lookRank">
        查看排行
      </div>
      <div class="shave-end-footer">
        <a href="https://topic.360che.com/m/2017101901/">我的梦想卡车</a>
        <a href="https://topic.360che.com/m/2017110601/index.aspx" class="to-buy">去购车</a>
      </div>
    </div>
    <div class="shave-end" v-if="submitErr">
      <div class="status">
        <img src="https://s.kcimg.cn/wap/images/shaveImg/error-hand.png">
        <p class="tip">提交失败</p>
        <span>不知道哪里出问题惹~</span>
      </div>
      <div class="next-button" @click="againSubmit">
        重新提交
      </div>
      <div class="button" @click="again" v-if="errButton">
      重新挑战
      </div>
    </div>

	</div>
</template>
<style scoped>
	.game{width:100%;height:100%;overflow: hidden;
		background:url('https://s.kcimg.cn/wap/images/shaveImg/game-bg.jpg') no-repeat 0 0;
		background-size: cover;
	}
	.game.visible{transform: translate3d(0,0,0);}
	.header{padding:0 50px;clear: both;overflow: hidden;}
	.checkpoint{float:left;width:230px;height:50px;padding-top:70px;color:#eed809;font-size:62px;font-family:'font';line-height:20px;text-align:center;background: url('https://s.kcimg.cn/wap/images/shaveImg/checkpoint-bg.png') no-repeat left bottom;transform: translate3d(0,-161px,0);animation: checkpoint .3s linear .3s forwards;transform-origin: left bottom;}
    @keyframes checkpoint {
      0% {
       	-webkit-transform: translate3d(0,-161px,0);
        transform: translate3d(0,-161px,0) rotate(-30deg);

      }
      20% {
       	-webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(-20deg);
      }
      40% {
       	-webkit-transform: translate3d(0,-40px,0);
        transform: translate3d(0,-40px,0) rotate(-15deg);
      }

      60% {
       	-webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(-10deg);
      }

      85% {
       	-webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0) rotate(-5deg);
      }

      100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(0deg);
      }
    }
	.time{float:right;margin-top:30px;height:90px;color:#eed809;font-size:48px;line-height:130px;font-weight: bold;}
	.surface{display: inline-block;width:78px;height:90px;margin-right:-10px;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/time.png');vertical-align: top;animation: surface .3s ease-out .3s infinite;}
    @keyframes surface {
      0% {
       	-webkit-transform: translate3d(0,-161px,0);
        transform: translate3d(0,-20px,0) rotate(-5deg);

      }
      20% {
       	-webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(0deg);
      }
      40% {
       	-webkit-transform: translate3d(0,-10px,0);
        transform: translate3d(0,-10px,0) rotate(5deg);
      }

      60% {
       	-webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(0deg);
      }

      85% {
       	-webkit-transform: translate3d(0,-100px,-5);
        transform: translate3d(0,-10px,0) rotate(-5deg);
      }

      100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0) rotate(0deg);
      }
    }
	.shave{width:650px;height:800px;margin:20px auto 0;overflow:hidden;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/shave-bg.png');}
	.content{width:600px;height:747px;margin:27px auto 0;}
	.content1{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle1.jpg');}
	.content2{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle23.jpg')}
	.content3{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle33.jpg');}
	.content4{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle4.jpg')}
	.content5{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle5.jpg');}
	.content6{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle6.jpg')}
	.content7{background-image: url('https://s.kcimg.cn/wap/images/shaveImg/belle73.jpg');}

  .loadBelle1{background-image: url('https://topic.360che.com/m/2017110301/img/screen1.jpg');}
  .loadBelle2{background-image: url('https://topic.360che.com/m/2017110301/img/screen2.jpg')}
  .loadBelle3{background-image: url('https://topic.360che.com/m/2017110301/img/screen3.jpg');}
  .loadBelle4{background-image: url('https://topic.360che.com/m/2017110301/img/screen4.jpg')}
  .loadBelle5{background-image: url('https://topic.360che.com/m/2017110301/img/screen5.jpg');}
  .loadBelle6{background-image: url('https://topic.360che.com/m/2017110301/img/screen6.jpg')}
  .loadBelle7{background-image: url('https://topic.360che.com/m/2017110301/img/screen7.jpg');}
  #canvas{-webkit-overflow-scrolling: touch;}
	.shave-end{position: fixed;top:0;left:0;bottom:0;right:0;background-color: rgba(0,0,0,.6);z-index:200;}
	.pop{width:750px;height:535px;margin:117px 0 0;color:#eccfff;font-size:36px;overflow:hidden;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/pop-bg.png');font-family: 'font'}
	.evaluate{margin-top:150px;color:#eed809;font-size:80px;text-align: center;font-weight: bold;}
	.game-time {margin-top:20px;}
	.game-time div{display:inline-block;padding:9px 41px 9px 31px;color:#eed809;font-size:48px;font-weight: bold;border:1px solid #eed809;}
	.button{width:396px;height:110px;margin:40px auto 0;color:#8123dc;font-size:52px;line-height: 110px;text-align: center;font-family: 'font';background-image:url('https://s.kcimg.cn/wap/images/shaveImg/begin-button.png');}
  .submit{margin-top: 30px;}
	.footer{position:fixed;left:0;bottom:0;width:100%;height:172px;padding:0 50px 0 170px;box-sizing: border-box;z-index:100;}
	.finger{position:absolute;left:50px;top:0;width:120px;height:172px;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/finger.png');transform: translate3d(0,-1000%,0);animation: finger 1.3s ease-out .3s forwards;}
    @keyframes finger {
      0% {
        -webkit-transform: translate3d(0,-800px,0);
        transform: translate3d(-170px,-800px,0);

      }
      25% {
        -webkit-transform: translate3d(0,-600px,0);
        transform: translate3d(500px,-900px,0);
      }
      50% {
        -webkit-transform: translate3d(0,-600px,0);
        transform: translate3d(50px,-600px,0);
      }

      75% {
        -webkit-transform: translate3d(0,-600px,0);
        transform: translate3d(500px,-400px,0);
      }

      100% {
        -webkit-transform: translate3d(0,-600px,0);
        transform: translate3d(0,0,0);
      }
    }
	.subtitle{padding-top:40px;font-size:36px;color:#fff;text-align: center;box-sizing: border-box;font-family: 'font'}
	.subtitle p{font-size:48px;}
	.subtitle span{color:#eed809;}

  /*提交成功 || 提交失败*/
  .status{width:750px;height:535px;margin:117px 0 40px;color:#eccfff;font-size:30px;overflow:hidden;background-image: url('https://s.kcimg.cn/wap/images/shaveImg/pop-bg.png');text-align: center;}
  .status img{
    margin-top: 120px;
  }
  .tip{margin: 0;color:#eed809;font-size:80px;line-height: 80px;text-align: center;font-weight: bold;}
  .next-button{width:396px;height:110px;margin:0 auto;color:#8123dc;font-size:52px;line-height: 110px;text-align: center;font-family: 'font';background-image:url('https://s.kcimg.cn/wap/images/shaveImg/begin-button.png');}
  .look-ranking{margin-top: 40px;
  }
  .shave-end-footer{display: flex;flex-direction: row;justify-content: center;margin-top: 35px;line-height: 36px;}
  .shave-end-footer a{font-size: 36px;color: #a031e8;text-decoration: underline;}
  .to-buy{margin-left: 70px;}
</style>

<script>

    var CryptoJS = require("crypto-js");
    var AES = require("crypto-js/aes");
    var SHA256 = require("crypto-js/sha256");
  export default {
    components: {
    },
    data () {
      return {
      	uid:'00518542',
      	key:'360chetopictruck',
        iv:'360chetopictruck',
        //是否正在提交
        submitIng:false,
        //是否是重新提交
        backups:false,
        //每一关发送的参数
        getData:{},
      	//当前关卡
      	checkpoint:1,
      	//刮刮乐成功弹层
        shavePop: false,
        //是否正在游戏中
        gameSwitch:true,
        //每一关的评价
        evaluate:'弱爆了',
        //品牌评价语
        brandEvaluate:'',
        //是否可进入下一关
        nextPass:true,
        //每一关游戏开始时间
        gameStartDate:0,
        //每一关游戏结束时间
        gameEndDate:0,
        //游戏总时间
        gameSumDate:0,
        //最初始时间
        initialDate:0,
        //分
        minute:0,
        //秒
        second:0,
        //毫秒
        millisecond:0,
        //品牌名称
        brandName:[
          '汕德卡',
          '四川现代',
          '一汽解放轻卡',
          '上汽跃进',
          '福田时代',
          '豪沃',
          '欧马可',
        ],
        // 美女图
        belle:[
        	'https://s.kcimg.cn/wap/images/shaveImg/belle1.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle23.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle33.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle4.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle5.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle6.jpg',
        	'https://s.kcimg.cn/wap/images/shaveImg/belle73.jpg'
        ],
        //遮罩
        screen:[
        	'https://topic.360che.com/m/2017110301/img/screen1.jpg',
        	'https://topic.360che.com/m/2017110301/img/screen2.jpg',
          'https://topic.360che.com/m/2017110301/img/screen3.jpg',
          'https://topic.360che.com/m/2017110301/img/screen4.jpg',
          'https://topic.360che.com/m/2017110301/img/screen5.jpg',
          'https://topic.360che.com/m/2017110301/img/screen6.jpg',
          'https://topic.360che.com/m/2017110301/img/screen7.jpg',
        ],
        // canvas宽高
        Width:'',
        Height:'',
        area:'',
        //提交状态
        submitSuccess:false,
        //提交失败按钮
        submitErr:false,
        //失败重新开始按钮
        errButton:false,
        //是否加载出来美女
        loadBelle:false,
      }
    },
    created () {

        //获取uid
        let uid = document.cookie.match(/AbcfN_ajaxuid=([^;$]+)/);
        let info = sessionStorage.getItem('info');
        let userid = sessionStorage.getItem('uid');

        if(userid != undefined && userid != null){
          this.uid = userid
          this.key = '360chetopictruck'
          this.iv = '360chetopictruck'
          this.key = CryptoJS.enc.Latin1.parse(this.uid + "" + this.key);
          this.iv = CryptoJS.enc.Latin1.parse('360chetopictruck');
          if(info){
            this.getData = JSON.parse(this.decrypted(info))
          }
        }

        //如果有uid
        if(uid && uid[1]){
          this.uid = this.uidPadLeft(uid[1],8)
        }

        //加密数据
        this.key = '360chetopictruck'
        this.iv = '360chetopictruck'
        // alert(this.uid)
        this.key = CryptoJS.enc.Latin1.parse(this.uid + "" + this.key);
        this.iv = CryptoJS.enc.Latin1.parse('360chetopictruck');

        //查看是否有缓存
        if(info){
          //赋值关数
          this.checkpoint = this.getData.number
          //赋值总时间
          this.gameSumDate = (this.getData.gameSumDate + '')
          //时间转换
          this.timeConversion()
          //重新提交
          this.submit()
        }else{
          if(this.$route.params && this.$route.params.getData){
            this.getData = this.$route.params.getData;
          }
          if(!this.$route.params || !this.$route.params.getData){
            //获取来源
            let from = sessionStorage.getItem('from');
            if(from == '/'){
              sessionStorage.removeItem('from')
              this.$router.back()
            }else{
              this.$router.push('/')
            }
          }
        }
    },
    methods: {
      //进入下一关游戏
			nextBelle () {
        let _this = this;
        if(this.nextPass){
          this.nextPass = false;
          // alert(JSON.stringify(this.getData))
          this.ajax(`/m/2017110201/getsgame.aspx?iden=${this.getData.iden}&infoid=${this.getData.infoid}&number=${this.getData.number}&sinfoid=${this.getData.sinfoid}`,{},data => {
            // alert(JSON.stringify(data.data))
            if(data.data.result == 1){
              this.getData = data.data.data
              this.loadBelle = false
              //游戏关数 + 1
              this.checkpoint++;
              //重新绘制遮罩层
              this.draw()
              //关闭弹层
              this.shavePop = false;
              this.nextPass = true;
            }else{
              //如果出错，请求
              this.again();
            }
          },err => {
            console.log('请链接网络~')
          })
        }
			},
      //重新挑战
      again(){
        this.ajax('/m/2017110201/getgame.aspx',{},data => {
          // alert(JSON.stringify(data.data))
          if(data.data.result == 1){
            this.getData = data.data.data;
            //返回第一关
            this.checkpoint = 1;
            //关闭下一关弹层
            this.shavePop = false
            //关闭提交成功弹层
            this.submitSuccess = false
            //关闭提交失败弹层
            this.submitErr = false
            //清空游戏总时间
            this.gameSumDate = 0
            //重新计算游戏最开始时间
            this.initialDate = 0;
            //清空结束时间
            this.gameEndDate = 0;
            //重新计算时间
            this.timeConversion()
            //清空缓存成绩
            sessionStorage.removeItem('info')
            //重新绘制遮罩层
            this.draw()
          }
        },err => {
          alert('请连接网络')
        })
      },
      //重新提交
      againSubmit(){
        // alert(1)
        // let backups = sessionStorage.getItem('backups')
        // if(backups){
          // alert(this.uid)
          // alert(this.gameSumDate)
          // alert(2)
        //   this.getData = JSON.parse(backups)
        //   alert(JSON.parse(backups))
        // }
        //点击重新提交的时候存储一个信息
        this.backups = true;
        this.submit()
      },
			//提交
			submit(){
        if(this.submitIng){
          return
        }
        this.submitIng = true
        // alert(this.uid)
        // alert(JSON.stringify(this.getData))
        // alert(this.getData.sinfoid)
        // alert(this.encrypted(this.gameSumDate + ''))
        // 请求提交
        this.ajax(`/m/2017110201/addinfo.aspx?iden=${this.getData.iden}&infoid=${this.getData.infoid}&number=${this.getData.number}&sinfoid=${this.getData.sinfoid}&scoretime=${encodeURIComponent(this.encrypted(this.gameSumDate + ''))}`,{},data => {
          // alert(JSON.stringify(data.data))
          if(data.data.result == 1){
            this.getData = data.data.data
            //关闭完成弹层
            this.shavePop = false
            //关闭提交失败按钮
            this.submitErr = false
            //弹出提交成功弹层
            this.submitSuccess = true
            sessionStorage.removeItem('info')
            sessionStorage.removeItem('uid')
            sessionStorage.removeItem('againSubmit')
            // sessionStorage.removeItem('backups')
            this.submitIng = false
          }else{
            //赋值总时间
            this.getData.gameSumDate = this.gameSumDate
            //赋值uid
            this.getData.uid = this.uid
            //存储信息
            let info = sessionStorage.getItem('info')
            if(!info){
              sessionStorage.setItem('uid',this.uid)
              sessionStorage.setItem('info',this.encrypted(JSON.stringify(this.getData)))
              // sessionStorage.setItem('backups',JSON.stringify(this.getData))
            }
            //判断是否登录
            if(data.data.data.mess == '请登录'){
              //查看是否重新提交过
              let againSubmit = sessionStorage.getItem('againSubmit')
              if(againSubmit){
                //设置评价语
                this.setEvaluate()
                //重新弹出第七关弹层
                this.shavePop = true
                sessionStorage.removeItem('againSubmit')
              }else{
                //存储已经重新提交按钮
                sessionStorage.setItem('againSubmit','true')
                location.href = 'https://sso.360che.com/?c=login&referer=http://topic.360che.com/m/2017110301/#/game'
              }
            }else{
              this.shavePop = false
              this.submitSuccess = false
              this.submitErr = true
              //查看是否再次点击重新提交
              if(this.backups){
                //如果还是失败,增加重新开始按钮
                this.errButton = true;
              }
            }
            this.submitIng = false
          }
        },err => {
          console.log(err)
          this.submitIng = false
        })
			},
    	//时间转换
			timeConversion () {
				//分
				this.minute = Math.floor(this.gameSumDate/1000/60);
				if(this.minute < 10){
					this.minute = '0' + this.minute
				}
				//秒
				this.second = Math.floor((this.gameSumDate - this.minute*1000 *60)/1000)
				if(this.second < 10){
					this.second = '0' + this.second
				}
				//毫秒
				this.millisecond = this.gameSumDate - this.minute*1000 * 60 - this.second * 1000
				if(this.millisecond < 10){
					this.millisecond = '00' + this.millisecond
				}else if(this.millisecond > 10 && this.millisecond < 100){
					this.millisecond = '0' + this.millisecond
				}
			},
      //设置评价语
      setEvaluate(){
        //计算时间 && 设置评价语
        let evaluate = Math.floor((this.gameEndDate - this.gameStartDate)/1000)
        //判断是否是第七关 && 评价语
        if(this.checkpoint != 7){

          if(evaluate <= 3){
            this.evaluate = '手速超神！'
            this.brandEvaluate = '表示你很棒棒~'
          }else if(evaluate > 3 && evaluate < 7){
            this.evaluate = '加嘞个油！'
            this.brandEvaluate = '跟你说要努力啦~'
          }else{
            this.evaluate = '弱爆了！'
            this.brandEvaluate = '给你加油助威~'
          }
        }else{
          if(this.gameSumDate < 21*1000){
            this.evaluate = '刮妹圣手！'
            this.brandEvaluate = '表示你很棒棒~'
          }else if(this.gameSumDate >= 21*1000 && this.gameSumDate <= 35*1000){
            this.evaluate = '撩妹狂魔！'
            this.brandEvaluate = '跟你说要努力啦~'
          }else{
            this.evaluate = '望妹止渴！'
            this.brandEvaluate = '给你加油助威~'
          }
        }
      },
      //加密
      encrypted(str){    //加密
          var me = this;
          // 字符串加密
          var key = CryptoJS.enc.Latin1.parse(str);
          // var iv = CryptoJS.enc.Latin1.parse('360chetopictruck');

          var encrypted = CryptoJS.AES.encrypt(key, me.key, {
              iv: me.iv,
              mode:CryptoJS.mode.CBC,
              padding:CryptoJS.pad.ZeroPadding
          });

          // 转换为字符串
          encrypted = encrypted.toString();
          return encrypted;
      },
      decrypted(encrypted){    //解密
          var me = this;
          var decrypted = CryptoJS.AES.decrypt(encrypted, me.key, {
              iv: me.iv,padding:CryptoJS.pad.ZeroPadding
          });

          // 转换为 utf8 字符串
          decrypted = CryptoJS.enc.Latin1.stringify(decrypted);
          return decrypted;
      },
      //绘制canvs
      draw(){
        var myCanvasObject = document.querySelector('#Container')
        var canvas = document.querySelector("#canvas");
        var ctx = canvas.getContext('2d')
        this.Width = myCanvasObject.offsetWidth;
        this.Height  = myCanvasObject.offsetHeight;
        this.area = this.Width * this.Height ;
        canvas.setAttribute("width", this.Width  + "px");
        canvas.setAttribute("height", this.Height + "px");

        //绘制黑色矩形
        // ctx.beginPath();
        // ctx.fillStyle = "#939393";
        // ctx.rect(0, 0, this.Width, this.Height);
        // ctx.closePath();
        // ctx.fill();

        //绘制图片
        var img = new Image();
        img.src = './img/screen' + this.checkpoint +'.jpg'
        img.addEventListener('load',() => {
          this.loadBelle = true
          ctx.drawImage(img,0,0,this.Width,this.Height);
        })
      },
      //进入排行榜
      lookRank(){
        this.$router.push({name:'rank'})
      }
    },
    mounted () {

        let myCanvasObject = document.querySelector('#Container')
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext('2d')
        this.draw();
        // var img = new Image()
        // img.src = document.querySelector('#image').src
        // console.log(document.querySelector('#image').src)
        // img.onload = function () {
        //     ctx.drawImage(img,0,0,this.Width,this.Height)
        // }

        let isDown = false; //鼠标是否按下标志
        let pointerArr = []; //鼠标移动坐标数组
        let xPointer = 0;//鼠标当前x坐标
        let yPointer = 0;//鼠标当前y坐标
        let time;        //设置定时器
        let UA = navigator.userAgent;
    var offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;

        //鼠标按下
        myCanvasObject.addEventListener("touchstart", e => {

            //如果第一次开始游戏   创建游戏最初开始时间
            if(!this.initialDate){
              this.initialDate = +new Date();
            }

            //开始游戏
            if(this.gameSwitch){
            	//禁止更换时间
            	this.gameSwitch = false
              //设置每一关游戏开始时间
              this.gameStartDate = +new Date();


              // 如果第一关没有结束时间 && 结束时间 == 开始时间
              if(!this.gameEndDate){
                this.gameEndDate = +new Date();
              }else{
                this.initialDate += (this.gameStartDate - this.gameEndDate)
              }
              console.log(this.gameStartDate - this.gameEndDate)

              // 这关开始时间 - 上一关结束时间 = 中间间隔秒数
            	time = setInterval(() => {
	            	// 现在的时间 - 第一次游戏开始的时间 - 每一关中间间隔的秒数 = 实际的时间
                this.gameSumDate = +new Date() - this.initialDate;
                //时间转换
	            	this.timeConversion()
            	},9)
            }


            isDown = true;
              if(e.changedTouches){
                e=e.changedTouches[e.changedTouches.length-1];
              }
              xPointer = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0
              yPointer = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
              pointerArr.push([xPointer, yPointer]);
              circleReset(ctx);
        });


        //鼠标按下后拖动
        myCanvasObject.addEventListener("touchmove", function(e) {
            e.preventDefault();
            if (isDown) {
              if(e.changedTouches){
                e=e.changedTouches[e.changedTouches.length-1];
              }
              xPointer = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0
              yPointer = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
              pointerArr.push([xPointer, yPointer]);
              circleReset(ctx);
            }
        });


        //鼠标抬起取消事件
        myCanvasObject.addEventListener("touchend", function(event) {
            isDown = false;
            pointerArr = [];
        });

        //圆形橡皮檫
        var _this = this;
        function circleReset(ctx) {
            //开始绘制
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
            ctx.lineCap = "round";　　 //设置线条两端为圆弧
            ctx.lineJoin = "round";　　 //设置线条转折为圆弧
            ctx.lineWidth = 50;

            //如果是苹果App上，那么线是80
            if(UA.match(/iphone/gi) && UA.match(/360che/gi)){
              ctx.lineWidth = 35;
              ctx.beginPath();
              ctx.arc(xPointer, yPointer, 25, 0, Math.PI * 2);
              // ctx.stroke()
              // ctx.fill();
              // ctx.closePath();

              ctx.globalCompositeOperation = "destination-out";
              // 如果是拖动存储  大量绘制
              if (pointerArr.length == 1) {
                  ctx.beginPath();
                  ctx.arc(pointerArr[0][0] + 1, pointerArr[0][1] + 1, 25, 0, Math.PI * 2);
                  // ctx.stroke()
                  // ctx.fill();
                  // ctx.closePath();
              } else {
                  for (var i=1;i<pointerArr.length;i++) {
                      ctx.beginPath();
                      ctx.arc(pointerArr[i][0], pointerArr[i][1], 25, 0, Math.PI * 2);
                      // ctx.closePath();
                  }
              }
              ctx.stroke()
              ctx.fill();
            }else{

              // ctx.beginPath();
              // ctx.arc(xPointer, yPointer, 35, 0, Math.PI * 2);
              // ctx.stroke()
              // ctx.fill();
              // ctx.closePath();

              ctx.globalCompositeOperation = "destination-out";
              // 如果是拖动存储  大量绘制
              if (pointerArr.length == 1) {
                  ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1);

                  // ctx.beginPath();
                  // ctx.arc(pointerArr[0][0] + 1, pointerArr[0][1] + 1, 35, 0, Math.PI * 2);
                  // ctx.stroke()
                  // ctx.fill();
                  // ctx.closePath();
              } else {
                  for (var i=1;i<pointerArr.length;i++) {
                      ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
                      ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);

                      // ctx.beginPath();
                      // ctx.arc(pointerArr[i][0], pointerArr[i][1], 35, 0, Math.PI * 2);
                      // ctx.stroke()
                      // ctx.fill();
                      // ctx.closePath();
                  }
              }

              ctx.stroke();
              ctx.restore();
            }

            //增加绘制面积量
            var data = ctx.getImageData(0,0,_this.Width,_this.Height).data;
            var scrapeNum = 0;
            for(var i = 3, len = data.length; i < len; i += 4){
                if(data[i] === 0){
                    scrapeNum++;
                }
            }

            //判断面积 && 当清除掉百分之80的时候，结束游戏
            if(scrapeNum > _this.area * 0.8){
              ctx.clearRect(0, 0, _this.Width, _this.Height);

	            //结束游戏
	            if(!_this.gameSwitch){
	            	//允许更换时间
	            	_this.gameSwitch = true
                // //设置可以进入下一关
                // _this.nextPass = true;
                //设置每一关游戏结束时间
                _this.gameEndDate = +new Date();

                //设置评价语
                _this.setEvaluate()
	            	//清除定时器
	            	clearInterval(time)

                //时间转换
                _this.gameSumDate = +new Date() - _this.initialDate;
                //时间转换
                _this.timeConversion()

                //如果间隔时间小于500毫秒
                if(_this.gameEndDate > _this.gameStartDate + 500){
                  _this.shavePop = true;
                }else{
                  this.draw();
                }
	            }
            }
        }
    }
  }
</script>