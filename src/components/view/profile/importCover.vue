<template>
  <div class="upload-img">
      <div class="box-img">
        <div class="img">
          <div class="img-cover" :style="{backgroundImage: `url(${uploadImg})`}"></div>
        </div>
        <input ref="image" type="file" accept=".jpg, .jpeg" @change="upload" id="chooseFile" style="display: none">
        <label for="chooseFile">📸</label>
      </div>
      <div class="appear">
        <button v-if="btnActive" @click="sendingImg">😊Envoyer</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Importer',
    data(){
      return{
        uploadImg: '',
        btnActive: false
      }
    },
    methods:{
      upload(){
        const fileList = this.$refs.image.files
        for(let itemList of fileList){
          if(!itemList.type){
            alert('error')
            // console.log('erreur');
          } else{
            this.uploadImg = URL.createObjectURL(itemList)
            // URL.revokeObjectURL(this.uploadImg);
          }       
          this.btnActive = true  
        }
      },
      sendingImg(){
        this.$emit('sendingImg', this.uploadImg)
      }
    }
}
</script>

<style scoped>
  .upload-img{
    margin: 10px;
    position: relative;
  }
  .upload-img .box-img .img{
    position: relative;
    background: var(--background-btn-gray-light);
    height: 50px;
    border-radius: 5px;
    border: 2px dashed #ccc;
  }
  .upload-img .box-img .img .img-cover{
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }
  
  .upload-img .box-img label{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(170px, 5px);
    padding: 5px 10px;
    font-size: 1.5rem;
    color: var(--background-btn-dark-light);
    cursor: pointer;
    transition: color ease-in-out .2s;
  }
  .upload-img .box-img:hover  label{
    color: var(--text-dark-secondary);  
    transition: ease-in-out .2s;
  }
  .upload-img button{
    margin: 5px 0;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 20px;
    font-size: .9rem;
    font-weight: 700;
    border-radius: 10px;
    color: var(--text-purple-color);
    background: var(--background-btn-purple-light);
  }
  .upload-img .appear{
    display: flex;
    justify-content: center;
  }

</style>