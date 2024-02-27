import {Vector2} from "./Vector2.js";
// import {GameObject} from "./GameObject.js";

//extends GameObject 

export class Sprite {
  constructor({
      resource,
      frameSize,
      hFrames,
      vFrames,
      frame,
      scale,
      width,
      height,
      position,
      animations,
    }) {
    // super({
    //   name
    // });
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(112,96);
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.width = width;
    this.height = height;
    this.position = position ?? new Vector2(0,0);
    this.animations = animations ?? null;
    this.buildFrameMap();
  }

  buildFrameMap() {
    let frameCount = 0;
    for (let v=0; v<this.vFrames; v++) {
      for (let h=0; h<this.hFrames; h++) {
        this.frameMap.set(
            frameCount,
            new Vector2(this.frameSize.x * h, this.frameSize.y * v)
        )
        frameCount++;
      }
    }
  }

  step(delta) {
    if (!this.animations) {
      return;
    }
    this.animations.step(delta);
    this.frame = this.animations.frame;
  }

  drawImage(ctx, x, y) {
    if (!this.resource.isLoaded) {
      return;
    }

    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if (frame) {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
        this.resource.image,
        frameCoordX,
        frameCoordY,
        frameSizeX,
        frameSizeY,
        x,
        y,
        frameSizeX * this.scale,
        frameSizeY * this.scale,
    );
  }

}