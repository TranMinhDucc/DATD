const newsData = [
    {
        title: 'Người đẹp Nga Lê: Từ sinh viên đến catwalk trainer<br>- "Tôi tin vào sức mạnh của sự tự tin".',
        image: "images/client/kol/new.jpeg",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        title: 'Á hậu Đỗ Thuỳ Trang: Gương mặt của sự thanh lịch<br>- "Tôi muốn truyền cảm hứng cho phụ nữ hiện đại".',
        image: "images/client/kol/new.jpeg", // ví dụ ảnh khác
        description:
            "Trang là biểu tượng cho vẻ đẹp trí tuệ và lòng nhân ái. Cô tích cực tham gia các hoạt động xã hội và thiện nguyện.",
    },
    {
        title: 'Tùng Gym lộ clip gây tranh cãi<br>- "Sự nổi tiếng đôi khi là con dao hai lưỡi".',
        image: "images/client/kol/new.jpeg",
        description:
            "Một đoạn video lan truyền đã khiến cộng đồng mạng xôn xao. Tuy nhiên, Tùng vẫn giữ vững tinh thần tích cực và phản hồi lịch sự.",
    },
    {
        title: 'Vân Ly đi bãi biển<br>- "Biển là nơi tôi tìm lại chính mình".',
        image: "images/client/kol/new.jpeg",
        description:
            "Chuyến đi giúp Vân thư giãn sau lịch làm việc dày đặc. Cô chia sẻ những khoảnh khắc đáng nhớ trên mạng xã hội.",
    },
    {
        title: 'Hoa khôi Dona ở văn phòng<br>- "Tôi muốn chứng minh sắc đẹp và trí tuệ có thể song hành".',
        image: "images/client/kol/new.jpeg",
        description:
            "Dona vừa đạt danh hiệu Hoa khôi, vừa là nhân viên xuất sắc trong lĩnh vực công nghệ với nhiều sáng kiến nổi bật.",
    },
];

// Gán sự kiện click cho từng item bên trái
const items = document.querySelectorAll(".news-item");
const img = document.querySelector(".news-img");
const head = document.querySelector(".news-head");
const desc = document.querySelector(".news-description");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Xoá class active khỏi tất cả item
        items.forEach((el) => el.classList.remove("active"));
        // Thêm active vào item hiện tại
        item.classList.add("active");

        // Cập nhật nội dung bên phải
        img.src = newsData[index].image;
        head.innerHTML = `<strong>${newsData[index].title}</strong>`;
        desc.textContent = newsData[index].description;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".video-carousel-wrapper");

    carousels.forEach((wrapper) => {
        const carousel = wrapper.querySelector(".video-carousel");

        // Tìm nút prev và next ở .video-title-bar bên ngoài
        const prevBtn = document.querySelector(
            ".video-title-bar .carousel-btn.prev"
        );
        const nextBtn = document.querySelector(
            ".video-title-bar .carousel-btn.next"
        );

        const scrollAmount = 240;

        if (prevBtn && nextBtn && carousel) {
            prevBtn.addEventListener("click", () => {
                carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            nextBtn.addEventListener("click", () => {
                carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const newsList = document.querySelector('.news-list');
    const prevBtn = document.querySelector('.news-scroll-btn.prev');
    const nextBtn = document.querySelector('.news-scroll-btn.next');

    const scrollAmount = 200;

    prevBtn.addEventListener('click', () => {
        newsList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        newsList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});
