const login = () => import('@/pages/login/index.vue')
const screen = () => import('@/pages/screen/index.vue')
const topology = () => import('@/pages/topology.vue')
const screen_fast = () => import('@/pages/screenFast.vue')
export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/screen_fast',
        name: 'screen_fast',
        component: screen_fast,
        meta: {
            title: '远程桌面'
        }
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
