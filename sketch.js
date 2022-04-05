//Thanks to Kazuki Umeda
//"Geometric Beauty of Spherical Coordinates in p5.js"
//https://www.youtube.com/watch?v=SGHWZz5Mrsw
//https://github.com/Creativeguru97/YouTube_tutorial/tree/master/Play_with_geometry/SphericalCoordinates

let iter = 0;
let showUI = false;

let sliderValues = [
  //lines full screen diagonal
  [975, 12, 29, 50, 270, 40, 140, 1, 1, 0, 30, 0.5, 0, 900, 4.75, 1, 10, 0, 0.25, 0, 0.25, 0, 5.5, 4, 4.75, 0, 0.25, 1, 10],
  //bars 8-55s (fino hats leggeri)
  [250, 27, 22, 0, 360, 70, 120, 2, 2, 15, 30, 0.75, 1, 700, 6.25, 2, 3.5, 0, 0.25, 2, 16.5, 1, 8.5, 4, 8.5, 3, 1, 2, 3.75],
  //triangles mosaic 55-100s swith in when HATS
  //[ 250, 52, 3, 0, 360, 60, 180, 6, 1, 15, 75, 0.5, 2, 700, 6.25, 3, 3.5, 0, 0.25, 3, 16, 2, 7.75, 0, 0.25, 3, 0.25, 3, 6],
  [250, 47, 3, 20, 290, 30, 160, 1, 1, 15, 75, 0.5, 2, 600, 8, 3, 7.25, 0, 0.25, 3, 16, 3, 6.5, 0, 0.25, 3, 0.5, 2, 6.5],
  //hexagon --> to set when the music is decreases 105/140
  [750, 30, 17, 0, 360, 50, 180, 1, 1, 0, 30, 0.75, 0, 1200, 4.5, 1, 8, 0, 0.25, 0, 0.25, 0, 2, 0, 0.25, 0, 0.25, 2, 6.75],
  //big triangles sequence (140-185)
  [750, 30, 4, 0, 360, 50, 140, 1, 1, 0, 30, 0.75, 0, 1200, 2.5, 4, 2.75, 0, 0.25, 2, 6.75, 3, 7.25, 0, 0.25, 1, 0.25, 2, 6.75],
  //[750, 30, 4, 0, 360, 50, 180, 1, 1, 0, 30, 0.75, 0, 1200, 2.5, 2, 2.75, 0, 0.25, 0, 0.25, 1, 7.25, 0, 0.25, 0, 0.25, 2, 6.75],
  //[ 750, 30, 4, 0, 360, 50, 140, 1, 1, 15, 45, 0.5, 0, 1200, 2.5, 4, 2.75, 0, 0.25, 2, 6.75, 3, 7.25, 0, 0.25, 4, 0.25, 2, 6.75],
  //[ 750, 30, 4, 0, 360, 50, 140, 1, 1, 0, 60, 0.5, 0, 1200, 2.5, 4, 2.75, 0, 0.25, 2, 6.75, 3, 7.25, 0, 0.25, 3, 0.5, 2, 6.75],
  //circles(185-195)
  [400, 8, 110, 0, 360, 0, 180, 1, 1, 0, 0, 0.5, 0, 600, 2.5, 2, 9.25, 0, 0.25, 0, 20, 2, 10, 0, 10, 0, 0.25, 2, 2.5],
  //circles higher values (195-205)
  [400, 59, 110, 0, 360, 0, 180, 1, 1, 0, 0, 0.5, 0, 600, 8.5, 2, 9.25, 0, 0.25, 0, 20, 2, 10, 0, 10, 0, 0.25, 2, 2.5],
  //circles(205-210) --> coming back to previous composition to reduce before the lines
  [400, 8, 110, 0, 360, 0, 180, 1, 1, 0, 0, 0.5, 0, 600, 2.5, 2, 9.25, 0, 0.25, 0, 20, 2, 10, 0, 10, 0, 0.25, 2, 2.5],
  //circles 1
  // [ 175, 4, 110, 0, 360, 50, 180, 1, 1, 0, 0, 0.5, 0, 400, 2.5, 2, 9.25, 0, 0.25, 0, 12, 2, 10, 0, 0.25, 0, 0.25, 2, 3],
  //bars 210-230s
  [875, 40, 14, 0, 360, 80, 40, 1, 1, 45, 120, 2.25, 1, 600, 5.75, 3, 4.75, 0, 0.25, 2, 11.5, 1, 1.5, 1, 3, 1, 2.25, 2, 4],
  //bars 228-250 --> play with the two line compositions --> cambio sul fruscio
  [800, 48, 14, 0, 360, 90, 80, 1, 1, 15, 60, 2.25, 1, 600, 5, 3, 4.75, 0, 0.25, 2, 11.5, 2, 2.5, 1, 3, 1, 5.25, 2, 2.75],
  //pre-fractal glower grid untill silence
  [125, 16, 91, 0, 360, 50, 150, 6, 7, 15, 15, 3.25, 3, 800, 3.75, 2, 2.5, 0, 0.25, 0, 7, 3, 6.5, 2, 4.5, 0, 0.25, 2, 3],
  //fractal grid 310-355 'tll squeaky basss
  [450, 88, 63, 0, 360, 100, 120, 8, 5, 0, 30, 0.5, 1, 1000, 4, 3, 9.25, 0, 9, 0, 16.25, 2, 8, 2, 10, 3, 0.25, 1, 4.25],
  //post-fractal 'till lowpass filter 405
  [200, 57, 93, 0, 360, 70, 110, 5, 3, 15, 30, 2, 1, 800, 4.25, 1, 9.25, 0, 0.25, 0, 0.25, 2, 3.75, 2, 10, 3, 0.25, 1, 7.25],
  //hex trip 400-end
  [450, 30, 18, 0, 360, 50, 180, 1, 1, 0, 75, 0.75, 1, 1000, 5.5, 3, 2.75, 2, 9, 0, 0.25, 1, 1, 0, 0.25, 0, 0.25, 2, 3.5],



  //flowers
  //cambiare thetaC per fiori con più petali
  //[100, 25, 68, 0, 360, 70, 90, 4, 4, 30, 15, 3.25, 3, 600, 3.75, 1, 6.5, 2, 9.75, 2, 16.5, 3, 6.5, 2, 9.25, 0, 0.25, 3, 3.75],
  //triangles tunnels
  //[275, 57, 3, 0, 360, 110, 110, 5, 5, 15, 0, 0.5, 1, 900, 3, 1, 6.5, 0, 0.25, 2, 4.25, 2, 8.5, 0, 0.25, 1, 0.25, 1, 6.5],
  //[325, 40, 3, 0, 360, 40, 80, 1, 1, 15, 30, 0.5, 1, 700, 2.75, 3, 3.75, 0, 0.25, 2, 7, 1, 5.25, 0, 0.25, 1, 0.25, 3, 3],


];


















