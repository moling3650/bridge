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
          <back :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$redirect(from)"/>
        </section>
      </template>
    </page>
  </div>
</template>

<script>
import infoDataArr from '@/data/7-3'
export default {
  name: 'HaidiConstructor',
  data () {
    return {
      from: {
        name: this.$route.meta.from || 'navigation',
        query: { loop: true },
      },
      // infoDataArr: {
      //   rubberWterstop: {
      //     title: '橡胶止水带：',
      //     info: `止水带是沉管隧道的生命线。港珠澳大桥沉管隧道管节水
      //     密防护采用橡胶止水带止水方案，在不同位置分别安装止水带、
      //     中埋式止水带和两种型号的Omega止水带。其中大Omega止水带
      //     是保证隧道管节接头水密性的重要构件，在沉管隧道遭遇地震、
      //     爆炸、撞击等异常情况，发挥防水功能。别看一条普通的橡胶
      //     材质止水带，实际它的材料非常精细、技术也很复杂，每条造
      //     价高达200多万元。因为“十分精贵”，所以不能用机械设备安装，
      //     只能靠人工一点点镶嵌。`,
      //   },
      //   compositeFoundation: {
      //     title: '创新复合地基：',
      //     info: `港珠澳大桥沉管隧道所处的海底地质环境是很厚的软土地基，
      //     为了实现隧道不漏水，中国工程师在如何使软土层变硬上做文章。他
      //     们经过无数次工法比选、理论计算和试验验证，在40多米深的海水下
      //     为沉管基床底部铺上2到3米的块石并将它们打实，创造一种新的复合
      //     地基，使沉管的沉降值大大缩小，平均沉降值控制在10厘米以内，杜
      //     绝因海底沉降导致的渗水，而国外一般在20厘米左右。`,
      //   },
      //   semirigidStructure: {
      //     title: '半刚性结构：',
      //     info: `一直以来，沉管制作只有刚性和柔性两种方法，但这两种无
      //     方法都无法满足港珠澳大桥的要求。于是，中国工程师们创新提出半
      //     刚性的解决方案。半刚性结构综合了刚性和柔性结构的优点。用积木
      //     做比喻吧，刚性结构就好比是长条的积木，柔性结构就好比用乐高小
      //     积木拼接的积木条，而半刚性结构就像是用一根橡皮筋串起乐高小积
      //     木，刚柔并济。半刚性结构允许积木之间有一定的张开，而且这个张
      //     开是有控制的，不能无限变形，同时，保持始终在积木之间有一定的
      //     压力，使得摩擦力能够发挥作用，保持相对不错位。`,
      //   },
      //   bestProportionOfConcrete: {
      //     title: '最佳配合比混凝土：',
      //     info: `为了满足“强度、耐久性、施工性、抗裂性”四项基本要求，工
      //     程师们用了近1年，用坏了4个混凝土搅拌机后，终于找到最佳的混凝土
      //     配方。又经过上百次的试验调整，开展6次现场小尺寸模型试验，2次足
      //     尺模型试验，18个人工岛沉箱混凝土验证，最终配制出抗裂性能强，满
      //     足沉管施工工艺性能要求的混凝土配方。我们还专访了找到最佳的混凝
      //     土配方的港珠澳大桥建设者——张宝兰，点击观看视频。`,
      //   },
      //   processManagement: {
      //     title: '156道工序管理：',
      //     info: `从一根钢筋、一方混凝土到一个180米长的巨型沉管，需要经过
      //     钢筋加工、钢筋笼绑扎、混凝土浇筑、管节一次舾装、深浅坞蓄排水及管
      //     节起浮横移等156道工序，每一道工序都关系着港珠澳大桥120年的使用寿
      //     命，每一个过程都充满风险，每一个环节都关乎产品质量。六年来，在156
      //     道工序上的每一位建设者们，他们始终秉承着“每一次都是第一次”的工作
      //     理念，始终坚持精益求精、追求精致的“工匠精神”，每一道工序、每一个
      //     环节以“走钢丝”的心态，做到如履薄冰、细微严苛，一节一节完成大桥海
      //     底隧道的延伸，一米一米地丈量出这座世纪工程`,
      //   },
      // },
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
        }
        .detail {
          font-size: .3rem;
          line-height: .01rem;
          font-size: .26rem;
          line-height: 0.44rem;
          text-align: left;
          height: 3rem;
          overflow-y: auto;
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
          h3{
            margin: 0.3rem 0;
          }
        }
      }
    }
  }
</style>
