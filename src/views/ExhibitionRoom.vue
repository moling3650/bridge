<template>
  <div id="ExhibitionRoom">
    <div class="header">
      <img class="title" src="../assets/img/ExhibitionRoom-title.png" alt="港珠澳大桥网上展厅">
    </div>
    <ul class="icon-wrapper">
      <li class="icon-item" @click="$router.push('/ZhiShiMoFang')">
        <img src="../assets/img/ExhibitionRoom-1.png" alt="知识魔方">
      </li>
      <li class="icon-item" @click="$router.push('/JianSheDaShiJi')">
        <img src="../assets/img/ExhibitionRoom-2.png" alt="电子图册">
      </li>
      <li class="icon-item">
        <img src="../assets/img/ExhibitionRoom-3.png" alt="视频短片">
      </li>
      <li class="icon-item" @click="$router.push('/DynamicPicture')">
        <img src="../assets/img/ExhibitionRoom-4.png" alt="高清壁纸">
      </li>
    </ul>
    <ul class="btn-wrapper">
      <li class="btn-item" @click="$router.push('/JiaoHu')">
        <img src="../assets/img/ExhibitionRoom-btn1.png" alt="互动留言">
      </li>
      <li class="btn-item" @click="$showFrame('http://news.southcn.com/n/node_395653.htm')">
        <img src="../assets/img/ExhibitionRoom-btn2.png" alt="建设者感言">
      </li>
      <li class="btn-item">
        <img src="../assets/img/ExhibitionRoom-btn3.png" alt="大桥纪录片">
      </li>
    </ul>
    <div class="line"/>
    <guide-button class="rb" @click="$router.push('/End')">继续</guide-button>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionRoom',
}
</script>

<style lang="scss" scoped>
#ExhibitionRoom {
  position: relative;
  width: 19.2rem;
  height: 10.8rem;
  text-align: center;
  background-image: url(../assets/img/ExhibitionRoom-bg.jpg);
  background-size: cover;
  .header {
    padding: 1.2rem;
    text-align: center;
    .title {
      display: inline-block;
      width: 12.7rem;
      height: 1.3rem;
    }
  }
  .icon-wrapper {
    text-align: center;
    .icon-item {
      display: inline-block;
      width: 3.3rem;
      height: 2.6rem;
      cursor: pointer;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .line {
    position: relative;
    top: -2.4rem;
    display: inline-block;
    width: 13.2rem;
    height: 0.03rem;
    background-image: url(../assets/img/line.png);
    background-size: cover;
  }
  .btn-wrapper {
    margin-top: 1rem;
    text-align: center;
    .btn-item {
      display: inline-block;
      width: 3.04rem;
      height: 0.95rem;
      cursor: pointer;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
