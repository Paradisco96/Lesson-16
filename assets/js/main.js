// $('.header__navbar-btn').on('click', function () {
//   $(this).toggleClass('active')
//   $('.header__navbar-list').stop(true, true).slideToggle(300)
// })

const burger = document.querySelector('.header__navbar-btn');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  $(".header__navbar-list").stop(true, true).slideToggle(500);
});