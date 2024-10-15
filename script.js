const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Mở mobile menu
  document.body.classList.toggle("show-mobile-menu");
});
// đóng menu khi chọn vào nút X
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
