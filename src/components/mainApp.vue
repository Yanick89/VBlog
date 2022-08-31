<template>
  <div>
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
    padding: 3% 0;
    color: #fff;
  }
</style>