// router/index.js
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

export const toolsRouter: RouteRecordRaw[] = [
  {
    path: '/sprite',
    name: '雪碧图',
    meta: {
      title: '雪碧图拼接'
    },
    component: () => import('@/pages/sprite/index.vue'),
  },
  {
    path: '/file-download',
    name: '文件下载',
    meta: {
      title: '文件下载（base64、url）'
    },
    component: () => import('@/pages/fileDownload.vue'),
  },
  {
    path: '/color',
    name: 'TO-COLOR',
    meta: {
      title: '颜色转换'
    },
    component: () => import('@/pages/color/index.vue'),
  },
  {
    path: '/to-base64',
    name: 'TO-BASE64',
    meta: {
      title: '转 base64（图片）'
    },
    component: () => import('@/pages/toBase64/index.vue'),
  },
  {
    path: '/to-css',
    name: 'TO-CSS',
    meta: {
      title: '转 css'
    },
    component: () => import('@/pages/toCss/index.vue'),
  }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: toolsRouter[0].path,
  },
  ...toolsRouter
  // 更多的路由...
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

let loading: any;
router.beforeEach((_to, _from, next) => {
  loading = ElLoading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.7)',
  })
  next()
})
router.afterEach(() => {
  loading?.close()
})

export default router
