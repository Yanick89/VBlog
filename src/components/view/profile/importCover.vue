<template>
  <div class="upload-img">
      <div class="box-img">
        <div class="img">
          <img src="" alt="">
        </div>
        <input type="file" placeholder="Choisir une image...">
        <button>🎴</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Importer',
    data(){
      return{
        uploadImg: ''
      }
    }
}
</script>

<style scoped>
  .upload-img{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload-img .box-img .img{
    background: rgba(128, 128, 128, 0.075);
    height: 50px;
    width: 98%;
    border-radius: 5px;
    border: 2px dotted #ccc;
  }
</style>