document.querySelectorAll(".cart-product").forEach(element => element.addEventListener("click", function() {
    let url = "/products/" + this.getAttribute("data-item-value") + "/addtocart";
    fetch(url)
    .then(setTimeout(function() {
        document.querySelector(".noti-cart #Text").innerText = document.cookie.split("=")[1] > 9 ? "9+" : document.cookie.split("=")[1];
    }, 50));
}));

document.querySelector(".search-btn").addEventListener("click", function() {
    if(document.querySelector("#search-box").value) {
        
    }
})