<template>
  <div class="home-wrapper">
    <section class="top-nav">
      <img
        class="top-nav-img"
        :src="require('../../public/img/icons/top-text-nav.png')"
        alt="topNav"
      >
      <span class="text-des">网上展馆</span>
    </section>
    <section class="conten-t-wrapper">
      <div class="left-content-container">
        <div class="content-wrapper">
          <div class="recommend"/>
          <p class="recommend-des">你是第12345位为港珠澳大桥点赞的人</p>
          <img
            class="like-icon"
            :src="require('../../public/img/icons/like-icon.png')"
            alt="likeIcon"
          >
        </div>
      </div>
      <div class="right-content-container">
        <div class="talk-content-area">
          <div class="get-idea-area">
            <!-- <img :src="require()" alt="icon" class="icon"> -->
            <span class="icon"/>
            <div class="input-wrapper">
              <input class="input-area" type="text" placeholder="请输入您想要留言的内容">
              <span class="send-btn"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom-nav">
      <jiaohu-navbar/>
      <ul class="nav-btn">
        <li class="btn-item back"/>
        <li class="btn-item head"/>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JiaoHu',
}
</script>
<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(../../public/img/bg/bg-jiaohu.png);
  background-size: 100%;
  padding: 0.4rem 0.2rem;
  .top-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.72rem;
    .top-nav-img {
      height: 1.55rem;
      width: 4.92rem;
      margin-right: 0.4rem;
    }
    .text-des {
      font-size: 0.8rem;
      color: #fff;
    }
  }
  .conten-t-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.29rem;
    margin-bottom: 0.44rem;
    .left-content-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex: 1;
      height: 100%;
      padding-top: 0.82rem;
      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .recommend {
          width: 4.98rem;
          height: 1.55rem;
          background: url("../../public/img/icons/like-number.png") no-repeat;
          background-size: 100%;
        }
        .recommend-des {
          margin-bottom: 0.62rem;
          font-size: 0.34rem;
          color: #fff;
        }
        .like-icon {
          width: 3.04rem;
          height: 0.72rem;
        }
      }
    }
    .right-content-container {
      flex: 1;
      box-sizing: border-box;
      padding-left: 0.96rem;
      .talk-content-area {
        position: relative;
        width: 6.48rem;
        height: 6.27rem;
        padding: 0.4rem 0.2rem;
        box-sizing: border-box;
        background: url("../../public/img/bg/talk-bg.png") no-repeat;
        background-size: cover;
        .get-idea-area {
          position: absolute;
          bottom: 0.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          .icon {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: url('../assets/img/current-icon.png') no-repeat;
            background-size: 100%;
            margin-right: 0.13rem;
          }
          .input-wrapper {
            height: 0.72rem;
            display: flex;
            flex-direction: row;
            width: 5.33rem;
            background: #e3746f;
            >input::-webkit-input-placeholder {
              /* WebKit browsers */
              color: #fff;
            }
            >input:-moz-placeholder {
              /* Mozilla Firefox 4 to 18 */
              color: #fff;
            }
            >input::-moz-placeholder {
              /* Mozilla Firefox 19+ */
              color: #fff;
            }
            >input:-ms-input-placeholder {
              /* Internet Explorer 10+ */
              color: #fff;
            }
            .input-area {
              flex: 1;
              padding-left: 0.3rem;
              background: transparent;
              color: #fff;
              font-size: 0.2rem;
              border: none;
            }
            .send-btn {
              height: 0.72rem;
              width: 0.7rem;
              background: url("../assets/img/send-btn.png") no-repeat;
              background-color: #9e3627;
              background-position: 50%;
              background-size: 60%;
            }
          }
        }
      }
    }
  }
  .bottom-nav {
    width: 100%;
    height: 1.2rem;
    position: relative;
    display: flex;
    flex-direction: row;
    .nav-btn {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: row;
      margin: 0 0.55rem 0 0;
      padding: 0;
      list-style: none;
      .btn-item {
        height: 1.2rem;
        width: 1.2rem;
        &.back {
          background: url("../assets/img/back.png") no-repeat;
          background-size: 100%;
          margin-right: 0.2rem;
        }
        &.head {
          background: url("../assets/img/next.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}
</style>
