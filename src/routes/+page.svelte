<script>
    async function getAllFake() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => {return response.json()});
        return await res
    }

    console.log(getAllFake());



    export let data
    console.log(data);
</script>

<h1>{getAllFake()}</h1>