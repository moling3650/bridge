<template>
  <div id="MaxCard" @click="close">
    <div class="main">
      <div class="MaxCardBorder"/>
      <div class="left">
        <h3>港珠澳大桥海底沉管对接</h3>
        <span>
          港珠澳大桥海底沉管对接被称为“最精准深海之吻”。
          33节沉管在海平面以下13米至48米不等的深度进行海底无人对接，对接误差控制在2厘米以内，是目前世界上最精准的深海对接。而最终接头安装偏差更是从最初的17厘米降至2.5毫米，更是达到了毫米级的安装精度。
          <br>海底沉管对接，可以说是智慧与工艺的双重挑战。我们专门制作了一个沉管对接小游戏，您可以扫描二维码体验这一过程。
        </span>
      </div>
      <div class="right">
        <img src="@/assets/img/haidi4.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaxCard',
  data () {
    return {}
  },
  methods: {
    close () {
      this.$emit('close', false)
    },
  },
}
</script>
<style lang="scss" scoped>
#MaxCard {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;

  .main {
    width: 8.6rem;
    // height: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background: #6fcaee;
    padding: 0.5rem;
    border-radius: 20px;
    background: radial-gradient(
      rgba(101, 172, 218, 0.6),
      rgba(101, 172, 218, 0.9),
      #6fcaee
    );
    // .close {
    //   position: absolute;
    //   top: -1rem;
    //   right: -1.5rem;
    //   display: block;
    //   width: 1rem;
    //   height: 1rem;
    //   background-image: url(../assets/img/back.png);
    //   background-size: cover;
    //   cursor: pointer;
    // }
    .MaxCardBorder {
      border: 0.03rem solid #6fcaee;
      position: absolute;
      top: -0.15rem;
      left: -0.15rem;
      right: -0.15rem;
      bottom: -0.15rem;
      border-radius: 30px;
    }
    .left {
      float: left;
      width: 5.2rem;
      h3 {
        font-size: 0.3rem;
        margin-bottom: 0.3rem;
        line-height: 0.45rem;
      }
      span {
        font-size: 0.25rem;
        line-height: 0.4rem;
        display: inline-block;
      }
    }
    .right {
      float: right;
      &>img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>
