var swiper = new Swiper(".myBanner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
      },
    speed: 800,
  });

  var swiper = new Swiper(".myFeatured", {
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    
  });

  var swiper = new Swiper(".myNews", {
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 600,
  });

  // Search Product

var inputSearch = document.querySelector(".search-input");
var suggestSearch = document.querySelector(".search-suggest");
var keywordSearch = document.querySelector(".search-keyword");
var suggestList = document.querySelector(".search-suggest-list");
var keywordList = document.querySelector(".search-keyword-list");
var suggestListItems = document.querySelectorAll(".search-suggest-list-item");

const keywords = [
  "Giày chạy bộ GOYA màu đỏ",
  "Giày chạy bộ GOYA màu cam",
  "Giày chạy bộ GOYA màu vàng",
  "Giày chạy bộ GOYA màu xanh",
  "Giày chạy bộ GOYA màu tím",
  "Giày chạy bộ GOYA màu xanh đen",
  "Giày chạy bộ GOYA màu đen",
  "Giày chạy bộ GOYA màu trắng",
  "Giày chạy bộ GOYA màu hồng",
  "Giày chạy bộ GOYA màu nâu",
  "Dép chạy bộ GOYA màu đỏ",
  "Dép chạy bộ GOYA màu cam",
  "Dép chạy bộ GOYA màu vàng",
  "Dép chạy bộ GOYA màu xanh",
  "Dép chạy bộ GOYA màu tím",
  "Dép chạy bộ GOYA màu xanh đen",
  "Dép chạy bộ GOYA màu đen",
  "Dép chạy bộ GOYA màu trắng",
  "Dép chạy bộ GOYA màu hồng",
  "Dép chạy bộ GOYA màu nâu",
  "Áo chạy bộ GOYA cho nữ",
  "Áo chạy bộ GOYA cho nam",
  "Tất nhà GOYA",
  "Lót giày",
  "Găng tay chống nắng"
];

inputSearch.addEventListener("click", () => {
  suggestSearch.classList.add("search-active");
});

[...suggestListItems].forEach((item) => {
  item.addEventListener("click", () => {
    inputSearch.value = item.querySelector("span").innerHTML;
    suggestSearch.classList.remove("search-active");
  });
});

inputSearch.addEventListener("keyup", (e) => {
  suggestSearch.classList.remove("search-active");
  keywordSearch.classList.add("search-active");
  let checkData = e.target.value;
  let dataArray = [];
  if (checkData) {
    dataArray = keywords.filter((data) => {
      return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
    });
    dataArray = dataArray.map((data) => {
      return (data = `<li class="keyword-list-item">
                        <span>${data}</span>
                      </li>`);
    });

    showData(dataArray);

    let liItem = keywordList.querySelectorAll("li");
    for (let i = 0; i < liItem.length; i++) {
      liItem[i].addEventListener("click", (e) => {
        if (keywords.includes(e.target.textContent)) {
          inputSearch.value = liItem[i].querySelector("span").innerHTML;
        } else {
          inputSearch.value = liItem[i].innerHTML;
        }
        keywordSearch.classList.remove("search-active");
      });
    }
  } else {
    keywordSearch.classList.remove("search-active");
  }
});

function showData(list) {
  let listData;
  if (!list.length) {
    listData = "<li>" + inputSearch.value + "</li>";
  } else {
    listData = list.join("");
  }

  keywordList.innerHTML = listData;
}


// hidden form suggest when user click on outside search btn

document.addEventListener("click", (e) => {
  const isInputClickBtn = inputSearch.contains(e.target);
  if (!isInputClickBtn) {
    suggestSearch.classList.remove("search-active");
    keywordSearch.classList.remove("search-active");
  }
});


// prevent the default behavior of reloading the page when clicking on empty <a> tags:

const emptyLinks = document.querySelectorAll('a[href="#"]');
[...emptyLinks].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
