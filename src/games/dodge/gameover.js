import { Sprite } from "pixi.js";


const gameover = Sprite.from('/gameover.png')
gameover.anchor.set(.5)
gameover.x = window.innerWidth / 2
gameover.y = (window.innerHeight / 2 ) - 100

export{
    gameover
}