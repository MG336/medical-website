import 'bootstrap';
import './style/main.scss';
// import "../node_modules/tiny-slider/src/tiny-slider.scss";

import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

// tns()
tns({
    container:'.my-slider',
    // loop: true,
    responsive: {
    "350": {
      "items": 1
    },
    "576": {
      "items": 2
    },
    "768": {
        "items": 3
      },
    "1150": {
        "items": 4
    }  
  },
//   fixedWidth:100,
  gutter:20,
  swipeAngle: false,
  speed: 400,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  arrowKeys: true,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controls: false,

})

// console.log(tns)