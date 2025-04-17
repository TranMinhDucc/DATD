  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-carousel', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      autoplay: true,
      breakpoints: {
        768: {
          perPage: 1,
          perMove: 1,
        },
      },
    }).mount();
  });
