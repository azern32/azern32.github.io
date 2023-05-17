import { Graphics } from "pixi.js";

class Entity extends Graphics {
    fall2side(xRef){ // cuma kembalikan positif atau negatif
        return this.x < xRef ? -1 : 1
    }
    speed = 0
    accel = 0
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
player.accel = 3
player.speed =+ player.accel


export {player}

