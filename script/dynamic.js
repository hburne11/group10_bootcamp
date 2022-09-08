
(() => {
const productName = document.querySelector(".teamInfo h3"); // name
const productSub = document.querySelector(".teamInfo h4"); //members position
const contents = document.querySelector(".detail"); // members detail
const buttons = document.querySelectorAll(".bioSwitcher button"); //buttons
const profile1 = document.querySelector("#profileVanilla"); //profile 1
const profile2 = document.querySelector("#profileCitrus"); //profile 2
const profile3 = document.querySelector("#profileMelon"); //profile 3
const dynaTeam = [
  [
    "Vanilla Orange",
    `Vanilla and Orange Flavor`,
    `The sweetness of an orange paired with the smoothness of vanilla are a match made in flavor heaven. Bright and bold, there's simply no other combination like it. Try it today!`,
  ],

  [
    "Blueberry Mellon",
    `Blueberry and Melon Flavors`,
    `The blueberry flavor comes through first, followed by the watermelon. The taste is authentic, and the first sip transports you to the awesome warmness of the tropical countries.`,
  ],

  [
    "Raspberry Citrus",
    `Raspberry and Citrus Flavor`,
    `A green, acid and sweet natural profile. It evokes sensations of fresh juicy fruit with slightly crunchy floral undertones blended with woody notes taste at the end.`,
  ],
];

function showBioInfo() {
  arrayIndex = this.dataset.arrayref;
  productName.innerText = dynaTeam[arrayIndex][0];
  productSub.innerText = dynaTeam[arrayIndex][1];
  contents.innerText = dynaTeam[arrayIndex][2];
}

function changeImageProd1() {
  document.getElementById("defaultImg").src = "images/dynamic-prod-1.jpg";
}

function changeImageProd2() {
  document.getElementById("defaultImg").src = "images/dynamic-prod-2.jpg";
}

function changeImageProd3() {
  document.getElementById("defaultImg").src = "images/dynamic-prod-3.jpg";
}

buttons.forEach((button) => button.addEventListener("click", showBioInfo));
profile1.addEventListener("click", changeImageProd1);
profile2.addEventListener("click", changeImageProd2);
profile3.addEventListener("click", changeImageProd3);
})();