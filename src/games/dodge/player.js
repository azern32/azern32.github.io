import { Graphics } from "pixi.js";
import { gravity, sideGravity } from "./globalvar";

class Entity extends Graphics {
    speed = 0

    fall2side(xRef){ // cuma kembalikan positif atau negatif
        let res = this.x - xRef
        return res == 0 ? 0
            : res > 0 ? 1 : -1
    }

    accelerate(xRef, multiplier){
        this.speed += sideGravity * this.fall2side(xRef) * multiplier
    }
}

const player = new Entity();

// Rectangle
player.beginFill(0xDE3249);
// player.lineStyle(2, 0xe5e7eb, 1);
player.moveTo(0, -20)
player.lineTo(25, 35)
player.lineTo(-25, 35)
player.closePath();
player.endFill();

player.pivot.set(0, player.height/2)
player.x = screen.width /2
player.y = screen.height /2


export {player}

