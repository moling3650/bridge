<template>
  <div class="dot-wrap" v-bind="$attrs">
    <div class="dot-2"/>
    <div class="text">{{ text }}</div>
    <div class="dot example-1">
      <div class="dot dot-1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.dot-wrap {
  position: absolute;
  & > .text {
    display: none;
  }
  &:hover > .text {
    position: absolute;
    top: -20px;
    left: -150%;
    display: inline-block;
    width: 400%;
    font-size: 22px;
    color: #eee;
  }
}
.dot {
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.example-1 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.dot-1 {
  background: #1ab7ea;
  opacity: 0;
  animation: kf 2.5s cubic-bezier(.41,.25,.32,.83) infinite;
}
.dot-2 {
  position: absolute;
  display: inline-block;
  top: 15px;
  left: 15px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #1ab7ea;
}
@keyframes kf {
  0% {
    height: 10px;
    width: 10px;
    opacity: 0;
  }
  50% {
    height: 30px;
    width: 30px;
    opacity: .8;
  }
  90% {
    opacity: 0;
  }
}
</style>
