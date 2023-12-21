// function signUp(form) {
//   var ho = form.ho.value;
//   var ten = form.ten.value;
//   var email = form.email.value;
//   var username = form.newUser.value;
//   var pass = form.newPass.value;

//   var newUser = new User(username, pass, ho, ten, email);

//   // Lấy dữ liệu các khách hàng hiện có
//   var listUser = getListUser();  

//   // Kiểm tra trùng admin
//   for (var ad of adminInfo) {
//     if (newUser.username == ad.username) {
//       alert("Tên đăng nhập đã có người sử dụng !!");
//       return false;
//     }
//   }

//   // Kiểm tra xem dữ liệu form có trùng với khách hàng đã có không
//   for (var u of listUser) {
//     if (newUser.username == u.username) {
//       alert("Tên đăng nhập đã có người sử dụng !!");
//       return false;
//     }
//   }

//   // Lưu người mới vào localstorage
//   listUser.push(newUser);
//   window.localStorage.setItem("ListUser", JSON.stringify(listUser));

//   // Đăng nhập vào tài khoản mới tạo
//   window.localStorage.setItem("CurrentUser", JSON.stringify(newUser));
//   alert("Đăng kí thành công, Bạn sẽ được tự động đăng nhập!");
//   location.reload();

//   return false;
// }



function signUp(form) {
  var ho = form.hoten.value;
  var sdt = form.phone.value;
  var email = form.email.value;
  var pass = form.pw.value;

  var newUser = new User(ho, sdt, email, pass);
  var listUser = getListUser();

  for(var user of listUser) {
      if(user.username == newUser.username ) {
        alert("tai khoan da ton tai");
        return false;
      }
  }

  listUser.push(newUser);
  window.localStorage.setItem("ListUser", JSON.stringify(listUser));
  alert("Đăng ký thành công!");
    return false;
}