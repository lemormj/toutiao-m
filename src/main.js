/**
 * 项目的入口
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

/**
 * // 创建Vue根实例
//吧router配置到根实例中
//通过render方式吧App根组件渲染到#app入口节点

// new Vue({
//     router,
//     render: h => h(App)
// el: '#app' 等价于$mount('#app')
// }).$mount('#app')
 */
