<template>
  <div class="haidi-constructor">
    <page page-name="HaidiConstructor" no-cutscenes>
      <template>
        <section class="btn-wrapper">
          <img class="btn-item icon-one" :src="require('../assets/HaidiConstructor/d01.png')" @click="getInfo('rubberWterstop')">
          <img class="btn-item icon-two" :src="require('../assets/HaidiConstructor/d02.png')" @click="getInfo('semirigidStructure')">
          <img class="btn-item icon-three" :src="require('../assets/HaidiConstructor/d03.png')" @click="getInfo('processManagement')">
          <img class="btn-item icon-four" :src="require('../assets/HaidiConstructor/d04.png')" @click="getInfo('compositeFoundation')">
          <img class="btn-item icon-five" :src="require('../assets/HaidiConstructor/d05.png')" @click="getInfo('bestProportionOfConcrete')">
          <img class="btn-item icon-six" :src="require('../assets/HaidiConstructor/d06.png')" @click="getInfo('bhajan')">
          <img class="btn-item icon-seven" :src="require('../assets/HaidiConstructor/d07.png')" @click="getInfo('story')">
          <MaxCard v-if="infoType" class="des-detail" @close="closeCard">
            <div class="title">
              <h3 v-if="typeof infoData.info === 'string'">{{ infoData.title }}</h3>
              <span class="detail">
                <p v-if="typeof infoData.info === 'string'">{{ infoData.info }}</p>
                <div v-if="typeof infoData.info === 'object'">
                  <div v-for="(item,index) in infoData.info" :key="index">
                    <h3>{{ item.title }}</h3>
                    <div>{{ item.content }}</div>
                  </div>
                </div>
              </span>
            </div>
          </MaxCard>
          <back v-if="app.mode === 'zy'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.back()"/>
          <guide-button v-if="app.mode === 'dl'" class="rb" @click="$router.back()">继续</guide-button>
        </section>
      </template>
    </page>
  </div>
</template>

<script>
import infoDataArr from '@/data/7-3'
export default {
  name: 'HaidiConstructor',
  inject: {
    app: {
      default () {
        return {}
      },
    },
  },
  data () {
    return {
      from: {
        name: this.$route.meta.from || 'navigation',
        query: { loop: true },
      },
      infoType: '',
      infoDataArr,
      infoData: {},
    }
  },
  methods: {
    getInfo (infoType) {
      infoDataArr.forEach(item => {
        if (item.name === infoType) {
          this.infoData = item
          this.infoType = infoType
        }
      })
    },
    closeCard () {
      this.infoType = false
    },
  },
}
</script>
<style lang="scss" scoped>
  .haidi-constructor {
    height: 100%;
    .btn-wrapper {
      background: url(../assets/HaidiConstructor/gradient.png);
      height: 100%;
      position: relative;
      .btn-item {
        cursor: pointer;
      }
      .icon-one {
        width: 2.5rem;
        position: absolute;
        top: 1.7rem;
        left: 2.8rem;
      }
      .icon-two {
        width: 2rem;
        position: absolute;
        top: 1.1rem;
        left: 7rem;
      }
      .icon-three {
        width: 2.6rem;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
      }
      .icon-four {
        width: 2.5rem;
        position: absolute;
        top: 6.7rem;
        left: 9.5rem;
      }
      .icon-five {
        width: 3.3rem;
        position: absolute;
        top: 5.1rem;
        right: .8rem;
      }
      .icon-six{
        width: 3.3rem;
        position: absolute;
        top: 8.5rem;
        left: .5rem;
      }
      .icon-seven{
        width: 3.3rem;
        position: absolute;
        top: 9.5rem;
        left: .5rem;
      }
      .des-detail {
        .title {
          font-size: .4rem;
          text-align: left;
          margin-bottom: .2rem;

          max-height: 6rem;
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
        }
        .detail {
          font-size: .3rem;
          line-height: .01rem;
          font-size: .26rem;
          line-height: 0.44rem;
          text-align: left;
          height: 3rem;
          overflow-y: auto;

        }
      }
    }
  }
</style>
