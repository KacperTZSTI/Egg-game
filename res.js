class Res {
    constructor() {
      this.toLoad = {
        back: "/sprites/back.png",
        bun: "/sprites/bnuyy.png",
        eg: "/sprites/eg1.png",
        saw: "/sprites/saw.png",
        back2: "/sprites/back2.png",
        bun2: "/sprites/bnuyy2.png"
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