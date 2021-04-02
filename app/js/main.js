const firebaseConfig = {
  apiKey: "AIzaSyAWjhrOA-GS6LPx8luMcE8KCbH7aYCr4oY",
  authDomain: "broadcast-1701e.firebaseapp.com",
  databaseURL: "https://broadcast-1701e-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "broadcast-1701e",
  storageBucket: "broadcast-1701e.appspot.com",
  messagingSenderId: "844755586030",
  appId: "1:844755586030:web:c41bc1585f41cf20549cff"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
const form = document.querySelector('.form');
const formSection = document.querySelector('.form-section');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');

const id = getId();

function getId() {
  let id;
  if (localStorage.getItem('id') === null) {
    id = generateRandomString();
    formSection.style.display = 'block';
    document.body.classList.add('overflow');
  } else {
    id = localStorage.getItem('id').replace(/"/g, ``)
    document.body.classList.remove('overflow');
    formSection.style.display = 'none';
    setTimeout(() => {
      reEnter()
    }, 0)
  }
  return id;
}

form.addEventListener('submit', (e) => submitForm(e))

function reEnter() {

  function writeUser(id, time) {
    let date = new Date().toString();
    const updates = {};
    updates['users/' + id + '/' + '/reEnterMs'] = time;
    updates['users/' + id + '/' + '/reEnterDate'] = date;
    firebase.database().ref().update(updates, (error) => {
      if (error) {
        console.log(error)
      } else {
      }
    })
  }

  writeUser(id, Date.now())
}

function submitForm(e) {
  e.preventDefault();
  document.body.classList.remove('overflow');
  window.scrollTo(pageXOffset, 0);

  const newUser = {
    id: id,
    loginMs: Date.now(),
    loginDate: new Date().toString(),
    name: inputName.value,
    email: inputEmail.value,
  }

  function writeUser(id, user) {
    const updates = {};
    updates['users/' + user.id] = user;
    firebase.database().ref().update(updates, (error) => {
      if (error) {
        console.log(error)
      } else {
        localStorage.setItem('id', JSON.stringify(id))
        document.querySelector('.form-section').style.display = 'none';
      }
    })
  }

  writeUser(newUser.id, newUser)
}

firebase.auth().signInAnonymously()
  .then(() => {
    console.log('signed in')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

function closeTime(id, time) {
  let date = new Date().toString();
  const updates = {};
  updates['users/' + id + '/' + '/closeMs'] = time;
  updates['users/' + id + '/' + '/closeDate'] = date;
  return firebase.database().ref().update(updates)
}

function hideTime(id, time) {
  let date = new Date().toString();
  const updates = {};
  updates['users/' + id + '/' + '/hideMs'] = time;
  updates['users/' + id + '/' + '/hideDate'] = date;
  return firebase.database().ref().update(updates)
}

// window.addEventListener('unload', function () {
//   closeTime(id, Date.now())
// })


// Set the name of the hidden property and the change event for visibility
let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}


function handleVisibilityChange() {
  if (document[hidden]) {
    closeTime(id, Date.now())
  } else {
    reEnter()
  }
}

if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

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
  // pagination: {
  //   el: ".gallery-slider__pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.gallery-slider__next',
    prevEl: '.gallery-slider__prev',
  },
  keyboard: {
    enabled: true,
  }
});






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
      // if (mySwiper1.autoplay.running) {
        mySwiper1.autoplay.stop();
        mySwiper2.autoplay.stop();
        mySwiper3.autoplay.stop();
        mySwiper4.autoplay.stop();
      // }
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

