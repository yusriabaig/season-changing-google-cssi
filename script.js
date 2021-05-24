// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas, background
 *    colorMode, HSB, fill, noStroke, createImg,
 *    ellipse, rect, triangle, createSlider,
 *    random, stroke, sqrt, round, strokeWeight, image
 *    width, height, line, noFill, arc, rotate, push, pop,
 *    windowWidth, windowHeight, resizeCanvas, translate,
 */

let drops, snow, flowers, leaves, season, clouds;
let angle, coef, l, l1, l2, branches, steps;
let slider, rainbow, snowman, pumpkins, grass;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB, 100);

  slider = createSlider(1, 4, 1, 1);
  slider.position(10, height - 20);

  rainbow = new Rainbow();
  snowman = new Snowman();

  angle = Math.PI / 4;
  coef = 0.5;
  l = 400;
  branches = 2;
  steps = 6;

  l1 = 200;
  l2 = 200;

  clouds = [];
  for (let i = 0; i < 6; i++) {
    clouds[i] = new Cloud();
  }

  pumpkins = [];
  for (let i = 0; i < 100; i++) {
    pumpkins[i] = new Pumpkin(random(width), height - 50);
  }

  grass = [];
  for (let i = 0; i < 150; i++) {
    grass.push(new Grass(0)); //set to 0? // let me know if you want me to explain anything we just talke about! -brennan
  }

  drops = [];
  snow = [];
  flowers = [];
  leaves = [];
  for (let i = 0; i < 100; i++) {
    drops.push(
      new RainDrop(
        round(random(width)),
        round(random(height)),
        round(random(5, 15)),
        round(random(5, 10))
      )
    );
  }
  for (let i = 0; i < 100; i++) {
    snow.push(
      new Snowflake(
        round(random(width)),
        round(random(height)),
        round(random(5, 15)),
        round(random(5, 10))
      )
    );
  }
  for (let i = 0; i < 100; i++) {
    flowers.push(
      new Flower(
        round(random(width)),
        round(random(height)),
        round(random(5, 10)),
        round(random(10, 20))
      )
    );
  }
  for (let i = 0; i < 100; i++) {
    leaves.push(
      new Leaf(
        round(random(width)),
        round(random(height)),
        round(random(10, 20)),
        round(random(5, 10))
      )
    );
  }

  season = 1;
}

function windowResized() {
  resizeCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background(0, 0, 95);
  season = slider.value();

  if (season == 1) {
    background(60, 100, 30);
    snowman.show();
    for (let i = 0; i < 100; i++) {
      snow[i].show();
      snow[i].fall();
    }
  }

  if (season == 2) {
    background(60, 30, 100);
    for (let i = 0; i < grass.length; i++) {
      grass[i].show();
      grass[i].grow();
    }
    for (let i = 0; i < 100; i++) {
      flowers[i].show();
      flowers[i].fall();
    }
  }

  if (season == 3) {
    background(95, 40, 100);
    for (let i = 0; i < 100; i++) {
      drops[i].show();
      drops[i].fall();
    }
    rainbow.show();
  }

  if (season == 4) {
    background(10, 60, 100);
    for (let i = 0; i < pumpkins.length; i++) {
      pumpkins[i].show();
    }
    for (let i = 0; i < 100; i++) {
      leaves[i].show();
      leaves[i].fall();
    }
  }

  for (let i = 0; i < clouds.length; i++) {
    clouds[i].show();
    clouds[i].move();
  }

  stroke(30, 80, 50);

  translate(width / 2, height);
  branch(l, steps, 8);

  translate(width / 4, height - 400);
  branch1(l1, steps, 4);

  translate(-width / 2, height - 600);
  branch2(l2, steps, 4);
}

