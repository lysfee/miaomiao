<template>
	<div>
		<div class="my_tittle">
			我的
		</div>
		<div class="my_info_unlogin">
			<div class="my_info_icon">
				<yd-icon name="ucenter" size="4rem" color="#999999"></yd-icon>
			</div>
			<div class="my_info_msg">
				<div class="my_info_child">
					<div>登陆/注册</div>
					<div>
						<yd-icon name="phone3" size="1rem"></yd-icon>
						暂无绑定手机号
					</div>
				</div>
		
            <div class="my_info_jiantou">></div>
			</div>
		</div>
		<div class="my_info_price">
			<div class="price">
				<div class="price_box">
					<div class="price_1">
						<span class="price_big">0.00</span>
						<span class="price_yuan">元</span>
					</div>
					<div class="price_2">我的余额</div>
				</div>

			</div>
				
			<div class="youhui">
				<div class="yh_box">
					<div class="yh_price">
						<span class="yh_count">0.0</span><span class="yh_ge">个</span>
					</div>
					<div class="my_youhui">我的优惠</div>
				</div>
			</div>
			<div class="jifen">
				<div class="jf_box">
					<div class="jf_price">
						<span class="jf_count">0.0</span><span class="jf_ge">个</span>
					</div>
					<div class="my_jifen">我的积分</div>
				</div>
			</div>
		</div>
		<div>
			<div class="list_item">
				<span><yd-icon name="feedback" size="1.2rem" color="#98FB98"></yd-icon></span>
				<span>我的订单</span>
				<span class="jiantou">></span>
			</div>
			<div class="list_item">
				<span><yd-icon name="footmark" size="1.2rem" color="#FF7F24"></yd-icon></span>
				<span>积分商城</span>
				<span class="jiantou">></span>
			</div>
			<div class="list_item">
				<span><yd-icon name="verifycode" size="1.2rem" color="#DAA520"></yd-icon></span>
				<span>食道外卖会员卡</span>
				<span class="jiantou">></span>
			</div>
			<div class="list_item fuwu">
				<span><yd-icon name="question" size="1.2rem" color="#218868"></yd-icon></span>
				<span>服务中心</span>
				<span class="jiantou">></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list_:"dsfacadsfdasf"
			}
		}
	}
</script>

<style>
	.my_tittle{
		height: 4rem;
		background: #009474;
		text-align: center;
		line-height: 4rem;
		font-size: 2rem;
		color: #fff;
		border-bottom: 1px solid #fff;
	}
	.my_info_unlogin{
		display: flex;
		background: #009474;
		height: 8rem;
	}
	.my_info_icon{
		flex: 1;
		height: 8rem;
		line-height: 8rem;
		text-align: center;
	}
	.my_info_msg{
		flex: 3;
		font-size: 1rem;
		height: 8rem;
		position: relative;
	}
	.my_info_child{
		position: absolute;
		top:35%;
		color: #fff;
	}
	.my_info_jiantou{
		position: absolute;
		font-size: 2rem;
		color: #fff;
		right: 0.5rem;
		top:35%;
	}
	.my_info_price{
		height: 6rem;
		display: flex;
	}
	.my_info_price .price{
		flex: 1;
		position: relative;
		border: 1px solid #E5E5E5;
		
	}
	.price .price_box{
		width: 6rem;
		height: 5rem;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		
	}
	.my_info_price .price .price_1{
		height: 3rem;
		line-height: 3rem;
		text-align: center;
	}
	.price_big{
		font-size: 2rem;
		color: #ff9933;
	}
	.price_yuan{
		font-size: 1rem;
	}
	.my_info_price .price .price_2{
		font-size: 1rem;
		text-align: center;
	}


	
	.my_info_price .youhui{
		flex: 1;
		position: relative;
		border: 1px solid #E5E5E5;
	}
	.youhui .yh_box{
		width: 6rem;
		height: 5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		}
	.yh_box .yh_price{
		height: 3rem;
		line-height: 3rem;
		text-align: center;
	}
	.yh_box .yh_price .yh_count{
		font-size: 2rem ;
		color: #CD3333;
	}
	.yh_box .yh_price .yh_ge{
		font-size: 1rem ;
	}
	.yh_box .my_youhui{
		font-size: 1rem;
		text-align: center;
	}
	
	.my_info_price .jifen{
		flex: 1;
		position: relative;
		border: 1px solid #E5E5E5;
	}
	.jifen .jf_box{
		width: 6rem;
		height: 5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		}
	.jf_box .jf_price{
		height: 3rem;
		line-height: 3rem;
		text-align: center;
	}
	.jf_box .jf_price .jf_count{
		font-size: 2rem ;
		color: #42B983;
	}
	.jf_box .jf_price .jf_ge{
		font-size: 1rem ;
	}
	.jf_box .my_jifen{
		font-size: 1rem;
		text-align: center;
	}
	.list_item{
		height: 5rem;
		line-height:5rem ;
		font-size: 1.2rem;
		padding-left: 0.5rem;
		border-bottom: 1px solid #E5E5E5;
	}
	.list_item .jiantou{
		float: right;
		padding-right: 0.5rem;
		color: #999999;
	}
	.fuwu{
		margin-top: 2rem;
		border-top: 1px solid #E5E5E5;
	}
</style>
