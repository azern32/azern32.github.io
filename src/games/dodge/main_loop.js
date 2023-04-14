import {gameContainer, renderer, ticker} from "./globalvar";

// console.log(gameContainer);
// console.log(renderer);
// console.log(ticker); 

ticker.add(function(delta){
    renderer.render(gameContainer)
})

ticker.start()

console.log(document.getElementById('game'));
console.log(document.body);
export { renderer }