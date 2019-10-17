<template>
  <div class="recommend">
    <div v-for="item in recommends" class="tag">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:"RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    padding: 15px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend .tag{
    text-align: center;
    flex: 1;
    font-size: 12px;
  }
  .recommend img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>
