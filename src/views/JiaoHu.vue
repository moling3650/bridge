<template>
  <div class="home-wrapper">
    <section class="top-nav">
      <img src="../assets/img/hudong_logo.png" alt="交互">
      <!-- <img
        class="top-nav-img"
        :src="require('../../public/img/icons/top-text-nav.png')"
        alt="topNav"
      >
      <span class="text-des">网上展馆</span> -->
    </section>
    <section class="conten-t-wrapper">
      <div class="left-content-container">
        <div class="content-wrapper">
          <div class="recommend">{{ consent_count }}</div>
          <p class="recommend-des">你是第{{ consent_count }}位为港珠澳大桥点赞的人</p>
          <img
            class="like-icon"
            :src="require('../../public/img/icons/like-icon.png')"
            alt="likeIcon"
            @click="actionForRecommendOrDis"
          >
        </div>
        <ul class="icon-wrapper">
          <li class="icon-item icon-one"/>
          <li class="icon-item icon-two" @click="$router.push('/ZhiShiMoFang')"/>
          <li class="icon-item icon-three" @click="$router.push('/DynamicPicture')"/>
          <li class="icon-item icon-four"/>
        </ul>
      </div>
      <div class="right-content-container">
        <div class="talk-content-area">
          <span class="view-word">参观留言</span>
          <ul class="approval-content-area">
            <li v-for="(item, index) in commentList" :key="index" class="content-wrapper">
              <span class="item-icon"/>
              <span class="item-text-area">{{ item.message }}</span>
            </li>
            <li class="content-wrapper load-more-wrapper">
              <span class="load-more" @click="getApprovaledComments">加载更多内容</span>
            </li>
          </ul>
          <div class="get-idea-area">
            <!-- <img :src="require()" alt="icon" class="icon"> -->
            <span class="icon"/>
            <div class="input-wrapper">
              <input v-model="message" class="input-area" type="text" placeholder="请输入您想要留言的内容">
              <span class="send-btn" @click="releaseComments"/>
            </div>
          </div>
          <span class="bottom-text-des">对网上展馆工作有何意见和建议？</span>
        </div>
      </div>
    </section>
    <nav-bar v-if="app.mode === 'zy'"/>
    <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 1000 }" @click.native="$router.back()"/>
  </div>
</template>

<script>
import { InteractiveApiFun } from '../service/webapi/apiFun'
export default {
  name: 'JiaoHu',
  inject: ['app'],
  data () {
    return {
      consent_count: 0,
      message: '',
      currentIndex: 0,
      commentList: [],
    }
  },
  mounted () {
    this.getThemeInfo()
    this.getApprovaledComments()
  },
  methods: {
    // 获取点赞数
    getThemeInfo () {
      InteractiveApiFun.getThemeInfo().then(res => {
        if (res.status) {
          this.consent_count = res.data.consent_count || 0
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 点赞
    actionForRecommendOrDis () {
      const obj = {
        type: 1,
      }
      InteractiveApiFun.actionForRecommendOrDis(obj).then(res => {
        if (res.status) {
          this.getThemeInfo()
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 发布评论
    releaseComments () {
      if (!this.message) {
        return
      }
      const obj = {
        message: this.message,
      }
      InteractiveApiFun.releaseComment(obj).then(res => {
        if (res.status) {
          alert('您的留言已提交成功，正在审核。')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取已审核评论
    getApprovaledComments () {
      this.currentIndex += 1
      const obj = {
        limit: 20,
        offset: (this.currentIndex - 1) * 10,
      }
      InteractiveApiFun.getApprovaledComments(obj).then(res => {
        if (res.status === 200) {
          this.commentList = [...this.commentList, ...res.data.data]
        }
      }).catch(err => {
        console.log(err)
      })
    },
  },
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
    & > img {
      width: 9.6rem;
    }
    // margin-bottom: 0.72rem;
    // .top-nav-img {
    //   height: 1.55rem;
    //   width: 4.92rem;
    //   margin-right: 0.4rem;
    // }
    // .text-des {
    //   font-size: 0.8rem;
    //   color: #fff;
    // }
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
      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 6.7rem;
        margin-bottom: 0.5rem;
        .recommend {
          width:100%;
          height: 1.55rem;
          line-height: 1.55rem;
          text-align: center;
          background: url(../../public/img/icons/recommend-bg.png) no-repeat;
          background-size: 100% 100%;
          margin-bottom: .5rem;
          color: #feffff;
          text-shadow: 1px 1px 6px white;
        }
        .recommend-des {
          margin-bottom: 0.4rem;
          font-size: 0.34rem;
          color: #fff;
        }
        .like-icon {
          width: 2.7rem;
          height: 0.72rem;
          cursor:pointer;
        }
      }
      .icon-wrapper {
        display: flex;
        flex-direction: row;
        width:6.7rem;
        height: 2.5rem;
        flex-wrap: wrap;
        margin-top: .3rem;
        .icon-item {
          width: 3.3rem;
          margin-right: .1rem;
          margin-top: 0.1rem;
          cursor: pointer;
          &:nth-child(2n) {
           margin-right: 0
          }
          &.icon-one {
            background: url('../../public/img/icons/game.png') no-repeat;
            background-size: 100% 100%;
          }
          &.icon-two {
            background: url('../../public/img/icons/question.png') no-repeat;
            background-size: 100% 100%;
          }
          &.icon-three {
            background: url('../../public/img/icons/wallpicture.png') no-repeat;
            background-size: 100% 100%;
          }
          &.icon-four {
            background: url('../../public/img/icons/more.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
    .right-content-container {
      flex: 1;
      box-sizing: border-box;
      padding-left: 0.96rem;
      .talk-content-area {
        position: relative;
        width: 6.7rem;
        height: 6.27rem;
        padding: 0.6rem 0.2rem;
        box-sizing: border-box;
        background: url("../../public/img/bg/talk-bg.png") no-repeat;
        background-size: 100% 100%;
        .view-word {
          position: absolute;
          font-size: .2rem;
          top: 0.08rem;
          color: #fff;
        }
        .bottom-text-des {
          position: absolute;
          bottom: 0.13rem;
          font-size: .2rem;
          color: #fff;
        }
        .approval-content-area {
          // width:100%;
          display:flex;
          flex-direction: column;
          height: 4rem;
          overflow: auto;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 12px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 12px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.2);
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            border-radius: 0;
            background: rgba(0, 0, 0, 0.1);
          }
          .content-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: .18rem;
            &.load-more-wrapper {
              height: .5rem;
              font-size: .24rem;
              color: #2f6c98;
              background: #cdddff;
              text-align: center;
              line-height: .7rem;
              border-radius: 30px;
              width: 4rem;
              margin: 0 auto;
              cursor: pointer;
              .load-more {
                margin: 0 auto;
              }
            }
            .item-icon {
              width: 0.5rem;
              height: 0.5rem;
              border-radius: 50%;
              background: url('../assets/img/ohter-icon.png') no-repeat;
              background-size: 100%;
              margin-right: 0.13rem;
            }
            .item-text-area {
              min-height: 0.5rem;
              padding: 0.1rem .3rem;
              width: 5.33rem;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              background: #cdddff;
              color: #195780;
              font-size: 0.2rem;
              line-height: 0.3rem;
            }
          }
        }
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
              cursor:pointer;
            }
          }
        }
      }
    }
  }
}
</style>
