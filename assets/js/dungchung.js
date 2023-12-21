//---------------------admin ----------------------------//
var adminInfo = [
  {
    username: "admin",
    pass: "123",
  },
];

function khoiTao() {
    // get data từ localstorage
    adminInfo = getListAdmin() || adminInfo;
    list_products = getListProducts() || list_product;

    checkLogin();
    hienThiCart();
}


function getListAdmin() {
  return JSON.parse(window.localStorage.getItem("ListAdmin"));
}

function setListAdmin(l) {
  window.localStorage.setItem("ListAdmin", JSON.stringify(l));
}



//---------------------San pham ----------------------------//
function setListProducts(newList) {
  window.localStorage.setItem("ListProducts", JSON.stringify(newList));
}

function getListProducts() {
  return JSON.parse(window.localStorage.getItem("ListProducts"));
}



//---------------------Tai khoan ----------------------------//
function User(username, email, sdt, pass, products, donhang) {
  this.email = email || "";
  this.sdt = sdt || "";
  this.username = username;
  this.pass = pass;

  this.donhang = donhang || [];
  this.products = products || [];
}

//lay thong tin nguoi dung dang nhap
function getCurrentUser() {
  return JSON.parse(window.localStorage.getItem("CurrentUser"));
}

//set nguoi dung dang dang nhap
function setCurrentUser(u) {
  window.localStorage.setItem("CurrentUser", JSON.stringify(u));
}

function getListUser() {
  var data = JSON.parse(window.localStorage.getItem("ListUser")) || [];
  var l = [];
  for (var d of data) {
    l.push(d);
  }
  return l;
}

function setListUser(l) {
  window.localStorage.setItem("ListUser", JSON.stringify(l));
}


function updateListUser(u) {
    var listUser = getListUser();
    for (var i = 0; i < listUser.length; i++) {
        if(listUser[i].username == u.username && listUser[i].pass == u.pass) {
            listUser[i] = u;
        }
    }
    setListUser(listUser);
}


//----check login ----
function checkLogin() {
    var isLogin = document.getElementById('isLogin');
    var notLogin = document.getElementById('notLogin');
    var user = getCurrentUser();
    if (user) {
        notLogin.style.display = 'none';
        isLogin.style.display = 'inline-block';
    }
    else {
        notLogin.style.display = 'inline-block';
        isLogin.style.display = 'none';
    }
}

function logOut() {
    window.localStorage.removeItem('CurrentUser');
    location.reload();
}



//hien thi thong tin gio hang 
function hienThiCart() {
    var u = getCurrentUser();
    document.querySelector('.header_cart-notice').innerHTML = getSoLuongGioHang(u);
}


function getSoLuongGioHang(user) {
    var sl = 0;
    for (var p of user.products) {
        console.log(p.soLuong);
        sl += parseInt(p.soLuong);
    }
    return sl;
}










// Hàm get set cho danh sách người dùng
// function getListUser() {
//   var data = JSON.parse(window.localStorage.getItem("ListUser")) || [];
//   var l = [];
//   for (var d of data) {
//     l.push(d);
//   }
//   return l;
// }

// function setListUser(l) {
//   window.localStorage.setItem("ListUser", JSON.stringify(l));
// }

function addFooter() {
    document.write(`
    <div class="site-bottom">
    <div class="footer__container">
        <div class="main-footer d-flex">
            <div class="left-footer">
                <div class="top-left">
                    <div class="logo-footer">
                        <a href="https://ivymoda.com/">
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/logo-footer.png" alt="logo-footer">
                        </a>
                    </div>
                    <a href=#"
                        target="_blank" title="DMCA.com Protection Status" class="dmca-badge">
                        <img src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777"
                            alt="DMCA.com Protection Status">
                    </a>
                    <div class="logo-conthuong">
                        <a target="_blank" href=#">
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png"
                                alt="img-congthuong">
                        </a>
                    </div>
                </div>
                <div class="content-left-ft content-ft">
                    <div class="info-left-ft">
                        <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                        <p><strong>Địa chỉ đăng ký: </strong>Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà
                            Nội, Việt
                            Nam</p>
                        <p><strong>Số điện thoại: </strong>0243 205 2222/ 090 589 8683</p>
                        <p><strong>Email: </strong> cskh@ivy.com.vn</p>
                    </div>
                </div>
            </div>
            <div class="center-footer d-flex">
                <div class="left-center-ft item-center-ft">
                    <p class="title-footer">Giới thiệu</p>
                    <ul>
                        <li>
                            <a href="#">Về IVY moda</a>
                        </li>
                        <li>
                            <a href="#">Tuyển dụng</a>
                        </li>
                        <li>
                            <a href="#">Hệ thống cửa hàng</a>
                        </li>
                    </ul>
                </div>
                <div class="main-center-ft item-center-ft">
                    <p class="title-footer">Dịch vụ khách hàng</p>
                    <ul>
                        <li>
                            <p>Chính sách điều khoản</p>
                        </li>
                        <li>
                            <p>Hướng dẫn mua hàng</p>
                        </li>
                        <li>
                            <p>Chính sách thanh toán</p>
                        </li>
                        <li>
                            <p>Chính sách đổi trả</p>
                        </li>
                        <li>
                            <p>Chính sách bảo hành</p>
                        </li>
                        <li>
                            <p>Chính sách giao
                                nhận vận chuyển</p>
                        </li>
                    </ul>
                </div>
                <div class="right-center-ft item-center-ft">
                    <p class="title-footer">Liên hệ</p>
                    <ul>
                        <li>
                            <a href="tel:02466623434">Hotline</a>
                        </li>
                        <li>
                            <a href="mailto:saleadmin@ivy.com.vn">Email</a>
                        </li>
                        <li>
                            <a href="javascript:openCsChatBox();">Live Chat</a>
                        </li>
                        <li>
                            <a href="http://messenger.com/t/thoitrangivymoda" target="_blank">Messenger</a>
                        </li>
                        <li>
                            <a href="https://ivymoda.com/lien-he">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`);
}


