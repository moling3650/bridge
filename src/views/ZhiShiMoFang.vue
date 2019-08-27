<template>
  <div id="ZhiShiMoFang">
    <div class="tech-container">
      <ul class="tech-list">
        <div>
          <li>
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_1.png">
              </div>
              <div class="hide">
                <h3/>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_2.png">
              </div>
              <div class="hide">
                <h3>
                  华龙一号
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_3.png">
              </div>
              <div class="hide">
                <h3>
                  脉冲式散裂<br>中子源
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_4.png">
              </div>
              <div class="hide">
                <h3>
                  深圳国家<br>基因库
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_5.png">
              </div>
              <div class="hide">
                <h3>
                  “天河二号”<br>超级计算机
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_6.png">
              </div>
              <div class="hide">
                <h3>
                  全球最大水陆两栖飞机AG600
                </h3>
              </div>
            </div>
          </li>
        </div>
        <div>
          <li class="out-bottom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_7.png">
              </div>
              <div class="hide">
                <h3>
                  大疆无人机
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_8.png">
              </div>
              <div class="hide">
                <h3>
                  华为
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_9.png">
              </div>
              <div class="hide">
                <h3>
                  大亚湾中微子<br>实验室
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_10.png">
              </div>
              <div class="hide">
                <h3>
                  优必选Alpha<br>机器人
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_11.png">
              </div>
              <div class="hide">
                <h3>
                  亿航自动驾驶飞行器
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_12.png">
              </div>
              <div class="hide">
                <h3>
                  “蓝鲸1号”<br>钻井平台
                </h3>
              </div>
            </div>
          </li>
        </div>
        <div>
          <li class="out-bottom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_13.png">
              </div>
              <div class="hide">
                <h3>
                  全球首艘极地<br>重载甲板运输船
                </h3>
              </div>
            </div>
          </li>
          <li class="out-bottom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_14.png">
              </div>
              <div class="hide">
                <h3>
                  富士康<br>工业互联网
                </h3>
              </div>
            </div>
          </li>
          <li class="out-bottom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_15.png">
              </div>
              <div class="hide">
                <h3>
                  ±800千伏特高压直流工程
                </h3>
              </div>
            </div>
          </li>
          <li class="out-bottom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_16.png">
              </div>
              <div class="hide">
                <h3>
                  极行者号无人艇
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_17.png">
              </div>
              <div class="hide">
                <h3>
                  深圳光启<br>“旅行者”3号
                </h3>
              </div>
            </div>
          </li>
          <li class="out-right" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="picBox">
              <div class="show">
                <img height="175px" width="175px" src="http://www.gdggkf.com/zg/assets/tech/list_18.png">
              </div>
              <div class="hide">
                <h3>
                  深圳前海<br>供冷系统
                </h3>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
    <nav-bar/>
  </div>
</template>

<script>
export default {
  name: 'ZhiShiMoFang',
  data () {
    return {
      techList: [
        '华龙一号',
        '脉冲式散裂<br>中子源',
        '深圳国家<br>基因库',
        '“天河二号”<br>超级计算机',
        '全球最大水陆两栖飞机AG600',
        '大疆无人机',
        '华为',
        '大亚湾中微子<br>实验室',
        '优必选Alpha<br>机器人',
        '亿航自动驾驶飞行器',
        '“蓝鲸1号”<br>钻井平台',
        '全球首艘极地<br>重载甲板运输船',
        '富士康<br>工业互联网',
        '±800千伏特高压直流工程',
        '极行者号无人艇',
        '深圳光启<br>“旅行者”3号',
        '深圳前海<br>供冷系统',
      ],
    }
  },
  methods: {
    _getDirection (event) {
      const x = event.pageX - event.target.offsetLeft// (得到鼠标在框中的坐标)
      const y = event.pageY - event.target.offsetTop// (得到鼠标在框中的坐标)
      const H = event.target.clientHeight
      const W = event.target.clientWidth
      const k = Math.floor(H / W)// 为了防止不能整除
      if ((k * x) >= y && (H - k * x) >= y) { // 这是判断从上方进入,这边简化处理不对等于情况做特别处理
        return 'top'
      }
      if ((k * x) < y && (H - k * x) < y) {
        return 'bottom'
      }
      if ((k * x) < y && (H - k * x) > y) {
        return 'left'
      }
      if ((k * x) > y && (H - k * x) < y) {
        return 'right'
      }
    },
    handleMouseEnter (event) {
      event.target.className = `in-${this._getDirection(event)}`
    },
    handleMouseLeave (event) {
      event.target.className = `out-${this._getDirection(event)}`
    },
  },
}
</script>

