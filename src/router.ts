import { createMemoryHistory, createRouter } from 'vue-router'

import IpList from './pages/IpList/IpList.vue'
import IpPage from './pages/IpPage/IpPage.vue'

const routes = [
  {
    path: '/ip/:ipQuery', component: IpPage, name: "IpPage"
  },
  {
    path: '/ip/list', component: IpList,name: 'IpListPage'
  },
  { path:'/', redirect: { name: 'IpListPage' } }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
} )
