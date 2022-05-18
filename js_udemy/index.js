// const formTestName = document.forms.test1.yourName;
// console.log(formTestName);

// formTestName.addEventListener("input",() => {
//   let youtNameValue = document.getElementById("yout_name_tag");
//   youtNameValue.textContent = formTestName.value.length;
// });

const imgTag = document.forms.test1.preview
document.forms.test1.img_file.addEventListener("change", e => {
  const upFile = e.target.files[0];

  const reader  = new FileReader();
  reader.addEventListener("load", () => {
    imgTag.src = reader.result;
  });
  reader.readAsDataURL(upFile);
});


