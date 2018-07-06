<template>
	<div>

	</div>
</template>

<script>
export default{
	props:['text','isShow'],
	watch:{
		isShow(newVal,oldVal){
			console.log('变化了')
			if( newVal ){
				this.show();		
			}else{
				this.hide();
			}
		}
	},
	mounted(){
		if( this.isShow ){
			this.show();	
		}
	},
	methods:{
		show(){
			console.log('show')
			let div = document.createElement('div');
			div.id = 'toast';
			div.style.position = 'absolute';
			div.style.background = 'rgba(0,0,0,.5)';
			div.style.left = '0';
			div.style.top = '200px';
			div.style.right = '0';
			div.style.bottom = '0';
			div.innerHTML = this.text || '你好胖111';

			document.body.appendChild(div);
		},
		hide(){
			console.log('hide')
			let div = document.getElementById('toast');
			let body = document.getElementsByTagName('body')[0];

			if( div ){
				body.removeChild(div);
			}
		}
	}
}
</script>	

<style>

</style>