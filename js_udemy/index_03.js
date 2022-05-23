
url = "https://dog.ceo/api/breeds/image/random";

const options = {
  method : "GET"
}

// const fetchTest = fetch(url,options);
// console.log(fetchTest);


// jsonはパースしないといけない
// .jsonでパースを自動的にしてくれる
// const fetchTest = fetch(url,options)
// .then(response => {
//   response.json
// });

// console.log(fetchTest);


function getDogImg (url,options){
  return fetch(url,options).then(
    response => {
      console.log(response.ok);
      console.log(response.status);
      if(response.ok){
        return response.json()
      }
      throw new Error("エラーです！");
  }).catch(e => console.log(e.message));
}

async function getImg(url,options){
  const response = await getDogImg(url,options);
  const imgElement = document.createElement("img");
  imgElement.src = response.message;
  document.body.appendChild(imgElement);
}

getImg(url,options);