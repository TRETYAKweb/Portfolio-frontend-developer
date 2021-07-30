$(function(){

  $(".menu a, .header__link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 90;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list, .menu__btn').toggleClass('menu__list--active');
    $('body').toggleClass('open-menu');
  });


  var Mixer = mixitup('.works__content');


});