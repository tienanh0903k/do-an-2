var nhaCungCaps;
window.onload = function() {
    list_products = getListProducts() || list_Product;
    list_user = getListUser();
    nhaCungCaps = nhaCungCap || [];
    console.log(nhaCungCaps);
    if (window.localStorage.getItem("admin")) {
      LoadSanPham();
      LoadKhachHang();
      LoadNhaCungCap();
      Update();
      Delete();
      CellClick();
    } else {
      document.body.innerHTML = `<h1 style="color:red; with:100%; text-align:center; margin: 50px;"> Truy cập bị từ chối.. </h1>`;
    }
}
//Load san pham

function LoadSanPham() {
    var str = "";
    for (var x of list_products) {
        str += ` <tr>
                    <td>${x.id}</td>
                    <td>${x.maChuyenMuc}</td>
                    <td>${x.ten}</td>
                    <td>
                        <img style="width: 30px; height: 30px;" src="${x.image}">
                    </td>
                    <td>${x.ngayTao}</td>
                    <td>${x.soLuong}</td>
                    <td>${x.gia}</td>
                </tr>`;
    }
    document.querySelector(".content-table").innerHTML = str;
}

//get thong tin tu input
function LayThongTin() {
  const masanpham = document.getElementById("masanpham").value;
  const machuyenmuc = document.getElementById("machuyenmuc").value;
  const tensanpham = document.getElementById("tensanpham").value;
  const imgproduct = document.getElementById("viewimg").src;
  const ngayTao = document.getElementById("ngaytao").value;
  const soLuong = document.getElementById("slsp").value;
  const gia = document.getElementById("giaban").value;

  // Kiểm tra các điều kiện cụ thể dựa trên yêu cầu của bạn
  if (
    !masanpham ||
    !machuyenmuc ||
    !tensanpham ||
    !imgproduct ||
    !ngayTao ||
    !soLuong ||
    !gia
  ) {
    alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
    return null; // Trả về null nếu thông tin không hợp lệ
  }

  // Kiểm tra điều kiện khác (ví dụ: kiểm tra số lượng, định dạng ngày tạo, ...)
  // Nếu có bất kỳ điều kiện nào không thỏa mãn, bạn cũng có thể hiển thị thông báo và trả về null.

  const thongtin = {
    id: masanpham,
    maChuyenMuc: machuyenmuc,
    ten: tensanpham,
    image: imgproduct,
    ngayTao: ngayTao,
    soLuong: soLuong,
    gia: gia,
  };
  return thongtin;
}

// //them san pham
function ThemSanPham() {
  var newProduct = LayThongTin();
  if (!newProduct) return;

  for (var p of list_products) {
    if (p.id == newProduct.id && p.ten == newProduct.ten) {
      alert("Sản phẩm đã tồn tại");
      return;
    }
  }

  list_products.push(newProduct);
  setListProducts(list_products);
  LoadSanPham();
  alert("Thêm thành công");
}

//xoa san pham
function XoaSanPham(id) {
  for (var i = 0; i < list_products.length; i++) {
    if (list_products[i].id === id) {
      list_products.splice(i, 1); // Loại bỏ sản phẩm khỏi danh sách
      setListProducts(list_products); // Cập nhật danh sách sản phẩm
      LoadSanPham(); // Cập nhật giao diện
      alert("Xóa sản phẩm thành công");
      return; // Sau khi xóa sản phẩm, bạn có thể thoát khỏi vòng lặp
    }
  }
  alert("Không tìm thấy sản phẩm có ID: " + id);
}

//sua san pham
function suaSanPham(id) {
  var sp = LayThongTin();
  if (!sp) return;
  for (var i = 0; i < list_products.length; i++) {
    if (list_products[i].id == id) {
      list_products[i] = sp;
    }
  }
  setListProducts(list_products);
  LoadSanPham();
  alert("Sua thanh cong: " + id);
}



function CellClick() {
  var table = document.querySelector(".table");
  console.log(table.rows);
  for (var i = 1; i < table.rows.length; ++i) {
    table.rows[i].onclick = function () {
      document.getElementById("masanpham").value = this.cells[0].innerText;
      document.getElementById("machuyenmuc").value = this.cells[1].innerText;
      //    document.getElementById("tensanpham").value = this.cells[2].innerText;
      const image = this.cells[3].querySelector("td img");

      // Get the image source
      const imageSrc = image.src;

      // Set the image source of the chosen image element
      document.getElementById("viewimg").src = imageSrc;      //    document.getElementById("ngaytao").value = this.cells[4].innerText;
      document.getElementById("slsp").value = this.cells[5].innerText;
      document.getElementById("giaban").value = this.cells[6].innerText;
      document.getElementById("tensanpham").value = this.cells[2].innerText;
      document.getElementById("ngaytao").value = this.cells[4].innerText;
    };
  }
}

function Delete() {
  const button = document.querySelector(".btn-form1");
  button.addEventListener('click', () => {
    const id = document.querySelector("#masanpham").value;
     XoaSanPham(id);
     console.log("xoa tc");
  })
}
function Update() {
  const button = document.querySelector(".btn-form2");
  button.addEventListener('click', () => {
    const id = document.querySelector("#masanpham").value;
     suaSanPham(id);
     console.log("xoa tc");
  })
}

//--------------------Khach hang------------------------------
function LoadKhachHang() {
  var str = "";
  var i = 1;
  for (var x of list_user) {
    console.log(x);
    str += ` <tr>
                <td>${i}</td>
                <td>${x.username}</td>
                <td>${x.email}</td>
                <td>${x.sdt}</td> 
                <td>${x.diachi}</td>
                <td style="text-align: center;">
                    <i class="fas fa-edit" title="Sửa" style="color: rgb(0, 132, 255)"
                    onclick='SuaKH(\`${JSON.stringify(x)}\`)'
                      ></i>
                    <i class="fas fa-trash-alt" style="color: red" title="Xóa"
                        onclick="Xoa(x)"></i>
                </td>
            </tr>`;
    i++;
  }
  document.querySelector(".content-user").innerHTML = str;
}

function SuaKH(x) {
  var user = JSON.parse(x);
  document.getElementById("tenkhachhang").value = user.username;
  document.getElementById("sodienthoai").value = user.sdt;
  document.getElementById("email").value = user.email;
  document.getElementById("diachi").value = user.diachi;

}




//-----------------Nha cung cap------------------
function LoadNhaCungCap() {
  var str = "";
  for (var x of nhaCungCaps) {
    console.log(x);
    str += ` <tr>
                <td>${x.id}</td>
                <td>${x.ten}</td>
                <td>${x.diaChi}</td>
                <td>${x.soDienThoai}</td> 
                <td style="text-align: center;">
                    <i class="fas fa-edit" title="Sửa" style="color: rgb(0, 132, 255)"
                    onclick='SuaKH(\`${JSON.stringify(x)}\`)'
                      ></i>
                    <i class="fas fa-trash-alt" style="color: red" title="Xóa"
                        onclick="Xoa(x)"></i>
                </td>
            </tr>`;
  }
  document.querySelector(".content-provider").innerHTML = str;
}

// Sử dụng addEventListener() để thêm sự kiện click vào button
// button.addEventListener("click", function (e) {
//   // Lấy id của butt  on
//   e.preventDefault();
//     const id = document.querySelector(".masanpham").value;
//   // Truyền id vào hàm XoaSanPham()
//   xoaSanPham(id);
//   console.log('xoa tc');
// });
