const btns = document.querySelectorAll("button");
const result = document.querySelector("#result");

let concatText = "";

function btnsPressed(event){

  const text = event.target.textContent;

  if(text === "="){
    concatText = eval(concatText);
  } else if (text === "C"){
    concatText = ""
  } else{
    concatText +=  text;
  }
  result.textContent = concatText;
}


btns.forEach( btns => btns.addEventListener("click",btnsPressed))