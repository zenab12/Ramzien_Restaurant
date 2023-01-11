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
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  $(".i-accept").on("click", function () {
    if (localStorage.noshow !== "1") {
      $("#cookie-notice").addClass("d-none");

      localStorage.noshow = "1";
    }
  });

  if (localStorage.noshow == "1") {
    $("#cookie-notice").addClass("d-none");
  }
});
