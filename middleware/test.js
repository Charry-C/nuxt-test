export default async function () {
    // function asyncBlock(milliseconds) {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             console.log('index--fetch--asyncBlock阻塞完成');
    //             res()
    //         }, milliseconds)
    //     })
    // }
    // console.log("test--middleware--asyncBlock开始阻塞");
    // await asyncBlock(3000)
    // console.log("test--middleware--asyncBlock阻塞结束");
    console.log('**************i am middleware***************');
}