// https://www.figma.com/file/zWwZjOIjiTSgBn1cIMhuEp/Jagaad-Module-3-Project?node-id=0%3A35&mode=dev

//Navbar

const topMenuNav = document.querySelector(".top_menu_nav");
const menuIcon = document.querySelector(".top_menu_toggle_icon_menu");
const body = document.querySelector("body");

document.addEventListener("click", (e) => {
  if (e.target.closest(".top_menu_toggle_icon_menu")) {
    topMenuNav.classList.toggle("opened");
    menuIcon.classList.toggle("hide");
    body.classList.toggle("overflow");
  } else if (e.target.closest(".top_menu_toggle_icon_close")) {
    topMenuNav.classList.toggle("opened");
    menuIcon.classList.toggle("hide");
    body.classList.toggle("overflow");
  } else if (e.target.closest(".top_menu_nav")) {
    return;
  } else {
    topMenuNav.classList.remove("opened");
    menuIcon.classList.remove("hide");
    body.classList.remove("overflow");
  }
});
