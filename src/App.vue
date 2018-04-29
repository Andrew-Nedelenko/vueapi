<template>
  <div id="app">
    <p>{{msg}}</p>
    <nav>
      <router-link to="/starships">starships</router-link>
      <router-link to="/films">films</router-link>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100 vh;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
  text-decoration: none;
  background-color: rgba(173,155,147,0.5);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  transition: .1s;
}


a:hover{
  color: black;
  text-decoration: none;
  background-color: rgba(10,169,255,0.8);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  transition: .1s;
}
</style>
