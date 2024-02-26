const makeStandingFrames = (rootFrame = 0) => {
    return {
      duration: 1000,
      frames: [
        {
          time: 0,
          frame: rootFrame,
        },
        {
            time: 500,
            frame: rootFrame+1
        },
      ]
    }
  }
  const makeWalkingFrames = (rootFrame=0) => {
    return {
      duration: 400,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 100,
          frame: rootFrame+1
        },
        {
          time: 200,
          frame: rootFrame+2
        },
        {
            time: 300,
            frame: rootFrame+3
        }
      ]
    }
  }
  const makeChargingFrames = (rootFrame=0) => {
    return {
      duration: 700,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 100,
          frame: rootFrame+1
        },
        {
          time: 200,
          frame: rootFrame+2
        },
                {
          time: 300,
          frame: rootFrame+1
        },
        {
          time: 400,
          frame: rootFrame+2
        },
                {
          time: 500,
          frame: rootFrame+1
        },
        {
          time: 600,
          frame: rootFrame+2
        }
      ]
    }
  }
  const makeDashingFrames1 = (rootFrame=0) => {
    return {
      duration: 300,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 100,
          frame: rootFrame+1
        },
        {
          time: 200,
          frame: rootFrame+2
        }
      ]
    }
  }
  const makeDashingFrames2 = (rootFrame=0) => {
    return {
      duration: 200,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 100,
          frame: rootFrame+1
        }
      ]
    }
  }
  const makeEggscopFrames = (rootFrame=0) => {
    return {
      duration: 500,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 400,
          frame: rootFrame+4
        }
      ]
    }
  }
  const makeSawFrames = (rootFrame=0) => {
    return {
      duration: 160,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 20,
          frame: rootFrame+1
        },
        {
          time: 20,
          frame: rootFrame+2
        },
        {
          time: 20,
          frame: rootFrame
        },
        {
          time: 20,
          frame: rootFrame+1
        },
        {
          time: 20,
          frame: rootFrame+2
        },
        {
          time: 20,
          frame: rootFrame+3
        },
        {
          time: 20,
          frame: rootFrame+4
        },
        {
          time: 20,
          frame: rootFrame+5
        },
      ]
    }
  }
  
  export const STAND_RIGHT = makeStandingFrames(13);
  export const STAND_LEFT = makeStandingFrames(0);
  
  export const WALK_RIGHT = makeWalkingFrames(22);
  export const WALK_LEFT = makeWalkingFrames(9);

  export const CHARGE_LEFT = makeChargingFrames(2);
  export const CHARGE_RIGHT = makeChargingFrames(15);

  export const DASH_LEFT1 = makeDashingFrames1(5);
  export const DASH_RIGHT1 = makeDashingFrames1(18);
  export const DASH_LEFT2 = makeDashingFrames2(7);
  export const DASH_RIGHT2 = makeDashingFrames2(20);

  export const COUGHT1 = makeEggscopFrames(4);
  export const COUGHT2 = makeEggscopFrames(17);

  export const DMG1 = makeEggscopFrames(4);
  export const DMG2 = makeEggscopFrames(15);

  export const SAW = makeSawFrames(0);
  