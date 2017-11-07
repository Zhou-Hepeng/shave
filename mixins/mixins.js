import axios from 'axios'
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
export default {
  methods: {
      init (imgUrl) {
        var myCanvasObject = document.querySelector('#myCanvas')
        if (myCanvasObject) {
            var width = ''
            var height = ''
            var canvas = document.createElement("canvas");
            width = myCanvasObject.offsetWidth;
            height = myCanvasObject.offsetHeight;
            var area = width * height;
            canvas.setAttribute("width", width + "px");
            canvas.setAttribute("height", height + "px");
            canvas.id = "myCanvas";
            myCanvasObject.appendChild(canvas);
            console.log(canvas)
        }
        var ctx = canvas.getContext('2d')
        var img = new Image()
        img.src = '../img/index-bg.jpg'
        img.onload = function () {
            ctx.drawImage(img,0,0,width,height)
        }

        var isDown = false; //鼠标是否按下标志
        var pointerArr = []; //鼠标移动坐标数组
        var xPointer = 0;//鼠标当前x坐标
        var yPointer = 0;//鼠标当前y坐标
        var time;        //设置定时器
        var date = 0;        //设置时间


        //pc，移动事件兼容写法
        var hastouch = "ontouchstart" in window ? true : false,
        tapstart = hastouch ? "touchstart" : "mousedown",
        tapmove = hastouch ? "touchmove" : "mousemove",
        tapend = hastouch ? "touchend" : "mouseup";


        //鼠标按下
        myCanvasObject.addEventListener(tapstart, function(e) {
            this.style.cursor = "move";
            isDown = true;
            xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;
            yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;;
            pointerArr.push([xPointer, yPointer]);
            circleReset(ctx);
        });


        //鼠标按下后拖动
        myCanvasObject.addEventListener(tapmove, function(e) {
            if (isDown) {
                xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;;
                yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;;
                pointerArr.push([xPointer, yPointer]);
                circleReset(ctx);
            }
            if(!time){
                time = setInterval(() => {
                    date++;
                },1000)
            }
        });


        //鼠标抬起取消事件
        myCanvasObject.addEventListener(tapend, function(event) {
            isDown = false;
            pointerArr = [];
        });

        //圆形橡皮檫
        function circleReset(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
            ctx.lineCap = "round";　　 //设置线条两端为圆弧
            ctx.lineJoin = "round";　　 //设置线条转折为圆弧
            ctx.lineWidth = 30;
            ctx.globalCompositeOperation = "destination-out";
            if (pointerArr.length == 1) {
                ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1);
            } else {
                for (var i=1;i<pointerArr.length;i++) {
                    ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
                    ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);
                }
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            var data = ctx.getImageData(0, 0, width, height).data,
                scrapeNum = 0;
            for(var i = 3, len = data.length; i < len; i += 4){
                if(data[i] === 0){
                    scrapeNum++;
                }
            }
            // console.log(scrapeNum,'scrapeNum')
            // console.log(area * 0.9,'area * 0.98')
            if(scrapeNum > area * 0.98){
                ctx.clearRect(0, 0, width, height);
                clearTimeout(time);
                alert(date)
            }
        }
      },
      ajax(url,data,success,error){
        axios({
            // http://topic.360che.com
            method: 'post',
            url: `/bx${url}`,
            data: data,
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        .then(success)
        .catch(error)
      },
      encrypted(str){    //加密
            // 字符串加密
            var key = CryptoJS.enc.Latin1.parse(str);
            // var iv = CryptoJS.enc.Latin1.parse('360chetopictruck');
            console.log(key,'key')

            var encrypted = CryptoJS.AES.encrypt(key, '360chetopictruck', {
                iv: '360chetopictruck',
                mode:CryptoJS.mode.CBC,
                padding:CryptoJS.pad.ZeroPadding
            });

            console.log(encrypted,'encrypted')

            // 转换为字符串
            encrypted = encrypted.toString();

            return encrypted;
        },
      decrypted(encrypted){    //解密
          var me = this;
          var decrypted = CryptoJS.AES.decrypt(encrypted, '360chetopictruck', {
              iv: '360chetopictruck',padding:CryptoJS.pad.ZeroPadding
          });

          // 转换为 utf8 字符串
          decrypted = CryptoJS.enc.Latin1.stringify(decrypted);
          return decrypted;
      },

      // uidPadLeft(uid,n){   // 补全字符串
      //   uid = "0" + uid.toString();
      //   if(uid.length < n){
      //     this.uidPadLeft(uid,n)
      //   }else{
      //     uid = uid;
      //   }
      //   return uid
      // },
  },
}