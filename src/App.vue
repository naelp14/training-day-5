<script src="../config/index.js"></script>
<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/simple.jpg" width="100px" height="100px">
    </router-link>
    <HeaderComp></HeaderComp>
    <div class="content">
    </div>
    <FooterComp></FooterComp>
  </div> 
</template>

<script>
import HeaderComp from '@/components/skeletons/HeaderComp.vue'
const FooterComp = () => import('@/components/skeletons/FooterComp')
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
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
  margin-top: 60px;
  /* background-image: url('./assets/background-for-food-14.jpg'); */
}
</style>
