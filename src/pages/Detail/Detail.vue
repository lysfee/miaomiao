<template>
<div style="height: 100%;">
	
	<div class="detail_head">
	{{shop_id}}
	</div>
	<div class="detail_info">
		<div class="detail_check">
			<a v-for="item in wpList" @click="select(item.name)" href="#" style="font-size: 1.2rem;"  :class="{activeCheck:active==item.name}" >{{item.name}}</a>
		</div>
		<div class="detail_good" v-if="active==wpList[0].name">
		<div class="catege" >
			<li @click="go_index(index)" v-for="(item ,index) in goodCageList" :class="{currentactive:currentactive==index}">
				<span>{{item}}</span>
			</li>
		</div>
		<div class="categeList" @scroll="scrollHandle" ref="c_id">
			<li v-for="(item ,index) in goodList">
					<div class="car_info">
						<div class="car_img">
							<img src="//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg" alt="" style="width: 90%; height: 90%;">
						</div>
						<div class="car_somes">
							<p class="head">{{item.tittle}}</p>
							<div class="count">月售{{item.monthCount}}</div>
							<div class="addCount">
								<span class="fuhao">¥</span>
								<span class="price">{{item.price}}</span>
								<div class="jia_info">
									<div class="flag jia" @click="addshop(item.id)">+</div>
									<span class="sum">0</span>
									<div class="flag jian">-</div>		
								</div>
								
							</div>
						</div>
					</div>
			</li>
		</div>
		</div>
		<div class="detail_comment" v-if="active==wpList[1].name">
			<div class="head" v-for="item in shoppingfen">
				<div>{{item.pingfen}}</div>
				<div>
					<div>商家评分</div>
					<div style="font-size: 0.8rem;">
						<yd-rate slot="center" v-model="item.pingfen" readonly color="#999999"></yd-rate>
					</div>
				</div>
				<div>
					<p>味道</p>
					<p>{{item.weidao}}</p>
				</div>
				<div>
					<p>包装</p>
					<p>{{item.baozhuang}}</p>
				</div>
				<div>
					<p>配送</p>
					<p>{{item.peisong}}</p>
				</div>
			</div>
			<div class="user_comment" v-for="item in shopComment">
				<div class="head">
					<div class="img">
						<img src="//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg" alt="" style="height: 100% ;width: 100%;">
					</div>
					<div >
						<p style="font-size: 0.8rem;">{{item.username}}</p>
						<yd-rate slot="center" v-model="item.pingfen" readonly color="#999999" size="0.5rem"></yd-rate>
						<p>{{item.conment}}</p>
					</div>
					<div>
						{{item.datetime}}
					</div>
				</div>
				<div class="info">
					
				</div>
			</div>
		</div>
		<div class="detail_shop" v-if="active==wpList[2].name">
			<div>
				<div>商家名称</div>
				<div>保鲜家</div>
			</div>
			<div>
				<div>商家品类</div>
				<div>保鲜家</div>
			</div>
			<div>
				<div>商家地址</div>
				<div>佛山市南海区狮山镇</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				shop_id:this.$route.params.id,
				IsactiveList:[true,false,false],
				wpList:[
					{
						name:"点餐"
					},
					{
						name:"评价"
					},
					{
						name:"商家"
					}
				],
				active:"点餐",
				tops:[0],
				currentactive:0,
			};
		},
		created(){
			console.log(this.$route.params.id)
			//console.log(this.$store.getters.goodCageList)
		},
		mounted(){
			
			this.init_top()
			//console.log(this.shoppingfen)
			//console.log(this.$store.getters.getshopComment);
		},
		watch:{
			$route(val,oldval){
				val=val.path
				//console.log(val)

			}
		},
		methods:{
			select(name){
				this.active=name
			},
			//初始化li的top的值
			init_top(){
				let sum=0
				for(let i=0;i<this.$refs.c_id.children.length;i++){
					let val=this.$refs.c_id.children[i].clientHeight
					sum+=val
					this.tops.push(sum)
				}
			},
			scrollHandle(e){
				let val=this.$refs.c_id.scrollTop
				val=Math.ceil(val)
				this.tops.map((item,index)=>{
					if(val>=item&&val<this.tops[index+1]){
						this.currentactive=index
					}
				})
			},
			go_index(index){
				var val=this.$refs.c_id.children[0].clientHeight
				val=val*index
				//console.log(val)
				this.$refs.c_id.scrollTop=val;
			},
			//获取对应店的id的商品
			getlist(itemList){
				let list=[]
				console.log(this.shop_id)
				itemList.forEach(item=>{
					if(item.shop_id==this.shop_id){
						 list=item.name	
					}
				})
				return list
			  },
			 
			 //遍历
			 //购物车添加
			addshop(id){
				this.$store.getters.getlistGouwuche.
				console.log(this.$store.getters.getlistGouwuche);
			}
		},
		computed:{
			goodCageList(){
				return this.getlist(this.$store.getters.goodCageList)
			},
			goodList(){
				return this.getlist(this.$store.getters.goodList)
			},
			shopComment(){
				return this.getlist(this.$store.getters.shopComment)
			},
			shoppingfen(){
				return this.getlist(this.$store.getters.shoppingfen)
			}
			
		}
	}
