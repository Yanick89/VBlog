<template>
  <div id="app">
    <div class="container">
      <navBar ref="navBar"/>
      <!-- <navBarLeft  ref="navBarLeft"/> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import navBar from './components/view/navBar';
// import navBarLeft from './components/navBarLeft'
export default {
  name: 'App',
  components:{
    navBar,
    // navBarLeft
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Nunito Sans', sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  /* height: 100vh; */
}
</style>
