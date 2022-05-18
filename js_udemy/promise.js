function test01(input) {
  return new Promise((ok) => {
    ok(`プロミス${input}です！`);
  });
}

console.log(test01("太郎"));





console.log(1);


promisetest4(400,2)
.then(change1 => promisetest4(change1,3))
.then(change2 => promisetest4(change2,2))
.then(change3 => promisetest4(change3,2))
.catch( e =>  console.log(e) )

console.log(3);



function promisetest4 (pay,seconds) {
  return new Promise((ok,ng) => {
    setTimeout(() => {
      if(pay > 100){
        let change = pay - 100;
        console.log(`${seconds}秒、お釣りは${change}です！`);
        ok(change);
      }
      ng("お金が足りません！");
    }, seconds * 1000)
  })
}

// console.log(promisetest4(180).catch( e => {
//   console.log(e);
// }));



// promisetest4(180).then( change1 => {
//   console.log(change1);
//   return promisetest4(change1); //100
// }).then(change2 => {
//   console.log(change2);//100
// }).catch(error => {
//   console.log(error);
// })


