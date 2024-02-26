export const LEFT = "LEFT"
export const RIGHT = "RIGHT"


export class Input {
  constructor() {

    this.heldDirections = [];

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        this.onArrowPressed(LEFT);

      }
      if (e.code === "ArrowRight") {
        this.onArrowPressed(RIGHT);
      }
    })

    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowLeft") {
        this.onArrowReleased(LEFT);
      }
      if (e.code === "ArrowRight") {
        this.onArrowReleased(RIGHT);
      }
    })
  }

  get direction() {
    return this.heldDirections[0];
  }

  onArrowPressed(direction) {
    if (this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);
    if (index === -1) {
      return;
    }
    this.heldDirections.splice(index, 1);
  }
}