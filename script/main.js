(() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  
  
  const navSlide = () => {
    //burger menu clicked, toggles class nav-active to animate in
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      //animate in li's
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""; //reset the animation in
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`; //timer for animation in
        }
      });
      //burger animation - add toggle classlist to burger to activite the animation
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  })();