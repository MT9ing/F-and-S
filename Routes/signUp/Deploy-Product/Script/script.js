const fName = document.getElementById("f-name");
const userName = document.getElementById("user-name");
const Email = document.getElementById("e-g-mail");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const factoryRadio = document.getElementById("factory");
const supplierRadio = document.getElementById("supplier");
const createBtn = document.getElementById("submit-btn");
const allInput = document.querySelectorAll("input");

// allInput.forEach((input) => {
//   input.onchange = () => {
//     console.log(input.value);
//   };
// });

function afterClick() {
  if (pass1.value !== pass2.value) {
    createBtn.disabled = true;
    window.alert("Password Not Matched!");
    allInput.forEach((input) => {
      input.value = "";
    });
  } else {
    createBtn.disabled = false;
  }
  if (factoryRadio.checked) {
    document.querySelector("form").action =
      "/Routes/SignUp/Factory-Checked/index.html";
  } else if (supplierRadio.checked) {
    document.querySelector("form").action =
      "/Routes/SignUp/Supplier-Checked/index.html";
  }
}
