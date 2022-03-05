<template>
  <div class="cover-section">
    <button @click="showBanner()" :class="{activePosition}">Ajouter un arrière plan</button>
    <div v-if="addBlock" :style="defaultBanner" class="cover-default">
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerCover',
  data(){
    return{
      addBlock: false,
      activePosition: false,
      defaultBanner:{
        width: '100%',
        height:'180px',
        background: 'url("https://i.eurosport.com/2017/10/23/2193314-45823610-2560-1440.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  methods:{
    showBanner(){
      this.addBlock = true;
      this.activePosition = true
    }
  }
}
</script>

<style scoped>
  .cover-section{
    position: relative;
    padding-top: 60px;
    padding-bottom: 20px;
    transition: all 1s ease-out;
   }
  .cover-section button{
    opacity: 0;
    padding: 2px 5px;
    position: absolute;
    transform: translateY(15px);
  }
  .cover-section:hover button{
    opacity: 1;
    position: absolute;
    transform: translateY(15px);
    right: 25%;
    padding: 2px 5px;
    border: none;
    outline: none;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
    background: #f8f8f8;
  }
  
  .cover-section button.activePosition{
    right: 4%;
    bottom: 44px;
  }
</style>