var menu = document.querySelector('.nav-menu');
var toggle = document.querySelector('.toggle');
var menuItems = document.querySelectorAll('.nav-menu li');
toggle.addEventListener('click', function() {
  menu.classList.toggle('active'); // Thêm hoặc xóa class "show" từ menu
  if (menu.classList.contains('active')) {
    // Nếu menu đang được hiển thị, thay thế biểu tượng bằng fa-xmark
    toggle.innerHTML = '<i class="fa-solid fa-xmark delete"></i>';
  } else {
    // Nếu menu không được hiển thị, sử dụng biểu tượng mặc định (fa-bars)
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
//
const hoverButton = document.getElementById("hover-button");
const icon = document.querySelector(".icon");

hoverButton.addEventListener("mouseenter", () => {
  icon.classList.add("hovered");
});

hoverButton.addEventListener("mouseleave", () => {
  icon.classList.remove("hovered");
});

hoverButton.addEventListener("focus", () => {
  icon.classList.add("hovered");
});

hoverButton.addEventListener("blur", () => {
  icon.classList.remove("hovered");
});
//
const hhoverButton = document.querySelector(".hhover-button");
const iicon = document.querySelector(".iicon");

hhoverButton.addEventListener("mouseenter", () => {
  iicon.classList.add("hovered");
});

hhoverButton.addEventListener("mouseleave", () => {
  iicon.classList.remove("hovered");
});

hhoverButton.addEventListener("focus", () => {
  iicon.classList.add("hovered");
});

hhoverButton.addEventListener("blur", () => {
  iicon.classList.remove("hovered");
});
// slider card
let slide = document.querySelectorAll('.content__');
let index = 0;
function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}
function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}
// 
// script.js
let slidee = document.querySelectorAll('.slide');
let indexx = 0;
function nextt(){
    slidee[indexx].classList.remove('activee');
    indexx = (indexx + 1) % slidee.length;
    slidee[indexx].classList.add('activee');
}
function prevv(){
    slidee[indexx].classList.remove('activee');
    indexx = (indexx - 1 + slidee.length) % slidee.length;
    slidee[indexx].classList.add('activee');
}
let slideee = document.querySelectorAll('.slide-video');
let indexxx = 0;
function nexttt(){
    slideee[indexxx].classList.remove('activeee');
    indexxx = (indexxx + 1) % slideee.length;
    slideee[indexxx].classList.add('activeee');
}
function prevvv(){
    slideee[indexxx].classList.remove('activeee');
    indexxx = (indexxx - 1 + slideee.length) % slideee.length;
    slideee[indexxx].classList.add('activeee');
}
// sub-menu
// Lấy tham chiếu đến các phần tử DOM cần sử dụng
// Định nghĩa hàm để xử lý sự kiện click cho toggle-sub-menu và sub-menu
function toggleSubMenuVisibility() {
  // Kiểm tra xem sub-menu có lớp 'activeeee' không
  var isActive = subMenu.classList.contains('activeeee');

  // Nếu sub-menu đã có lớp 'activeeee', loại bỏ nó; nếu không, thêm lớp 'activeeee'
  if (isActive) {
    subMenu.classList.remove('activeeee');
  } else {
    subMenu.classList.add('activeeee');
  }
}

// Lấy tham chiếu đến các phần tử DOM cần sử dụng
var toggleSubMenu = document.querySelector('.toggle-sub-menu');
var subMenu = document.querySelector('.sub-menu');

// Thêm sự kiện click cho toggle-sub-menu và gọi hàm toggleSubMenuVisibility khi click
toggleSubMenu.addEventListener('click', toggleSubMenuVisibility);




