import { start_db } from "$lib/server/db";
import { error } from "console";

start_db().then(()=>{
    console.log('lewat hooks');
    
}).catch(e=>{error(e)})