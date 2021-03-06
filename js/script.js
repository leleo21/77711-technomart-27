var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-write-us");


if (link && popup) {
  var initials = popup.querySelector("[name=initials]");
  var email = popup.querySelector("[name=email]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("initials");
    } catch (err) {
      isStorageSupport = false;
    }

    popup.classList.add("modal-show");

    if (storage) {
      initials.value = storage;
      email.focus();
    } else {
      initials.focus();
    }
  });

  var closeButton = popup.querySelector("#close-write-us");
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.add("modal-closing");
    setTimeout(function () {
      popup.classList.remove("modal-closing");
    }, 900);
    popup.classList.remove("modal-error");
  });

  var form = popup.querySelector("form");
  form.addEventListener("submit", function (evt) {
    if (!initials.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести имя и e-mail");
    } else {
      if (isStorageSupport) { //todo разобраться с переменной isStorageSupport
        localStorage.setItem("initials", initials.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".map-popap");

if (mapLink && mapPopup) {
  var mapCloseButton = mapPopup.querySelector("#close-map");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapPopup.classList.add("modal-closing");
    setTimeout(function () {
      mapPopup.classList.remove("modal-closing");
    }, 900);
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}


var slider = document.querySelector(".showcase-slider");
if (slider) {
  var controlLeft = slider.querySelector(".showcase-slider-l");
  var controlRight = slider.querySelector(".showcase-slider-r");
  var slideItem = slider.querySelectorAll(".showcase-item");
  var radio1 = slider.querySelector(".slider-radio-1");
  var radio2 = slider.querySelector(".slider-radio-2");
  var cnt = slideItem.length - 1;

  controlLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (0 < cnt) {
      --cnt;
      for (var t = 0; t < slideItem.length; t++)
        slideItem[t].classList.remove("slide-show");
      slideItem[cnt].classList.add("slide-show");
    } else {
      slideItem[cnt].classList.remove("slide-error");
      slideItem[cnt].offsetWidth = slideItem[cnt].offsetWidth;
      slideItem[cnt].classList.add("slide-error");
      radio2.classList.remove("active");
      radio1.classList.add("active");
    }
  });

  controlRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (cnt < slideItem.length - 1) {
      cnt += 1;
      for (var t = 0; t < slideItem.length; t++)
        slideItem[t].classList.remove("slide-show");
      slideItem[cnt].classList.add("slide-show");
    } else {
      slideItem[cnt].classList.remove("slide-error");
      slideItem[cnt].offsetWidth = slideItem[cnt].offsetWidth;
      slideItem[cnt].classList.add("slide-error");
      radio1.classList.remove("active");
      radio2.classList.add("active");
    }
  });

  radio1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideItem[1].classList.remove("slide-show");
    slideItem[0].classList.add("slide-show");
    radio2.classList.remove("active");
    radio1.classList.add("active");
  });

  radio2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideItem[0].classList.remove("slide-show");
    slideItem[1].classList.add("slide-show");
    radio1.classList.remove("active");
    radio2.classList.add("active");
  });
}


var addcartLinks = document.querySelectorAll(".buy");
var addcartPopup = document.querySelector(".modal-add-cart");
var addcartCloseButton = addcartPopup.querySelector("#close-add-cart");
var cartCount = 0;
var cartColor = document.querySelector(".cart");

Array.prototype.forEach.call(addcartLinks, function (element) {
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('add to cart click');
    cartCount += 1;
    document.getElementById("cart-count").textContent = cartCount;
    addcartPopup.classList.add("modal-show");
    cartColor.classList.add("cart-color");
  })
});

addcartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('close window click');
  addcartPopup.classList.remove("modal-show");
  addcartPopup.classList.add("modal-closing");
  setTimeout(function () {
    addcartPopup.classList.remove("modal-closing");
  }, 900);
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    evt.preventDefault();
    if (addcartPopup.classList.contains("modal-show")) {
      addcartPopup.classList.remove("modal-show");
    }
  }
});













