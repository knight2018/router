<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {getToken} from '@/libs/util'
// import {
//         HTTPget
// } from '@/api/data'
export default {
  name: 'App',
  // created(){
  //   const toke = getToken()
  //   if(toke){
  //     let url = '/statistics/new_gamer_funnel_list',
  //         page = 1,
  //         limit = 1;
  //     HTTPget({url,page,limit}).then((res) => {})
  //   }
  // }
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