//MUSIC
let isPlaying = true;

let stemBass;
let stemDrums;
let stemInstruments;
let stemMelody;

let settingsLeft;
let body;

let amplitudeBass;
let amplitudeDrums;
let amplitudeIntruments;
let amplitudeMelody;

let bassVol;
let drumsVol;
let instrumentsVol;
let melodyVol;

let sliderBass;
let sliderDrums;
let sliderInstruments;
let sliderMelody;

let sliderBassVal;
let sliderDrumsVal;
let sliderInstrumentsVal;
let sliderMelodyVal;

let ampBass;
let ampDrums;
let ampInstruments;
let ampMelody;

let volumeBass;
let volumeDrums;
let volumeInstruments;
let volumeMelody;

let fftDrums;

//VISUALS
let r;
let rad;
let radSlider;
let density;
let densitySlider;
let vertexNum;
let vertexNumSlider;
let thetaMin;
let thetaMinSlider;
let thetaMax;
let thetaMaxSlider;
let phiMin;
let phiMinSlider;
let phiMax;
let phiMaxSlider;
let bumpyTheta;
let bumpyThetaSlider;
let bumpyPhi;
let bumpyPhiSlider;
let rotateAngleY;
let rotateAngleYSlider;
let rotateAngleZ;
let rotateAngleZSlider;
let rotateSpeed
let rotateSpeedSlider;
let grid;
let gridSlider;
let camZ;
let camZSlider;
let strokeW;
let strokeWSlider;

//INPUTS
let radInput;
let radInputSlider;
let radInputC;
let radInputCSlider;
let radAmp;

let thetaMaxInput;
let thetaMaxInputSlider;
let thetaMaxInputC;
let thetaMaxInputCSlider;
let thetaMaxAmp;
let thetaMaxArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let phiMaxInput;
let phiMaxInputSlider;
let phiMaxInputC;
let phiMaxInputCSlider;
let phiMaxAmp;
let phiMaxArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let densityInput;
let densityInputSlider;
let densityInputC;
let densityInputCSlider;
let densityAmp;
let densityArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let vertexNumInput;
let vertexNumInputSlider;
let vertexNumInputC;
let vertexNumInputCSlider;
let vertexNumAmp;
let vertexNumArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let rotateSpeedInput;
let rotateSpeedInputSlider;
let rotateSpeedInputC;
let rotateSpeedInputCSlider;
let rotateSpeedAmp;
let rotateSpeedArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


let strokeWInput;
let strokeWInputSlider;
let strokeWInputC;
let strokeWInputCSlider;
let strokeWAmp;
let strokeWArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


let timelineSlider;
let timelineText;
let timelineMouseOn;


//CAMERA
let cam;

