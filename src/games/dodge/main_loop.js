import {debug} from "./debug";
import {gameover} from "./gameover";
import {gameContainer, renderer, ticker} from "./globalvar";
import {player} from './player';

gameContainer.addChild(player)
gameContainer.addChild(gameover)
gameContainer.addChild(debug)


ticker.add(function(delta){
    renderer.render(gameContainer)
    player.accelerate(window.innerWidth / 2, delta)
    player.x += player.speed
    // player.y = 

    
    // console.log(Math.abs(Math.cos(temp)) * 15);
    // gameContainer.children[0].rotation += delta * .01
})

ticker.start()
export { renderer }

gameContainer.onpointerdown = (e) => {
    console.log(e.global);
    console.log(player.speed);

    player.accelerate(e.globalX, -Math.abs(e.globalX - player.x) * .5)
    console.log(`Selisih X antara player dan tap ${e.globalX - player.x} pixel`)
    debug.text = `${e.globalX - player.x} pixel`
}

// gameContainer.addEventListener('pointermove', (e)=>{
//     ticker.stop()
//     // player.position.copyFrom(e.global)
// })
