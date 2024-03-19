import { res } from "./res.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./gameLoop.js";
import { Input } from "./input.js";
import { Animations } from "./animation_player.js";
import { FrameIndexPattern } from "./pattern.js";
import { sfx } from "./sfx.js";
import {BREAK, CHARGE_LEFT, CHARGE_RIGHT, COUGHT1, COUGHT2, DASH_LEFT1, DASH_LEFT2, DASH_RIGHT1, DASH_RIGHT2, DUCK1, DUCK2, FLOAT, SAW, STAND_LEFT, STAND_RIGHT, WALK_LEFT, WALK_RIGHT } from "./animation.js";

const d_over_dx = 0.00019245008973;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const input = new Input();

let facing = "LEFT";
let z = false;
let d = 0;
let p = false;
let dmg = false;
let sfx_r = 99;
let flash = false;
let duck = false;
let score2 = 0;
let hiscore = window.localStorage.getItem("hiscore")??0;
let hiscore2 = window.localStorage.getItem("hiscore2")??0;
let trans = false;
let trans2 = false;
let trans3 = false;
let trans4 = false;
let trans5 = false;
let boss = false;
let br = false;
let afterimage = false;
let eg_int = 800;
document.querySelector("#hiscore2").innerText = `High score: ${hiscore2}`

let timer2 = 120;
const RESOLUTION = new Vector2(1200, 700)

sfx.load.play();

//endgame
function saveHiscore(){
  if(score2>hiscore2){
    hiscore2 = score2;
    window.localStorage.setItem("hiscore2", score2)
    document.querySelector("#hiscore2").innerText = `High score: ${hiscore2}`
  }
  
  if(timer2<0){
    sfx.loss.play();
    alert(`Congratulations\nyou collected ${score2} eggs.\n\n...`)
    timer2 = 20;
    window.location.assign("/")
  }

}

document.querySelector("#pallete").onclick = () => {
  p = !p;
  back.resource = p ? res.images.back : res.images.back2;
  bun.resource = p ? res.images.bun : res.images.bun2;
}


//objects
const goldegg = new Sprite({
  resource: res.images.goldegg,
  frameSize: new Vector2(88, 115),
  hFrames: 6,
  vFrames: 1,
  frame: 0,
  width: 100,
  height: 100,
  animations: new Animations({
    float: new FrameIndexPattern(FLOAT),
    break: new FrameIndexPattern(BREAK),
  })
}
)

let goldPos = new Vector2(520, 50);
let spd = -4;

function drawGold(){
  goldegg.drawImage(ctx, goldPos.x, goldPos.y);
  if (trans3==true){
    goldPos.y += spd;
    spd += 0.1;
  }
}

const back = new Sprite({
  resource: res.images.back2,
  frameSize: new Vector2(1800, 1700)
}
)

const crow_sh = new Sprite({
  resource: res.images.crow_sh,
  frameSize: new Vector2(400, 500)
}
)

const crow_left = new Sprite({
  resource: res.images.crow_l,
  frameSize: new Vector2(400, 500)
}
)
let crowLPos = new Vector2(-400, -40);

const indicator = new Sprite({
  resource: res.images.indicator,
  frameSize: new Vector2(1000, 1000)
}
)

const bun = new Sprite({
  resource: res.images.bun2,
  frameSize: new Vector2(176, 160),
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
    duck1: new FrameIndexPattern(DUCK1),
    duck2: new FrameIndexPattern(DUCK2),
  })
})

const eg = new Sprite({
  resource: res.images.eg,
  frameSize: new Vector2(500, 500)
}
)

let bunPos = new Vector2(350, RESOLUTION.y - bun.height);

//basic movement
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyZ") {
    z = true;
  }
})
document.addEventListener("keyup", (e) => {
  if (e.code === "KeyZ") {
    z = false;
  }
})
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowDown") {
    duck = true;
  }
})
document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowDown") {
    duck = false;
  }
})

//boss transition initalizer
function transition(){
  setTimeout(() => {
    trans2 = true;
    console.log("1");
    music.fade(1, 0, 4000);
  }, 1)
  setTimeout(() => {
    trans3 = true;
    console.log("2");

  }, 5000)
  setTimeout(() => {
    trans3 = false;
    br = true;
    console.log("2");
    sfx.break.play();
  }, 6600)
  setTimeout(() => {
    sfx.bird.play()
    trans4 = true;
    console.log("3");
  }, 6300)
  setTimeout(() => {
    trans5 = true;
    console.log("4");
    boss = true;
    music2.play();
    music2.rate(1.565);
  }, 8300)
  setTimeout(() => {
    trans2 = false;
    trans4 = false;
    console.log("5");
  }, 15000)
  trans = true;
}

