<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
  
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --text-purple-color: #663399;
    --orange-color: rgba(238, 133, 92, 0.945);
    --text-dark-primary: #221f14;
    --text-dark-primary-light: rgba(34, 31, 20, 0.78);
    --text-white-primary: #ffffff;
    --text-dark-secondary: #2c3e50;
    --text-dark-tertiary: #2b3d4f;
    --shadow-gray-light1:  rgb(0 0 0 / 16%);
    --shadow-gray-light2:  rgb(0 0 0 / 8%);
    --shadow-color-primary-light: #212121e0;
    --active-color-purple: rgb(102 51 153 / 80%);
    --hover-link-gray: #808080;
    --border-dark-thin: rgb(44 62 80 / 59%);
    --border-gray-thin: rgb(173 173 173 / 30%);
    --background-white-primary: #ffffff;
    --background-purple-color: #663399;
    --background-white-color: #ffffff;
    --background-input-purple-thin: #e6e6e6;
    --background-btn-purple-light: rgb(102, 51, 153, 0.365);
    --background-btn-gray-light: rgb(128, 128, 128, 0.075);
    --background-btn-dark-light: rgb(43 61 79 / 37%);
    --background-btn-dark: #2b3d4f;
  }
  #app {
    font-family: "Nunito Sans", sans-serif;
    color: var(--text-dark-secondary);
  }
  html {
    scroll-behavior: smooth;
    min-height: 100vh;
  }
</style>
