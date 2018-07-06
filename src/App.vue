<template>
  <div id="app">
      <div @click="show">点我</div> 
      <toast :isShow="status" text="你好"></toast>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status:false
    }
  },
  methods:{
    show(){
      this.status = !this.status;
    }
  }
}
</script>

<style>
*{
  padding:0; 
  margin:0;
}
</style>
