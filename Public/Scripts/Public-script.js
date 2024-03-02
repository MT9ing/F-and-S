const tabsParent = document.querySelector("#tabs");
const tabsText = ["Home", "Shop", "Login", "SignUp"];
const logoImg = document.querySelectorAll(".logo-container img");
const FandS = {
  name: "F&S",
  logo: "../../../Public/Assets/fands.png",
};

logoImg.forEach((logo) => {
  logo.src = FandS.logo;
  logo.alt = FandS.name;
});

tabsText.forEach((tab) => {
  const newTab = document.createElement("li");
  newTab.innerHTML = `<a 
                    href="../../../Routes/${tab}/index.html">
                    ${tab[0].toUpperCase() + tab.slice(1)}
                    </a>`;
  tabsParent.appendChild(newTab);
});

tabsParent.firstChild.querySelector("a").href = "/";
