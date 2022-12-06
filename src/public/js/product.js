document.querySelectorAll(".cart-product").forEach(element => element.addEventListener("click", function() {
    let url = "/products/" + this.getAttribute("data-item-value") + "/addtocart";
    fetch(url)
    .then(setTimeout(function() {
        document.querySelector(".noti-cart #Text").innerText = document.cookie.split("=")[1] > 9 ? "9+" : document.cookie.split("=")[1];
    }, 50));
}));

document.querySelector(".search-btn").addEventListener("click", function() {
    if(document.querySelector("#search-box").value) {
        window.location = "?search=" + document.querySelector("#search-box").value
    }
})

document.querySelector(".priceAscending").addEventListener("click", function() {
    window.location = "?priceOrder=ASC"
})
document.querySelector(".priceDescending").addEventListener("click", function() {
    window.location = "?priceOrder=DESC"
})

document.querySelector("#search-box").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".search-btn").click();
    }
})