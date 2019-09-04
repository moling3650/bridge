/* eslint-disable */
<template>
  <div class="mchart-container">
    <div class="mchart">
      <div class="lengtmaxbut curre">世界最长的海底沉管隧道</div>
      <div class="depthmaxbut">世界最深的海底沉管隧道</div>
      <div id="munmin">
        <div class="numa">1.035km</div>
        <div class="numb">1.387km</div>
        <div class="numc">3.24km</div>
        <div class="numd">3.51km</div>
        <div class="nume">5.664km</div>
      </div>
      <div id="linea">
        <p>日本东京湾海底公路隧道</p>
      </div>
      <div id="lineb">
        <p>土耳其博斯普鲁斯海峡沉管隧道</p>
      </div>
      <div id="linec">
        <p>韩国巨加大桥海底沉管隧道</p>
      </div>
      <div id="lined">
        <p>丹麦-瑞典海峡大桥海底沉管隧道</p>
      </div>
      <div id="linee">
        <p>港珠澳大桥海底沉管隧道</p>
      </div>
      <div id="atipsball"/>
      <div id="btipsball"/>
      <div id="ctipsball"/>
      <div id="dtipsball"/>
      <div id="atipsline"/>
      <div id="btipsline"/>
      <div id="ctipsline"/>
      <div id="dtipsline"/>
      <div id="atipsmian">
        <p>2018年10月前是亚洲最长海底沉管隧道</p>
      </div>
      <div id="btipsmian">
        <p>2018年10月前是世界最长海底沉管隧道</p>
      </div>
      <div id="ctipsmian">
        <p>2018年10月通车后成为世界最长海底沉管隧道，是第二名的1.6倍。</p>
      </div>
      <div id="dtipsmian">
        <p>为保证通行30万吨轮船，港珠澳大桥沉管需埋到海床以下20多米，是全世界埋进海床最深的沉管隧道。.6倍。</p>
      </div>
      <div id="xline"/>
      <div id="yline"/>
      <div id="xlingnum">
        <ul>
          <li>
            <i/>
            <span>1</span>
          </li>
          <li>
            <i/>
            <span>2</span>
          </li>
          <li>
            <i/>
            <span>3</span>
          </li>
          <li>
            <i/>
            <span>4</span>
          </li>
          <li>
            <i/>
            <span>5</span>
          </li>
          <li>
            <i/>
            <span>6</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import { TimelineMax } from 'gsap/TweenMax'
