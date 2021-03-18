// var vid = document.getElementById('video');
// var player = videojs(vid);

// videojs('video').videoJsResolutionSwitcher()

videojs('main_video',{
  "controls" : true,
  "autoplay" : false,
  "preload" : "metadata",
  // "responsive": true,
  // "width" : "100%",
  // "height" : "auto",
  "poster" : "../img/main-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function(){
  var player = this;
  player.updateSrc([
    {
      // src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      src: '../video/12.mp4',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    }
  ])
  player.on('resolutionchange', function(){
    player.play()
  })
});

videojs('left_video',{
  "controls" : true,
  "autoplay" : false,
  "preload" : "metadata",
  // "width" : "100%",
  // "height" : "auto",
  "poster" : "../img/left-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function(){
  var player = this;
  player.updateSrc([
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    }
  ])
  player.on('resolutionchange', function(){
    player.play()
  })
});

videojs('right_video',{
  "controls" : true,
  "autoplay" : false,
  "preload" : "metadata",
  // "width" : "100%",
  // "height" : "auto",
  "poster" : "../img/right-video-poster.jpg",
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'auto',
      dynamicLabel: true
    }
  }
}, function(){
  var player = this;
  player.updateSrc([
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: '4K',
      res: '4K'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'FHD',
      res: 'FHD'
    },
    {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
      label: 'HD',
      res: 'HD'
    }
  ])
  player.on('resolutionchange', function(){
    player.play()
  })
});
