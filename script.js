// Lấy các thành phần HTML cần sử dụng
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const backToTop = document.getElementById("back-to-top");
const currentYear = document.getElementById("current-year");

// Hiển thị năm hiện tại ở chân trang
currentYear.textContent = new Date().getFullYear();

// Mở hoặc đóng menu trên điện thoại
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Đóng menu" : "Mở menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Đóng menu sau khi bấm vào một liên kết
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Mở menu");
        menuToggle.textContent = "☰";
    });
});

// Hiện nút quay lại đầu trang khi cuộn xuống
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Bấm nút để quay lại đầu trang
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});