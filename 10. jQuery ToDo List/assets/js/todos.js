$("li").on("click", function () {
  $(this).toggleClass("crossOff");
});

$("li span").on("click", function () {
  console.log("working");
  $(this)
    .parent()
    .fadeOut(300, "swing", function () {
      $(this).remove();
    });
});
