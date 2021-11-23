/**
 * @author: wenyuan
 * @data: 2019/08/20
 * @repository: https://github.com/wenyuan
 * @description: 整合所有的组件，对外导出，即一个完整的组件库
 */

import CCTopology from './cc-topology'

// 存储组件列表
const components = [
    CCTopology
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    console.info('install----CCEditor: All----')
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    CCTopology
}

export {
    install,
    // 以下是具体的组件列表
    CCTopology
}