function preload() {
  stemBass = loadSound("./music/neutra_bass.mp3");
  stemDrums = loadSound("./music/neutra_drums.mp3");
  stemInstruments = loadSound("./music/neutra_instruments.mp3");
  stemMelody = loadSound("./music/neutra_melody.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();

  //display al the slider and divs
  divs(width - 200, 20);
  divs2(width - 400, 20);


  //get the sliders
  sliderBass = document.querySelector('#slider-bass');
  sliderDrums = document.querySelector('#slider-drums');
  sliderInstruments = document.querySelector('#slider-instruments');
  sliderMelody = document.querySelector('#slider-melody');

  //get the p to show the SLIDER/VOLUME values
  sliderBassVal = document.querySelector('#bass-value');
  sliderDrumsVal = document.querySelector('#drums-value');
  sliderInstrumentsVal = document.querySelector('#instruments-value');
  sliderMelodyVal = document.querySelector('#melody-value');

  //get the p to show the AMP values
  ampBass = document.querySelector('#bass-amp');
  ampDrums = document.querySelector('#drums-amp');
  ampInstruments = document.querySelector('#instruments-amp');
  ampMelody = document.querySelector('#melody-amp');

  //get the settings div created in html that contains all the left sliders & infos
  settingsLeft = document.querySelector('#settings-left');
  settingsLeft.classList.add("invisible");

  body = document.querySelector('#body');

  amplitudeBass = new p5.Amplitude();
  amplitudeBass.setInput(stemBass);
  stemBass.loop();

  amplitudeDrums = new p5.Amplitude();
  amplitudeDrums.setInput(stemDrums);
  // fftDrums = new p5.FFT();
  // fftDrums.setInput(stemDrums);
  stemDrums.loop();

  amplitudeInstruments = new p5.Amplitude();
  amplitudeInstruments.setInput(stemInstruments);
  stemInstruments.loop();

  amplitudeMelody = new p5.Amplitude();
  amplitudeMelody.setInput(stemMelody);
  stemMelody.loop();


  //VISUALS
  angleMode(DEGREES);
  colorMode(HSB, 360, 360, 360);
  stroke(210, 330, 300);
  strokeWeight(strokeWSlider.value());
  noFill();


  //TIMELINE
  let songLength = stemBass.duration();
  timelineText = createDiv();
  timelineSlider = createSlider(0, songLength, 0, 1);
  timelineText.position(width / 2, height - 50);
  timelineSlider.position(width / 2, height - 30);
  timelineText.class("infos");
  timelineSlider.class("sliders");
  timelineSlider.mouseReleased(timelineJump);
  timelineSlider.mouseOver(timelineOn);
  timelineSlider.mouseOut(timelineOut);

  mouseRightHide();
  loadSliderValues();

}



function draw() {
  background(230, 30, 25);
  //orbitControl(3, 3);
  r = radSlider.value();
  cam.setPosition(0, 0, camZSlider.value());
  setCamera(cam);

  //show the values of the slider in the p
  sliderBassVal.innerHTML = sliderBass.value * 100 + "%";
  sliderDrumsVal.innerHTML = sliderDrums.value * 100 + "%";
  sliderInstrumentsVal.innerHTML = sliderInstruments.value * 100 + "%";
  sliderMelodyVal.innerHTML = sliderMelody.value * 100 + "%";

  //set the volume of each stem according to the slider
  stemBass.setVolume(volumeBass);
  stemDrums.setVolume(volumeDrums);
  stemInstruments.setVolume(volumeInstruments);
  stemMelody.setVolume(volumeMelody);

  //get the levels from the amplitude mesure
  bassVol = amplitudeBass.getLevel();
  drumsVol = amplitudeDrums.getLevel();
  instrumentsVol = amplitudeInstruments.getLevel();
  melodyVol = amplitudeMelody.getLevel();
  //
  // let spectrum = fftDrums.analyze();
  // let drums = fftDrums.getEnergy("bass") * 1.5;

  //show the values analyzed from the volume of each track
  ampBass.innerHTML = bassVol.toFixed(3);
  ampDrums.innerHTML = drumsVol.toFixed(3);
  ampInstruments.innerHTML = instrumentsVol.toFixed(3);
  ampMelody.innerHTML = melodyVol.toFixed(3);


  noFill();
  //normalSphere(mouseX, mouseY);
  bumpySphere();

  //SLIDERS AND DIV HTML
  rad.html("Radius: " + radSlider.value());
  thetaMin.html("Theta min value: " + thetaMinSlider.value());
  thetaMax.html("Theta max value: " + thetaMaxSlider.value());
  phiMin.html("Phi min value: " + phiMinSlider.value());
  phiMax.html("Phi max value: " + phiMaxSlider.value());
  let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60));
  density.html("Circles density: " + displayDensity);
  let displayVertexNum = int(map(vertexNumSlider.value(), 3, 62, 1, 60));
  vertexNum.html("Circles vertex: " + displayVertexNum);
  bumpyTheta.html("ThetaC: " + bumpyThetaSlider.value());
  bumpyPhi.html("PhiC: " + bumpyPhiSlider.value());
  rotateAngleY.html("Rotation Angle Y: " + rotateAngleYSlider.value());
  rotateAngleZ.html("Rotation Angle Z: " + rotateAngleZSlider.value());
  rotateSpeed.html("Rotation Speed: " + rotateSpeedSlider.value());
  grid.html("Grid: " + (gridSlider.value() * 2 + 1));
  camZ.html("Scale: " + camZSlider.value());
  strokeW.html("Stroke: " + strokeWSlider.value());

  radInput.html("Radius Input Stem: " + radInputSlider.value());
  radInputC.html("Radius Coefficient: " + radInputCSlider.value());
  thetaMaxInput.html("Theta Max Input Stem: " + thetaMaxInputSlider.value());
  thetaMaxInputC.html("Theta Max Coefficient: " + thetaMaxInputCSlider.value());
  phiMaxInput.html("Phi Max Input Stem: " + phiMaxInputSlider.value());
  phiMaxInputC.html("Phi Max Coefficient: " + phiMaxInputCSlider.value());
  densityInput.html("Density Input Stem: " + densityInputSlider.value());
  densityInputC.html("Density Coefficient: " + densityInputCSlider.value());
  vertexNumInput.html("Vertex Num Input Stem: " + vertexNumInputSlider.value());
  vertexNumInputC.html("Vertex Num Coefficient: " + vertexNumInputCSlider.value());
  rotateSpeedInput.html("Rotation Speed Input Stem: " + rotateSpeedInputSlider.value());
  rotateSpeedInputC.html("Rotation Speed Coefficient: " + rotateSpeedInputCSlider.value());
  strokeWInput.html("Stroke Input Stem: " + strokeWInputSlider.value());
  strokeWInputC.html("Stroke Coefficient: " + strokeWInputCSlider.value());

  radInputSliderFunction();
  thetaMaxInputSliderFunction();
  phiMaxInputSliderFunction();
  densityInputSliderFunction();
  vertexNumInputSliderFunction();
  rotateSpeedInputSliderFunction();
  strokeWInputSliderFunction();

  //TIMELINE
  timelineText.html(timelineSlider.value());
  if (timelineMouseOn) {

  } else {
    timelineSlider.elt.value = stemBass.currentTime();
  }



  //UI show/hide
  // if(mouseX > width*0.8) {
  //   mouseRightShow();
  // } else {
  //   mouseRightHide();
  // }
  if (mouseX < width * 0.2 && showUI) {
    settingsLeft.classList.remove("invisible");
  } else {
    settingsLeft.classList.add("invisible");
  }
} //draw end

