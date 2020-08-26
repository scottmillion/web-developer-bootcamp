$(".flexin").on("click", function () {
  cssToRun = {
    transition: "ease-in 1000ms",
    background: "red",
  };

  $(".container").css(cssToRun);

  $(".container").toggleClass("animate");
  // $(".container").css("transition", "ease-in 1000ms");
  // $(".container").css("background", "red");

  /*
  //also has a .fadeIn funtion
  $(".box").fadeOut(1000, function () {
    console.log("finished inside");
    $(this).remove(); // removes the hidden divs
    // these won't trigger until animation has finished
  });
  console.log("finished outside");
  // this will trigger before animation has finished

  */

  //This won't run correctly unless we comment out the fadeOut above because "Remove" takes away the Divs.

  // $(".box").fadeToggle(1000, function () {
  //   console.log("fired");
  // });

  $(".box").slideToggle();
});
