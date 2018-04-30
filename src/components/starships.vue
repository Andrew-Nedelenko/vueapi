<template>
    <v-app class="starships">
        <template>
            <v-data-table :items="results" class="elevation-1" hide-actions>
                <template slot="items" slot-scope="props">
                    <td class="text-xs-right">{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.model }}</td>
                    <td class="text-xs-right">{{ props.item.films.length }}</td>
                </template>
            </v-data-table>
        </template>
    </v-app>
</template>

<script>

    import axios from 'axios'

    const HTTP = axios.create({

    })
    const url = 'https://swapi.co/api/starships/'
    export default {
        name: 'starships',
        data () {
            return {
                ms: 'in starships',
                results: []
            }
        },
        mounted () {
            this.getResults()
        },
        methods: {
            async getResults() {
                const { data } = await HTTP.get(url)
                console.log(data)
                this.results = data.results

            }
        }
    }


</script>

<style scoped>

.starships{
    background-color: lightblue;
    text-align-last: left;
    padding: 5px 10px 5px 20px;
    margin: 20px 0 0 0;
}

.starships td{
    padding: 20px;
}

.starships td:first-child:hover{
    cursor: pointer;
    background-color: rgba(255,255,62, 0.8);
    border-radius: 25px;
    transition: .2s;
}


</style>