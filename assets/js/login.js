window.onload = function () {
  checkLogin();
  adminInfo = getListAdmin() || adminInfo;
  console.log(adminInfo);
};

function logIn(form) {
  // Lấy dữ liệu từ form
  var name = form.username.value;
  var pass = form.password.value;
  var newUser = new User(name, pass);

  // // Lấy dữ liệu từ danh sách người dùng localstorage
  var listUser = getListUser();
  for (var u of listUser) {
    console.log(u);
    if (u.username == newUser.username && u.password == newUser.password) {
      setCurrentUser(u);
      window.location.href="index.html";
      return false;
    } 
  }

  for (var x in adminInfo) {
    if (
      newUser.username === adminInfo[x].username &&
      newUser.password === adminInfo[x].password
    ) {
      window.localStorage.setItem("admin", true);
      window.location.href = "../F8/admin/admin.html";
      return false;
    }
  }

  alert("Nhập sai tên hoặc mật khẩu !!!");
  return false;
}







  // // Kiểm tra xem dữ liệu form có khớp với người dùng nào trong danh sách ko
  // for (var u of listUser) {
  //   if (equalUser(newUser, u)) {
  //

  //     setCurrentUser(u);

  //     // Reload lại trang -> sau khi reload sẽ cập nhật luôn giỏ hàng khi hàm setupEventTaiKhoan chạy
  //     location.reload();
  //     return false;
  //   }
  // }

  // // Đăng nhập vào admin
  // for (var ad of adminInfo) {
  //   if (equalUser(newUser, ad)) {
  //     alert("Xin chào admin .. ");
  //     window.localStorage.setItem("admin", true);
  //     window.location.assign("admin.html");
  //     return false;
  //   }
  // }

  // // Trả về thông báo nếu không khớp
  // alert("Nhập sai tên hoặc mật khẩu !!!");
  // form.username.focus();