function update(delta) {

  if (!z && !input.heldDirections.length) d = 0;
  for (let i = 0; i < eggs.length; i++) {
    eggs[i].y += eggs[i].speed;
    eggs[i].speed += 0.1;

    if (
      eggs[i].x >= bunPos.x - 60 && eggs[i].y >= bunPos.y - 60 && eggs[i].x <= bunPos.x + 80 && eggs[i].y <= bunPos.y + 100
    ) {
      sfx.egg.play();
      eggs.splice(i, 1);
      flash = true;
      score2 += 1;
    }
  }

  if(trans5==false){
  if(br==false){
    goldegg.animations.play("float");
    goldegg.step(delta);
  }
  if(trans4==true){
    crowLPos.x += 30
  }if(br==true){
    goldegg.animations.play("break");
    goldegg.step(delta);
  }
  }

  if (!input.direction) {
    if (facing == "LEFT") { bun.animations.play("idle_l") }
    if (facing == "RIGHT") { bun.animations.play("idle_r") }
  }
  if (z == false && d == 0) {
    if (input.direction == "LEFT") {
      bunPos.x -= 4;
      bun.animations.play("move_l");
    }
    if (input.direction == "RIGHT") {
      bunPos.x += 4;
      bun.animations.play("move_r");
    }
  }
  if (z == true) {
        // sfx.egg.play();
    d += 2;
    if (input.direction == "LEFT") {
      bunPos.x -= 1;
      bun.animations.play("charge_l");
    }
    if (input.direction == "RIGHT") {
      bunPos.x += 1;
      bun.animations.play("charge_r");
    }
  }
  if (z == false && d > 0) {
    if (input.direction == "LEFT") {
      bunPos.x -= 9;
      bun.animations.play("dash_l1");
      d -= 1;
    }
    if (input.direction == "RIGHT") {
      bunPos.x += 9;
      bun.animations.play("dash_r1");
      d -= 1;
    }
  }
  if (bunPos.x < -120) bunPos.x = RESOLUTION.x;
  if (bunPos.x > RESOLUTION.x) bunPos.x = -120;
  if (flash == true) {
    if (!input.direction) {
      if (facing == "LEFT") { bun.animations.play("flash1") }
      if (facing == "RIGHT") { bun.animations.play("flash2") }
    }
    if (input.direction == "LEFT") {
      bunPos.x -= 0;
      bun.animations.play("flash1");
    }
    if (input.direction == "RIGHT") {
      bunPos.x += 0;
      bun.animations.play("flash2");
    }
    setTimeout(() => {
      flash = false;
    }, 130);
  }
  if (dmg == true) {
    if (!input.direction) {
      if (facing == "LEFT") { bun.animations.play("flash1") }
      if (facing == "RIGHT") { bun.animations.play("flash2") }
    }
    if (input.direction == "LEFT") {
      bunPos.x += 1;
      bun.animations.play("flash1");
    }
    if (input.direction == "RIGHT") {
      bunPos.x -= 1;
      bun.animations.play("flash2");
    }
    setTimeout(() => {
      dmg = false;
    }, 400);
  }
  facing = input.direction ?? facing;

  if (duck == true) {
    if (!input.direction) {
      if (facing == "LEFT") { bun.animations.play("duck1") }
      if (facing == "RIGHT") { bun.animations.play("duck2") }
    }
    if (input.direction == "LEFT") {
      bunPos.x += 1;
      bun.animations.play("duck1");
    }
    if (input.direction == "RIGHT") {
      bunPos.x -= 1;
      bun.animations.play("duck2");
    }
  }
  facing = input.direction ?? facing;
  bun.step(delta);
  
  //hazards
  for (let i = 0; i < saws.length; i++) {
    saws[i].position.y += saws[i].speed;
    saws[i].speed += 0.15;
    saws[i].animations.play("spin");
    saws[i].step(delta);
    if (
      saws[i].position.x >= bunPos.x - 60 && saws[i].position.y >= bunPos.y - 60 && saws[i].position.x <= bunPos.x + 80 && saws[i].position.y <= bunPos.y + 100
    ) {
      sfx_r = Math.random()
      if(sfx_r < 0.25){
        sfx.saw1.play();
      }
      if(sfx_r > 0.25 && sfx_r < 0.5){
        sfx.saw2.play();
      }
      if(sfx_r > 0.5 && sfx_r < 0.75){
        sfx.saw3.play();
      }
      if(sfx_r > 0.75){
        sfx.saw4.play();
      }
      saws.splice(i, 1);
      dmg = true;
      saveHiscore();
      score2 -= 3;
    }
    else if (saws[i].position.y > RESOLUTION.y && saws[i].bounced) {
      saws.splice(i, 1);
    }
    else if (saws[i].position.y > RESOLUTION.y && !saws[i].bounced) {
      let sfx_b = Math.random();
      if(sfx_b > 0.994){
        sfx.funi.play();
      }else{
        sfx.bounce.play();
      }
      saws[i].speed = -10;
      saws[i].bounced = true;
      saws[i].position.y = RESOLUTION.y - 1;
    }
  }
  //crow
  indicator.position.y += 20;
  if(boss==true){
  for (let i = 0; i < crow.length; i++) {
    crow_sh.drawImage(ctx, crow[i].position.x, crow[i].position.y)
    crow[i].position.y += 30;
    if(crow[i].frame ==0){
    crow[i].position.x -= 1;
    }
    if(crow[i].frame ==1){
      crow[i].position.x += 1;
      }
    // setInterval(() => {
    //   crow_sh.drawImage(ctx, crow[i].position.x, crow[i].position.y)
    // }, 100)
    if (
      crow[i].position.x >= bunPos.x - 300 && crow[i].position.y >= bunPos.y - 60 && crow[i].position.x <= bunPos.x + 10 && crow[i].position.y <= bunPos.y + 100
    ) {
      sfx_r = Math.random()
      if(sfx_r < 0.25){
        sfx.saw1.play();
      }
      if(sfx_r > 0.25 && sfx_r < 0.5){
        sfx.saw2.play();
      }
      if(sfx_r > 0.5 && sfx_r < 0.75){
        sfx.saw3.play();
      }
      if(sfx_r > 0.75){
        sfx.saw4.play();
      }
      dmg = true;
      saveHiscore();
      score2 -= 2;
    }
    else if (crow[i].position.y > RESOLUTION.y) {
      crow.splice(i, 1);
    }
    if(afterimage==false){
    setInterval(() => {

    }, 10);
    afterimage = true;
  }
  }
  }
}

