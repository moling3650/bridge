
import Vue from 'vue'
import Component from '../components/WebPage.vue'

const WebPageConstructor = Vue.extend(Component)

let instance = null

function initInstance () {
  instance = new WebPageConstructor({
    el: document.createElement('div'),
  })
  document.querySelector('#app').appendChild(instance.$el)
}

function _show (src, callback) {
  if (!instance) {
    initInstance()
  }

  instance.callback = callback
  instance.src = src
  instance.show()
}

function showFrame (src) {
  if (Vue.prototype.$isServer) {
    return
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _show(src, resolve)
    })
  }
}

export default showFrame
