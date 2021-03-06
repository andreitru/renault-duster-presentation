var mySwiper1 = new Swiper(".swiper-container1", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  }
});

mySwiper1.on('click', function() {
  ym(74310484,'reachGoal','Картинка 1')
  return true
})

var mySwiper2 = new Swiper(".swiper-container2", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  }
});

mySwiper2.on('click', function() {
  ym(74310484,'reachGoal','Картинка 2')
  return true
})

var mySwiper3 = new Swiper(".swiper-container3", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  }
});

mySwiper3.on('click', function() {
  ym(74310484,'reachGoal','Картинка 3')
  return true
})

var mySwiper4 = new Swiper(".swiper-container4", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.gallery-slider__next',
    prevEl: '.gallery-slider__prev',
  },
  keyboard: {
    enabled: true,
  }
});

mySwiper4.on('click', function() {
  ym(74310484,'reachGoal','Галерея')
  return true
})

var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;

    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i];

      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0];

      size = linkEl.getAttribute("data-size").split("x");

      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        item.msrc = linkEl.children[0].getAttribute("src");
      }

      item.el = figureEl;
      items.push(item);
    }

    return items;
  };

  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    var eTarget = e.target || e.srcElement;

    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "LI";
    });

    if (!clickedListItem) {
      return;
    }

    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);
    options = {
      closeEl: true,
      captionEl: true,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: false,
      counterEl: false,
      arrowEl: true,
      preloaderEl: true,
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0],
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
      }
    };

    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    gallery.listen("unbindEvents", function () {
      var getCurrentIndex = gallery.getCurrentIndex();
      mySwiper1.slideTo(getCurrentIndex, 0, false);
      mySwiper2.slideTo(getCurrentIndex, 0, false);
      mySwiper3.slideTo(getCurrentIndex, 0, false);
      mySwiper4.slideTo(getCurrentIndex, 0, false);
      mySwiper1.autoplay.start();
      mySwiper2.autoplay.start();
      mySwiper3.autoplay.start();
      mySwiper4.autoplay.start();
    });
    gallery.listen('initialZoomIn', function () {
      mySwiper1.autoplay.stop();
      mySwiper2.autoplay.stop();
      mySwiper3.autoplay.stop();
      mySwiper4.autoplay.stop();
    });
  };

  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

initPhotoSwipeFromDOM(".my-gallery");
