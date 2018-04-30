<template>
    <div class="films">
        <p id='myId'>{{ msg }}</p>

    </div>
</template>

<script>

import axios from 'axios'

    export default {
        name: "films",
        data (){
            return {
                msg: 'in the films'
            }        
        }
        
    }
</script>

<style scoped>
    .films{
        background-color: yellow;
    }
</style>