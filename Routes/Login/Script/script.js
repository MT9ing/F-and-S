const userName = document.getElementById("user-name");
const passWord = document.getElementById("pass-word");
const remember = document.getElementById("remember");
const submit = document.getElementById("submit-btn");

function afterClick() {
  window.alert(
    `Hello, ${userName.value[0].toUpperCase() + userName.value.slice(1)}`
  );
}
