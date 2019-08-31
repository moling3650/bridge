
import Vue from 'vue'
import Component from '../components/VideoPlayer.vue'

const VideoPlayerConstructor = Vue.extend(Component)

const defaultProps = {
  show: false,
  options: {
    autoplay: true,
    theme: '#fadfa3',
    loop: false,
    screenshot: false,
    hotkey: true,
    preload: 'auto',
    mutex: true,
  },
}

let instance = null

function initInstance () {
  instance = new VideoPlayerConstructor({
    el: document.createElement('div'),
  })
  document.querySelector('#app').appendChild(instance.$el)
}

function _play (video, callback) {
  if (!instance) {
    initInstance()
  }
  for (const prop in defaultProps) {
    instance[prop] = defaultProps[prop]
  }
  instance.callback = callback
  instance.play(video)
}

function playVideo (video) {
  if (Vue.prototype.$isServer) {
    return
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _play(video, resolve)
    })
  }
}

export default playVideo
