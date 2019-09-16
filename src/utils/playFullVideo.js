import Vue from 'vue'
import Component from '../components/XVideo.vue'

const XVideoConstructor = Vue.extend(Component)

let instance = null

function initInstance () {
  instance = new XVideoConstructor({
    el: document.createElement('div'),
  })
  document.querySelector('#app').appendChild(instance.$el)
}

function _play (src, auto, callback) {
  if (!instance) {
    initInstance()
  }

  instance.callback = callback
  instance.play(src, auto)
}

function playFullVideo (src, auto) {
  if (Vue.prototype.$isServer) {
    return
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _play(src, auto, resolve)
    })
  }
}

export default playFullVideo
