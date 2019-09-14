import Vue from 'vue'
import Component from '../components/Album.vue'

const AlbumConstructor = Vue.extend(Component)

let instance = null

function initInstance () {
  instance = new AlbumConstructor({
    el: document.createElement('div'),
  })
  document.querySelector('#app').appendChild(instance.$el)
}

function _show (images, mode, callback) {
  if (!instance) {
    initInstance()
  }

  instance.callback = callback
  instance.mode = mode
  instance.images = images
  instance.show()
}

function showImages (images, mode = 'zy') {
  if (Vue.prototype.$isServer) {
    return
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _show(images, mode, resolve)
    })
  }
}

export default showImages
