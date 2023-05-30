import { listTodo } from "$lib/server/todo";

export const load = async function(){
    const data = await listTodo.find().toArray()

    console.log('daata di page.server ', data);

    return {
        todos: data
    }
}