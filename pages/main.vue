<template>
    <div class="box">
      hello i am mian page
      <nuxt-link to="/">go to index page</nuxt-link>
    </div>
  </template>
  
<script>
export default {
  name: 'IndexPage',
  async asyncData(context) {
    console.log('main--asyncData start');
    //阻塞执行3s
    function syncBlock(milliseconds) {
      const start = new Date().getTime();
      while (new Date().getTime() - start < milliseconds) {}
    }
    console.log("main--asyncData--syncBlock开始阻塞");
    syncBlock(3000);
    console.log("main--asyncData--syncBlock阻塞结束");

    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('main--asyncData--asyncBlock阻塞结束');
          res()
        },milliseconds)
      })
    }
    console.log("main--asyncData--asyncBlock开始阻塞");
    await asyncBlock(3000)


  },
  async fetch(){
    console.log('main--fetch start');
    // 阻塞执行3s
    function syncBlock(milliseconds) {
      const start = new Date().getTime();
      while (new Date().getTime() - start < milliseconds) {}
    }
    console.log("main--fetch--syncBlock开始阻塞");
    syncBlock(3000);
    console.log("main--fetch--syncBlock阻塞结束");

    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('main--fetch--asyncBlock阻塞完成');
          res()
        },milliseconds)
      })
    }
    console.log("main--fetch--asyncBlock开始阻塞");
    await asyncBlock(3000)
    console.log("main--fetch--asyncBlock阻塞结束");
  },
  created(){
    console.log('main--created start');

  },
  mounted(){
    console.log('main--mounted start');

  },
  middleware:'test'
}
</script>
  