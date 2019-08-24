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
  text-align: center;
}
.loading {
  background: #fff;
  margin: 100px auto;
  width: 100px;
  height: 100px;
  animation: spin 10s infinite;
  .square {
    background: #1ab7ea;
    border-radius: 5px;
    float: left;
    clear: right;
    margin: 3px;
    width: 27px;
    height: 27px;
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
  display: inline-block;
  font-size: 24px;
  .text {
    color: #1ab7ea;
    font-weight: bold;
    &.done {
      cursor: pointer;
    }

  }
  .blob-group {
    display: inline-block;
    width: 40px;
  }
  .blob {
    position: relative;
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: 5px 3px;
    border-radius: 50%;
    background-color: #1ab7ea;
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
	0% { height: 3px; width: 3px;}
	25% { height: 7px; width: 7px;}
	50% { height: 5px; width: 5px; }
	100% { height: 3px; width: 3px; }
}
</style>