</script>

<style>
	li{
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	.detail_head{
		height: 25%;
		background: #009474;
	}
	.detail_info{
		height: 68%;
	}
	.detail_check{
		height: 10%;
		display: flex;
		border-bottom: 1px solid #E5E5E5;
	}
	.detail_check a{
		flex: 1;
		text-align: center;
		line-height: 3rem;
		color: #999999;
		
	}
	.activeCheck{
		color: #009474 !important;
		border-bottom: 2px solid #009474;
	}
	.detail_good{
		height: 100%;
		overflow-y: auto;
		position: relative;
		display: flex;
	}

	.detail_comment{
		height: 15rem;
	}
	.detail_shop{
		height: 15rem;
	}
	
	.catege{
		flex: 1;
		height: 100%;
		overflow: scroll;
		background: #E5E5E5;
		text-align: center;
	}
	.categeList{
		flex: 3;
		height: 100%;
		overflow: scroll;
	}
	.catege li{
		padding: 10px;
		color: #808080;
		font-size: 1.5rem;
		border-bottom: 1px solid #E5E5E5;
	}
	.categeList li{
		position: relative;
	}
	.catege .currentactive{
		color: #009474;
		background: #ffffff;
	}
	.catege::-webkit-scrollbar{
	    display: none;
	}
	.categeList::-webkit-scrollbar{
	    display: none;
	}
	.categeList .car_info{
		padding-left: 1rem;
		padding-top: 0.5rem;
		height: 8rem;
		display: flex;
		
	}
	.car_info .car_img{
		flex: 2;
		height: 100%;
		text-align: center;
	}
	.car_info .car_somes{
		flex: 3;
		height: 100%;
		padding-left: 0.8rem;
	}
	.car_somes .head{
		font-size: 1rem;
		padding-bottom: 1rem;
		
	}
	.car_somes .count{
		font-size: 1rem;
		color: #999999;
		padding-bottom: 1rem;
	}
	.car_somes .fuhao{
		font-size: 1rem;
		color: red;
	}
	.car_somes .price{
		font-size: 1rem;
		color: red;
	}
	.car_somes .addCount{
		position: relative;
	}
	.car_somes .jia_info{
		position: absolute;
		right: 0px;
		bottom: 0rem;
	}
	.car_somes .flag{
		width: 1rem;
		height: 1rem;
		background: #42B983;
		border-radius: 50%;
		color:#fff;
		line-height: 1rem;
		text-align: center;
		font-size: 1rem;
	}
	.car_somes .jia{
		float: right;
	}
	.car_somes .jian{
		float: right;
	}
	.car_somes .sum{
		float: right;
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.detail_comment .head{
		display: flex;
	}
	.detail_comment .head>div{
		flex: 1;
		height: 3rem;
	}
	.detail_comment .head>div:nth-child(1){
		color: orangered;
		font-size: 2.5rem;
		height: 100%;
		width: 100%;
		text-align: center;
		line-height: 4rem;
	}
	
	.detail_comment .head>div:nth-child(2),
	.detail_comment .head>div:nth-child(3),
	.detail_comment .head>div:nth-child(4),
	.detail_comment .head>div:nth-child(5)
	{
		height: 100%;
		width: 100%;
		font-size: 1rem;
		line-height: 2rem;
		text-align: center;
	}
	.detail_comment .head>div:nth-child(4){
		border-right: 1px solid #E5E5E5;
	}
	.detail_comment .head>div:nth-child(2){
		text-align: left;
		padding-left: 1rem;
	}
	.user_comment{
		border-bottom: 1px solid #E5E5E5;
	}
	.user_comment .head{
		display: flex;
	}
	.user_comment .head>div:nth-child(1){
		flex: 1;
		height: 3rem;
		margin: 0px;
		padding: 5px;
	}
	.user_comment .head>div:nth-child(2){
		flex: 8;
	}
	.user_comment .head>div:nth-child(3){
		flex: 2;
		font-size: 0.8rem;
		line-height: 4rem;
		text-align: left;
	}
	.detail_shop >div{
		height:3rem;
		display: flex;
		border-bottom: 1px solid #E5E5E5;
	}
	.detail_shop >div div:nth-child(1){
		flex: 1;
		text-align: center;
		line-height: 3rem;
		font-size: 0.9rem;
	}
	.detail_shop >div div:nth-child(2){
		flex: 4;
		text-align: right;
		box-sizing: border-box;
		padding-right: 0.5rem;
		line-height: 3rem;
		color: #999999;
	}




</style>
