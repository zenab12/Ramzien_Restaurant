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

  // $(".i-accept").on("click", function () {
  //   if (localStorage.noshow !== "1") {
  //     $("#cookie-notice").addClass("d-none");

  //     localStorage.noshow = "1";
  //   }
  // });

  // if (localStorage.noshow == "1") {
  //   $("#cookie-notice").addClass("d-none");
  // }

  let nextBtn = $("header .carousel-control-next");
  let prevBtn = $("header .carousel-control-prev");

  let image = $("header .carousel-item .image");
  let content = $("header .carousel-item .carousel-caption");
  let items = $("header .carousel-item");
  let activeElem = $("header .carousel-item.active");
  let nextElem = $(activeElem).next();
  let prevElem = $(nextElem).next();

  $(nextBtn)
    .find($("img"))
    .attr("src", `${$(nextElem).find($("img")).attr("src")}`);

  $(prevBtn)
    .find($("img"))
    .attr("src", `${$(prevElem).find($("img")).attr("src")}`);

  $(nextBtn).click(function () {
    image.each(function () {
      if ($(this).parent().hasClass("active")) {
        $(this).addClass("animate_animated animate__fadeOutRight");
        activeElem = $(this).parent();
      } else {
        $(this).removeClass("animate_animated animate__fadeOutRight");
        $(this).addClass("animate_animated animate__fadeInRight");
      }
      $(this).css("--animate-duration", "1.4s");
    });

    content.each(function () {
      if ($(this).parent().hasClass("active")) {
        $(this).addClass("animate_animated animate__fadeOutleft");
        console.log($(this).parent());
      } else {
        $(this).removeClass("animate_animated animate__fadeOutleft");
        $(this).addClass("animate_animated animate__fadeIleft");
      }
      $(this).css("--animate-duration", "1.4s");
    });
    items.each(function () {
      if ($(this).hasClass("active")) {
        $(this).addClass("animate_animated animate__fadeOuRight");
        $(this).css({ opacity: "0", visiblity: "hidden" });
        console.log($(this));
      } else {
        $(this).removeClass("animate_animated animate__fadeOutRight");
        $(this).addClass("animate_animated animate__fadeInRight");
        $(this).css({ opacity: "1", visiblity: "visible" });
      }
      $(this).css("--animate-duration", "1.4s");
    });

    if ($(nextElem).data("index") == "03") {
      nextElem = $(items[0]);
    } else {
      nextElem = $(nextElem).next();
    }

    $(nextBtn)
      .find($("img"))
      .attr("src", `${$(nextElem).find($("img")).attr("src")}`);

    if ($(nextElem).data("index") == "02") {
      prevElem = $(items[2]);
      console.log("01 is exist");
    } else if ($(prevElem).data("index") == "01") {
      prevElem = $(items[1]);
    } else {
      prevElem = $(nextElem).prev().prev();
    }

    $(prevBtn)
      .find($("img"))
      .attr("src", `${$(prevElem).find($("img")).attr("src")}`);
  });

  let newNext = $(activeElem).next().next();
  prevElem = $(newNext).prev();
  $(prevBtn).click(function () {
    image.each(function () {
      if ($(this).parent().hasClass("active")) {
        $(this).addClass("animate_animated animate__fadeOutRight");
      } else {
        $(this).removeClass("animate_animated animate__fadeOutRight");
        $(this).addClass("animate_animated animate__fadeInRight");
      }

      content.each(function () {
        if ($(this).parent().hasClass("active")) {
          $(this).addClass("animate_animated animate__fadeOutleft");
          $(this).css({ opacity: "0", visiblity: "hidden" });
        } else {
          $(this).removeClass("animate_animated animate__fadeOutleft");
          $(this).addClass("animate_animated animate__fadeIleft");
          $(this).css({ opacity: "0", visiblity: "hidden" });
        }
        $(this).css("--animate-duration", "1.4s");
      });

      items.each(function () {
        if ($(this).hasClass("active")) {
          $(this).addClass("animate_animated animate__fadeOutleft");
          $(this).css({ opacity: "0", visiblity: "hidden" });
        } else {
          $(this).removeClass("animate_animated animate__fadeOutleft");
          $(this).addClass("animate_animated animate__fadeIleft");
          $(this).css({ opacity: "1", visiblity: "visible" });
        }
        $(this).css("--animate-duration", "1.4s");
      });
    });

    // newNext = nextElem;
    if ($(newNext).data("index") == "03") {
      newNext = $(items[0]);
    } else {
      newNext = $(newNext).next();
    }
    console.log(newNext.data("index"));

    $(nextBtn)
      .find($("img"))
      .attr("src", `${$(newNext).find($("img")).attr("src")}`);
    if ($(newNext).data("index") == "03") {
      newNext = $(items[0]);
    } else {
      newNext = $(newNext).next();
    }

    if ($(nextElem).data("index") == "02") {
      prevElem = $(items[2]);
      console.log("01 is exist");
    } else if ($(prevElem).data("index") == "01") {
      prevElem = $(items[1]);
    } else {
      prevElem = $(nextElem).prev().prev();
    }
    $(prevBtn)
      .find($("img"))
      .attr("src", `${$(newNext).find($("img")).attr("src")}`);
  });

  // if ($(nextElem).data("index") == "02") {
  //   prevElem = $(items[2]);
  //   console.log("01 is exist");
  // } else if ($(prevElem).data("index") == "01") {
  //   prevElem = $(items[1]);
  // } else {
  //   prevElem = $(nextElem).prev().prev();
  // }
  // $(prevBtn)
  //   .find($("img"))
  //   .attr("src", `${$(prevElem).find($("img")).attr("src")}`);
});
