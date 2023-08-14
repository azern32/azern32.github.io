import { Container, Renderer, Ticker } from 'pixi.js';

let updater = new Ticker();
let gameContainer = new Container();
let renderer = new Renderer({
    backgroundColor: '#FFFFFF',
    antialias: true,
    width: innerWidth,
    height: innerHeight
});


updater.add(()=>{
    renderer.render(gameContainer)
})



export {
    updater, renderer, gameContainer
}