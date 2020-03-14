var addcartLinks = document.querySelectorAll(".buy");

var addcartPopup = document.querySelector(".modal-add-cart");
var addcartCloseButton = addcartPopup.querySelector("#close-add-cart");
var cartCount = 0;
var cartColor = document.querySelector(".cart");

Array.prototype.forEach.call(addcartLinks, function (element) {
  element.addEventListener("click", function (evt) {
    cartCount += 1;
    document.getElementById("cart-count").textContent = cartCount;
    evt.preventDefault();
    addcartPopup.classList.add("modal-show");
    addcartPopup.classList.remove("modal-closed");
    cartColor.classList.add("cart-color");
  })
});

addcartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  addcartPopup.classList.remove("modal-show");
  addcartPopup.classList.add("modal-closing");
  setTimeout(function () {
    addcartPopup.classList.add("modal-closed");
  }, 1000);
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    evt.preventDefault();
    if (addcartPopup.classList.contains("modal-show")) {
      addcartPopup.classList.remove("modal-show");
    }
  }
});