//TIMELINE
function timelineJump() {
  let time = timelineSlider.value()
  stemBass.jump(time);
  stemDrums.jump(time);
  stemInstruments.jump(time);
  stemMelody.jump(time);
}

function timelineOn() {
  timelineMouseOn = true;
}

function timelineOut() {
  timelineMouseOn = false;
}



// function normalSphere(x, y) {
//   translate(x - width / 2, y - height / 2);
//   for (let phi = 0; phi < phiMaxSlider.value(); phi += 180 / densitySlider.value()) {
//     beginShape();
//     for (let theta = 0; theta < thetaMaxSlider.value(); theta += 360 / vertexNumSlider.value()) {
//       let x = r * cos(phi);
//       let y = r * sin(phi) * sin(theta);
//       let z = r * sin(phi) * cos(theta);
//       vertex(x, y, z);
//     }
//     endShape(CLOSE);
//   }
// }

function bumpySphere() {
  let thetaC = bumpyThetaSlider.value();
  let phiC = bumpyPhiSlider.value();

  let thetaH = 0;
  if (thetaMaxInputSlider.value() == 0) {
    thetaH = thetaMaxSlider.value();
  } else {
    let tempThetaM = map(thetaMaxSlider.value() * thetaMaxAmp, 0, 1080, 0, 360);
    thetaMaxArr.shift();
    thetaMaxArr.push(tempThetaM);
    let tempThetaMsum = 0;
    for (let k = 0; k < thetaMaxArr.length; k++) {
      tempThetaMsum += thetaMaxArr[k];
    }
    thetaH = tempThetaMsum / thetaMaxArr.length;

    //limit value for performace
    //no need to draw more than 360°
    if (thetaH > 360) {
      thetaH = 360;
    }
  }

  let phiH = 0;
  if (phiMaxInputSlider.value() == 0) {
    phiH = phiMaxSlider.value();
  } else {
    let tempPhiM = map(phiMaxSlider.value() * phiMaxAmp, 0, 360, 0, 180);
    phiMaxArr.shift();
    phiMaxArr.push(tempPhiM);
    let tempPhiMsum = 0;
    for (let l = 0; l < phiMaxArr.length; l++) {
      tempPhiMsum += phiMaxArr[l];
    }
    phiH = tempPhiMsum / phiMaxArr.length;

    //limit value for performace
    //no need to draw more than 360°
    if (phiH > 180) {
      phiH = 180;
    }
  }


  let densityH = 0;
  let tempdensityH = map(densitySlider.value() * densityAmp, 0, 360, 2, 90);
  densityArr.shift();
  densityArr.push(tempdensityH);
  for (let m = 0; m < densityArr.length; m++) {
    densityH += densityArr[m];
  }
  densityH = densityH / densityArr.length;

  //limit value for performace
  //no need to draw more than 360°
  if (densityH > 90) {
    densityH = 90;
  }

  let vertexNumH = 0;
  let tempvertexNumH = map(vertexNumSlider.value() * vertexNumAmp, 0, 360, 2, 90);
  vertexNumArr.shift();
  vertexNumArr.push(tempvertexNumH);
  for (let m = 0; m < vertexNumArr.length; m++) {
    vertexNumH += vertexNumArr[m];
  }
  vertexNumH = vertexNumH / vertexNumArr.length;

  //limit value for performace
  //no need to draw more than 360°
  if (vertexNumH > 90) {
    vertexNumH = 90;
  }

  let rotateSpeedH = 0;
  let temprotateSpeedH = map(rotateSpeedSlider.value() * rotateSpeedAmp, 0, 10, 0, 5);
  rotateSpeedArr.shift();
  rotateSpeedArr.push(temprotateSpeedH);
  for (let m = 0; m < rotateSpeedArr.length; m++) {
    rotateSpeedH += rotateSpeedArr[m];
  }
  rotateSpeedH = rotateSpeedH / rotateSpeedArr.length;

  //limit value for performace
  //no need to draw more than 360°
  if (rotateSpeedH > 5) {
    rotateSpeedH = 5;
  }

  let strokeWH = 0;
  let tempstrokeWH = map(strokeWSlider.value() * strokeWAmp, 0, 20, 0, 10);
  strokeWArr.shift();
  strokeWArr.push(tempstrokeWH);
  for (let m = 0; m < strokeWArr.length; m++) {
    strokeWH += strokeWArr[m];
  }
  strokeWH = strokeWH / strokeWArr.length;

  //limit value for performace
  //no need to draw more than 360°
  if (strokeWH > 10) {
    strokeWH = 10;
  }


  let n = gridSlider.value();
  let n2 = n + 1;

  let radius = r + r / 8 * radAmp;

  //bumpy sphere function
  for (let j = -n; j <= n; j++) {
    for (let i = -n2; i <= n2; i++) {
      push();

      translate(width / (n2 * 2 + 1) * i, height / (n * 2 + 1) * j, 0);

      rotateZ(90 + rotateAngleZSlider.value() * cos(frameCount * rotateSpeedH));
      rotateY(90 + rotateAngleYSlider.value() * sin(frameCount * rotateSpeedH));

      for (let phi = phiMinSlider.value(); phi < phiH; phi += 180 / densityH) {
        beginShape();
        for (let theta = thetaMinSlider.value(); theta < thetaH; theta += 360 / vertexNumH) {
          let y = radius * (1 + 0.15 * sin(theta * thetaC) * sin(phi * phiC)) * sin(phi) * sin(theta);
          let z = radius * (1 + 0.15 * sin(theta * thetaC) * sin(phi * phiC)) * sin(phi) * cos(theta);
          let x = radius * (1 + 0.15 * sin(theta * thetaC) * sin(phi * phiC)) * cos(phi);
          vertex(x, y, z);
        }
        strokeWeight(map(phi, 0, 180, 0, strokeWH));
        stroke(map(mouseX, 0, width, 170, 330), 180 + map(mouseY, height, 0, 0, 180), 2 * phi);
        endShape(CLOSE);
      }
      pop()
    }
  }
}

