$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".mobile-menu").addClass("is-active");
  });

  $(".mobile-menu__header-btn").on("click", function () {
    $(".mobile-menu").removeClass("is-active");
  });

  // Reviews swiper start
  const reviewsSwiper = new Swiper(".reviews__swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews__swiper .swiper-button-next",
      prevEl: ".reviews__swiper .swiper-button-prev",
    },
    speed: 1000,
  });
  // Reviews swiper end

  $(".header__btn").magnificPopup({
    type: "inline",
    removalDelay: 700,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
});
