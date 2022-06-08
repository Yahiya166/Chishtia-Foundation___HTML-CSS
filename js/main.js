AOS.init();
let textEle = document.querySelectorAll(".text1");
for (let i = 0; i < textEle.length; i++) {
  let textOne = document.querySelectorAll(".text1")[i].innerText.split(" ");
  textEle[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("div");
    node.classList.add("mystyle");
    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textEle[i].appendChild(node);
  }
}

let textEles = document.querySelectorAll(".mystyle");

for (let i = 0; i < textEles.length; i++) {
  let textOne = document.querySelectorAll(".mystyle")[i].innerText.split("");
  textEles[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("span");

    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textEles[i].appendChild(node);
  }
}

jQuery(document).ready(function ($) {
  $("#menu").mmenu({
    extensions: [
      "effect-menu-zoom",
      "effect-panels-zoom",
      "pagedim-black",
      "theme-dark",
    ],
    offCanvas: {
      position: "right",
    },
    counters: true,
    iconPanels: true,
    navbars: [
      {
        position: "top",
      },
    ],
  });
});
