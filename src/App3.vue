<template>
  <div id="app">
    <div class="main_box">
        <router-view></router-view>
    </div>
		    <div>
		 <yd-tabbar active-color="#009474">
		    <yd-tabbar-item title="首页" link="/main" :active="actives[0]" >
		        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
		    </yd-tabbar-item>
		    <yd-tabbar-item title="搜索" link="/serach" color="#333333" :active="actives[1]">
		        <yd-icon name="search" slot="icon" size="0.54rem"></yd-icon>
		    </yd-tabbar-item>
		    <yd-tabbar-item title="订单" link="/shop" :active="actives[2]">
		        <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
		    </yd-tabbar-item>
		    <yd-tabbar-item title="我的" link="/my" :active="actives[3]">
		        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
		    </yd-tabbar-item>
		 </yd-tabbar>
		</div>
   </div>
</template>

<script>
export default {
       data(){
				 return {
					 actives:[true,false,false,false]
				 }
			 },
			 methods:{
				 clickitem(){
					 console.log("index")
				 },
				 //重置active的值
				 resetActive(){
					 this.actives=this.actives.map(()=>{
					 							 false
					 })
				 }
			 },
			 watch:{
				 $route(val,oldval){
					 val=val.path
					 if(val=="/main"){
						 this.resetActive()
						 this.actives[0]=true
						 console.log('cd');
					 }
					 else if(val=="/serach"){
						 this.resetActive()
						 this.actives[1]=true
					 }
					 else if(val=="/shop"){
					 	 this.resetActive()
						 this.actives[2]=true
					 }
					 else if(val=="/my"){
					 		this.resetActive()
							this.actives[3]=true
					 }
				 }
			 }
}
</script>

<style>
     #app{
      height: 100%;
		 }
    .main_box{
			background: red;
			height: 95%;
		}
</style>
