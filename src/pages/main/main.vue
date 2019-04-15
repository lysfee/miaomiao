<template>
  <div id="app2">
    <div class="main_box">
        <router-view ></router-view>
    </div>
		<div class="nav_bottom">
		 <yd-tabbar active-color="#009474" fontsize="1rem" >
		    <yd-tabbar-item v-for="item in shopList " :title="item.tittle" :link="item.link" :active="item.flag" >
		        <yd-icon :name="item.icon_name" slot="icon" size="1rem"></yd-icon>
		    </yd-tabbar-item>
		 </yd-tabbar>
		</div>
   </div>
</template>

<script>
export default {
       data(){
				 return {
					 shopList:[
						 {link:"/",tittle:"首页",icon_name:"home",flag:true},
						 {link:"/search",tittle:"搜索",icon_name:"search",flag:false},
						 {link:"/shop",tittle:"购物车",icon_name:"shopcart-outline",flag:false},
						 {link:"/my",tittle:"我的",icon_name:"ucenter-outline",flag:false},
						 ]
				 }
			 },
			 methods:{
				 clickitem(){
					 console.log("index")
				 },
				 //重置active的值
				 resetActive(){
					 this.shopList.map((item)=>{
					 							item.flag= false
					 })
				 }
			 },
			 watch:{
				 $route(val,oldval){
					 val=val.path
					 this.resetActive()
					 this.shopList.map((item)=>{
					 						 if(item.link==val){	 
					 							 item.flag=true
					 						 }
					 })
				 }
			 }
}
</script>

<style>
     #app2{
      height: 100%;
		 }
	.main_box{
		height: 94%;
		overflow-y:scroll;
	}
	.main_box::-webkit-scrollbar{
    display: none;
}
	.nav_bottom{
		position: absolute;
		width: 100%;
		bottom: 0px;
	}
</style>