<style lang="scss" scoped>
#ZhiShiMoFang {
  background-repeat: no-repeat;
  background-image: url(../../public/img/bg/magic_cube.jpg) ;
  background-size: 100%;
}
.tech-container{position: relative; padding-top: 240px; }
.tech-container .tech-list{width: 100%;height: 210px;padding: 0; text-align: center;box-sizing: border-box;}
.tech-container li{position: relative;width: 200px;height: 200px;list-style:none;margin: 3px;display: inline-block;perspective: 400px;}
.tech-container li img{width:100%; height: auto;}
.tech-container .picBox{position: absolute;top: 0;right: 0;bottom: 0;left: 0;transform-style: preserve-3d;transform-origin: 50% 50% -100px;animation: 200ms ease-out 0ms 1 normal forwards;}
.tech-container .show,
.tech-container .hide{position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 101}
.tech-container .hide{color:#fff;background-color:#1ab7ea;text-align:center;height:200px;display: flex;align-items: center;transform: translate3d(0,0,-1px);cursor: pointer;}
.tech-container .hide h3{font-size: 21px; line-height: 1.5; padding: 10px; width: 180px; font-weight: normal;}
.tech-container .in-top .hide,
.tech-container .out-top .hide{ transform-origin: 0% 100%;transform: translate3d(0, -100%, 0) rotate3d(1,0,0,90deg); }
.tech-container .in-top .picBox{animation-name: in-top; animation-play-state: running;}
.tech-container .out-top .picBox{animation-name: out-top; animation-play-state: running;}
@keyframes in-top {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(-1,0,0,90deg)}
}

@keyframes out-top {
    from {transform: rotate3d(-1,0,0,90deg)}
    to   {transform: rotate3d(0,0,0,0deg)}
}
.tech-container .in-right .hide,.tech-container .out-right .hide {transform-origin: 0% 0%;transform: translate3d(100%, 0, 0) rotate3d(0,1,0,90deg);}
.tech-container .in-right .picBox{animation-name: in-right; animation-play-state: running;}
.tech-container .out-right .picBox{animation-name: out-right; animation-play-state: running;}
@keyframes in-right {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(0,-1,0,90deg)}
}

@keyframes out-right {
    from  {transform: rotate3d(0,-1,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}

.tech-container .in-bottom .hide,.tech-container .out-bottom .hide {transform-origin: 0% 0%;transform: translate3d(0, 100%, 0) rotate3d(-1,0,0,90deg);}
.tech-container .in-bottom .picBox{animation-name: in-bottom;animation-play-state: running;}
.tech-container .out-bottom .picBox{animation-name: out-bottom;animation-play-state: running;}
@keyframes in-bottom {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(1,0,0,90deg)}
}
@keyframes out-bottom {
    from  {transform: rotate3d(1,0,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}
.tech-container .in-left .hide,.tech-container .out-left .hide {transform-origin: 100% 0;transform: translate3d(-100%,0,0) rotate3d(0,-1,0,90deg);}
@keyframes in-left {
    from  {transform: rotate3d(0,0,0,0deg)}
    to    {transform: rotate3d(0,1,0,90deg)}
}
@keyframes out-left {
    from  {transform: rotate3d(0,1,0,90deg)}
    to    {transform: rotate3d(0,0,0,0deg)}
}
.tech-container .in-left .picBox{animation-name: in-left;animation-play-state: running;}
.tech-container .out-left .picBox{animation-name: out-left;animation-play-state: running;}
</style>
