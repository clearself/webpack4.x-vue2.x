const login = () => import('@/pages/login/index.vue')
const screen = () => import('@/pages/screen/index.vue')
const topology = () => import('@/pages/topology.vue')
export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/topology',
        name: 'topology',
        component: topology,
        meta: {
            title: '拓扑图'
        }
    },
    {
        path: '/screen',
        name: 'screen',
        component: screen,
        meta: {
            title: '大屏'
        }
    }
]
