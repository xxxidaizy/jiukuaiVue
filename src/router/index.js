import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CurrentCity from '@/components/HomePageCurrentCity'
import HomePageFilter from '@/components/HomePageFilter'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
	mode: 'history', //去除路由中的 #
	routes: [{
		path: '/',
		name: 'HomePage',
		component: HomePage
	}, {
		path: '/CurrentCity',
		name: 'CurrentCity',
		component: CurrentCity
	}, {
		path: '/HomePageFilter',
		name: 'HomePageFilter',
		component: HomePageFilter
	},{
		path: '/Search',
		name: 'Search',
		component: Search
	}]
})