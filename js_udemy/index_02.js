

// // window.addEventListener("scroll",() => {
// //   let windowY = window.scrollY;
// //   console.log(windowY)
// // })

//  const options ={
//   //  root:,
//   // threshold:0.5,
//   rootMargin: "0px 0px -50% 0px",
//  };
//  const observer =  new IntersectionObserver(callback,options)
//  const targets = document.querySelectorAll(".message-box");
// //  console.log(targets);

//  targets.forEach( (target) => {
//    //targets配列の中の１つ１つを監視していく
//    observer.observe(target)
//   });


//   //observerの中で呼び出されるcallback関数
//  function callback (entries){
//    console.log(entries);//配列
//    entries.forEach( entry => {
//      if(entry.isIntersecting){
//        entry.target.classList.add("show");
//      }
//    })
//  }