//eggs
let eggs = [];


function drawEggs() {
  for (let i = 0; i < eggs.length; i++) {
    eg.drawImage(ctx, eggs[i].x, eggs[i].y);
  }
}

if(boss==true){eg_int = 2000}

setInterval(() => {
  if(trans2!=true){
  eggs.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: 50,
    speed: -4
  });
}
}, eg_int);


//saws
let saws = [];

function drawSaws() {
  for (let i = 0; i < saws.length; i++) {
    saws[i].drawImage(ctx, saws[i].position.x, saws[i].position.y);
  }
}


setInterval(() => {
  let chance = (d_over_dx * ((100-timer2) ** 2))/10
  if (Math.random() > chance) return;
  let new_saw = new Sprite({
    resource: res.images.saw,
    frameSize: new Vector2(75, 500),
    hFrames: 8,
    position: new Vector2(Math.random() * (canvas.width - 20) + 10, 50),
    vFrames: 1,
    frame: 0,
    animations: new Animations({
      spin: new FrameIndexPattern(SAW),
    })
  }
  )
  new_saw.speed = -5;
  new_saw.bounced = (Math.random() > 0.6)
  new_saw.animations.play("spin")
  if(trans==false){
  saws.push(new_saw);
}
}, 50);

//boss
let crow = [];

function drawCrow() {
  for (let i = 0; i < crow.length; i++) {
    crow[i].drawImage(ctx, crow[i].position.x, crow[i].position.y);
    indicator.drawImage(ctx, crow[i].position.x, crow[i].position.y+1400);
  }
}



setInterval(() => {
  if(boss==true){
  let chance = (d_over_dx * ((100-timer2) ** 3))
  if (Math.random() > chance) return;
  let new_crow = new Sprite({
    resource: res.images.crow,
    frameSize: new Vector2(360, 500),
    hFrames: 3,
    position: new Vector2(bunPos.x-20, -2000),
    vFrames: 1,
    frame: 0,
  }
  )
  crow.push(new_crow);
  if(boss == true){
    sfx.bird.play();
  }
}
}, 3000);

setTimeout(() => {
  setInterval(() => {
    if(boss==true){
    let chance = (d_over_dx * ((100-timer2) ** 2))
    if (Math.random() > chance) return;
    let new_crow = new Sprite({
      resource: res.images.crow,
      frameSize: new Vector2(360, 500),
      hFrames: 3,
      position: new Vector2(bunPos.x+20, -2000),
      vFrames: 1,
      frame: 1,
    }
    )
    crow.push(new_crow);
    if(boss == true){
      sfx.bird.play();
    }
  }
  }, 3000);
}, 1500);

// var music = {
//   menu: new Howl({
//       src: [
//           "sfx/game.wav"
//       ],
//       autoplay: true,
//       loop: true,
//       muted: false,
//   })
// }

var music = new Howl({
  src: ['sfx/game.wav'],
  autoplay: true,
  loop: true,
});

var music2 = new Howl({
  src: ['sfx/game.wav'],
  loop: true,
});

function draw() {
  if(timer2<11 && trans == false){
    transition()
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  back.drawImage(ctx, 0, 0);
  bun.drawImage(ctx, bunPos.x, bunPos.y);
  document.querySelector("#score2").innerText = `Eggs: ${score2}`
  drawEggs();
  drawSaws();
  drawGold();
  crow_left.drawImage(ctx, crowLPos.x, crowLPos.y);
  drawCrow();
} 

setInterval(() => {
  if(trans2==false){
  timer2 -= 1;
  }else if(trans3 ==true){
    timer2+= 15;
  }
  saveHiscore()
  document.querySelector("#timer2").innerText = `Timer: ${timer2}`
}, 1000)

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
