// js/countdown.js

// 1. Thiết lập mốc thời gian đích (ngày cưới: 01/06/2025 00:00:00)
const weddingDate = new Date("June 1, 2025 00:00:00").getTime();

// 2. Cập nhật đếm ngược mỗi giây
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Tính toán số ngày, giờ, phút, giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị lên giao diện
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Khi countdown kết thúc
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<span>HAPPY WEDDING DAY!</span>";
    }
}, 1000);


// js/lang-toggle.js
const btn = document.getElementById('lang-toggle');
let showVI = true;  // true = đang hiển thị Tiếng Việt, false = Tiếng Anh

btn.addEventListener('click', () => {
    showVI = !showVI;

    if (showVI) {
        // Show Vietnamese, hide English
        document.querySelectorAll('.vi').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.en').forEach(el => el.style.display = 'none');
    } else {
        // Show English, hide Vietnamese
        document.querySelectorAll('.vi').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.en').forEach(el => el.style.display = 'block');
    }

    // Thay đổi trạng thái nút (chẳng hạn xoay 180°)
    btn.classList.toggle('active', !showVI);
});
