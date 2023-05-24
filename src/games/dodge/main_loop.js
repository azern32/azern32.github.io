import { RGBSplitFilter } from "pixi-filters";
import { gameover } from "./gameover";
import {gameContainer, renderer, ticker} from "./globalvar";
import {player} from './player';

gameContainer.addChild(player)
gameContainer.addChild(gameover)


ticker.add(function(delta){
    renderer.render(gameContainer)
    player.accelerate(window.innerWidth / 2, 1)
    player.x += player.speed



    // console.log(Math.abs(Math.cos(temp)) * 15);
    // gameContainer.children[0].rotation += delta * .01
})

ticker.start()
export { renderer }

gameContainer.onpointerdown = (e) => {
    console.log(e.global);
    console.log(player.speed);


    player.accelerate(e.globalX, -50)
}

// gameContainer.addEventListener('pointermove', (e)=>{
//     ticker.stop()
//     // player.position.copyFrom(e.global)
// })
