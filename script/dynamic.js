(() => {
  const productName = document.querySelector(".teamInfo h3"); // name
  const productSub = document.querySelector(".teamInfo h4"); //members position
  const contents = document.querySelector(".detail"); // members detail
  const buttons = document.querySelectorAll(".bioSwitcher button"); //buttons
  const profile1 = document.querySelector("#profileOne"); //profile 1
  const profile2 = document.querySelector("#profileTwo"); //profile 2
  const profile3 = document.querySelector("#profileThree"); //profile 3
  const profile4 = document.querySelector("#profilFour"); //profile 4
  const dynaTeam = [
    [
      "Hayden Burnell",
      `UX/UI Designer`,
      `A small town guy with big city dreams, Hayden adds a blend of creativity and leadership to CODI. Only 22 years old, he has already conquered multiple challenges he has faced in his young life. He pursued studying Interactive Media Design at Fanshawe College in London, Ontario, where he discovered his dream of Front-End Development. Hayden likes to take simple ideas and enhance them into something unimaginable.`,
    ],

    [
      "Hei Yan Chow (Joanna)",
      `Product Designer`,
      `Born and raised in Hong Kong, Joanna has a background in cultural management and art programme coordination. She has lived in London, attended Fanshawe College where she studied Interactive Media Design. She is currently a UX/UI designer at CODI.`,
    ],

    [
      "Jerome Fernandez",
      `Web Developer`,
      `Digital Imaging specialist from the Philippines, Because of his core skills, he has the huge advantage when it comes to  coding, video editing, 3d animation etc..
      `,
    ],

    [
      "Cristine Noronha",
      `Graphic Designer`,
      `Cristine is a graphic designer. Her greatest interest is solving problems in visual communication for people. She likes to study user experience and interface design. When she is not working she loves to draw, try new types of coffee and desserts..`,
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
