import { Ticker, Renderer, Container, Rectangle } from "pixi.js";


let renderer = new Renderer({
    antialias:true,
    backgroundColor:"#F0F0F0",
    height:innerHeight - 200,
    width: innerWidth
})
let ticker = new Ticker()

let gameContainer = new Container()
gameContainer.interactive = true
gameContainer.hitArea = new Rectangle(0, 0, screen.width, screen.height);


export {renderer, gameContainer, ticker}