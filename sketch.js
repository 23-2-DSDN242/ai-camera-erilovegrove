let sourceImg = null;
let maskImg = null;
let curLayer = 0;

// change these three lines as appropriate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";
let maskCenter = null;
let maskCenterSize = null;

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 128);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);

  maskCenterSearch(20);
}

let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20;

function maskCenterSearch(min_width) {
  let max_up_down = 0;
  let max_left_right = 0;
  let max_x_index = 0;
  let max_y_index = 0;

  // first scan all rows top to bottom
  print("Scanning mask top to bottom...");
  for (let j = 0; j < Y_STOP; j++) {
    // look across this row left to right and count
    let mask_count = 0;
    for (let i = 0; i < X_STOP; i++) {
      let mask = maskImg.get(i, j);
      if (mask[1] > 128) {
        mask_count = mask_count + 1;
      }
    }
    // check if that row sets a new record
    if (mask_count > max_left_right) {
      max_left_right = mask_count;
      max_y_index = j;
    }
  }

  // now scan once left to right as well
  print("Scanning mask left to right...");
  for (let i = 0; i < X_STOP; i++) {
    
    let mask_count = 0;
    for (let j = 0; j < Y_STOP; j++) {
      let mask = maskImg.get(i, j);
      if (mask[1] > 128) {
        mask_count = mask_count + 1;
      }
    }
    
    if (mask_count > max_up_down) {
      max_up_down = mask_count;
      max_x_index = i;
    }
  }

  print("Scanning mask done!");
  if (max_left_right > min_width && max_up_down > min_width) {
    maskCenter = [max_x_index, max_y_index];
    maskCenterSize = [max_left_right, max_up_down];
  }
}

let renderCounter = 0;

function draw() {
  if (curLayer == 0) {
    let num_lines_to_draw = 40;

    for (let j = renderCounter; j < renderCounter + num_lines_to_draw && j < Y_STOP; j++) {
      for (let i = 0; i < X_STOP; i++) {
        colorMode(RGB);
        let pix = sourceImg.get(i, j);

        let r = red(pix);
        let g = green(pix);
        let b = blue(pix);

        let redOnlyCol = color(r, 0, 0);

      
        colorMode(HSB, 360, 100, 100);
        let h = hue(redOnlyCol);
        let s = saturation(redOnlyCol);
        let br = brightness(redOnlyCol);

        let new_s = map(s, 0, 100, 0, 80); 
        let new_br = map(br, 0, 100, 0, 100); 

        let adjustedCol = color(h, new_s, new_br);

        set(i, j, adjustedCol);
      }
    }
    renderCounter = renderCounter + num_lines_to_draw;
    updatePixels();
  } else {
    rectMode(CORNERS);
    for (let i = 0; i < 200; i++) {
      let x1 = random(0, width);
      let y1 = random(0, height);
      colorMode(RGB);
      let pix = sourceImg.get(x1, y1);
      let mask = maskImg.get(x1, y1);
      let col = color(pix);
      stroke(col);
      if (mask[1] < 128) {
        // Does nothing here
      } else {
        colorMode(HSB, 360, 100, 100);
        let h = hue(col);
        let s = saturation(col);
        let b = brightness(col);

        
        let shift = 150;  // red shift value
        let new_hue = (h + shift) % 360;
        let new_sat = map(s, 0, 100, 50, 100);  // saturation
        let new_brt = map(b, 0, 100, 30, 100);  // brightness

        let new_col = color(new_hue, new_sat, new_brt);
        stroke(new_col);
        fill(new_col);
        strokeWeight(1);
        let crossSize = random(5, 15);
        // horizontal line of the cross
        line(x1 - crossSize, y1, x1 + crossSize, y1);
        //vertical line of cross
        line(x1, y1 - crossSize, x1, y1 + crossSize);
      }
    }
    renderCounter = renderCounter + 1;

    if (maskCenter !== null) {
      strokeWeight(4);
      stroke(255, 255, 255, 255); 
      noFill();
      let x = maskCenter[0];
      let y = maskCenter[1];

      // this is large cross
      line(x - 200, y, x + 200, y);
      line(x, y - 200, x, y + 200);

      // this is target ellipses
      ellipse(x, y, 40, 40); // small one
      ellipse(x, y, 100, 100);
      ellipse(x, y, 150, 150);
      ellipse(x, y, 200, 200); // larges one
    }
  }

  if (curLayer == 0 && renderCounter > Y_STOP) {
    curLayer = 1;
    renderCounter = 0;
  } else if (curLayer == 1 && renderCounter > 500) {
    console.log("Done!");
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
