import { Graphics } from "pixi.js";


const square = new Graphics();

// Rectangle
square.beginFill(0xDE3249);
square.drawRect(0, 0, 100, 100);
square.endFill();

square.pivot.set(square.width/2, square.height/2)
square.x = screen.width /2
square.y = screen.height /2

export {square}
