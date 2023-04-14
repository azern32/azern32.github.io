import { Ticker, Renderer, Container } from "pixi.js";


let renderer = new Renderer({
    antialias:true,
    backgroundColor:"#F0F0F0",
    height:innerHeight - 200,
    width: innerWidth
})
let ticker = new Ticker()
let gameContainer = new Container()

export {renderer, gameContainer, ticker}