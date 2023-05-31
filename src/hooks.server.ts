import { start_db } from "$lib/server/db";
import { error } from "console";
import { listTodo } from "$lib/server/todo";

start_db().then(()=>{
    console.log('lewat hooks');
    
}).catch(e=>{error(e)})


export async function handle({event, resolve}){
    let data =await listTodo.find().toArray()
    
    event.locals.data = JSON.stringify(data)
    return await resolve(event)
}

