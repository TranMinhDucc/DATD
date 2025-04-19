document.addEventListener("DOMContentLoaded", function () {
    new Splide("#news-slider", {
        type: "slide",
        perPage: 5, // desktop
        gap: "24px",
        pagination: false,
        arrows: true,
        breakpoints: {
            1200: { perPage: 4 },
            992: { perPage: 3 },
            768: { perPage: 2 },
            576: { perPage: 1 }, // mobile 1 ảnh
        },
    }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleReadmore");
    const content = document.querySelector(".news-content");

    const collapsedHeight = 100;
    let isExpanded = false;

    // Thiết lập transition cho hiệu ứng mượt
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.5s ease";

    // Thiết lập chiều cao ban đầu
    content.style.maxHeight = collapsedHeight + "px";

    toggleBtn.addEventListener("click", function () {
        if (isExpanded) {
            // Thu gọn
            content.style.maxHeight = collapsedHeight + "px";
            content.classList.remove("expanded");
            toggleBtn.innerText = "Đọc thêm";
        } else {
            // Tính lại chiều cao thật sự mỗi lần mở
            const fullHeight = content.scrollHeight;
            content.style.maxHeight = fullHeight + "px";
            content.classList.add("expanded");
            toggleBtn.innerText = "Thu gọn";

            // Scroll nhẹ lên đầu phần nội dung
            content.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        isExpanded = !isExpanded;
    });

    // Khi resize, cập nhật lại max-height nếu đang mở rộng
    window.addEventListener("resize", function () {
        if (isExpanded) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
