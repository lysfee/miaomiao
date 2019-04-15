import shop from "./shop/index.js"
import detail from "./detail/index.js"
import gouwuche from "./gouwuche/index.js"
import vuex from "vuex"
import Vue from "vue"
Vue.use(vuex)
export default new vuex.Store({
	modules:{
		shop:shop,
		detail:detail,
		gouwuche:gouwuche
	}
})