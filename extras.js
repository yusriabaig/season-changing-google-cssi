/* global
 *    createCanvas, background
 *    colorMode, HSB, fill, noStroke
 *    ellipse
 *    random
 *    width, height,
 *    rect,triangle,
 *    strokeWeight,stroke,line
 *    globalSat,globalBri,color,loadImage,
 */
let grass;
// let birdImage,beeImage,scarecrow;
// let backgroundColor;
// let globalImage;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100, 100);
  //   background colors
  // globalSat=190;
  // globalBri=30;
  // backgroundColor=color(235, 190,30);//navy blue color
  //   spring color= light blue color(195,100,100);
  //  summer color= sky blue (200,100,100);
  //   fall color = orangish red (12,100,100);

  //bird image
  //   globalImage=birdImage;
  //   birdImage=loadImage("https://www.kindpng.com/picc/m/168-1685436_cartoon-bird-cute-bird-fly-png-transparent-png.png");
  //   globalImage=birdImage;

  //   //bee image
  //   globalImage=beeImage;
  //   beeImage=loadImage("data:image/png;base64,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")
  //   globalImage=beeImage;

  grass = [];

  for (let i = 0; i < 150; i++) {
    grass.push(new Grass(0)); //set to 0? // let me know if you want me to explain anything we just talke about! -brennan
  }
}

function draw() {
  background(85);
  for (let i = 0; i < grass.length; i++) {
    grass[i].show();
    grass[i].grow();
  }
}

class Grass {
  constructor(h) {
    this.x = random(width);
    this.y = height;
    this.w = 10;
    this.h = h;
    // this.growSpeed =random(0.05, 0.09);
  }
  show() {
    noStroke();
    fill(130, 80, 80);

    rect(this.x, this.y, this.w, this.h);
    triangle(
      this.x + this.w / 2,
      this.y - this.h, //this.h is growing over time, so this.y - this.h is decreasing
      this.x,
      this.y,
      this.x + this.w,
      this.y
    );
  }

  grow() {
    this.h++;
    console.log(this.h);
    if (this.h >= 60) {
      //this.h is increasing (from 150 to infinity)
      console.log("test");
      this.h = +60; // reset to -60

      // this.y -= this.growSpeed/2;
      // this.h +=this.growSpeed;
      // if (this.h>60);
      // this.growSpeed=0;
    }
  }
}

//   //snowman code
//   background(100);
//   fill(0,255,0);
//   strokeWeight(0);

// //snowman
// 	fill(255);
// 	ellipse(250, 500, 200, 200);
// 	ellipse(250, 375, 150, 150);
// 	ellipse(250, 275, 100, 100);

// 	//h
// 	fill(0);
// 	rect(215, 140, 70, 100);
// 	ellipse(250, 240, 100, 10);

// 	//e
// 	ellipse(235, 265, 5, 5);
// 	ellipse(265, 265, 5, 5);

// 	//c
// 	fill(255, 165, 0);
// 	triangle(250, 275, 250, 285, 290, 300);

// 	//a
// 	stroke(139, 69, 19);
// 	strokeWeight(5);
// 	line(180, 375, 100, 350);
// 	line(320, 375, 400, 350);

// 	//s
// 	strokeWeight(0);
// 	fill(0, 0, 255);
// 	rect(205,300, 90, 20);
// 	rect(205, 300, 20, 80);

// 	//b
// 	fill(0);
// 	ellipse(250, 340, 7, 7);
// 	ellipse(250, 370, 7, 7);
// 	ellipse(250, 400, 7, 7);
