<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link>
    <div style="margin-top:10px">
      <router-link to="/contact-us"  class="button">
        Contact Us
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button{
  background-color: lightblue;
  padding: 5px;
  border-radius:5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
