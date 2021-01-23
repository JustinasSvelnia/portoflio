const menuButton = document.querySelector("#hamburger");
const menuItems = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});
