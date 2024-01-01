const menu = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  navList.classList.toggle("open");
  if (navList.classList.contains("open")) {
    menu.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

// clicking outside te navbar to close it

// document.addEventListener("click", (event) => {
//   var isClickInside = navList.contains(event.target);
//   var isMenuClicked = menu.contains(event.target);

//   if (!isClickInside && !isMenuClicked) {
//     close();
//   }
// });
// scroll reveal effect

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".header-img", { delay: 200, origin: "top" });
sr.reveal(".cont-2 p", { delay: 100, origin: "top" });
sr.reveal(".cont-3 p", { delay: 100, origin: "bottom" });
sr.reveal(".cont-4 .service", { delay: 100, origin: "bottom" });
sr.reveal(".wrapper h1", { delay: 100, origin: "bottom" });
sr.reveal(".box", { delay: 100, origin: "bottom" });
