<template>
  <div id="app">
	  <router-view ></router-view>
	  <router-view name="Detail"></router-view>
</div>
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	mounted:function(){
		//console.log(this.$store.getters.getmsg)
		//this.$store.commit("setmsg","kk")
		//console.log(this.$store.getters.getmsg)
		//this.$store.dispatch("delay_change_msg","我是延迟数据")
		//console.log(this.$store.getters.getmsg)
	},
	computed:{
		onemsg(){
			return this.$store.getters.getmsg
		}
	}
	
}
</script>

<style>
     #app{
      height: 100%;
		 }
</style>
