<template>
  <div>
    <!-- <router-view/> -->
    <navBar ref="navBar"/>
    <div class="main-contenair-home">
      <div class="main-contenair">
      <container ref="mainContenair"/>
      </div>
    </div>
 </div>
</template>

<script>
import navBar from './view/navBar'
import container from '../components/view/contenair'
export default {
  name: 'mainApp',
  components:{
    navBar,
    container
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-contenair-home{
    margin-top: 5%;
    padding: 3% 0;
    background: rgb(231 220 158 / 32%);
    color: #fff;
    /* min-height: 100vh; */
  }
  /* .main-contenair{
    display: flex !important;
    justify-content: space-between;
    margin: 10px 0;
  } */
</style>