function addHeader() {
  document.write(`        
	<div class="header__wrapper">
            <div class="grid">
                <header class="header">
                    <div class="header__left">
                        <nav class="header__nav">
                            <input type="checkbox" id="check">
                            <label for="check" class="menu_tabs">
                                <span id="bar">
                                    <i class="fa-solid fa-bars"></i>
                                </span>

                                <span id="time">
                                    <i class="fa-solid fa-xmark"></i>
                                </span>
                            </label>

                            <ul class="header__nav-list">
                                <li class="header__nav-item" id="item-1">
                                    <a class="header__nav-link" href="">Nam</a>
                                    <!-- start mega-drop -->
                                    <ul class="sub-menu">
                                        <div class="cat-sub-menu">
                                            <div>
                                                <a href="#">NEW ARRIVAL</a>
                                            </div>
                                            <div>
                                                <a href="#">IVY YOU</a>
                                            </div>
                                            <div>
                                                <a href="#">HARMONY COLLECTION</a>
                                            </div>
                                            <div>
                                                <a href="#">TIMELESS COLLECTION</a>
                                            </div>
                                            <div>
                                                <a href="#">BLOOMTIME
                                                    COLLECTION</a>
                                            </div>
                                            <div>
                                                <a href="#">TENCEL PRODUCTS</a>
                                            </div>
                                        </div>
                                        <div class="list-submenu">
                                            <div class="item-list-submenu">
                                                <h3><a href="#">ÁO</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Áo sơ mi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo thun</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo kiểu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo croptop</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo
                                                            thun ngắn tay</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo
                                                            thun dài tay</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo
                                                            peplum</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo len</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">ÁO KHOÁC</a>
                                                </h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Áo khoác</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo dạ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo phao</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo tweed</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo măng
                                                            tô</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Áo vest/
                                                            blazer</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">QUẦN &amp;
                                                        JUMPSUIT</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Quần
                                                            jeans</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Quần dài</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Quần
                                                            lửng/ short</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Quần
                                                            baggy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Jumpsuit</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">CHÂN VÁY</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Chân váy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chân váy
                                                            xếp ly</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chân váy
                                                            chữ A</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">ĐẦM</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Đầm</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Đầm maxi/
                                                            voan</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Đầm thun</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Senora - Đầm dạ
                                                            hội</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">ĐỒ LÓT</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Áo bra</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Quần lót</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#">PHỤ KIỆN</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Túi/ ví</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Giày/dép
                                                            &amp; Sandals</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Phụ kiện</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="item-list-submenu">
                                                <h3><a href="#" style="color: #FF0000">CLEARANCE SALE</a></h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Sale
                                                            30%</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sale
                                                            50%</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sale
                                                            60%</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sale
                                                            70%</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li class="header__nav-item"><a class="header__nav-link" href="">Nu</a></li>
                                <li class="header__nav-item"><a class="header__nav-link" href="">Tre em</a></li>
                                <li class="header__nav-item"><a class="header__nav-link" href="">Tin tuc</a></li>
                                <li class="header__nav-item"><a class="header__nav-link" href="">Ve chung toi</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header__center">
                        <div class="header__logo">
                            <img src="https://owen.cdn.vccloud.vn/static/version1695986603/frontend/Owen/owen2021/vi_VN/images/logo.svg" alt="">
                        </div>
                    </div>
                    <div class="header__right">
                        <nav class="header__nav-right">
                            <div class="header__nav-search-wrapper">
                                <button class="header__nav-search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <input class="header__nav-input" type="text" placeholder="TÌM KIẾM SẢN PHẨM">
                                <div class="result__search">
                                    <ul class="list__results">
                                        <li>Quan ngu nu dep</li>
                                        <li>Ao so my nam</li>
                                        <li>Do lot nu dep</li>
                                        <li>Ao ba lo nam tinh</li>
                                        <li>Ao so my nam</li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="header__right-list">
                                <li class="header__right-item">
                                    <a href="" class="header__nav-link-icon">
                                        <i class="fa-solid fa-headphones"></i>
                                    </a>
                                    
                                </li>
                                <li class="header__right-item">
                                    <div title="Dang nhap" class="header__nav-link-icon">
                                    <a href="login.html">
                                        <i class="fa-solid fa-right-to-bracket" id="notLogin"></i>
                                    </a>
                                    <img src="./assets/img/Avatar/Avarta.jpg" class="avatar-user" alt="Avatar" id="isLogin">
                                    <ul class="user-options">
                                        <li>
                                            <a class="user-options__menu" href="account.html">Thong tin</a>
                                        </li>
                                        <li>
                                            <a class="user-options__menu" onclick="logOut()" href="login.html">Dang xuat</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li class="header__right-item">
                                    <a href="cart.html" class="header__nav-link-icon">
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        <span class="header_cart-notice">0</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>`);
}


