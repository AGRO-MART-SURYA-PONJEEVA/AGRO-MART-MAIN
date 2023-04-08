"use strict"
  var video = document.getElementById("myVideo");
  var sources = [
    "/computer/video/1.mp4",
    "/computer/video/2.mp4",
  ];
  var index = 0;
  video.addEventListener('ended', function() {
    index = (index + 1) % sources.length;
    video.src = sources[index];
    video.play();
  });

