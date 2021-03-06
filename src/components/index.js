import Button from './button/index.js'

const components = [
  Button
]

const install = function (Vue) {
  console.log(Vue)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}
