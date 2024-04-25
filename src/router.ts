import { createMemoryHistory, createRouter } from 'vue-router'

import IpList from './pages/IpList.vue'

const routes = [
	{ path: '/', component: IpList },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})