import Vue from 'vue';
import Loading from './loading.vue'

let Mask = Vue.extend(Loading)

const loadingDirective = {};
loadingDirective.install = Vue => {
  Vue.directive('loading', {
    bind: function (el, binding) {//只调用一次
      let loadingText = el.getAttribute('loading-text')
      const instence = new Mask({
        el: document.createElement('div'),
        data: {
          text: loadingText
        }
      })
      el.instence = instence
      el.mask = instence.$el
      // console.log(el.instence)
      binding.value && toggleLoading(el, binding);
    },
    update: function (el, binding) {
      if (binding.oldValue != binding.value) {
        toggleLoading(el, binding)
      }
    }
  });
  const toggleLoading = (el, binding) => {
    Vue.nextTick(() => {
      // console.log(el,binding)
      if (binding.value) {
        if(binding.modifiers.isFullscreen){
          document.body.style.position='relative'
        }else {
          document.body.style.position='static'
          el.style.position = 'relative'
        }
        el.instence.visible = true
        el.appendChild(el.mask)
      } else {
        el.instence.visible = false
      }
    })
  }
}

export default loadingDirective


