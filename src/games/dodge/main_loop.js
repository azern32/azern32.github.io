import {gameContainer, renderer, ticker} from "./globalvar";
import {square} from './player';

gameContainer.addChild(square)


ticker.add(function(delta){
    renderer.render(gameContainer)
    gameContainer.children[0].rotation += delta * .01
})

ticker.start()
export { renderer }

gameContainer.onpointerdown = (e) => {
    console.log(e);
}

gameContainer.onpointermove = (e) =>{
    square.position.set(e.global.x, e.global.y)
    // console.log(e.global);
}