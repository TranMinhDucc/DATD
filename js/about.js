new Splide('#team-splide', {
    type   : 'slide',
    perPage: 2,
    perMove: 1,
    gap: '2px',
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();