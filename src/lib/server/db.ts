import { MongoClient } from "mongodb"
import { MON_URL } from "$env/static/private"


const client = new MongoClient(MON_URL)

export function start_db() {
    console.log('sentuh db');
    
    return client.connect()
}

export default client.db()