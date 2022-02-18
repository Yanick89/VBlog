<template>
  <div class="content">
    <div class="section1">
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam.
      </h2>
      <div class="section-card">
        <div class="card">
          <div class="body-card">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainContenair',
  data(){
    return{

    }
  }

}
</script>

<style scoped>
  .content{
    /* width: 75%; */
    margin: 30px 100px;
  }
  h2{
    flex: 1;
    color: #000;
    text-align: center;
    margin: 0 10px;
    font-size: 2.6rem;
  }
 
  .section1{
    display: flex;
    justify-content: space-between;
  }
  .section-card{
    display: flex;
    justify-content: end;
    flex: 2;
  }
  .card{
    height: 320px;
    width: 400px;
    /* background: rgba(238, 133, 92, 0.945); */
    /* border-radius: 15px; */
  }
  .body-card{
    height: inherit;
    /* width: 300px; */
    background: rgba(238, 133, 92, 0.945);
    border-radius: 15px;
  }

</style>