<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {
        // isActive:true
      }
    },
    computed:{
      isActive(){
        //*this.$router.path指的是当前活跃的路径
        //*this.path指的是从APP.vue中传入的path,不同的item传入的path不一样
        return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
    }

    .tab-bar-item img{
      margin-top: 3px;
      height: 24px;
      width: 24px;
      vertical-align: middle;
      margin-bottom: 2px;
    }

    .active{
      color: red;
    }
</style>
