// https://www.figma.com/file/zWwZjOIjiTSgBn1cIMhuEp/Jagaad-Module-3-Project?node-id=0%3A35&mode=dev

//Navbar

const navToggle = document.querySelector(".top_menu_mobile_nav_toggle");
const topMenuNav = document.querySelector(".top_menu_nav");
const closeIcon = document.querySelector(
  ".top_menu_mobile_nav_toggle_icon_close_menu"
);
const menuIcon = document.querySelector(
  ".top_menu_mobile_nav_toggle_icon_menu"
);

navToggle.addEventListener("click", () => {
  topMenuNav.classList.toggle("opened");
  closeIcon.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