export default {
  name: 'HaidiSuiDaoChart',
  mounted () {
    this.initElement()
  },
  methods: {
    initElement () {
      var xline = $('#xline')
      var yline = $('#yline')
      var munmin = $('#munmin')
      var linea = $('#linea')
      var lineb = $('#lineb')
      var linec = $('#linec')
      var lined = $('#lined')
      var linee = $('#linee')
      var atipsball = $('#atipsball')
      var btipsball = $('#btipsball')
      var ctipsball = $('#ctipsball')
      var dtipsball = $('#dtipsball')
      var atipsline = $('#atipsline')
      var btipsline = $('#btipsline')
      var ctipsline = $('#ctipsline')
      var dtipsline = $('#dtipsline')
      var atipsmian = $('#atipsmian')
      var btipsmian = $('#btipsmian')
      var ctipsmian = $('#ctipsmian')
      var dtipsmian = $('#dtipsmian')
      var xlingnum = $('#xlingnum')

      var q = new TimelineMax()
      q.to(xline, 1, { width: '12.50rem' }, 0.5)
      q.to(yline, 1, { height: '5.70rem' }, 0.5)
      q.to(yline, 1, { top: '1.10rem' }, 0.5)
      q.to(xlingnum, 1, { width: '13.00rem' }, 0.5)
      q.play()

      /*  世界最长的海底沉管隧道 */
      const lq = new TimelineMax()
      lq.to(munmin, 1, { width: 0 }, 0)
      lq.to(munmin, 1, { width: '1.30rem' }, 1)
      $('.numa').text('1.035km')
      $('.numb').text('1.387km')
      $('.numc').text('3.24km')
      $('.numd').text('3.51km')
      $('.nume').text('5.664km')
      lq.to(linea, 0.8, { width: '2.60rem', top: '1.43rem' }, 1.2)
      lq.to(lineb, 0.8, { width: '2.80rem', top: '2.47rem' }, 1.4)
      lq.to(linec, 0.8, { width: '7.40rem', top: '3.55rem' }, 1.6)
      lq.to(lined, 0.8, { width: '8.00rem', top: '4.66rem' }, 1.8)
      lq.to(linee, 0.8, { width: '12.00rem', top: '5.74rem' }, 2)
      lq.to(atipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.2)
      lq.to(btipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.4)
      lq.to(ctipsball, 0.3, { width: '.13rem', height: '.13rem' }, 2.6)
      lq.to(atipsline, 0.3, { height: '1.00rem', top: '2.87rem' }, 2.2)
      lq.to(btipsline, 0.3, { height: '1.00rem', top: '4.00rem' }, 2.4)
      lq.to(ctipsline, 0.3, { height: '1.00rem', top: '5.07rem' }, 2.6)
      lq.to(atipsmian, 0.8, { width: '3.60rem', top: '2.86rem' }, 2.3)
      lq.to(btipsmian, 0.8, { width: '3.60rem', top: '3.99rem' }, 2.5)
      lq.to(ctipsmian, 0.8, { width: '5.70rem', top: '5.06rem' }, 2.7)
      lq.to(dtipsball, 0.3, { width: 0, height: 0 }, 0.4)
      lq.to(dtipsline, 0.3, { height: 0, top: '3.78rem' }, 0.2)
      lq.to(dtipsmian, 0.8, { width: 0 }, 0)
      lq.play()
      var dp = new TimelineMax()
      var alq = new TimelineMax()
      $('.depthmaxbut').click(function () {
        lq.pause()
        alq.pause()
        dp.pause()
        dp.play()
        dp.to(linea, 0.8, { width: '5.00rem', top: '2.47rem' }, 0.6)
        dp.to(lineb, 0.8, { width: '12.00rem', top: '5.74rem' }, 0.6)
        dp.to(linec, 0.8, { width: '9.00rem', top: '4.66rem' }, 0.6)
        dp.to(lined, 0.8, { width: '4.40rem', top: '1.43rem' }, 0.6)
        dp.to(linee, 0.8, { width: '8.80rem', top: '3.55rem' }, 0.6)
        dp.to(atipsball, 0.3, { width: 0, height: 0 }, 0.4)
        dp.to(btipsball, 0.3, { width: 0, height: 0 }, 0.4)
        dp.to(ctipsball, 0.3, { width: 0, height: 0 }, 0.4)
        dp.to(atipsline, 0.3, { height: 0, top: '3.87rem' }, 0.2)
        dp.to(btipsline, 0.3, { height: 0, top: '5.00rem' }, 0.2)
        dp.to(ctipsline, 0.3, { height: 0, top: '6.07rem' }, 0.2)
        dp.to(atipsmian, 0.8, { width: 0 }, 0)
        dp.to(btipsmian, 0.8, { width: 0 }, 0)
        dp.to(ctipsmian, 0.8, { width: 0 }, 0)
        dp.to(dtipsball, 0.3, { width: '.13rem', height: '.13rem' }, 0.8)
        dp.to(dtipsline, 0.3, { height: '1.00rem', top: '2.78rem' }, 1)
        dp.to(dtipsmian, 0.8, { width: '6.00rem' }, 1.2)
        dp.to(munmin, 1, { width: 0 }, 0)
        dp.to(munmin, 1, { width: '1.30rem' }, 1)
        dp.to(xlingnum, 0.3, { width: 0 }, 0)
        dp.to(xlingnum, 1, { width: '13.00rem' }, 0.5)
        dp.to(xlingnum, 0.8, { left: '1.30rem' }, 0.5)
        $('#xlingnum ul li').css('margin-left', '1.90rem')
        $('.numa').text('-25m')
        $('.numb').text('-28m')
        $('.numc').text('-46m')
        $('.numd').text('-48m')
        $('.nume').text('-61m')
        alq = new TimelineMax()
      })
      $('.lengtmaxbut').click(function () {
        dp.pause()
        alq.pause()
        alq.play()
        alq.to(munmin, 1, { width: 0 }, 0)
        alq.to(munmin, 1, { width: 130 }, 1)
        $('.numa').text('1.035km')
        $('.numb').text('1.387km')
        $('.numc').text('3.24km')
        $('.numd').text('3.51km')
        $('.nume').text('5.664km')
        alq.to(linea, 0.8, { width: '2.60rem', top: '1.43rem' }, 0.6)
        alq.to(lineb, 0.8, { width: '2.80rem', top: '2.47rem' }, 0.7)
        alq.to(linec, 0.8, { width: '7.40rem', top: '3.55rem' }, 0.8)
        alq.to(lined, 0.8, { width: '8.00rem', top: '4.66rem' }, 0.9)
        alq.to(linee, 0.8, { width: '12.00rem', top: '5.74rem' }, 1)
        alq.to(atipsball, 0.3, { width: '.13rem', height: '.13rem' }, 1.2)
        alq.to(btipsball, 0.3, { width: '.13rem', height: '.13rem' }, 1.4)
        alq.to(ctipsball, 0.3, { width: '.13rem', height: '.13rem' }, 1.6)
        alq.to(atipsline, 0.3, { height: '1.00rem', top: '2.87rem' }, 1.6)
        alq.to(btipsline, 0.3, { height: '1.00rem', top: '4.00rem' }, 1.8)
        alq.to(ctipsline, 0.3, { height: '1.00rem', top: '5.07rem' }, 2)
        alq.to(atipsmian, 0.8, { width: '3.60rem', top: '2.86rem' }, 1.8)
        alq.to(btipsmian, 0.8, { width: '3.60rem', top: '3.99rem' }, 2)
        alq.to(ctipsmian, 0.8, { width: '5.70rem', top: '5.06rem' }, 2.2)
        alq.to(dtipsball, 0.3, { width: 0, height: 0 }, 0.4)
        alq.to(dtipsline, 0.3, { height: 0, top: '3.78rem' }, 0.2)
        alq.to(dtipsmian, 0.8, { width: 0 }, 0)
        alq.to(xlingnum, 0.3, { width: 0 }, 0)
        alq.to(xlingnum, 1, { width: '13.00rem' }, 0.5)
        alq.to(xlingnum, 0.8, { left: '1.91rem' }, 0.5)
        $('#xlingnum ul li').css('margin-left', '2.15rem')
        dp = new TimelineMax()
      })
    },
  },
}
</script>
<style lang='scss' sopped>
  @import './scss/ncss.css'
</style>
