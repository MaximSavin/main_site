import UIkit from 'uikit'
import $ from 'jquery'
import select2 from 'select2'

// UIkit.util.on(".nav-dots ul", "active", function () {
//   var count = $(".nav-dots .active").parent().attr("data-slide");
//   $(".sidebar-nav-counter b").text("0" + count);
// });

$("#sidebar-switch").click(function () {
  $(this).parents(".page-slider").toggleClass("sidebar-active");
  return false;
});

function productStyles(selection) {
  if (!selection.id) {
    return selection.text;
  }
  var thumb = $(selection.element).data("thumb");
  if (!thumb) {
    return selection.text;
  } else {
    var $selection = $(
      '<img src="' + thumb + '" alt=""><span class="img-changer-text">' + $(selection.element).text() + "</span>"
    );
    return $selection;
  }
}

// $(document).ready(function () {
//   $("select").select2({
//     templateSelection: productStyles,
//     minimumResultsForSearch: -1,
//   });
// });

/* roadmap slider - start */
(function () {
  const timeline = document.querySelector(".timeline ol"),
    elH = document.querySelectorAll(".timeline li > div"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    xScrolling = 1032, // step 344
    disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;
      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }
    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }
  // CHECK IF AN ELEMENT IS IN VIEWPORT
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }
  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function () {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = this.classList.contains("arrow__prev") ? "" : "-";
        if (counter === 0) {
          tl.style.transform = `translateX(-${scrolling}px)`;
        } else {
          const tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
          tl.style.transform = `translateX(${values}px)`;
        }
        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 600);
        counter++;
      });
    }
  }
  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    /*const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());*/
  }

  const slider = document.querySelector(".roadmap-content"); //.roadmap-content-ol
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if (e.which === 37 || e.which === 39) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }
})();
/* roadmap slider - end */

$(".hidedrop").click(function () {
  $(this).parents(".tag-container").find(".uk-button-drop").html($(this).html());
  /*setTimeout(function() {
      $('.uk-dropdown').removeClass('uk-open');
      //UIkit.dropdown('.uk-dropdown').hide();
  }, 300);*/
});

$(document).ready(function () {
  $(".rase-choose-item").on("click", function () {
    UIkit.modal
      .confirm("Вы действительно хотите играть за расу Near?", {
        labels: {
          cancel: "Отмена",
          ok: "Да",
        },
        //stack: true // выстроить окна каскадом поверх друг друга
      })
      .then(
        function () {
          console.log("Confirmed.");
        },
        function () {
          UIkit.modal("#choose-rase").show();
          console.log("Rejected.");
        }
      );
  });

  $(".nav-dot").click(function () {
    $(this).parents(".page-slider").removeClass("sidebar-active");
    UIkit.offcanvas(".uk-offcanvas").hide();
  });
});

$(window).on("load", function () {
  $("#preloader").delay(500).fadeOut("slow");
});
