
const videoImage = document.querySelectorAll(".video-main-block img");

videoImage.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector(".popUp-video").classList.add("showImage");
        document.querySelector(".popUp-video img").src = item.getAttribute('src');
    })
})
const close = document.querySelector(".close");
close.addEventListener('click', () => {
    document.querySelector(".popUp-video").classList.remove("showImage");
})