function branch(len, s, t) {
  strokeWeight(t);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (s > 0) {
    let bcoef = angle / branches;

    for (let i = 1; i <= branches; i++) {
      push();
      rotate(i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();

      push();
      rotate(-i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();
    }
  }
}

function branch1(len, s, t) {
  strokeWeight(t);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (s > 0) {
    let bcoef = angle / branches;

    for (let i = 1; i <= branches; i++) {
      push();
      rotate(i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();

      push();
      rotate(-i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();
    }
  }
}

function branch2(len, s, t) {
  strokeWeight(t);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (s > 0) {
    let bcoef = angle / branches;

    for (let i = 1; i <= branches; i++) {
      push();
      rotate(i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();

      push();
      rotate(-i * bcoef);
      branch(len * coef, s - 1, t * 0.8);
      pop();
    }
  }
}

class Cloud {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height / 2);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.x + 30, this.y + 10, 50, 50);
    ellipse(this.x + 70, this.y + 10, 50, 50);
    ellipse(this.x + 70, this.y - 10, 50, 50);
    ellipse(this.x + 40, this.y - 10, 50, 50);
    ellipse(this.x + 100, this.y, 50, 50);
  }

  move() {
    this.x += 5;
    this.y += random(-1, 1);

    if (this.x >= width) {
      this.x = 0;
    }
  }
}

class RainDrop {
  // The constructor will be called whenever you run `new RainDrop()`
  constructor(x, y, d, fallSpeed) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.fallSpeed = fallSpeed;
  }

  show() {
    noStroke();
    fill(60, 80, 80);
    ellipse(this.x, this.y, this.d);
    triangle(
      this.x - this.d / 2,
      this.y,
      this.x + this.d / 2,
      this.y,
      this.x,
      this.y - this.d
    );
  }

  fall() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
}

class Snowflake {
  constructor(x, y, l, fallSpeed) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.fallSpeed = fallSpeed;
  }

  show() {
    strokeWeight(2);
    stroke(100);
    noFill();
    line(this.x - this.l, this.y, this.x + this.l, this.y);
    line(
      this.x + this.l / 2,
      round(this.y - (this.l / 2) * sqrt(3)),
      this.x - this.l / 2,
      round(this.y + (this.l / 2) * sqrt(3))
    );
    line(
      this.x + this.l / 2,
      round(this.y + (this.l / 2) * sqrt(3)),
      this.x - this.l / 2,
      round(this.y - (this.l / 2) * sqrt(3))
    );
  }

  fall() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
}

class Leaf {
  constructor(x, y, l, fallSpeed) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.fallSpeed = fallSpeed;
    this.c = round(random(1, 5));
  }

  show() {
    strokeWeight(1);
    if (this.c == 1) {
      stroke(30, 80, 80);
      fill(30, 80, 80);
    } else if (this.c == 2) {
      stroke(0, 80, 80);
      fill(0, 80, 80);
    } else if (this.c == 3) {
      stroke(7, 80, 80);
      fill(7, 80, 80);
    } else if (this.c == 4) {
      stroke(14, 80, 80);
      fill(14, 80, 80);
    }
    ellipse(this.x, this.y, this.l / 2, this.l);
    line(this.x, this.y - this.l / 4, this.x, this.y + (this.l * 3) / 4);
  }

  fall() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
}

class Flower {
  constructor(x, y, l, fallSpeed) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.fallSpeed = fallSpeed;
  }

  show() {
    stroke(90, 80, 80);
    fill(90, 80, 80);
    noStroke();
    for (let i = 0; i < 10; i++) {
      ellipse(this.x, this.y + this.l, this.l / 2, this.l * 2);
      rotate(Math.PI / 5);
    }
  }

  fall() {
    this.y += this.fallSpeed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }
}

class Rainbow {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    strokeWeight(20);
    stroke(0, 80, 80);
    noFill();
    arc(width / 2, height - 100, width + 200, 1000, Math.PI, 0);
    stroke(7, 80, 80);
    arc(width / 2, height - 80, width + 200, 1000, Math.PI, 0);
    stroke(17, 80, 80);
    arc(width / 2, height - 60, width + 200, 1000, Math.PI, 0);
    stroke(30, 80, 80);
    arc(width / 2, height - 40, width + 200, 1000, Math.PI, 0);
    stroke(60, 80, 80);
    arc(width / 2, height - 20, width + 200, 1000, Math.PI, 0);
    stroke(80, 80, 80);
    arc(width / 2, height, width + 200, 1000, Math.PI, 0);
  }
}

class Snowman {
  constructor() {}

  show() {
    fill(0, 255, 0);
    strokeWeight(0);

    //snowman
    fill(255);
    ellipse(500, 700, 200, 200);
    ellipse(500, 575, 150, 150);
    ellipse(500, 475, 100, 100);

    //h
    fill(0);
    rect(465, 340, 70, 100);
    ellipse(500, 440, 100, 10);

    //e
    ellipse(485, 465, 5, 5);
    ellipse(515, 465, 5, 5);

    //c
    fill(255, 165, 0);
    triangle(500, 475, 500, 485, 540, 500);

    //a
    stroke(139, 69, 19);
    strokeWeight(5);
    line(430, 575, 350, 550);
    line(570, 575, 650, 550);

    //s
    strokeWeight(0);
    fill(0, 80, 80);
    rect(455, 500, 90, 20);
    rect(455, 500, 20, 80);

    //b
    fill(0);
    ellipse(500, 540, 7, 7);
    ellipse(500, 570, 7, 7);
    ellipse(500, 600, 7, 7);
  }
}

class Pumpkin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = createImg(
      "http://blogs.ifas.ufl.edu/desotoco/files/2017/10/Pumpkin-300x210.png"
    );
  }

  show() {
    image(this.img, this.x, this.y, this.img.width / 4, this.img.height / 4);
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
    fill(30, 80, 80);

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
