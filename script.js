
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

// Hiển thị năm hiện tại ở cuối trang
year.textContent = new Date().getFullYear();

// Mở và đóng menu trên điện thoại
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Đóng menu" : "Mở menu"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Đóng menu sau khi chọn một mục
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
    menuToggle.textContent = "☰";
  });
});

// Nút quay lại đầu trang
function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 300);
}

window.addEventListener("scroll", updateBackToTop, {
  passive: true
});

updateBackToTop();

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});