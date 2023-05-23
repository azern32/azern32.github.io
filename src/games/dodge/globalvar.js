import { GlitchFilter } from "pixi-filters";
import { Ticker, Renderer, Container, Rectangle } from "pixi.js";


const glitch = new GlitchFilter({
    seed:.4,
    slices:25
})

let renderer = new Renderer({
    antialias:true,
    backgroundColor:"#F0F0F0",
    height:innerHeight - 200,
    width: innerWidth
})
let ticker = new Ticker()

let gameContainer = new Container()
gameContainer.eventMode = 'static'
gameContainer.hitArea = new Rectangle(0, 0, screen.width, screen.height);


let gravity = 10;
let sideGravity = .05;


export {renderer, gameContainer, ticker, gravity, sideGravity, glitch}