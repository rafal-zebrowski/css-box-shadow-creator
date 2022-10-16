document.querySelector(".close-icon").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".main").classList.toggle("active");
    document.querySelector(".close-icon").classList.toggle("bi-chevron-double-right");
    document.querySelector(".close-icon").classList.toggle("bi-chevron-double-left");
});