// https://www.figma.com/file/zWwZjOIjiTSgBn1cIMhuEp/Jagaad-Module-3-Project?node-id=0%3A35&mode=dev

//Navbar

const topMenuNav = document.querySelector(".top_menu_nav");
const closeIcon = document.querySelector(".top_menu_toggle_icon_close_menu");
const menuIcon = document.querySelector(".top_menu_toggle_icon_menu");

menuIcon.addEventListener("click", () => {
  topMenuNav.classList.toggle("opened");
  closeIcon.classList.toggle("active");
  menuIcon.classList.toggle("hide");
});

closeIcon.addEventListener("click", () => {
  topMenuNav.classList.toggle("opened");
  closeIcon.classList.toggle("active");
  menuIcon.classList.toggle("hide");
});
