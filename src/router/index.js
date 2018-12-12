import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CurrentCity from '@/components/CurrentCity'

Vue.use(Router)

export default new Router({
	mode: 'history', //去除路由中的 #
	routes: [{
			path: '/',
			name: 'HomePage',
			component: HomePage
		},
		{
			path: '/CurrentCity',
			name: 'CurrentCity',
			component: CurrentCity
		}
	]
})