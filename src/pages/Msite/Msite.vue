<template>
<div class="head_box">
	<yd-navbar title="北京路" height="3rem" fontsize="2rem" bgcolor="#009474" color="#fff" >
        <router-link to="#" slot="left">
            <yd-icon name="location" size="25px" color="#fff"></yd-icon>
        </router-link>

        <router-link to="#" slot="right">
           <span style="font-size: 1rem;">注册/登陆</span>
        </router-link>
    </yd-navbar>

	<yd-slider autoplay="3000">
		    <yd-slider-item >
		        <a href="http://www.ydcss.com">
		            <img src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg" style="width: 100%;height: 12rem;">
		        </a>
		    </yd-slider-item>
		    <yd-slider-item>
		        <a href="http://www.ydcss.com">
		            <img src="http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg" style="width: 100%;height: 12rem;">
		        </a>
		    </yd-slider-item>
	</yd-slider>
	<div>
		<div style="height: 2rem;line-height: 2rem;">
			&nbsp;
			<yd-icon name="type" size="1rem" color="#999999"></yd-icon>
			&nbsp;
			<span style="color: #999999; font-size: 1rem;">附近商家</span>
		</div>
		<router-link  style="display: flex; height: 100px; margin-top: 10px;" v-for="item in get_shoplist" :to="{name:'Detail',params:{id:item.id}}">
			<div style="flex: 2;box-sizing: border-box;padding: 5px;">
				<img :src="item.img" alt="" style="height: 100%;width: 100%">
			</div>
			<div style="flex: 5; height: 100%; box-sizing: border-box;padding-left: 10px;border-bottom: 1px solid #E5E5E5;">
				<div style="height: 1.5rem;position: relative;">
				<div style="float: left; background: #DAA520;width: 2rem;
				text-align: center; position: absolute;bottom: 0px;" v-if="item.pinpai_flag">
					<strong>品牌</strong>
				</div> 
					<span style="font-size: 1.2rem;position: absolute;left:15%;bottom: 0px;">
					{{item.title}}
					</span>
				</div>
				<div style="display: flex;margin-top: 1.3rem;">
					<div style="color: #EE9A00; font-size: 0.8rem; 
					flex: 1;position: relative;"><p style="position: absolute;bottom: 0px;;">{{item.fenshu}}</p></div>
					<div style=" font-size: 0.8rem; flex: 4;text-align: center;">月售{{item.month_count}}份</div>
					<div style="flex: 8;">
						<yd-cell-item style="text-align: center;">
						<yd-rate slot="left" v-model="item.rate_count" readonly color="#999999"></yd-rate>
						</yd-cell-item>
					</div>
				</div>
				<div style="margin-top: 1rem;">
					<span>¥{{item.qisong_price}}起送</span>
					<span style="color:#999999 ;">&nbsp;/&nbsp;</span>
					<span>配送费¥{{item.peisong_price}}</span>
				</div>
			</div>
			<div style="flex: 1.5; height: 100%; border-bottom: 1px solid #E5E5E5;">
				<div style="font-size: 0.8rem; margin-top: 2rem;color:#999999 ;">
					保准票
				</div>
				<div  style="font-size: 0.6rem; margin-top: 0.8rem;color:#999999 ;">
					食道专用
				</div>
			</div>
		</router-link>
		
		<div>
			
		</div>
	</div>


</div>

</template>

<script>
export default {
        data() {
            return {
//                 list: [
//                     {id:1,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "古老东方", qisong_price: 20, peisong_price: 3,pinpai_flag:true,rate_count:4,fenshu:4.2,month_count:132},
//                     {id:2,img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "汉堡王",  qisong_price: 20, peisong_price: 5,pinpai_flag:false,rate_count:3,fenshu:3.1,month_count:120},
//                     {id:3,img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "煌上煌",  qisong_price: 50, peisong_price: 7,pinpai_flag:true,rate_count:5,fenshu:4.9,month_count:500},
//                     {id:4,img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "粥多点",  qisong_price: 10, peisong_price: 2,pinpai_flag:false,rate_count:2,fenshu:2.1,month_count:180},
//                     {id:5,img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "披萨王子",  qisong_price: 30, peisong_price: 3,pinpai_flag:true,rate_count:1,fenshu:1.2,month_count:20},
//                     {id:6,img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "肯德基",  qisong_price: 50, peisong_price: 9,pinpai_flag:true,rate_count:4,fenshu:4.1,month_count:213}
//                 ]
            }
        },
		mounted(){

		},
		computed:{
			get_shoplist(){
				return this.$store.getters.getlist
			}
		}
		
    }
</script>

<style>
	.head_box{
		height:25px;
		
	}
</style>