function divs2(x, y) {
  push();
  let space = 25;
  fill("white");
  stroke("white");

  let itemCounter = 0;

  radInput = createDiv();
  radInputSlider = createSlider(0, 4, 0, 1);
  radInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  radInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  radInput.class("infos");
  radInputSlider.class("sliders");

  radInputC = createDiv();
  radInputCSlider = createSlider(0.25, 10, 1, 0.25);
  radInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  radInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  radInputC.class("infos");
  radInputCSlider.class("sliders");

  thetaMaxInput = createDiv();
  thetaMaxInputSlider = createSlider(0, 4, 0, 1);
  thetaMaxInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMaxInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMaxInput.class("infos");
  thetaMaxInputSlider.class("sliders");

  thetaMaxInputC = createDiv();
  thetaMaxInputCSlider = createSlider(0.25, 10, 1, 0.25);
  thetaMaxInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMaxInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMaxInputC.class("infos");
  thetaMaxInputCSlider.class("sliders");

  phiMaxInput = createDiv();
  phiMaxInputSlider = createSlider(0, 4, 0, 1);
  phiMaxInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMaxInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMaxInput.class("infos");
  phiMaxInputSlider.class("sliders");

  phiMaxInputC = createDiv();
  phiMaxInputCSlider = createSlider(0.25, 20, 1, 0.25);
  phiMaxInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMaxInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMaxInputC.class("infos");
  phiMaxInputCSlider.class("sliders");

  densityInput = createDiv();
  densityInputSlider = createSlider(0, 4, 0, 1);
  densityInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  densityInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  densityInput.class("infos");
  densityInputSlider.class("sliders");

  densityInputC = createDiv();
  densityInputCSlider = createSlider(0.25, 10, 1, 0.25);
  densityInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  densityInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  densityInputC.class("infos");
  densityInputCSlider.class("sliders");

  vertexNumInput = createDiv();
  vertexNumInputSlider = createSlider(0, 4, 0, 1);
  vertexNumInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNumInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNumInput.class("infos");
  vertexNumInputSlider.class("sliders");

  vertexNumInputC = createDiv();
  vertexNumInputCSlider = createSlider(0.25, 10, 1, 0.25);
  vertexNumInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNumInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNumInputC.class("infos");
  vertexNumInputCSlider.class("sliders");

  rotateSpeedInput = createDiv();
  rotateSpeedInputSlider = createSlider(0, 4, 0, 1);
  rotateSpeedInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeedInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeedInput.class("infos");
  rotateSpeedInputSlider.class("sliders");

  rotateSpeedInputC = createDiv();
  rotateSpeedInputCSlider = createSlider(0.25, 10, 1, 0.25);
  rotateSpeedInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeedInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeedInputC.class("infos");
  rotateSpeedInputCSlider.class("sliders");

  strokeWInput = createDiv();
  strokeWInputSlider = createSlider(0, 4, 0, 1);
  strokeWInput.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeWInputSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeWInput.class("infos");
  strokeWInputSlider.class("sliders");

  strokeWInputC = createDiv();
  strokeWInputCSlider = createSlider(0.25, 10, 1, 0.25);
  strokeWInputC.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeWInputCSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeWInputC.class("infos");
  strokeWInputCSlider.class("sliders");

}


//create divs - sliders & text
function divs(x, y) {
  push();
  let space = 25;
  fill("white");
  stroke("white");

  let itemCounter = 0;

  rad = createDiv();
  radSlider = createSlider(50, 1200, 175, 25);
  rad.position(x, y + space * itemCounter);
  itemCounter += 1;
  radSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rad.class("infos");
  radSlider.class("sliders");

  thetaMin = createDiv();
  thetaMinSlider = createSlider(0, 360, 0, 10);
  thetaMin.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMinSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMin.class("infos");
  thetaMinSlider.class("sliders");

  thetaMax = createDiv();
  thetaMaxSlider = createSlider(0, 360, 360, 10);
  thetaMax.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMaxSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  thetaMax.class("infos");
  thetaMaxSlider.class("sliders");

  phiMin = createDiv();
  phiMinSlider = createSlider(0, 180, 50, 10);
  phiMin.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMinSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMin.class("infos");
  phiMinSlider.class("sliders");

  phiMax = createDiv();
  phiMaxSlider = createSlider(0, 180, 130, 10);
  phiMax.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMaxSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  phiMax.class("infos");
  phiMaxSlider.class("sliders");

  density = createDiv();
  densitySlider = createSlider(3, 90, 36, 1);
  density.position(x, y + space * itemCounter);
  itemCounter += 1;
  densitySlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  density.class("infos");
  densitySlider.class("sliders");

  vertexNum = createDiv();
  vertexNumSlider = createSlider(3, 120, 30, 1);
  vertexNum.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNumSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  vertexNum.class("infos");
  vertexNumSlider.class("sliders");

  bumpyTheta = createDiv();
  bumpyThetaSlider = createSlider(1, 8, 5, 1);
  bumpyTheta.position(x, y + space * itemCounter);
  itemCounter += 1;
  bumpyThetaSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  bumpyTheta.class("infos");
  bumpyThetaSlider.class("sliders");

  bumpyPhi = createDiv();
  bumpyPhiSlider = createSlider(1, 8, 2, 1);
  bumpyPhi.position(x, y + space * itemCounter);
  itemCounter += 1;
  bumpyPhiSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  bumpyPhi.class("infos");
  bumpyPhiSlider.class("sliders");

  rotateAngleY = createDiv();
  rotateAngleYSlider = createSlider(0, 120, 15, 15);
  rotateAngleY.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateAngleYSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateAngleY.class("infos");
  rotateAngleYSlider.class("sliders");

  rotateAngleZ = createDiv();
  rotateAngleZSlider = createSlider(0, 120, 45, 15);
  rotateAngleZ.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateAngleZSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateAngleZ.class("infos");
  rotateAngleZSlider.class("sliders");

  rotateSpeed = createDiv();
  rotateSpeedSlider = createSlider(0.5, 4, 1, 0.25);
  rotateSpeed.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeedSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  rotateSpeed.class("infos");
  rotateSpeedSlider.class("sliders");

  grid = createDiv();
  gridSlider = createSlider(0, 4, 1, 1);
  grid.position(x, y + space * itemCounter);
  itemCounter += 1;
  gridSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  grid.class("infos");
  gridSlider.class("sliders");

  camZ = createDiv();
  camZSlider = createSlider(200, 1200, 700, 100);
  camZ.position(x, y + space * itemCounter);
  itemCounter += 1;
  camZSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  camZ.class("infos");
  camZSlider.class("sliders");

  strokeW = createDiv();
  strokeWSlider = createSlider(0.25, 10, 2, 0.25);
  strokeW.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeWSlider.position(x, y + space * itemCounter);
  itemCounter += 1;
  strokeW.class("infos");
  strokeWSlider.class("sliders");

  pop();
}

