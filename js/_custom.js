$(document).ready(function () {
  // History Show More
  $(".history__link").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".history__item").removeClass("hide");
  });
});
