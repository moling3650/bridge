<template>
  <div id="Loader">
    <div class="loading">
      <div v-for="i in 9" :key="i" class="square"/>
    </div>
    <div v-show="isLoading" class="loading-text">
      <span class="text">页面加载中</span>
      <div class="blob-group">
        <span v-for="i in 3" :key="i" :class="['blob', `blob${i}`]"/>
      </div>
    </div>
    <div v-show="!isLoading" class="loading-text">
      <span class="text done" @click="$emit('click-start')">请点击开始</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
#Loader {
  width: 19.2rem;
  height: 10.8rem;
  // padding-top: 2rem;
  text-align: center;
  background-image: url(../../public/img/poster/Home-1-p.jpg);
  background-size: 100%;
}
.loading {
  position: relative;
  top: 2rem;
  background: transparent;
  margin: 0 auto 1rem;
  width: 1rem;
  height: 1rem;
  animation: spin 10s infinite;
  .square {
    background: #1ab7ea;
    border-radius: 0.05rem;
    float: left;
    clear: right;
    margin: 0.03rem;
    width: 0.27rem;
    height: 0.27rem;
    animation-name: disappear;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) { animation-delay: 200ms; }
    &:nth-child(2) { animation-delay: 400ms; }
    &:nth-child(3) { animation-delay: 600ms; }
    &:nth-child(4) { animation-delay: 400ms; }
    &:nth-child(5) { animation-delay: 600ms; }
    &:nth-child(6) { animation-delay: 800ms; }
    &:nth-child(7) { animation-delay: 600ms; }
    &:nth-child(8) { animation-delay: 800ms; }
    &:nth-child(9) { animation-delay: 1000ms; }
  }
}

@keyframes disappear {
  0% {
    background-color: #1ab7ea;
    transform: scale(1, 1);
  }
  100% {
    background-color : lighten(#1ab7ea, 40%);
    transform: scale(0, 0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  position: relative;
  top: 1.5rem;
  display: inline-block;
  font-size: 0.24rem;
  .text {
    color: #eee;
    font-weight: bold;
    &.done {
      cursor: pointer;
    }

  }
  .blob-group {
    display: inline-block;
    width: 0.4rem;
  }
  .blob {
    position: relative;
    display: inline-block;
    width: 0.05rem;
    height: 0.05rem;
    margin: 0.05rem 0.03rem;
    border-radius: 50%;
    background-color: #eee;
    animation: loading-blob 1.6s infinite;
    animation-timing-function: ease-in-out;
    transform: translate3d(0, 0, 0);
  }

  .blob2 {
    animation-delay: 150ms;
  }

  .blob3 {
    animation-delay: 300ms;
  }
}

@keyframes loading-blob {
	0% { height: 0.03rem; width: 0.03rem;}
	25% { height: 0.07rem; width: 0.07rem;}
	50% { height: 0.05rem; width: 0.05rem; }
	100% { height: 0.03rem; width: 0.03rem; }
}
</style>
