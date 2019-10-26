<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default{
    name:"BackTop"
  }
</script>

<style>
  .back-top{
    position: fixed;
    right: 0;
    bottom: 49px;
    z-index: 10;
  }
  .back-top img{
    height: 43px;
    width: 43px;
  }
</style>
