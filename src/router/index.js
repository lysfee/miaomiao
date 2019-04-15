import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/main'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
import Detail from '@/pages/Detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  name: 'Main',
		  component: Main,
			children:[
				{
				  path: '',
				  name: 'Msite',
				  component: Msite
				},
				    {
				  path: 'shop',
				  name: 'Order',
				  component: Order
				},
				    {
				  path: 'my',
				  name: 'Profile',
				  component: Profile
				},
				    {
				  path: 'search',
				  name: 'Search',
				  component: Search
				}
			]
		},
		 {
		  path: '/detail/:id',
		  name: 'Detail',
		  component: Detail
		}

  ]
})