// var initPhotoSwipeFromDOM = function (gallerySelector) {
//
//   var parseThumbnailElements = function (el) {
//     var thumbElements = el.childNodes,
//       numNodes = thumbElements.length,
//       items = [],
//       figureEl,
//       linkEl,
//       size,
//       item;
//
//     for (var i = 0; i < numNodes; i++) {
//       figureEl = thumbElements[i]; // <figure> element
//
//       // include only element nodes
//       if (figureEl.nodeType !== 1) {
//         continue;
//       }
//
//       linkEl = figureEl.children[0]; // <a> element
//
//       size = linkEl.getAttribute("data-size").split("x");
//
//       // create slide object
//       item = {
//         src: linkEl.getAttribute("href"),
//         w: parseInt(size[0], 10),
//         h: parseInt(size[1], 10)
//       };
//
//       if (figureEl.children.length > 1) {
//         // <figcaption> content
//         item.title = figureEl.children[1].innerHTML;
//       }
//
//       if (linkEl.children.length > 0) {
//         // <img> thumbnail element, retrieving thumbnail url
//         item.msrc = linkEl.children[0].getAttribute("src");
//       }
//
//       item.el = figureEl; // save link to element for getThumbBoundsFn
//       items.push(item);
//     }
//
//     return items;
//   };
//
//   // find nearest parent element
//   var closest = function closest(el, fn) {
//     return el && (fn(el) ? el : closest(el.parentNode, fn));
//   };
//
//   // triggers when user clicks on thumbnail
//   var onThumbnailsClick = function (e) {
//     e = e || window.event;
//     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//
//     var eTarget = e.target || e.srcElement;
//
//     // find root element of slide
//     var clickedListItem = closest(eTarget, function (el) {
//       return el.tagName && el.tagName.toUpperCase() === "LI";
//     });
//
//     if (!clickedListItem) {
//       return;
//     }
//
//     // find index of clicked item by looping through all child nodes
//     // alternatively, you may define index via data- attribute
//     var clickedGallery = clickedListItem.parentNode,
//       childNodes = clickedListItem.parentNode.childNodes,
//       numChildNodes = childNodes.length,
//       nodeIndex = 0,
//       index;
//
//     for (var i = 0; i < numChildNodes; i++) {
//       if (childNodes[i].nodeType !== 1) {
//         continue;
//       }
//
//       if (childNodes[i] === clickedListItem) {
//         index = nodeIndex;
//         break;
//       }
//       nodeIndex++;
//     }
//
//     if (index >= 0) {
//       // open PhotoSwipe if valid index found
//       openPhotoSwipe(index, clickedGallery);
//     }
//     return false;
//   };
//
//   // parse picture index and gallery index from URL (#&pid=1&gid=2)
//   var photoswipeParseHash = function () {
//     var hash = window.location.hash.substring(1),
//       params = {};
//
//     if (hash.length < 5) {
//       return params;
//     }
//
//     var vars = hash.split("&");
//     for (var i = 0; i < vars.length; i++) {
//       if (!vars[i]) {
//         continue;
//       }
//       var pair = vars[i].split("=");
//       if (pair.length < 2) {
//         continue;
//       }
//       params[pair[0]] = pair[1];
//     }
//
//     if (params.gid) {
//       params.gid = parseInt(params.gid, 10);
//     }
//
//     return params;
//   };
//
//   var openPhotoSwipe = function (
//     index,
//     galleryElement,
//     disableAnimation,
//     fromURL
//   ) {
//     var pswpElement = document.querySelectorAll(".pswp2")[0],
//       gallery2,
//       options,
//       items;
//
//     items = parseThumbnailElements(galleryElement);
//
//     // #################### 3/4 define photoswipe options (if needed) ####################
//     // https://photoswipe.com/documentation/options.html //
//     options = {
//       /* "showHideOpacity" uncomment this If dimensions of your small thumbnail don't match dimensions of large image */
//       //showHideOpacity:true,
//
//       // Buttons/elements
//       closeEl: true,
//       captionEl: true,
//       fullscreenEl: true,
//       zoomEl: true,
//       shareEl: false,
//       counterEl: false,
//       arrowEl: true,
//       preloaderEl: true,
//       // define gallery index (for URL)
//       galleryUID: galleryElement.getAttribute("data-pswp-uid"),
//       getThumbBoundsFn: function (index) {
//         // See Options -> getThumbBoundsFn section of documentation for more info
//         var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
//           pageYScroll =
//             window.pageYOffset || document.documentElement.scrollTop,
//           rect = thumbnail.getBoundingClientRect();
//
//         return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
//       }
//     };
//
//     // PhotoSwipe opened from URL
//     if (fromURL) {
//       if (options.galleryPIDs) {
//         // parse real index when custom PIDs are used
//         // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
//         for (var j = 0; j < items.length; j++) {
//           if (items[j].pid == index) {
//             options.index = j;
//             break;
//           }
//         }
//       } else {
//         // in URL indexes start from 1
//         options.index = parseInt(index, 10) - 1;
//       }
//     } else {
//       options.index = parseInt(index, 10);
//     }
//
//     // exit if index not found
//     if (isNaN(options.index)) {
//       return;
//     }
//
//     if (disableAnimation) {
//       options.showAnimationDuration = 0;
//     }
//
//     // Pass data to PhotoSwipe and initialize it
//     gallery2 = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//     gallery2.init();
//
//     /* ########### PART 4 - EXTRA CODE  ########### */
//     /* EXTRA CODE (NOT FROM photoswipe CORE) -
//     1/2. UPDATE SWIPER POSITION TO THE CURRENT ZOOM_IN IMAGE (BETTER UI) */
//     // photoswipe event: Gallery unbinds events
//     // (triggers before closing animation)
//     gallery2.listen("unbindEvents", function () {
//       // The index of the current photoswipe slide
//       var getCurrentIndex = gallery2.getCurrentIndex();
//       // Update position of the slider
//       mySwiper2.slideTo(getCurrentIndex, 0, false);
//       // 2/2. Start swiper autoplay (on close - if swiper autoplay is true)
//       mySwiper2.autoplay.start();
//     });
//     // 2/2. Extra Code (Not from photoswipe) - swiper autoplay stop when image in zoom mode (When lightbox is open) */
//     gallery2.listen('initialZoomIn', function () {
//       if (mySwiper2.autoplay.running) {
//         mySwiper2.autoplay.stop();
//       }
//     });
//   };
//
//   // loop through all gallery elements and bind events
//   var galleryElements = document.querySelectorAll(gallerySelector);
//
//   for (var i = 0, l = galleryElements.length; i < l; i++) {
//     galleryElements[i].setAttribute("data-pswp-uid", i + 1);
//     galleryElements[i].onclick = onThumbnailsClick;
//   }
//
//   // Parse URL and open gallery if it contains #&pid=3&gid=1
//   var hashData = photoswipeParseHash();
//   if (hashData.pid && hashData.gid) {
//     openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
//   }
// };
//
//
// // init PhotoSwipe
// var initPhotoSwipeFromDOM = function (gallerySelector) {
//   var parseThumbnailElements = function (el) {
//     var thumbElements = el.childNodes,
//       numNodes = thumbElements.length,
//       items = [],
//       figureEl,
//       linkEl,
//       size,
//       item;
//
//     for (var i = 0; i < numNodes; i++) {
//       figureEl = thumbElements[i];
//
//       if (figureEl.nodeType !== 1) {
//         continue;
//       }
//
//       linkEl = figureEl.children[0];
//
//       size = linkEl.getAttribute("data-size").split("x");
//
//       item = {
//         src: linkEl.getAttribute("href"),
//         w: parseInt(size[0], 10),
//         h: parseInt(size[1], 10)
//       };
//
//       if (figureEl.children.length > 1) {
//         item.title = figureEl.children[1].innerHTML;
//       }
//
//       if (linkEl.children.length > 0) {
//         item.msrc = linkEl.children[0].getAttribute("src");
//       }
//
//       item.el = figureEl;
//       items.push(item);
//     }
//
//     return items;
//   };
//
//   var closest = function closest(el, fn) {
//     return el && (fn(el) ? el : closest(el.parentNode, fn));
//   };
//
//   var onThumbnailsClick = function (e) {
//     e = e || window.event;
//     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//
//     var eTarget = e.target || e.srcElement;
//
//     var clickedListItem = closest(eTarget, function (el) {
//       return el.tagName && el.tagName.toUpperCase() === "LI";
//     });
//
//     if (!clickedListItem) {
//       return;
//     }
//
//     var clickedGallery = clickedListItem.parentNode,
//       childNodes = clickedListItem.parentNode.childNodes,
//       numChildNodes = childNodes.length,
//       nodeIndex = 0,
//       index;
//
//     for (var i = 0; i < numChildNodes; i++) {
//       if (childNodes[i].nodeType !== 1) {
//         continue;
//       }
//
//       if (childNodes[i] === clickedListItem) {
//         index = nodeIndex;
//         break;
//       }
//       nodeIndex++;
//     }
//
//     if (index >= 0) {
//       openPhotoSwipe(index, clickedGallery);
//     }
//     return false;
//   };
//
//   var photoswipeParseHash = function () {
//     var hash = window.location.hash.substring(1),
//       params = {};
//
//     if (hash.length < 5) {
//       return params;
//     }
//
//     var vars = hash.split("&");
//     for (var i = 0; i < vars.length; i++) {
//       if (!vars[i]) {
//         continue;
//       }
//       var pair = vars[i].split("=");
//       if (pair.length < 2) {
//         continue;
//       }
//       params[pair[0]] = pair[1];
//     }
//
//     if (params.gid) {
//       params.gid = parseInt(params.gid, 10);
//     }
//
//     return params;
//   };
//
//   var openPhotoSwipe = function (
//     index,
//     galleryElement,
//     disableAnimation,
//     fromURL
//   ) {
//     var pswpElement = document.querySelectorAll(".pswp3")[0],
//       gallery3,
//       options,
//       items;
//
//     items = parseThumbnailElements(galleryElement);
//     options = {
//       closeEl: true,
//       captionEl: true,
//       fullscreenEl: true,
//       zoomEl: true,
//       shareEl: false,
//       counterEl: false,
//       arrowEl: true,
//       preloaderEl: true,
//       galleryUID: galleryElement.getAttribute("data-pswp-uid"),
//       getThumbBoundsFn: function (index) {
//         var thumbnail = items[index].el.getElementsByTagName("img")[0],
//           pageYScroll =
//             window.pageYOffset || document.documentElement.scrollTop,
//           rect = thumbnail.getBoundingClientRect();
//
//         return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
//       }
//     };
//
//     if (fromURL) {
//       if (options.galleryPIDs) {
//         for (var j = 0; j < items.length; j++) {
//           if (items[j].pid == index) {
//             options.index = j;
//             break;
//           }
//         }
//       } else {
//         options.index = parseInt(index, 10) - 1;
//       }
//     } else {
//       options.index = parseInt(index, 10);
//     }
//
//     if (isNaN(options.index)) {
//       return;
//     }
//
//     if (disableAnimation) {
//       options.showAnimationDuration = 0;
//     }
//
//     gallery3 = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//     gallery3.init();
//
//     gallery3.listen("unbindEvents", function () {
//       var getCurrentIndex = gallery3.getCurrentIndex();
//       mySwiper3.slideTo(getCurrentIndex, 0, false);
//       mySwiper3.autoplay.start();
//     });
//     gallery3.listen('initialZoomIn', function () {
//       if (mySwiper3.autoplay.running) {
//         mySwiper3.autoplay.stop();
//       }
//     });
//   };
//
//   var galleryElements = document.querySelectorAll(gallerySelector);
//
//   for (var i = 0, l = galleryElements.length; i < l; i++) {
//     galleryElements[i].setAttribute("data-pswp-uid", i + 1);
//     galleryElements[i].onclick = onThumbnailsClick;
//   }
//
//   var hashData = photoswipeParseHash();
//   if (hashData.pid && hashData.gid) {
//     openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
//   }
// };
//
//
//
// var initPhotoSwipeFromDOM = function (gallerySelector) {
//   var parseThumbnailElements = function (el) {
//     var thumbElements = el.childNodes,
//       numNodes = thumbElements.length,
//       items = [],
//       figureEl,
//       linkEl,
//       size,
//       item;
//
//     for (var i = 0; i < numNodes; i++) {
//       figureEl = thumbElements[i];
//
//       if (figureEl.nodeType !== 1) {
//         continue;
//       }
//
//       linkEl = figureEl.children[0];
//
//       size = linkEl.getAttribute("data-size").split("x");
//
//       item = {
//         src: linkEl.getAttribute("href"),
//         w: parseInt(size[0], 10),
//         h: parseInt(size[1], 10)
//       };
//
//       if (figureEl.children.length > 1) {
//         item.title = figureEl.children[1].innerHTML;
//       }
//
//       if (linkEl.children.length > 0) {
//         item.msrc = linkEl.children[0].getAttribute("src");
//       }
//
//       item.el = figureEl;
//       items.push(item);
//     }
//
//     return items;
//   };
//
//   var closest = function closest(el, fn) {
//     return el && (fn(el) ? el : closest(el.parentNode, fn));
//   };
//
//   var onThumbnailsClick = function (e) {
//     e = e || window.event;
//     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//
//     var eTarget = e.target || e.srcElement;
//
//     var clickedListItem = closest(eTarget, function (el) {
//       return el.tagName && el.tagName.toUpperCase() === "LI";
//     });
//
//     if (!clickedListItem) {
//       return;
//     }
//
//     var clickedGallery = clickedListItem.parentNode,
//       childNodes = clickedListItem.parentNode.childNodes,
//       numChildNodes = childNodes.length,
//       nodeIndex = 0,
//       index;
//
//     for (var i = 0; i < numChildNodes; i++) {
//       if (childNodes[i].nodeType !== 1) {
//         continue;
//       }
//
//       if (childNodes[i] === clickedListItem) {
//         index = nodeIndex;
//         break;
//       }
//       nodeIndex++;
//     }
//
//     if (index >= 0) {
//       openPhotoSwipe(index, clickedGallery);
//     }
//     return false;
//   };
//
//   var photoswipeParseHash = function () {
//     var hash = window.location.hash.substring(1),
//       params = {};
//
//     if (hash.length < 5) {
//       return params;
//     }
//
//     var vars = hash.split("&");
//     for (var i = 0; i < vars.length; i++) {
//       if (!vars[i]) {
//         continue;
//       }
//       var pair = vars[i].split("=");
//       if (pair.length < 2) {
//         continue;
//       }
//       params[pair[0]] = pair[1];
//     }
//
//     if (params.gid) {
//       params.gid = parseInt(params.gid, 10);
//     }
//
//     return params;
//   };
//
//   var openPhotoSwipe = function (
//     index,
//     galleryElement,
//     disableAnimation,
//     fromURL
//   ) {
//     var pswpElement = document.querySelectorAll(".pswp4")[0],
//       gallery4,
//       options,
//       items;
//
//     items = parseThumbnailElements(galleryElement);
//     options = {
//       closeEl: true,
//       captionEl: true,
//       fullscreenEl: true,
//       zoomEl: true,
//       shareEl: false,
//       counterEl: false,
//       arrowEl: true,
//       preloaderEl: true,
//       galleryUID: galleryElement.getAttribute("data-pswp-uid"),
//       getThumbBoundsFn: function (index) {
//         var thumbnail = items[index].el.getElementsByTagName("img")[0],
//           pageYScroll =
//             window.pageYOffset || document.documentElement.scrollTop,
//           rect = thumbnail.getBoundingClientRect();
//
//         return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
//       }
//     };
//
//     if (fromURL) {
//       if (options.galleryPIDs) {
//         for (var j = 0; j < items.length; j++) {
//           if (items[j].pid == index) {
//             options.index = j;
//             break;
//           }
//         }
//       } else {
//         options.index = parseInt(index, 10) - 1;
//       }
//     } else {
//       options.index = parseInt(index, 10);
//     }
//
//     if (isNaN(options.index)) {
//       return;
//     }
//
//     if (disableAnimation) {
//       options.showAnimationDuration = 0;
//     }
//
//     gallery4 = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//     gallery4.init();
//
//     gallery4.listen("unbindEvents", function () {
//       var getCurrentIndex = gallery4.getCurrentIndex();
//       mySwiper4.slideTo(getCurrentIndex, 0, false);
//       mySwiper4.autoplay.start();
//     });
//     gallery4.listen('initialZoomIn', function () {
//       if (mySwiper4.autoplay.running) {
//         mySwiper4.autoplay.stop();
//       }
//     });
//   };
//
//   var galleryElements = document.querySelectorAll(gallerySelector);
//
//   for (var i = 0, l = galleryElements.length; i < l; i++) {
//     galleryElements[i].setAttribute("data-pswp-uid", i + 1);
//     galleryElements[i].onclick = onThumbnailsClick;
//   }
//
//   var hashData = photoswipeParseHash();
//   if (hashData.pid && hashData.gid) {
//     openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
//   }
// };


