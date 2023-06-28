document.addEventListener('DOMContentLoaded', function() {
    var video = document.getAnimations('myVideo');

    if (performance.navigation.type === 1) {
        video.play
    }

    video.addEventListener('canplay', function() {
        video.play();
    });
});

var audio = document.getElementById('myAudio');

audio.volume = 0.03;