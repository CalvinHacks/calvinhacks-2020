// const animeObject = anime({
//   targets: '.social',
//   translateX: (elm, index, t) => index * 50,
//   scale: 2,
//   easing: 'easeInOutSine',
//   delay: (elm, index, t) => index * 20,
//   duration: 1200,
//   loop: true,
//   direction: 'alternate',
// });

// const boxesAnimation = window.anime({
//   targets: '.js-box',
//   translateY: [150, 50],
//   backgroundColor: (el, i, t) => {
//     const r = 58 + (i * 12);
//     const g = 35 + (i * 12);
//     const b = 220;
//     const color = `rgb(${r}, ${g}, ${b})`;
//     return color;
//   },
//   duration: 900,
//   easing: 'easeOutElastic',
//   elasticity: 500,
//   delay: (el, i, t) => i * 20,
//   loop: true,
//   direction: 'alternate',
// });

var bodyElement = document.body;
var logoElement = document.getElementById("logo");
var aboutElement = document.getElementById("about");
var detailsElement = document.getElementById("details");
var faqElement = document.getElementById("faq");
var scheduleElement = document.getElementById("schedule");

// var logoWatcher = scrollMonitor.create( logoElement, {top: 20, bottom: 300} );
// var aboutWatcher = scrollMonitor.create( aboutElement, {top: -200, bottom: 300} );
// var detailsWatcher = scrollMonitor.create( detailsElement, {top: -200, bottom: 50} );
// var faqWatcher = scrollMonitor.create( faqElement, {top: -200, bottom: 50} );
// var scheduleWatcher = scrollMonitor.create( scheduleElement, {top: -200, bottom: 50} );

var logoWatcher = scrollMonitor.create( logoElement);
var aboutWatcher = scrollMonitor.create( aboutElement);
var detailsWatcher = scrollMonitor.create( detailsElement);
var faqWatcher = scrollMonitor.create( faqElement);
var scheduleWatcher = scrollMonitor.create( scheduleElement);

logoWatcher.enterViewport(function() {
  bodyElement.classList.add("first-color");
});

logoWatcher.exitViewport(function() {
  bodyElement.classList.remove("first-color");
});

aboutWatcher.enterViewport(function() {
  bodyElement.classList.add("first-color");
});

aboutWatcher.exitViewport(function() {
  bodyElement.classList.remove("first-color");
});

detailsWatcher.enterViewport(function() {
  bodyElement.classList.add("second-color");
});

detailsWatcher.exitViewport(function() {
  bodyElement.classList.remove("second-color");
});


faqWatcher.enterViewport(function() {
  bodyElement.classList.add("third-color");
});

faqWatcher.exitViewport(function() {
  bodyElement.classList.remove("third-color");
});


scheduleWatcher.enterViewport(function() {
  bodyElement.classList.add("third-color");
});


////////////////////////////////

const DOM = {};
DOM.svg = document.querySelector('.morph');
DOM.shapeEl = DOM.svg.querySelector('polygon');
DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
DOM.footer = document.querySelector('.content--related');
const contentElemsTotal = DOM.contentElems.length;
const shapes = [
  {
    points: '700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6',
    scaleX: .8,
    scaleY: .9,
    rotate: 0,
    tx: 0,
    ty: 0,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  },
  {
    points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
    scaleX: .7,
    scaleY: .7,
    rotate: 90,
    tx: -100,
    ty: 100,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  },
  {
    points: '890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.3',
    scaleX: 1,
    scaleY: 1,
    rotate: -45,
    tx: 0,
    ty: -50,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  },
  {
    points: '983.4,101.6 779,385 983.4,668.4 416.6,668.4 611,388 416.6,101.9',
    scaleX: 1,
    scaleY: 1,
    rotate: 145,
    tx: 100,
    ty: -50,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  },
  {
    points: '983.4,101.6 1255,385 983.4,668.4 416.6,668.4 157,368 416.6,101.9',
    scaleX: .7,
    scaleY: .7,
    rotate: -70,
    tx: -50,
    ty: 50,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  },
  {
    points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
    scaleX: 1.2,
    scaleY: 1.2,
    rotate: 20,
    tx: 0,
    ty: 0,
    fill: {
      color: 'none',
      duration: 500,
      easing: 'linear'
    },
    animation: {
      points: {
        duration: 500,
        easing: 'easeOutExpo'
      },
      svg: {
        duration: 1500,
        easing: 'easeOutElastic'
      }
    }
  }
];

let step;

const createScrollWatchers = function() {
  DOM.contentElems.forEach((el,pos) => {
    const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
    pos = pos ? pos : contentElemsTotal;
    const watcher = scrollMonitor.create(scrollElemToWatch,-350);

    watcher.enterViewport(function() {
      step = pos;
      anime.remove(DOM.shapeEl);
      anime({
        targets: DOM.shapeEl,
        duration: shapes[pos].animation.points.duration,
        easing: shapes[pos].animation.points.easing,
        elasticity: shapes[pos].animation.points.elasticity || 0,
        points: shapes[pos].points,
        fill: {
          value: shapes[pos].fill.color,
          duration: shapes[pos].fill.duration,
          easing: shapes[pos].fill.easing
        }
      });

      anime.remove(DOM.svg);
      anime({
        targets: DOM.svg,
        duration: shapes[pos].animation.svg.duration,
        easing: shapes[pos].animation.svg.easing,
        elasticity: shapes[pos].animation.svg.elasticity || 0,
        scaleX: shapes[pos].scaleX,
        scaleY: shapes[pos].scaleY,
        translateX: shapes[pos].tx+'px',
        translateY: shapes[pos].ty+'px',
        rotate: shapes[pos].rotate+'deg'
      });
    });

    watcher.exitViewport(function() {
      const idx = !watcher.isAboveViewport ? pos-1 : pos+1;

      if( idx <= contentElemsTotal && step !== idx ) {
        step = idx;
        anime.remove(DOM.shapeEl);
        anime({
          targets: DOM.shapeEl,
          duration: shapes[idx].animation.points.duration,
          easing: shapes[idx].animation.points.easing,
          elasticity: shapes[idx].animation.points.elasticity || 0,
          points: shapes[idx].points,
          fill: {
            value: shapes[idx].fill.color,
            duration: shapes[idx].fill.duration,
            easing: shapes[idx].fill.easing
          }
        });

        anime.remove(DOM.svg);
        anime({
          targets: DOM.svg,
          duration: shapes[idx].animation.svg.duration,
          easing: shapes[idx].animation.svg.easing,
          elasticity: shapes[idx].animation.svg.elasticity || 0,
          scaleX: shapes[idx].scaleX,
          scaleY: shapes[idx].scaleY,
          translateX: shapes[idx].tx+'px',
          translateY: shapes[idx].ty+'px',
          rotate: shapes[idx].rotate+'deg'
        });
      }
    });
  });
};

// createScrollWatchers();
