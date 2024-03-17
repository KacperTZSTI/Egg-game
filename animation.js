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
  const makeDuckFrames = (rootFrame=0) => {
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
  const makeFloatFrames = (rootFrame=0) => {
    return {
      duration: 1200,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 200,
          frame: rootFrame+1
        },
        {
          time: 400,
          frame: rootFrame+2
        },
        {
          time: 600,
          frame: rootFrame+3
        },
        {
          time: 800,
          frame: rootFrame+2
        },
        {
          time: 1000,
          frame: rootFrame+1
        },
      ]
    }
  }
  const makeBreakFrames = (rootFrame=0) => {
    return {
      duration: 3000,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 2000,
          frame: rootFrame+1
        },
      ]
    }
  }
  const makeLaserFrames = (rootFrame=0) => {
    return {
      duration: 2700,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 50,
          frame: rootFrame+1
        },
        {
          time: 100,
          frame: rootFrame
        },
        {
          time: 150,
          frame: rootFrame+1
        },
        {
          time: 200,
          frame: rootFrame
        },
        {
          time: 250,
          frame: rootFrame+1
        },
        {
          time: 300,
          frame: rootFrame
        },
        {
          time: 350,
          frame: rootFrame+1
        },
        {
          time: 400,
          frame: rootFrame
        },
        {
          time: 450,
          frame: rootFrame+1
        },
        {
          time: 500,
          frame: rootFrame
        },
        {
          time: 550,
          frame: rootFrame+1
        },
        {
          time: 600,
          frame: rootFrame
        },
        {
          time: 650,
          frame: rootFrame+1
        },
        {
          time: 700,
          frame: rootFrame+2
        },
        {
          time: 750,
          frame: rootFrame+3
        },
        {
          time: 800,
          frame: rootFrame+4
        },
        {
          time: 850,
          frame: rootFrame+5
        },
        {
          time: 900,
          frame: rootFrame+6
        },
        {
          time: 950,
          frame: rootFrame+7
        },
        {
          time: 1000,
          frame: rootFrame+8
        },
        {
          time: 1100,
          frame: rootFrame+9
        },
        {
          time: 1200,
          frame: rootFrame+10
        },
        {
          time: 1300,
          frame: rootFrame+9
        },
        {
          time: 1400,
          frame: rootFrame+10
        },
        {
          time: 1500,
          frame: rootFrame+9
        },
        {
          time: 1600,
          frame: rootFrame+10
        },
        {
          time: 1700,
          frame: rootFrame+9
        },
        {
          time: 1800,
          frame: rootFrame+10
        },
        {
          time: 1900,
          frame: rootFrame+8
        },
        {
          time: 2000,
          frame: rootFrame+6
        },
        {
          time: 2100,
          frame: rootFrame+4
        },
        {
          time: 2300,
          frame: rootFrame+2
        },
        {
          time: 2400,
          frame: rootFrame
        },
        {
          time: 2450,
          frame: rootFrame+1
        },
        {
          time: 2500,
          frame: rootFrame
        },
        {
          time: 2550,
          frame: rootFrame+1
        },
      ]
    }
  }
  const makeSawFrames = (rootFrame=0) => {
    return {
      duration: 2300,
      frames: [
        {
          time: 0,
          frame: rootFrame
        },
        {
          time: 200,
          frame: rootFrame+1
        },
        {
          time: 400,
          frame: rootFrame+2
        },
        {
          time: 550,
          frame: rootFrame
        },
        {
          time: 700,
          frame: rootFrame+1
        },
        {
          time: 800,
          frame: rootFrame+2
        },
        {
          time: 900,
          frame: rootFrame
        },
        {
          time: 1000,
          frame: rootFrame+1
        },
        {
          time: 1050,
          frame: rootFrame+2
        },
        {
          time: 1100,
          frame: rootFrame
        },
        {
          time: 1150,
          frame: rootFrame+1
        },
        {
          time: 1200,
          frame: rootFrame+2
        },
        {
          time: 1250,
          frame: rootFrame
        },
        {
          time: 1300,
          frame: rootFrame+1
        },
        {
          time: 1350,
          frame: rootFrame+2
        },
        {
          time: 1400,
          frame: rootFrame
        },
        {
          time: 1450,
          frame: rootFrame+1
        },
        {
          time: 1500,
          frame: rootFrame+2
        },
        {
          time: 1550,
          frame: rootFrame+3
        },
        {
          time: 1600,
          frame: rootFrame+4
        },
        {
          time: 1650,
          frame: rootFrame+5
        },
        {
          time: 1700,
          frame: rootFrame+3
        },
        {
          time: 1750,
          frame: rootFrame+4
        },
        {
          time: 1800,
          frame: rootFrame+5
        },
        {
          time: 1850,
          frame: rootFrame+3
        },
        {
          time: 1900,
          frame: rootFrame+4
        },
        {
          time: 1950,
          frame: rootFrame+5
        },
        {
          time: 2000,
          frame: rootFrame+3
        },
        {
          time: 2050,
          frame: rootFrame+4
        },
        {
          time: 2100,
          frame: rootFrame+5
        },
        {
          time: 2150,
          frame: rootFrame+6
        },
        {
          time: 2200,
          frame: rootFrame+7
        },
        {
          time: 2250,
          frame: rootFrame+8
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
  export const LASER = makeLaserFrames(0);

  export const DUCK1 = makeDuckFrames(2);
  export const DUCK2 = makeDuckFrames(15);

  export const FLOAT = makeFloatFrames(0);
  export const BREAK = makeBreakFrames(4);