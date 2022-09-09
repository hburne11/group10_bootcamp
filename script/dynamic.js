(() => {
  const productName = document.querySelector(".teamInfo h3"); // name
  const productSub = document.querySelector(".teamInfo h4"); //members position
  const contents = document.querySelector(".detail"); // members detail
  const buttons = document.querySelectorAll(".bioSwitcher button"); //buttons
  const profile1 = document.querySelector("#profileVanilla"); //profile 1
  const profile2 = document.querySelector("#profileCitrus"); //profile 2
  const profile3 = document.querySelector("#profileMelon"); //profile 3
  const profile4 = document.querySelector("#profilFour"); //profile 4
  const dynaTeam = [
    [
      "Hayden Burnell",
      `3D Specialist`,
      `asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asd`,
    ],

    [
      "Hei Yan Chow",
      `Product Designer`,
      `asfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asd sdlfkja asdlkf asd`,
    ],

    [
      "Jerome Fernandez",
      `UX/UI Designer`,
      `asdfasdfas lajasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdja asdlkf asd.`,
    ],

    [
      "Cristine Noronha",
      `3D Specialist`,
      `asdfasdfas lasdfj asdfljasld sdlfkja asdlkf  fas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asdfasdfas asdfasdfas lasdfj asdfljasld sdlfkja asdlkf asd.`,
    ],
  ];

  function showBioInfo() {
    arrayIndex = this.dataset.arrayref;
    productName.innerText = dynaTeam[arrayIndex][0];
    productSub.innerText = dynaTeam[arrayIndex][1];
    contents.innerText = dynaTeam[arrayIndex][2];
  }

  function changeImageProd1() {
    document.getElementById("defaultImg").src = "images/dynamic01.jpg";
  }

  function changeImageProd2() {
    document.getElementById("defaultImg").src = "images/dynamic02.jpg";
  }

  function changeImageProd3() {
    document.getElementById("defaultImg").src = "images/dynamic03.jpg";
  }

  function changeImageProd4() {
    document.getElementById("defaultImg").src = "images/dynamic04.jpg";
  }

  buttons.forEach((button) => button.addEventListener("click", showBioInfo));
  profile1.addEventListener("click", changeImageProd1);
  profile2.addEventListener("click", changeImageProd2);
  profile3.addEventListener("click", changeImageProd3);
  profile4.addEventListener("click", changeImageProd4);
})();
