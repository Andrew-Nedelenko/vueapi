<template>
    <div class="starships">
        <p>in starships</p> <!--can`t render vue template, axios OK, but can`t fetched list of ship on page -->

    </div>
</template>

<script>

    import axios from 'axios'

    let url = 'https://swapi.co/api/starships/'
    axios.get(url).then(responce =>{
        console.log(responce)
        this.results = responce.data.results
    }).catch(e => {
        this.errors.push(e)
    })
    export default {
        name: 'starships',
        results: []

    }


</script>

<style scoped>

.starships{
    background-color: lightblue;
}

</style>