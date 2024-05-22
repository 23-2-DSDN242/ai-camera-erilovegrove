// //lines and green background

// let sourceImg=null;
// let maskImg=null;
// let renderCounter=0;

// // change these three lines as appropiate
// let sourceFile = "input_3.JPG";
// let maskFile   = "mask_3.png";
// let outputFile = "output_1.png";

// function preload() {
//   sourceImg = loadImage(sourceFile);
//   maskImg = loadImage(maskFile);
// }

// function setup () {
//   let main_canvas = createCanvas(1920, 1080);
//   main_canvas.parent('canvasContainer');

//   imageMode(CENTER);
//   noStroke();
//   background(255, 0, 0);
//   sourceImg.loadPixels();
//   maskImg.loadPixels();
// }

// function draw () {
//   for(let i=0;i<3820;i++) {
//     let j = renderCounter;
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     // fill(pix);
   
//     if(mask[0] > 128) {
//       let pointSize = 10;

//       stroke (pix)
//       strokeWeight (height/ 500);
      
//       if(pix[0] > 120){
//         line (x, y, x, y+height/10);
//       } else {
//       line (x, y, x, y-height/10);
//     }
//     // ellipse(x, y, pointSize, pointSize);
//   }
//   else {
//     noStroke ();
//      fill (pix[0], pix[1], pix[2])
//       let pointSize = 10;
//       drawStar(x, y, 25);   
//   }
  
//   }
//   renderCounter = renderCounter + 1;
//   if(renderCounter > 10) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function drawStar(x, y, size) {
//   beginShape();
//   vertex(x, y - size);
//   vertex(x + size * 0.2, y - size * 0.2);
//   vertex(x + size, y - size * 0.2);
//   vertex(x + size * 0.3, y + size * 0.1);
//   vertex(x + size * 0.5, y + size);
//   vertex(x, y + size * 0.4);
//   vertex(x - size * 0.5, y + size);
//   vertex(x - size * 0.3, y + size * 0.1);
//   vertex(x - size, y - size * 0.2);
//   vertex(x - size * 0.2, y - size * 0.2);
//   endShape(CLOSE);
// }


// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }









// let sourceImg=null;
// let maskImg=null;
// let renderCounter=0;

// // change these three lines as appropiate
// let sourceFile = "input_2.jpg";
// let maskFile   = "mask_2.png";
// let outputFile = "output_1.png";

// function preload() {
//   sourceImg = loadImage(sourceFile);
//   maskImg = loadImage(maskFile);
// }

// function setup () {
//   let main_canvas = createCanvas(1920, 1080);
//   main_canvas.parent('canvasContainer');

//   imageMode(CENTER);
//   noStroke();
//   background(0, 0, 128);
//   sourceImg.loadPixels();
//   maskImg.loadPixels();
//   colorMode(HSB);
// }

// function draw () {
//   let num_lines_to_draw = 40;
//   // get one scanline
//   for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) {
//     for(let i=0; i<1920; i++) {
//       colorMode(RGB);
//       let pix = sourceImg.get(i, j);
//       // create a color from the values (always RGB)
//       let col = color(pix);
//       let mask = maskImg.get(i, j);

//       colorMode(HSB, 360, 100, 100);
//       // draw a "dimmed" version in gray
//       let h = hue(col);
//       let s = saturation(col);
//       let b = brightness(col);

//       if(mask[0] > 128) {
//         // draw the full pixels
//         // let new_sat = map(s, 0, 100, 50, 100);
//         let new_brt = map(b, 0, 100, 50, 100);
//         // let new_hue = map(h, 0, 360, 180, 540);
//         let new_col = color(0, s, new_brt);
//         set(i, j, new_col);
//       }
//       else {
//         // let new_brt = map(b, 0, 100, 20, 40);
//         let new_brt = map(b, 0, 100, 0, 100);
//         let new_col = color(h, 7, new_brt);
//         // let new_col = color(h, s, b);
//         set(i, j, new_col);


        
        
//       }
//     }
//   }
//   renderCounter = renderCounter + num_lines_to_draw;
//   updatePixels();
//   // print(renderCounter);
//   if(renderCounter > 1080) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function drawStar(x, y, size) {
//   beginShape();
//   vertex(x, y - size);
//   vertex(x + size * 0.2, y - size * 0.2);
//   vertex(x + size, y - size * 0.2);
//   vertex(x + size * 0.3, y + size * 0.1);
//   vertex(x + size * 0.5, y + size);
//   vertex(x, y + size * 0.4);
//   vertex(x - size * 0.5, y + size);
//   vertex(x - size * 0.3, y + size * 0.1);
//   vertex(x - size, y - size * 0.2);
//   vertex(x - size * 0.2, y - size * 0.2);
//   endShape(CLOSE);
// }



// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }











let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let curLayer = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 128);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);
}

function draw () {
  if (curLayer == 0) {
    let num_lines_to_draw = 40;
    // get one scanline
    for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) {
      for(let i=0; i<1920; i++) {
        colorMode(RGB);
        let pix = sourceImg.get(i, j);
        // create a color from the values (always RGB)
        let col = color(pix);
        let mask = maskImg.get(i, j);

        colorMode(HSB, 360, 100, 100);
        // draw a "dimmed" version in gray
        let h = hue(col);
        let s = saturation(col);
        let b = brightness(col);

        let new_brt = map(b, 0, 100, 30, 50);
        let new_col = color(h, 0, new_brt);
        set(i, j, new_col);
      }
    }
    renderCounter = renderCounter + num_lines_to_draw;
    updatePixels();
  }
  else {
    rectMode(CORNERS);
    for(let i=0; i<200; i++) {
      let x1 = random(0, width);
      let y1 = random(0, height);
      let x2 = x1 + random(-10, 10);
      let y2 = y1 + random(-10, 10);
      colorMode(RGB);
      let pix = sourceImg.get(x1, y1);
      let mask = maskImg.get(x1, y1);
      let col = color(pix);
      stroke(col);
      fill(col);
      if(mask[1] < 128) {
        line(x1, y1, x2, y2);
      }
      else {
        rect(x1, y1, x2, y2);
      }
    }
    renderCounter = renderCounter + 1;
    // set(i, j, new_col);
  }
  // print(renderCounter);
  if(curLayer == 0 && renderCounter > 1080) {
    curLayer = 1;
    renderCounter = 0;
  }
  else if(curLayer == 1 && renderCounter > 500) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}