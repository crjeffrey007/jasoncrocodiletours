document.addEventListener("DOMContentLoaded", function () {
  const mount = document.getElementById("slider-container");
  let swiper = null;

  function isMobileOrTablet() {
    return window.innerWidth <= 991;
  }

  function render() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    mount.innerHTML = "";

    // 🔹 SLIDER LIMPIO (MOBILE + DESKTOP)
    mount.innerHTML = `
      <section class="swiper clean-slider">
        <div class="swiper-wrapper">
          ${[1, 2, 3, 4].map(
            (n) => `
            <div class="swiper-slide">
              <img src="images/jason-${n}.jpeg" alt="Jason Crocodile Tour ${n}">
            </div>`
          ).join("")}
        </div>
        <!-- Dots -->
        <div class="swiper-pagination"></div>
        <!-- Flechas (solo visibles en desktop con CSS) -->
        <div class="swiper-button-next custom-next"></div>
        <div class="swiper-button-prev custom-prev"></div>
      </section>
    `;

    swiper = new Swiper(".clean-slider", {
      loop: true,
      autoplay: { delay: 7000, disableOnInteraction: false },
      pagination: { el: ".clean-slider .swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".clean-slider .custom-next",
        prevEl: ".clean-slider .custom-prev",
      },
    });
  }

  render();

  // Re-render en resize
  window.addEventListener("resize", () => {
    if (swiper) swiper.update();
  });
});
