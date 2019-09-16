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

function _play (src, callback) {
  if (!instance) {
    initInstance()
  }

  instance.callback = callback
  instance.play(src)
}

function playFullVideo (src) {
  if (Vue.prototype.$isServer) {
    return
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _play(src, resolve)
    })
  }
}

export default playFullVideo
