// @ts-ignore

$(function () {
  // @ts-ignore
  $("#teamCarousel .carousel-item").each(function () {
    var minPerSlide = 2;
    // @ts-ignore
    var next = $(this).next();
    if (!next.length) {
      // @ts-ignore
      next = $(this).siblings(":first");
    }
    // @ts-ignore
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        // @ts-ignore
        next = $(this).siblings(":first");
      }
      // @ts-ignore
      next.children(":first-child").clone().appendTo($(this));
    }
    console.log($(this));
  });

  $(window).on("load", function () {
    $("#loader-wrapper").fadeOut(700);
  });
  // let pop = $(".pop");
  // pop.click(function () {
  //   $(this).popover();
  //   console.log($(this));
  // });
});
