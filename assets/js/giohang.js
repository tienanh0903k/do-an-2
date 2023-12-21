window.onload = function() {
    khoiTao();

    var currentUser = getCurrentUser();
    taoBang(currentUser);
}
function updateQuantity(id) {
    var input = document.querySelector(`input[id='${id}']`);
    console.log(input);
    var sl = parseInt(input.value);
    var user = getCurrentUser();
    user.products = user.products.map(product => 
        product.id == id ? { ...product, soLuong: sl } : product
    );
	console.log(user.products);
    setCurrentUser(user);
	taoBang(user);
}



function taoBang(user) {
    var table = document.getElementById("listCart");
    var total = document.querySelector(".price");
    var str = "";
	var tongTien = 0;
    if(!user) {
        str = `
        <tr>
        <td colspan="7"> 
            <h1 style="color:red; background-color:white; font-weight:bold; text-align:center; padding: 15px 0;">
                Bạn chưa đăng nhập !!
            </h1> 
        </td>
    </tr>`;
    table.innerHTML = str;
    } else if(user.products.length == 0) {
        str += `
			<tr>
				<td colspan="7"> 
					<h1 style="color:green; background-color:white; font-weight:bold; text-align:center; padding: 15px 0;">
						Giỏ hàng trống !!
					</h1> 
				</td>
			</tr>
		`;
		table.innerHTML = str;
		return;
    }
    
	for (var i = 0; i < user.products.length; i++) {
        console.log(user.products[i]);
		var id = user.products[i].id;
		console.log(id);
        var img = user.products[i].image;
        var ten = user.products[i].ten;
        var gia = user.products[i].gia;
        var sl = user.products[i].soLuong;
		var giaSanPham = gia * sl;
		
        tongTien += giaSanPham;
		// var soluongSp = user.products[i].soluong;
		// var p = timKiemTheoMa(list_products, masp);
		// var price = (p.promo.name == 'giareonline' ? p.promo.value : p.price);
		// var thoigian = new Date(user.products[i].date).toLocaleString();
		// var thanhtien = stringToNum(price) * soluongSp;
        str += `
            <tr>
                <td><i ng-click="Xoa(x.maSanPham)" class="fa fa-times-circle"
                        style="font-size:30px;color:red;cursor: pointer;"></i></td>
                <td><img src="${img}"></td>
                <td>${ten}</td>
                <td>${gia}</td>
				<td>
					<input id="${id}" onchange="updateQuantity(${id})" type="number"
						style="width: 50px;" min="1" value="${sl}">
				</td>
                <td>${giaSanPham}</td>
            </tr>`;
            table.innerHTML = str;
	
		total.innerText = tongTien;
	}
    console.log(table);
}