// execute above function
initPhotoSwipeFromDOM(".my-gallery");
// initPhotoSwipeFromDOM(".my-gallery2");
// initPhotoSwipeFromDOM(".my-gallery3");
// initPhotoSwipeFromDOM(".my-gallery4");


videojs('main_video', {
  "controls": true,
  "autoplay": false,
  "preload": "none",
  // "responsive": true,
  // "width" : "100%",
  // "height" : "auto",
  "poster": "../img/main-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function () {
  var player = this;
  player.on('play', function () {
    ym(74310484,'reachGoal','video1')
    return true
  })
  player.updateSrc([
    {
      // src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      src: '../video/SD/main-video.m4v',
      type: 'video/mp4',
      label: 'SD',
      res: 'SD'
    },
    {
      src: '../video/HD/main-video.m4v',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    },
    {
      src: '../video/FHD/main-video.m4v',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    }
  ])
  player.on('resolutionchange', function () {
    player.play()
  })
});

videojs('left_video', {
  "controls": true,
  "autoplay": false,
  "preload": "none",
  "width": "100%",
  "height": "auto",
  "poster": "../img/left-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function () {
  var player = this;
  player.on('play', function () {
    ym(74310484,'reachGoal','video2')
    return true
  })
  player.updateSrc([
    {
      src: '../video/SD/left-video.m4v',
      type: 'video/mp4',
      label: 'SD',
      res: 'SD'
    },
    {
      src: '../video/HD/left-video.m4v',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    },
    {
      src: '../video/FHD/left-video.m4v',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    }
  ])
  player.on('resolutionchange', function () {
    player.play()
  })
});

videojs('right_video', {
  "controls": true,
  "autoplay": false,
  "preload": "none",
  "width": "100%",
  "height": "auto",
  "poster": "../img/right-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function () {
  var player = this;
  player.on('play', function () {
    ym(74310484,'reachGoal','video3')
    return true
  })
  player.updateSrc([
    {
      src: '../video/SD/right-video.m4v',
      type: 'video/mp4',
      label: 'SD',
      res: 'SD'
    },
    {
      src: '../video/HD/right-video.m4v',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    },
    {
      src: '../video/FHD/right-video.m4v',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    }
  ])
  player.on('resolutionchange', function () {
    player.play()
  })
});


var medias = Array.prototype.slice.apply(document.querySelectorAll('audio,video'));
medias.forEach(function (media) {
  media.addEventListener('play', function (event) {
    medias.forEach(function (media) {
      if (event.target != media) media.pause();
    });
  });
});


//# sourceMappingURL=main.js.map
