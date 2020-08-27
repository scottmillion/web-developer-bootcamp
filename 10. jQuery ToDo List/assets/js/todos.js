$("ul").on("click", "li", function () {
  $(this).toggleClass("crossOff");
});

$("ul").on("click", "span", function (e) {
  e.stopPropagation();
  $(this)
    .parent()
    .fadeOut(250, "swing", function () {
      $(this).remove();
    });
});

$("ul").on("mouseover", "li", function () {
  $(this).children().addClass("span-show");
});

$("ul").on("mouseout", "li", function () {
  $(this).children().removeClass("span-show");
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>"
    );
    $(this).val("");
  }
});

$(".fa-plus").on("click", function () {
  $("ul").append(
    "<li><span><i class='fa fa-trash'></i></span> " +
      $('input[type="text"]').val() +
      "</li>"
  );
  $('input[type="text"]').val("");
});
