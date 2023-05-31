import { prisma } from "$lib/server/prisma.db";
// import { listTodo } from "$lib/server/todo";


// async function getdata() {
//     return await listTodo.find().toArray()
// }

// let perubahan = listTodo.watch()
// perubahan.on('change', async (changeEvent) => {
//     console.log(changeEvent);
// })


export const load = async function(event){

    let data = event.locals.data

    /** Kalo ini untuk pake mongo */
    // data = await getdata()
    // data = JSON.parse(JSON.stringify(data))


    /** Yang ini pake prisma */
    // data = await prisma.user.findMany()


    return {
        todos: JSON.parse(data),
    }

}