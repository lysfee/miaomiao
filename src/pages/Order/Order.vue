<template>
    <div>
        <div style="padding-left:12px;margin-bottom: 10px;">
            <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
        </div>

        <yd-checklist v-model="checklist3" ref="checklistDemo" :callback="change" >
            <yd-checklist-item v-for="item in shop_list" :val="item.checkval">
			<div class="car_info">
						<div class="car_img">
							<img src="//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg" alt="" style="width: 90%; height: 90%;">
						</div>
						<div class="car_somes">
							<p class="head">{{item.tittle}}</p>
							<div class="count">数量{{item.count}}</div>
							<div class="addCount">
								<span class="fuhao">¥</span>
								<span class="price">{{item.price}}</span>
								<div class="jia_info">
									<div class="flag jia">+</div>
									<span class="sum">1</span>
									<div class="flag jian">-</div>		
								</div>
								
							</div>
						</div>
			</div>

            </yd-checklist-item>
        </yd-checklist>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                checklist3: [],
                isCheckAll: false,
				shop_list:[
				{
					tittle:"芒果",
					price:20,
					count:10,
					checkval:1,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				},
				{
					tittle:"苹果",
					price:5,
					count:14,
					checkval:2,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				},{
					tittle:"西瓜",
					price:60,
					count:10,
					checkval:3,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				},{
					tittle:"例子",
					price:50,
					count:10,
					checkval:4,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				},{
					tittle:"芒果",
					price:20,
					count:10,
					checkval:5,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				},{
					tittle:"芒果",
					price:20,
					count:10,
					checkval:5,
					img:"//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg"
				}
				]
            }
        },
        methods: {
            change(value, isCheckAll) {
                this.isCheckAll = isCheckAll;
            },
            checkAll() {
                this.isCheckAll = !this.isCheckAll;
                this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
            }
        }
    }
</script>
<style>
	 .car_info{
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
</style>