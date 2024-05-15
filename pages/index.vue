<template>
  <div class="box">
    hello i am index
    <br/>
    <nuxt-link to="main">go to main page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData(context) {
    console.log('index--asyncData start');
    //阻塞执行3s
    // function syncBlock(milliseconds) {
    //   const start = new Date().getTime();
    //   while (new Date().getTime() - start < milliseconds) {}
    // }
    // console.log("index--asyncData--syncBlock开始阻塞");
    // syncBlock(3000);
    // console.log("index--asyncData--syncBlock阻塞结束");

    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('index--asyncData--asyncBlock阻塞结束');
          res()
        },milliseconds)
      })
    }
    console.log("index--asyncData--asyncBlock开始阻塞");
    await asyncBlock(3000)


  },
  async fetch(){
    console.log('index--fetch start');
    // 阻塞执行3s
    function syncBlock(milliseconds) {
      const start = new Date().getTime();
      while (new Date().getTime() - start < milliseconds) {}
    }
    console.log("index--fetch--syncBlock开始阻塞");
    syncBlock(3000);
    console.log("index--fetch--syncBlock阻塞结束");

    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('index--fetch--asyncBlock阻塞完成');
          res()
        },milliseconds)
      })
    }
    console.log("index--fetch--asyncBlock开始阻塞");
    await asyncBlock(3000)
  },
  async created(){
    console.log('index--created start');
    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('index--created阻塞结束.');
          res()
        },milliseconds)
      })
    }
    console.log("index--created--asyncBlock开始阻塞");
    await asyncBlock(3000)

  },
  async mounted(){
    console.log('index--mounted start');
    function asyncBlock(milliseconds){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
          console.log('index--mounted阻塞结束');
          res()
        },milliseconds)
      })
    }
    console.log("index--mounted--asyncBlock开始阻塞");
    await asyncBlock(3000)
  },
  middleware:'test'
}
// 总结，
// fetch(类似于created mounted)不管是在服务端还是在客户端，异步任务都不会阻塞生命周期，fetch同步任务会有bar加载条，同步任务执行完就加载完
// 但是不论是什么函数，同步任务都会阻塞生命周期
// 特别的,asyncData不论是同步还是异步任务，不论是在服务端还是客户端，都会阻塞生命周期
// middleware函数不论是同步还是异步也都会阻塞
</script>
