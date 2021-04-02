videojs('main_video', {
  "controls": true,
  "autoplay": false,
  "preload": "none",
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
    ym(74310484, 'reachGoal', 'video1')
    return true
  })
  player.updateSrc([
    {
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
    ym(74310484, 'reachGoal', 'video2')
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
    ym(74310484, 'reachGoal', 'video3')
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
