<script>
    
    
    async function getAllFake() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => {return response.json()});
        return await res
    }

    console.log(getAllFake());



    export let data
    let {todos} = data
    console.log(data.todos);
</script>

<ul>
    {#each todos as item}
        <li id={item.id}>{item.title}</li>
         <!-- content here -->
    {/each}
</ul>