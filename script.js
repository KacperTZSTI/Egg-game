import { res } from "./res.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./gameLoop.js";
import { Input, LEFT } from "./input.js";
import { Animations } from "./animation_player.js";
import { FrameIndexPattern } from "./pattern.js";
import { CHARGE_LEFT, CHARGE_RIGHT, COUGHT1, COUGHT2, DASH_LEFT1, DASH_LEFT2, DASH_RIGHT1, DASH_RIGHT2, SAW, STAND_LEFT, STAND_RIGHT, WALK_LEFT, WALK_RIGHT } from "./animation.js";


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const input = new Input();
let facing = "LEFT";
let z = false;
let d = 0;
let p = "green";
let dmg = false;
let flash = false;
let score = 0;

const back = new Sprite({
  resource: res.images.back2,
  frameSize: new Vector2(1800, 1700)
}
)

const bun = new Sprite({
  resource: res.images.bun2 ,
  frameSize: new Vector2(176,160),
  hFrames: 13,
  vFrames: 2,
  frame: 0,
  width: 160,
  height: 160,
  animations: new Animations({
    idle_l: new FrameIndexPattern(STAND_LEFT),
    idle_r: new FrameIndexPattern(STAND_RIGHT),
    move_l: new FrameIndexPattern(WALK_LEFT),
    move_r: new FrameIndexPattern(WALK_RIGHT),
    charge_l: new FrameIndexPattern(CHARGE_LEFT),
    charge_r: new FrameIndexPattern(CHARGE_RIGHT),
    dash_l1: new FrameIndexPattern(DASH_LEFT1),
    dash_l2: new FrameIndexPattern(DASH_LEFT2),
    dash_r1: new FrameIndexPattern(DASH_RIGHT1),
    dash_r2: new FrameIndexPattern(DASH_RIGHT2),
    flash1: new FrameIndexPattern(COUGHT1),
    flash2: new FrameIndexPattern(COUGHT2),
  })
})

const eg = new Sprite({
  resource: res.images.eg,
  frameSize: new Vector2(500, 500)
}
)

const saw = new Sprite({
  resource: res.images.saw,
  frameSize: new Vector2(75, 500),
  animations: new Animations({
    spin: new FrameIndexPattern(SAW),
  })
}
)

let bunPos = new Vector2(350, 640);

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyZ") {
    z = true;
    d +=1;
  }
})
document.addEventListener("keyup", (e) => {
  if (e.code === "KeyZ") {
    z = false;
  }
})

function update(delta){
  for (let i = 0; i < eggs.length; i++) {
    eggs[i].y += eggs[i].speed;
    eggs[i].speed += 0.1;
    if (
      eggs[i].x >= bunPos.x - 60 && eggs[i].y >= bunPos.y -60 && eggs[i].x <= bunPos.x + 80 && eggs[i].y <= bunPos.y +100
    ){
      console.log("eggscop")
      eggs.splice(i, 1);
      flash = true;
      score += 1;
  }
  }
  for (let i = 0; i < saws.length; i++) {
    saws[i].y += saws[i].speed;
    saws[i].speed += 0.1;
    if (
      saws[i].x >= bunPos.x - 60 && saws[i].y >= bunPos.y -60 && saws[i].x <= bunPos.x + 80 && saws[i].y <= bunPos.y +100
    ){
      console.log("dmg")
      saws.splice(i, 1);
      dmg = true;
      score -= 5;
  }
  }
  if(!input.direction){
    if(facing == "LEFT"){bun.animations.play("idle_l")}
    if(facing == "RIGHT"){bun.animations.play("idle_r")}
  }
  if(z == false && d == 0){
    if (input.direction == "LEFT"){
      bunPos.x -=4;
      bun.animations.play("move_l");
    }
    if (input.direction == "RIGHT"){
      bunPos.x +=4;
      bun.animations.play("move_r");
    }
  }
  if(z == true){
    if (input.direction == "LEFT"){
      bunPos.x -=1;
      bun.animations.play("charge_l");
    }
    if (input.direction == "RIGHT"){
      bunPos.x +=1;
      bun.animations.play("charge_r");
    }
  }
  if(z == false && d > 0){
    if (input.direction == "LEFT"){
      bunPos.x -=9;
      bun.animations.play("dash_l1");
      d-=1;
    }
    if (input.direction == "RIGHT"){
      bunPos.x +=9;
      bun.animations.play("dash_r1");
      d-=1;
    }
  }
  if(flash == true){
    if(!input.direction){
      if(facing == "LEFT"){bun.animations.play("flash1")}
      if(facing == "RIGHT"){bun.animations.play("flash2")}
    }
    if (input.direction == "LEFT"){
      bunPos.x -=0;
      bun.animations.play("flash1");
    }
    if (input.direction == "RIGHT"){
      bunPos.x +=0;
      bun.animations.play("flash2");
    }
    setTimeout(() => {
      flash = false;
    }, 130);
  }
  if(dmg == true){
    if(!input.direction){
      if(facing == "LEFT"){bun.animations.play("flash1")}
      if(facing == "RIGHT"){bun.animations.play("flash2")}
    }
    if (input.direction == "LEFT"){
      bunPos.x +=1;
      bun.animations.play("flash1");
    }
    if (input.direction == "RIGHT"){
      bunPos.x -=1;
      bun.animations.play("flash2");
    }
    setTimeout(() => {
      dmg = false;
    }, 400);
  }
  facing = input.direction ?? facing;
  bun.step(delta);

}

//eggs
let eggs = [];

function drawEggs() {
  for (let i = 0; i < eggs.length; i++) {
    eg.drawImage(ctx, eggs[i].x, eggs[i].y);
  }
}

setInterval(() => {
  eggs.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: 50,
    speed: -4
  });
}, 1000);

//saws
let saws = [];

function drawSaws() {
  for (let i = 0; i < saws.length; i++) {
    saw.drawImage(ctx, saws[i].x, saws[i].y);
  }
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  back.drawImage(ctx, 0, 0);
  bun.drawImage(ctx, bunPos.x, bunPos.y);
  drawEggs();
  drawSaws();
}

setInterval(() => {
  saws.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: 50,
    speed: -3
  });
}, 1000);

const gameLoop = new GameLoop(update, draw);
gameLoop.start();