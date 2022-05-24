const bunnsyo = "「雨ニモマケズ\n風ニモマケズ\n雪ニモ夏ノ暑サニモマケヌ\n丈夫ナカラダヲモチ」"

console.log(bunnsyo)


const D = ["りんご","ゴリラ","ランボルギーニ","ニンニク"];
for(let i = 0 ; i < D.length; i++){
  if(D[i].length % 3 === 0){
    console.log("良い文章");
  } else if(D[i].length % 2 === 0) {
    console.log("ノットエレガント");
  } else if(D[i].length % 2 === 0 && D[i].length % 3 === 0 ) {
    console.log("グレートエレガント");
  } else {
    console.log("damedame");
  }
}

const E ="1";
console.log(isNaN(E));



for(let i = 0 ; i< 5; i++){
  const createEle = document.createElement("div");
  const createNode = document.createTextNode("***************");
  const appendParent = document.getElementById("appendParent");
  createEle.textContent = createNode.nodeValue;
  appendParent.appendChild(createEle);
}


const numbers = [1, 4, 5, 11, 2, 34, 1, 25]
let sum = 0;
for(let i =0; i < numbers.length; i++){
  sum += numbers[i];
}

console.log(sum);



let score = 0;
function showScore(){
  const totalScore = document.getElementById("score-message");

  if(score === 3){
    totalScore.innerHTML = score + "点:満点！おめでとう！"
  } else if( score ===2 ){
    totalScore.innerHTML = score + "点!あと少しだったね！"
  } else if(score ===1){
    totalScore.innerHTML = score + "点!あと2点!"
  } else{
    totalScore.innerHTML = score + "点"
  }
}

const correct = "正解です！"
const incorrect = "不正解です！"

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';

  if (quiz_1.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  // 正解はB
  } else if (quiz_1.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(correct);
  } else if (quiz_1.answer.value == 'c') {
    console.log(select);
    console.log(incorrect);
  } else {
    alert('1問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}

function answerQuiz2(){
  const quiz_2 = document.getElementById('quiz-2');
  const select = '2問目：' + quiz_2.answer.value + 'を選択しました';

  // 正解はA
  if (quiz_2.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  } else if (quiz_2.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  } else if (quiz_2.answer.value == 'c') {
    console.log(select);
    console.log(incorrect);
  } else {
    alert('2問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}

function answerQuiz3(){
  const quiz_3 = document.getElementById('quiz-3');
  const select = '3問目：' + quiz_3.answer.value + 'を選択しました';

  if (quiz_3.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  } else if (quiz_3.answer.value == 'b') {        
    console.log(select);
    console.log(incorrect);
  // 正解はC
  } else if (quiz_3.answer.value == 'c') {
    score++;
    console.log(select);
    console.log(correct);
  } else {
    alert('3問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}



