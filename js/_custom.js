$(document).ready(function () {
  // Burger menu
  $("#nav__toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  // History Show More
  $(".history__link").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".history__item").removeClass("hide");
  });

  // FORM
  // Tabs
  $(".forn__section__tab").on("click", function () {
    $(this).toggleClass("active");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".form__section__body")
      .toggleClass("hide");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".form__section__header")
      .toggleClass("active");
  });

  // Section 2 add line
  $(".sectionAdd2").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__section__line").removeClass("hide");
    $(this).addClass("active");
  });

  // Section 3 add line
  $(".sectionAdd3").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__group").removeClass("hide");
    $(this).addClass("active");
  });

  // Section 4
  // Add Order
  $(".form__add__order").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__section__inner").removeClass("hide");
    $(this).addClass("active");
  });

  // Add Categories
  $(".sectionAdd4").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__categories").removeClass("hide");
    $(this).addClass("active");
  });

  // Section 5 add line
  $(".sectionAdd5").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__section__line").removeClass("hide");
    $(this).addClass("active");
  });

  // Section 6 add line
  $(".sectionAdd6").on("click", function (event) {
    event.preventDefault();
    $(this)
      .parent()
      .parent()
      .find(".form__contact__wrapper")
      .removeClass("hide");
    $(this).addClass("active");
  });

  // Селект с выбором файла
  $(".form__type__item--current").on("click", function () {
    $(this).parent().find(".form__type__list").addClass("active");
  });

  $(".form__type__item--list").on("click", function () {
    $(this)
      .parent()
      .parent()
      .find(".form__type__item--current")
      .html($(this).html());
    $(".form__type__list").removeClass("active");
  });

  // Add Document
  $(".form__add__item").on("click", function () {
    $(this).parent().find(".form__section__line").removeClass("hide");
    $(this).addClass("active");
  });

  $(".sectionDocument").on("click", function (event) {
    event.preventDefault();
    $(this).parent().parent().find(".form__document__item").removeClass("hide");
    $(this).addClass("active");
  });

  // Masks
  $(".phoneMask").mask("+7 (999) 999-9999");

  // Переключение языка
  $(".header__lang__link").on("click", function () {
    $(".header__lang__link").removeClass("active");
    $(this).addClass("active");
  });

  // Бриф анкета "Добавить ещё"
  $(".add__lisence").on("click", function () {
    $(this).parent().find(".form__section__line").removeClass("hide");
    $(this).hide();
  });
});
