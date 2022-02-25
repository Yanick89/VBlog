<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App', 
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
  color: #2c3e50;
  background: rgb(231 220 158 / 40%);
}
html{
  scroll-behavior: smooth;
}
</style>
