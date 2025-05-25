document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 1.2,
    lerp: 0.1,
  });

  console.log("Locomotive Scroll Initialized!");
});













let i = document.querySelector('.ss');  
let j = document.querySelector('#home'); 
let g = document.querySelectorAll('.menu ul li a'); 
let bob = document.querySelector('#hero');
let r = document.querySelector('img');
let s = document.querySelector('h4');
let o= document.querySelector('.play');

j.addEventListener('click', (e) => {
  e.stopPropagation(); 

  gsap.to(i, { left: 0, duration: 1 });

  g.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,        
      left: 0,          
      duration: 0,       
      delay: index * 0.2,
    });
  });
});

window.addEventListener('click', () => {
  gsap.to(i, { left: '-9999px', duration: 1 });

  g.forEach((item) => {
    gsap.to(item, { opacity: 0, left: '-9999px', duration: 0 });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('#hero');
    if (!hero) {
        return;
    }

    const video = document.createElement('video');
    const videoSource = 'video_20250307_233856_edit.mp4';
    
    video.id = 'backgroundVideo';
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.src = videoSource;
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';

    function startVideo() {
        setTimeout(() => {
            hero.appendChild(video);
            
           
            gsap.to([i, s, j], { opacity: 0, duration: 1 });

            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
                hero.style.backgroundImage = 'url("spiderman-in-avengers-infinity-war-new-8k-poster.jpg")';
                video.remove();

                
                gsap.to([i, s, j ], { opacity: 1, duration: 1 });
            }, 25000);
        }, 1000);
    }
  
    startVideo();
  
    video.onerror = function () {
        hero.style.backgroundImage = 'url("spiderman-in-avengers-infinity-war-new-8k-poster.jpg")';
    };

    function stopmove() {
        window.addEventListener('click', function() {
            video.pause();
            video.currentTime = 0;
            hero.style.backgroundImage = 'url("spiderman-in-avengers-infinity-war-new-8k-poster.jpg")';
            video.remove();

           
            gsap.to([i, s, j], { opacity: 1, duration: 1 });
        });
    }

    stopmove();
});


