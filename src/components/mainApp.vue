<template>
 <div class="main-contenair-home">
   <div class="main-contenair">
     <navBarLeft />
     <container ref="mainContenair"/>
   </div>
 </div>
</template>

<script>
import navBarLeft from './view/navBarLeft'
import container from '../components/view/contenair'
export default {
  name: 'main',
  components:{
    navBarLeft,
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
    background: rgb(231 220 158 / 32%);
    color: #fff;
    min-height: 100vh;
  }
  .main-contenair{
    display: flex !important;
    justify-content: space-between;
    margin: 10px 100px;
  }
</style>
