<template>
	<div>
		<yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default{
        data() {
            return {
				value2:"",
				result:[]
            }
        },
		mounted(){

		},
        methods: {
			getdata(){
				 //this.$set(this.sum1, 0 , "A"); 
			},
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
			},
			watch: {
            value2(val) {
                this.result = this.getResult(val);
            },
			slideList(val){
				console.log(val)
			}
        }
    }
</script>

<style>
	.box011{
		width: 20rem;
		height: 20rem;
		background: #009474;
	}
.swiper-container {
    width: 600px;
    height: 300px;
} 
.a1{
	background: #007AFF;
}
.b1{
	background: #009474;
}
.a1{
	background: yellow;
}
.b1{
	background: green;
}
li{
	list-style: none;
}
.daohang{
	height: 3rem;
	display: flex;
	margin-bottom: 1rem;
	position: relative;
}
.daohang li{
	flex: 1;
	float: left;
	height: 100%;
	background: gray;
	margin: 10px;
}

.line{
	position: absolute;
	border-bottom: 2px solid #FF0000 ;
	bottom:-12px;
	left:10px;
	
}
.active1{
	color:green !important;
	background: #007AFF !important;
}
</style>
