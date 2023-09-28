$(document).ready(function () {
  $(".back-image").hide();
  $(".front-image").mouseenter(function () {
    $(".front-image").hide();
    $(".back-image").show();
  });

  $(".back-image").mouseleave(function () {
    $(".back-image").hide();

    $(".front-image").show();
  });
});
