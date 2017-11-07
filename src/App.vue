<template>
  <div id="app" @touchmove="noTouch">
    <!-- <img src="./assets/logo.png"> -->
    <div id="loading" v-if="loading">
        <div class="loading">Loading...</div>
    </div>
    <router-view v-if="!loading"/>
    <!-- <index @ruleShow="ruleShow" @beginGame="beginGame"></index> -->
    <!-- <lookRule v-if="ruleShowPop" @ruleShow="ruleShow"></lookRule> -->
    <!-- <game :gameStart='gameStart' :getData="getData"></game> -->
  </div>
</template>

<script>
  import index from './components/index.vue'
  import lookRule from './components/lookRule.vue'
  import game from './components/game.vue'
  export default {
    components: {
      index,
      lookRule,
      game
    },
    name: 'app',
    data () {
      return {
        ruleShowPop: false,
        //请求的数据
        getData:{},
        //是否开始游戏
        gameStart:false,
        loading:true,
        //所有图片预加载
        imageAll:[
            // 美女图
          'http://topic.360che.com/m/2017110301/img/screen1.jpg',
          'http://topic.360che.com/m/2017110301/img/screen2.jpg',
          'http://topic.360che.com/m/2017110301/img/screen3.jpg',
          'http://topic.360che.com/m/2017110301/img/screen4.jpg',
          'http://topic.360che.com/m/2017110301/img/screen5.jpg',
          'http://topic.360che.com/m/2017110301/img/screen6.jpg',
          'http://topic.360che.com/m/2017110301/img/screen7.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle1.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle2.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle3.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle4.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle5.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle6.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle7.jpg',
          'https://s.kcimg.cn/wap/images/shaveImg/belle.png',
          'https://s.kcimg.cn/wap/images/shaveImg/goat1.png',
          'https://s.kcimg.cn/wap/images/shaveImg/eye2.png',
          'https://s.kcimg.cn/wap/images/shaveImg/hand1.png',
          'https://s.kcimg.cn/wap/images/shaveImg/title.png',
          'https://s.kcimg.cn/wap/images/shaveImg/pop-bg.png',
          'https://s.kcimg.cn/wap/images/shaveImg/sub-title.png',
          'https://s.kcimg.cn/wap/images/shaveImg/rank-bg.png',
          'https://s.kcimg.cn/wap/images/shaveImg/rank-bg.png'
        ]
      }
    },
    created(){
      let arr = []
      let load = false
      this.imageAll.forEach((ele,index) => {
        let img = new Image()
        img.src = ele
      })
      // console.log(arr)
      // arr.forEach(ele => {
      //   ele.onload = () => {
      //     console.log(this.arr)
      //   }
      // })

    },
    methods: {
      ruleShow () {
        this.ruleShowPop = !this.ruleShowPop
      },
      noTouch (ev) {
        if(!ev.target.dataset['noscroll'] && !ev.target.parentNode.dataset['noscroll']){
          ev.preventDefault();
        }
      }
    },
    mounted(){
      let _this = this;
      window.onload = function(){
        _this.loading = false;
      }
      // document.querySelector('#app').addEventListener('touchmove',(ev) => {

      // })
    },
    watch: {
      '$route' (to, from) {
        if(from.path == '/'){
          sessionStorage.setItem('from',from.path)
        }
      }
    }
  }
</script>

<style>
  #app {
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    z-index:80;
  }
  @font-face{
     font-family: 'font';
     src:url('http://topic.360che.com/m/2017110301/font/font.woff') format('woff'),
         url('http://topic.360che.com/m/2017110301/font/font.ttf') format('truetype');
  }

  /* Reset */
  html, body, h1, h2, h3, h4, h5, p, figure, figcaption, ul, ol, li,dl,dt,dd,form{margin:0;padding:0; font-size: 16px; font-weight: 400;-webkit-text-size-adjust: none;}
  body,select,textarea,input{ font:16px/1.5 "Microsoft YaHei",Arial; }
  html,body{
    width:100%;
    height:100%;
  }
  body{overflow:hidden;background: #f5f5f5}
  ol, ul{list-style: none}
  var, em, i{ font-style:normal;}
  a img{ border:0 none;}
  a:link,a:visited{text-decoration: none;color:none;}
  img{ vertical-align: middle;}
  /*loading*/
  #loading {
    background: rgba(0, 0, 0, .8);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .loading {
    position: absolute;
    width: 130px;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 0.4s;
    font-size: 24px;
  }
  .loading:before,
  .loading:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    opacity: 0.9;
    border: 3px solid #fff;
    animation: processing 1s infinite ease-in-out;
  }
  .loading:after {
    animation-delay: -0.25s;
  }
  .loading {
    top: 50%;
    left: 50%;
    position: fixed;
    opacity: 1 !important;
    padding-top: 150px;
    text-transform: uppercase;
    color: #fff;
  }
  @keyframes processing {
    25% {
      transform: translateX(60px) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translateX(60px) translateY(60px) rotate(-180deg);
    }
    75% {
      transform: translateX(0px) translateY(60px) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

</style>
