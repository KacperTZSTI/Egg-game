class Res {
    constructor() {
      this.toLoad = {
        back: "/sprites/back.png",
        bun: "/sprites/bnuyy.png",
        eg: "/sprites/eg1.png",
        saw: "/sprites/saw.png",
        laser: "/sprites/laser.png",
        back2: "/sprites/back2.png",
        bun2: "/sprites/bnuyy2.png",
        black: "/sprites/black.png",
        r1: "/sprites/rl1.png",
        r2: "/sprites/rl2.png",
        r3: "/sprites/rl3.png",
        r4: "/sprites/rl4.png",
        r5: "/sprites/rl5.png",
        r6: "/sprites/rl6.png",
        r7: "/sprites/rl7.png",
        r8: "/sprites/rl8.png",
      };
  
      this.images = {};
  
      Object.keys(this.toLoad).forEach(key => {
        const img = new Image();
        img.src = this.toLoad[key];
        this.images[key] = {
          image: img,
          isLoaded: false
        }
        img.onload = () => {
          this.images[key].isLoaded = true;
        }
      })
    }
  }
  
  export const res = new Res();