document.addEventListener("DOMContentLoaded", function () {
  const mount = document.getElementById("slider-container");
  let swiper = null;

  function isMobile() {
    return window.innerWidth <= 991;
  }

  function render() {
    if (swiper) { swiper.destroy(true, true); swiper = null; }
    mount.innerHTML = "";

    if (isMobile()) {
      // 🔹 MOBILE: imagen + texto + dots (SIN flechas)
      mount.innerHTML = `
        <section class="swiper mobile-slider" style="margin-bottom:10px;">
          <div class="swiper-wrapper">
            ${[1,2,3,4].map(n => `
              <div class="swiper-slide">
                <img src="images/jason-${n}.jpeg" alt="Jason Crocodile Tour ${n}">
                <div class="caption">
                  <h6>Are you ready to live the ultimate crocodile experience?</h6>
                  <h2>Explore <span class="highlight">Costa Rica’s Wildest Tour!</span></h2>
                  <a class="button" href="https://api.whatsapp.com/send?phone=50688229042" target="_blank">Book Now</a>
                </div>
              </div>`).join("")}
          </div>
          <div class="swiper-pagination"></div>
        </section>`;
      swiper = new Swiper(".mobile-slider", {
        loop: true,
        autoplay: { delay: 7000, disableOnInteraction: false },
        pagination: { el: ".mobile-slider .swiper-pagination", clickable: true }
      });
    } else {
      // 🔹 DESKTOP: imagen + flechas + dots (UN solo par de flechas)
      mount.innerHTML = `
        <section class="swiper desktop-slider">
          <div class="swiper-wrapper">
            ${[1,2,3,4].map(n => `
              <div class="swiper-slide" style="background-image:url('images/jason-${n}.jpeg')"></div>
            `).join("")}
          </div>
          <!-- Solo 1 par de flechas -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </section>`;
      swiper = new Swiper(".desktop-slider", {
        loop: true,
        autoplay: { delay: 7000, disableOnInteraction: false },
        navigation: {
          nextEl: ".desktop-slider .swiper-button-next",
          prevEl: ".desktop-slider .swiper-button-prev"
        },
        pagination: { el: ".desktop-slider .swiper-pagination", clickable: true }
      });
    }
  }

  render();

  window.addEventListener("resize", () => {
    const wasMobile = document.querySelector(".mobile-slider") !== null;
    const nowMobile = isMobile();
    if (wasMobile !== nowMobile) render();
    else if (swiper) swiper.update();
  });
});
