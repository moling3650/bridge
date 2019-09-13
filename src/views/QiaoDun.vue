<template>
  <div id="QiaoDun">
    <video
      :src="require(`../../public/video/dot/1-3.mp4`)"
      autoplay
      loop
    />
    <img class="bg" src="@/assets/img/1-3.png" :style="{ filter: `blur(${show === 'main' ? '0' : '5'}px)` }">
    <div class="btn video-btn" @click="showVideo"/>
    <div class="btn atlas-btn" @click="showImages"/>
    <div class="btn story-btn" @click="show = 'story'"/>

    <max-card v-show="show === 'story'">
      <div class="card">
        <div v-for="p in stories" :key="p.text">
          <p v-if="p.type === 'content'">{{ p.text }}</p>
          <h3 v-else-if="p.type === 'title'">{{ p.text }}</h3>
          <p v-else class="tar"> {{ p.text }}</p>
        </div>
      </div>
    </max-card>
    <back v-show="show === 'story'" :style="{ top: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem', zIndex: 101 }" @click.native="show = 'main'"/>

    <back v-show="show === 'main'" :style="{ bottom: '0.25rem', right: '0.25rem', width: '1.2rem', height: '1.2rem' }" @click.native="$router.back()"/>
  </div>
</template>

<script>
import { images } from '@/assets/atlas/data'
import stories from '@/data/1-3-3'

export default {
  name: 'QiaoDun',
  data () {
    return {
      show: 'main',
      stories,
    }
  },
  methods: {
    showVideo () {
      this.show = 'video'
      const video = {
        url: require(`../../public/video/dot/1-3-1.mp4`),
      }
      this.$video.play(video).then(() => {
        this.show = 'main'
      })
    },
    showImages () {
      this.show = 'images'
      this.$showImages(images).then(() => {
        this.show = 'main'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#QiaoDun {
  width: 19.2rem;
  height: 10.8rem;
  video {
    width: 100%;
    height: 100%;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    width: 3rem;
    height: 0.9rem;
    background-color: transparent;
    cursor: pointer;
  }
  .video-btn {
    top: 4.7rem;
    right: 3.2rem;
  }
  .atlas-btn {
    top: 6.2rem;
    right: 3.2rem;
  }
  .story-btn {
    top: 7.7rem;
    right: 3.2rem;
  }
  .card {
    position: relative;
    z-index: 1000;
    height: 8rem;
    overflow: auto;
    padding: 5px;
    h3 {
      font-size: 0.32rem;
      text-align: center;
    }
    p {
      margin-bottom: 0.06rem;
      font-size: 0.24rem;
      text-indent: 0.48rem;
      letter-spacing: 0.01rem;
      line-height: 1.3;
      &.tar {
        text-align: right;
        margin-bottom: 0.12rem;
      }
    }
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
}
</style>
