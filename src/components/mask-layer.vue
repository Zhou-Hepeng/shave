<template>
  <div>
    <!-- 挑战成功 -->
    <div class="shave-end" v-if="status === 1">
      <div class="status">
        <img src="../img/success-hand.png">
        <p class="tip">提交成功</p>
        <span>约小伙伴一起来擦擦擦吧~</span>
      </div>
      <div class="next-button">
        约人来战
      </div>
      <div class="next-button look-ranking">
        查看排行
      </div>
      <div class="shave-end-footer">
        <span>我的梦想卡车</span>
        <span class="to-buy">去购车</span>
      </div>
    </div>
    <div class="shave-end">
      <div class="status">
        <img src="../img/error-hand.png">
        <p class="tip">提交失败</p>
        <span>不知道哪里出问题惹~</span>
      </div>
      <div class="next-button">
        重新提交
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style scoped>
.shave-end{position: fixed;top:0;left:0;bottom:0;right:0;background-color: rgba(0,0,0,.6);z-index:200;}
.status{width:750px;height:535px;margin:117px 0 40px;color:#eccfff;font-size:30px;overflow:hidden;background-image: url('../img/pop-bg.png');}
.status img{
  margin-top: 120px;
}
.tip{margin: 0;color:#eed809;font-size:80px;line-height: 80px;text-align: center;font-weight: bold;}
.next-button{width:396px;height:110px;margin:0 auto;color:#8123dc;font-size:52px;line-height: 110px;text-align: center;font-family: 'font';background-image:url('../img/begin-button.png');}
.look-ranking{margin-top: 40px;
}
.shave-end-footer{display: flex;flex-direction: row;justify-content: center;margin-top: 35px;font-size: 36px;color: #a031e8;line-height: 36px;text-decoration: underline;
}
.to-buy{margin-left: 70px;}
</style>
