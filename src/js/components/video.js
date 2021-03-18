// var vid = document.getElementById('video');
// var player = videojs(vid);

// videojs('video').videoJsResolutionSwitcher()

videojs('main_video', {
  "controls": true,
  "autoplay": false,
  "preload": "metadata",
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
  player.updateSrc([
    {
      // src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      src: '../video/main-video.mp4',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: '../video/main-video.mp4',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: '../video/main-video.mp4',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    }
  ])
  player.on('resolutionchange', function () {
    player.play()
  })
});

videojs('left_video', {
  "controls": true,
  "autoplay": false,
  "preload": "metadata",
  // "width" : "100%",
  // "height" : "auto",
  "poster": "../img/left-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function () {
  var player = this;
  player.updateSrc([
    {
      src: '../video/left-video.mp4',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: '../video/left-video.mp4',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: '../video/left-video.mp4',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    }
  ])
  player.on('resolutionchange', function () {
    player.play()
  })
});

videojs('right_video', {
  "controls": true,
  "autoplay": false,
  "preload": "metadata",
  // "width" : "100%",
  // "height" : "auto",
  "poster": "../img/right-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function () {
  var player = this;
  player.updateSrc([
    {
      src: '../video/right-video.m4v',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: '../video/right-video.m4v',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: '../video/right-video.m4v',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
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
