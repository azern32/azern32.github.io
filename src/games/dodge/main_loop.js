import {gameContainer, renderer, ticker} from "./globalvar";
import {player} from './player';
import { fall2side } from "./physic";
import { Graphics } from "pixi.js";

gameContainer.addChild(player)


ticker.add(function(delta){
    renderer.render(gameContainer)
    // gameContainer.children[0].rotation += delta * .01
})

ticker.start()
export { renderer }

// gameContainer.onpointerdown = (e) => {
//     console.log(player.fall2side());
// }

gameContainer.addEventListener('pointertap', (e)=>{
    // player.position.copyFrom(e.global)
    console.log(player.fall2side(e.globalX));
    console.log(e.global);
})

// gameContainer.onpointermove = (e) =>{
//     square.position.set(e.global.x, e.global.y)
// }