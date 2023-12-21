// var tab_items = document.getElementsByClassName("tabs__products-nav-item");
// var tab_contents = document.getElementsByClassName("tab-content");

// function switchTab(tab_id) {
//   for (var i = 0; i < tab_items.length; i++) {
//     tab_items[i].classList.toggle("active",
//       tab_items[i].getAttribute("data-tab") == tab_id
//     );
//   }
//   //console.log(tab_items[i].getAttribute("data-tab"));

//   for (var i = 0; i < tab_contents.length; i++) {
//     tab_contents[i].classList.toggle(
//       "active",
//       tab_contents[i].getAttribute("id") == tab_id
//     );
//     //console.log(tab_contents[i].getAttribute("id"));
//   }

//   if (tab_id === "tab1") {
//     const tabContent = document.querySelector(".tabs__products-content .row");
//     tabContent.innerHTML = renderProduct(list_Product);
//   } else if (tab_id === "tab2") {
//     const tabContent = document.querySelector(".tabs__products-content .row");
//     tabContent.innerHTML = renderProduct(product_Male);
//   }

// }
//  switchTab('tab1');


window.addEventListener("load", function () {
  khoiTao();
  const tabData = {
    "#tab1": list_Product,
  };

  var listTabs = document.querySelectorAll("ul.tabs__products-nav > li");
  function switchTab(tab) {
    var clickTab = tab.currentTarget;
    var parentTab = tab.currentTarget.parentNode.parentNode;
    //console.log(parentTab);
    //console.log(clickTab);
    var listTabs = parentTab.querySelectorAll("ul.tabs__products-nav > li");
    for (var i = 0; i < listTabs.length; i++) {
      listTabs[i].classList.remove("active");
    }
    clickTab.classList.add("active");

    const listContent = parentTab.querySelectorAll(".tab-content");
    for (let i = 0; i < listContent.length; i++) {
      listContent[i].classList.remove("active");
    }
    var anchorReference = tab.target;
    //console.log(anchorReference);
    var getId = anchorReference.getAttribute("data-tab");
    //console.log(getId);
    let getIdTabs = parentTab.querySelector(getId);
    //console.log(getIdTabs);
    getIdTabs.classList.add("active");
    handleProductTab(getId, parentTab, getIdTabs);
  }

  //---gan su kien click cho cac tab
  listTabs.forEach((tab) => {
    tab.addEventListener("click", switchTab);
  });

  const defaultTabs = document.querySelectorAll(
    "[data-tab='#tab1'], [data-tab='#tab4']"
  );
  console.log(defaultTabs);
  defaultTabs.forEach((tab) => {
    tab.click(); 
  });


//console.log(list_Product);
  function handleProductTab(idTab, parentTab, getIdTabs) {
    if (idTab === "#tab1") {
      productList = tabData["#tab1"];
      
      const productContainer = parentTab.querySelector(
        ".tabs__products-content .row"
      );
      productContainer.innerHTML = renderProduct(productList);
    }
    // const productList = tabData[idTab];
    // console.log(productList);
    // if (idTab === productList) {
    //   const productContainer = parentTab.querySelector(
    //     ".tabs__products-content .row"
    //   );
    //   productContainer.innerHTML = renderProduct(productList);
    // }
  }

  function renderProduct(productList) {
    //console.log(productList);
    var str = "";
    for (let i = 0; i < productList.length; i++) {
      var obj = JSON.stringify(productList[i]);
      str += `
    <div class="col l-3 c-6">
      <div class="product">
        <div class="info-ticket">Best Seller</div>
        <div class="thumb-product">
          <img src="${productList[i].image}">
        </div>
        <div class="info-product">
          <div class="list-color">
            <a href="#" class="color-picker">
              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/013.png" alt="013" class="lazy">
            </a>
            <div class="favourite">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
          <h3 class="title-product">
                <a href="chitietSanPham.html?=${productList[i].ten}" onclick=\'showDetail(\`${obj}\`)\'>
                <span>${productList[i].ten}</span>
                </a>
          </h3>
          <div class="price-product">
            <ins>
              <span>${productList[i].gia}</span>
              <span>đ</span>
              <del>
              <span>1.690.000đ</span>
              </del>
            </ins>
            <div class="add-to-cart">
              <button onclick=\'addToCart(\`${obj}\`)\'>
                <i class="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }
    return str;
  }
});
// renderProduct(list_Product);
// console.log(renderProduct(list_Product));

//render
// var str = "";
// for (let i = 0; i < list_Product.length; i++) {
//   var obj = JSON.stringify(list_Product[i]);
//   str += `
//     <div class="col l-3 c-6">
//       <div class="product">
//         <div class="info-ticket">Best Seller</div>
//         <div class="thumb-product">
//           <img src="${list_Product[i].image}">
//         </div>
//         <div class="info-product">
//           <div class="list-color">
//             <a href="" class="color-picker">
//               <img src="https://pubcdn.ivymoda.com/ivy2/images/color/013.png" alt="013" class="lazy">
//             </a>
//             <div class="favourite">
//               <i class="fa-regular fa-heart"></i>
//             </div>
//           </div>
//           <h3 class="title-product">
//             <a href="https://ivymoda.com/sanpham/chan-vay-xep-ly-cap-cao-phoi-khuy-ms-30m8283-37829">
//               <span>${list_Product[i].ten}</span>
//             </a>
//           </h3>
//           <div class="price-product">
//             <ins>
//               <span>${list_Product[i].gia}</span>
//               <span>đ</span>
//             </ins>
//             <div class="add-to-cart">
//               <button onclick=\'addToCart(\`${obj}\`)\'>
//                 <i class="fa-solid fa-bag-shopping"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>`;
// }

// document.querySelector(".tabs__products-content .row").innerHTML = str;


function showDetail(objSP) {
    localStorage.setItem("detail-products", objSP);
}
/*--------------Slider------------*/
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const sliderContent = document.querySelector(".slider-content");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

// Thay đổi slide khi nhấp vào radio button
radioButtons.forEach(function (radio, index) {
  radio.addEventListener("change", function (e) {
    console.log(e.target);
    currentSlide = index;
    sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
});

function updateSlider() {
  radioButtons[currentSlide].checked = true;
  sliderContent.style.transform = `translateX(-${currentSlide * 100}%)`;
}
// Xử lý sự kiện click nút "prev"
prevButton.addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

// Xử lý sự kiện click nút "next"
nextButton.addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});
