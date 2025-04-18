document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll(".avatar-slider")
        .forEach((slider) => {
            new Splide(slider, {
                type: "loop",
                perPage: 1,
                arrows: true,
                pagination: false,
            }).mount();
        });
});