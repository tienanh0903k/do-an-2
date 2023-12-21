
function renderProduct(list_Product) {
    var str = "";
    for (let i = 0; i < list_Product.length; i++) {
      var obj = JSON.stringify(list_Product[i]);
      str += `
  <div class="col l-3 m-4">
         <div class="product">
                <div class="info-ticket">Best Seller</div>
                <div class="thumb-product">
                    <img src="${list_Product[i].image[0]}"
                    </div>
                    <div class="info-product">
                    <div class="list-color">
                    <a href="#" class="color-picker">
                    <img src="https://pubcdn.ivymoda.com/ivy2/images/color/013.png"alt="013" class="lazy">
                    </a>
                    <div class="favourite">
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    </div>
                    <h3 class="title-product">
                    <a href="#" onclick='showDetail(${obj})'>
                    <span>${list_Product[i].ten}</span>
                    </a>
                    </h3>
                    <div class="price-product">
                    <ins>
                    <span>${list_Product[i].gia}</span>
                    </ins>
                    <div class="add-to-cart">
                    <button onclick="addToCart('${list_Product[i].id}')"><i class="fa-solid fa-bag-shopping"></i></button>

                </div>
                 </div>
                </div>
                </a>
                </div>
                </div>
        </div>`;
    }

    document.querySelector(".products__content .row").innerHTML = str;
}

export function showDetail(productData) {
  // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
  var product = JSON.parse(productData);

  // Hiển thị thông tin sản phẩm bằng cách sử dụng Alert (thay thế bằng cách hiển thị thông tin theo cách bạn muốn)
  alert(
    `Product ID: ${product.id}\nName: ${product.ten}\nPrice: ${product.gia}`
  );
}


export default renderProduct;