function mouseRightShow() {
  rad.show();
  radSlider.show();
  density.show();
  densitySlider.show();
  vertexNum.show();
  vertexNumSlider.show();
  thetaMin.show();
  thetaMinSlider.show();
  thetaMax.show();
  thetaMaxSlider.show();
  phiMin.show();
  phiMinSlider.show();
  phiMax.show();
  phiMaxSlider.show();
  bumpyTheta.show();
  bumpyThetaSlider.show();
  bumpyPhi.show();
  bumpyPhiSlider.show();
  rotateAngleY.show();
  rotateAngleYSlider.show();
  rotateAngleZ.show();
  rotateAngleZSlider.show();
  rotateSpeed.show();
  rotateSpeedSlider.show();
  grid.show();
  gridSlider.show();
  camZ.show();
  camZSlider.show();
  strokeW.show();
  strokeWSlider.show();

  radInput.show();
  radInputSlider.show();
  radInputC.show();
  radInputCSlider.show();
  thetaMaxInput.show();
  thetaMaxInputSlider.show();
  thetaMaxInputC.show();
  thetaMaxInputCSlider.show();
  phiMaxInput.show();
  phiMaxInputSlider.show();
  phiMaxInputC.show();
  phiMaxInputCSlider.show();
  densityInput.show();
  densityInputSlider.show();
  densityInputC.show();
  densityInputCSlider.show();
  vertexNumInput.show();
  vertexNumInputSlider.show();
  vertexNumInputC.show();
  vertexNumInputCSlider.show();
  rotateSpeedInput.show();
  rotateSpeedInputSlider.show();
  rotateSpeedInputC.show();
  rotateSpeedInputCSlider.show();
  strokeWInput.show();
  strokeWInputSlider.show();
  strokeWInputC.show();
  strokeWInputCSlider.show();

  timelineSlider.show();
  timelineText.show();
}

function mouseRightHide() {
  rad.hide();
  radSlider.hide();
  density.hide();
  densitySlider.hide();
  vertexNum.hide();
  vertexNumSlider.hide();
  thetaMin.hide();
  thetaMinSlider.hide();
  thetaMax.hide();
  thetaMaxSlider.hide();
  phiMin.hide();
  phiMinSlider.hide();
  phiMax.hide();
  phiMaxSlider.hide();
  bumpyTheta.hide();
  bumpyThetaSlider.hide();
  bumpyPhi.hide();
  bumpyPhiSlider.hide();
  rotateAngleY.hide();
  rotateAngleYSlider.hide();
  rotateAngleZ.hide();
  rotateAngleZSlider.hide();
  rotateSpeed.hide();
  rotateSpeedSlider.hide();
  grid.hide();
  gridSlider.hide();
  camZ.hide();
  camZSlider.hide();
  strokeW.hide();
  strokeWSlider.hide();

  radInput.hide();
  radInputSlider.hide();
  radInputC.hide();
  radInputCSlider.hide();
  thetaMaxInput.hide();
  thetaMaxInputSlider.hide();
  thetaMaxInputC.hide();
  thetaMaxInputCSlider.hide();
  phiMaxInput.hide();
  phiMaxInputSlider.hide();
  phiMaxInputC.hide();
  phiMaxInputCSlider.hide();
  densityInput.hide();
  densityInputSlider.hide();
  densityInputC.hide();
  densityInputCSlider.hide();
  vertexNumInput.hide();
  vertexNumInputSlider.hide();
  vertexNumInputC.hide();
  vertexNumInputCSlider.hide();
  rotateSpeedInput.hide();
  rotateSpeedInputSlider.hide();
  rotateSpeedInputC.hide();
  rotateSpeedInputCSlider.hide();
  strokeWInput.hide();
  strokeWInputSlider.hide();
  strokeWInputC.hide();
  strokeWInputCSlider.hide();

  timelineSlider.hide();
  timelineText.hide();
}




