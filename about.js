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
//
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