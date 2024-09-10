
let btn = document.querySelector(".nav-button");
btn.addEventListener("click", function () {
    document.querySelector(".nav-links-block").classList.toggle("button-active");
    document.querySelector(".nav-button").classList.toggle("active");
    // alert("check");
})