//set volume values when the sliders are modified
function setBassVol(val) {
  volumeBass = Number(val);
}

function setDrumsVol(val) {
  volumeDrums = Number(val);
}

function setInstrumentsVol(val) {
  volumeInstruments = Number(val);
}

function setMelodyVol(val) {
  volumeMelody = Number(val);
}

//KEYBOARD inputs
function keyPressed() {
  //spacebar to play/pause
  if (keyCode === 32) {
    if (isPlaying) {
      stemBass.pause();
      stemDrums.pause();
      stemInstruments.pause();
      stemMelody.pause();
      isPlaying = !isPlaying;
    } else {
      stemBass.loop();
      stemDrums.loop();
      stemInstruments.loop();
      stemMelody.loop();
      isPlaying = !isPlaying;
    }
    console.log("isPlaying = " + isPlaying);
  }

  //83 == S key
  if (keyCode === 83) {
    saveCanvas('img_name', 'png');
    console.log("screenshot");
  }

  //CHANGE VISUAL COMPOSITION
  if (keyCode === RIGHT_ARROW) {
    if (iter == sliderValues.length - 1) {
      iter = 0;
    } else {
      iter += 1;
    }
    loadSliderValues();
    console.log("Array number " + iter);
  }
  if (keyCode === LEFT_ARROW) {
    if (iter == 0) {
      iter = sliderValues.length - 1;
    } else {
      iter -= 1;
    }
    loadSliderValues();
    console.log("Array number " + iter);
  }

  //GO LIVE --> FOR LIVE PERFORMANCES
  //76 == L key
  if (keyCode === 76) {
    body.classList.toggle("live");

    showUI = ! showUI;
    console.log("UI: " + showUI);

    if(showUI) {
      mouseRightShow();
    } else {
      mouseRightHide();
    }
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// function stemInput(inputVar, sliderValue) {
//   if (sliderValue == 0) {
//     inputVar = 0;
//   } else if (sliderValue == 1) {
//     inputVar == bassVol;
//   } else if (sliderValue == 2) {
//     inputVar == drumsVol;
//   } else if (sliderValue == 3) {
//     inputVar == instrumentsVol;
//   } else if (sliderValue == 4) {
//     inputVar == melodyVol;
//   }
//
// }


//INPUT 2 - FUCTIONS FOR SLIDERS
function radInputSliderFunction() {
  let radInputSliderValue = radInputSlider.value();

  if (radInputSliderValue == 0) {
    radAmp = 0;
  } else if (radInputSliderValue == 1) {
    radAmp = bassVol * radInputCSlider.value();
  } else if (radInputSliderValue == 2) {
    radAmp = drumsVol * radInputCSlider.value();
  } else if (radInputSliderValue == 3) {
    radAmp = instrumentsVol * radInputCSlider.value();
  } else if (radInputSliderValue == 4) {
    radAmp = melodyVol * radInputCSlider.value();
  }
}

function thetaMaxInputSliderFunction() {
  let thetaMaxInputSliderValue = thetaMaxInputSlider.value();

  if (thetaMaxInputSliderValue == 0) {
    thetaMaxAmp = 1;
  } else if (thetaMaxInputSliderValue == 1) {
    thetaMaxAmp = bassVol * thetaMaxInputCSlider.value();
  } else if (thetaMaxInputSliderValue == 2) {
    thetaMaxAmp = drumsVol * thetaMaxInputCSlider.value();
  } else if (thetaMaxInputSliderValue == 3) {
    thetaMaxAmp = instrumentsVol * thetaMaxInputCSlider.value();
  } else if (thetaMaxInputSliderValue == 4) {
    thetaMaxAmp = melodyVol * thetaMaxInputCSlider.value();
  }
}

function phiMaxInputSliderFunction() {
  let phiMaxInputSliderValue = phiMaxInputSlider.value();

  if (phiMaxInputSliderValue == 0) {
    phiMaxAmp = 1;
  } else if (phiMaxInputSliderValue == 1) {
    phiMaxAmp = bassVol * phiMaxInputCSlider.value();
  } else if (phiMaxInputSliderValue == 2) {
    phiMaxAmp = drumsVol * phiMaxInputCSlider.value();
  } else if (phiMaxInputSliderValue == 3) {
    phiMaxAmp = instrumentsVol * phiMaxInputCSlider.value();
  } else if (phiMaxInputSliderValue == 4) {
    phiMaxAmp = melodyVol * phiMaxInputCSlider.value();
  }
}

function densityInputSliderFunction() {
  let densityInputSliderValue = densityInputSlider.value();

  if (densityInputSliderValue == 0) {
    densityAmp = 1;
  } else if (densityInputSliderValue == 1) {
    densityAmp = bassVol * densityInputCSlider.value();
  } else if (densityInputSliderValue == 2) {
    densityAmp = drumsVol * densityInputCSlider.value();
  } else if (densityInputSliderValue == 3) {
    densityAmp = instrumentsVol * densityInputCSlider.value();
  } else if (densityInputSliderValue == 4) {
    densityAmp = melodyVol * densityInputCSlider.value();
  }
}

function vertexNumInputSliderFunction() {
  let vertexNumInputSliderValue = vertexNumInputSlider.value();

  if (vertexNumInputSliderValue == 0) {
    vertexNumAmp = 1;
  } else if (vertexNumInputSliderValue == 1) {
    vertexNumAmp = bassVol * vertexNumInputCSlider.value();
  } else if (vertexNumInputSliderValue == 2) {
    vertexNumAmp = drumsVol * vertexNumInputCSlider.value();
  } else if (vertexNumInputSliderValue == 3) {
    vertexNumAmp = instrumentsVol * vertexNumInputCSlider.value();
  } else if (vertexNumInputSliderValue == 4) {
    vertexNumAmp = melodyVol * vertexNumInputCSlider.value();
  }
}

function rotateSpeedInputSliderFunction() {
  let rotateSpeedInputSliderValue = rotateSpeedInputSlider.value();

  if (rotateSpeedInputSliderValue == 0) {
    rotateSpeedAmp = 1;
  } else if (rotateSpeedInputSliderValue == 1) {
    rotateSpeedAmp = bassVol * rotateSpeedInputCSlider.value();
  } else if (rotateSpeedInputSliderValue == 2) {
    rotateSpeedAmp = drumsVol * rotateSpeedInputCSlider.value();
  } else if (rotateSpeedInputSliderValue == 3) {
    rotateSpeedAmp = instrumentsVol * rotateSpeedInputCSlider.value();
  } else if (rotateSpeedInputSliderValue == 4) {
    rotateSpeedAmp = melodyVol * rotateSpeedInputCSlider.value();
  }
}

function strokeWInputSliderFunction() {
  let strokeWInputSliderValue = strokeWInputSlider.value();

  if (strokeWInputSliderValue == 0) {
    strokeWAmp = 1;
  } else if (strokeWInputSliderValue == 1) {
    strokeWAmp = bassVol * strokeWInputCSlider.value();
  } else if (strokeWInputSliderValue == 2) {
    strokeWAmp = drumsVol * strokeWInputCSlider.value();
  } else if (strokeWInputSliderValue == 3) {
    strokeWAmp = instrumentsVol * strokeWInputCSlider.value();
  } else if (strokeWInputSliderValue == 4) {
    strokeWAmp = melodyVol * strokeWInputCSlider.value();
  }
}

//SAVE / LOAD COMPOSITION VALUES
function saveSliderValues() {
  let sliderValueArray = [];

  sliderValueArray.push(radSlider.value());
  sliderValueArray.push(densitySlider.value());
  sliderValueArray.push(vertexNumSlider.value());
  sliderValueArray.push(thetaMinSlider.value());
  sliderValueArray.push(thetaMaxSlider.value());
  sliderValueArray.push(phiMinSlider.value());
  sliderValueArray.push(phiMaxSlider.value());
  sliderValueArray.push(bumpyThetaSlider.value());
  sliderValueArray.push(bumpyPhiSlider.value());
  sliderValueArray.push(rotateAngleYSlider.value());
  sliderValueArray.push(rotateAngleZSlider.value());
  sliderValueArray.push(rotateSpeedSlider.value());
  sliderValueArray.push(gridSlider.value());
  sliderValueArray.push(camZSlider.value());
  sliderValueArray.push(strokeWSlider.value());

  sliderValueArray.push(radInputSlider.value());
  sliderValueArray.push(radInputCSlider.value());
  sliderValueArray.push(thetaMaxInputSlider.value());
  sliderValueArray.push(thetaMaxInputCSlider.value());
  sliderValueArray.push(phiMaxInputSlider.value());
  sliderValueArray.push(phiMaxInputCSlider.value());
  sliderValueArray.push(densityInputSlider.value());
  sliderValueArray.push(densityInputCSlider.value());
  sliderValueArray.push(vertexNumInputSlider.value());
  sliderValueArray.push(vertexNumInputCSlider.value());
  sliderValueArray.push(rotateSpeedInputSlider.value());
  sliderValueArray.push(rotateSpeedInputCSlider.value());
  sliderValueArray.push(strokeWInputSlider.value());
  sliderValueArray.push(strokeWInputCSlider.value());

  sliderValues.push(sliderValueArray);
  console.log(sliderValues);
}

function loadSliderValues() {
  radSlider.elt.value = sliderValues[iter][0];
  densitySlider.elt.value = sliderValues[iter][1];
  vertexNumSlider.elt.value = sliderValues[iter][2];
  thetaMinSlider.elt.value = sliderValues[iter][3];
  thetaMaxSlider.elt.value = sliderValues[iter][4];
  phiMinSlider.elt.value = sliderValues[iter][5];
  phiMaxSlider.elt.value = sliderValues[iter][6];
  bumpyThetaSlider.elt.value = sliderValues[iter][7];
  bumpyPhiSlider.elt.value = sliderValues[iter][8];
  rotateAngleYSlider.elt.value = sliderValues[iter][9];
  rotateAngleZSlider.elt.value = sliderValues[iter][10];
  rotateSpeedSlider.elt.value = sliderValues[iter][11];
  gridSlider.elt.value = sliderValues[iter][12];
  camZSlider.elt.value = sliderValues[iter][13];
  strokeWSlider.elt.value = sliderValues[iter][14];

  radInputSlider.elt.value = sliderValues[iter][15];
  radInputCSlider.elt.value = sliderValues[iter][16];
  thetaMaxInputSlider.elt.value = sliderValues[iter][17];
  thetaMaxInputCSlider.elt.value = sliderValues[iter][18];
  phiMaxInputSlider.elt.value = sliderValues[iter][19];
  phiMaxInputCSlider.elt.value = sliderValues[iter][20];
  densityInputSlider.elt.value = sliderValues[iter][21];
  densityInputCSlider.elt.value = sliderValues[iter][22];
  vertexNumInputSlider.elt.value = sliderValues[iter][23];
  vertexNumInputCSlider.elt.value = sliderValues[iter][24];
  rotateSpeedInputSlider.elt.value = sliderValues[iter][25];
  rotateSpeedInputCSlider.elt.value = sliderValues[iter][26];
  strokeWInputSlider.elt.value = sliderValues[iter][27];
  strokeWInputCSlider.elt.value = sliderValues[iter][28];
}
