import { gravity, sideGravity } from "./globalvar";

function fall2side(object, xReference, dtime) {
    // object is renderable
    
    // do nothing if object way over
    if (xReference < object.x) {
        
    }

    object.accel = sideGravity
    object.speed += object.accel / dtime

    return object.x -= object.speed
}



export{
    fall2side
}