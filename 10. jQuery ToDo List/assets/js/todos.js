// $("li").on("click", function () {
//   $(this).toggleClass("crossOff");
// });

$("ul").on("click", "li", function () {
  $(this).toggleClass("crossOff");
});

$("ul").on("click", "span", function (e) {
  e.stopPropagation(); // prevents "li" strikethrough parent event from happening
  // Great example of "Event Bubbling":
  // The inner-most event (li span) fires first, then the parent (li), parent of parent (ul), etc.
  // If you want to stop event bubbling, pass in the event "e" and then e.stopPropagation();
  $(this)
    .parent()
    .fadeOut(300, "swing", function () {
      $(this).remove();
    });
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
    $(this).val(""); // empties input field after pressing enter
  }
});
