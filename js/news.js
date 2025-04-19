document.addEventListener("DOMContentLoaded", function () {
    // === SplideJS Slider Khởi tạo ===
    new Splide("#news-slider", {
        type: "slide",
        perPage: 5,
        gap: "24px",
        pagination: false,
        arrows: true,
        breakpoints: {
            1200: { perPage: 4 },
            992: { perPage: 3 },
            768: { perPage: 2 },
            576: { perPage: 1 },
        },
    }).mount();

    // === Đọc thêm / Thu gọn phần nội dung ===
    const toggleBtn = document.getElementById("toggleReadmore");
    const content = document.querySelector(".news-content");

    if (toggleBtn && content) {
        const collapsedHeight = 100;
        let isExpanded = false;

        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.5s ease";
        content.style.maxHeight = collapsedHeight + "px";

        toggleBtn.addEventListener("click", function () {
            if (isExpanded) {
                content.style.maxHeight = collapsedHeight + "px";
                content.classList.remove("expanded");
                toggleBtn.innerText = "Đọc thêm";
            } else {
                const fullHeight = content.scrollHeight;
                content.style.maxHeight = fullHeight + "px";
                content.classList.add("expanded");
                toggleBtn.innerText = "Thu gọn";
                content.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            isExpanded = !isExpanded;
        });

        window.addEventListener("resize", function () {
            if (isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
