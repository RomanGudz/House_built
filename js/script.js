const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');

modalBtn.on('click', function () {
  modalOrder.show(500);
});

modalClose.on('click', function () {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
  modalOrderTitle
    .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function () {
  modalOrderTitle.text('Заполните форму');
});

$('.modal-order__form').submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Ваша заявка принята')
      $('.modal-order__form').slideUp(300);
    },
    error() {
      modalOrderTitle.text('Попробуйте позже');
    }
  })
})

const headerBurger = $('.header__burger');
const navigation = $('.navigation');
const headerBurgerClose = $('.navigation__close');

headerBurger.on('click', function () {
  navigation.animate({
    left: 0,
  }, 500, function () {
    headerBurgerClose.animate({
      opacity: 1,
    }, 300, 'swing')
  });
});

headerBurgerClose.on('click', function () {
  navigation.animate({
    left: -400,
  }, 500,
    function () {
      headerBurgerClose.animate({
        opacity: 0,
      })
    })
});
