<template>
  <div class="cover-section">
    <button @click="showBanner()" :class="{activePosition}">
      <span v-if="changeBtn">📷Ajouter un arrière plan</span>
      <span v-else @click="open">
        📷 Changer l'arrière plan
      </span>
    </button>
    <div v-if="addCover" :style="defaultBanner" class="cover-default">
    </div>
     <!-- =======* choose cover component *=======-->
    <div class="content-modal" >
      <chooseCover  ref="chooseCover"/>
    </div>
  </div>
</template>

<script>
import chooseCover from './chooseCover'
export default {
  name: 'bannerCover',
  components:{
    chooseCover
  },
  data(){
    return{
      addCover: false,
      activePosition: false,
      changeBtn: true,
      defaultBanner:{
        width: '100%',
        height:'180px',
        background: 'url("https://i.eurosport.com/2017/10/23/2193314-45823610-2560-1440.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      // modalCover: false
    }
  },
  methods:{
    showBanner(){
      if(this.changeBtn = true){
        this.changeBtn = false
      }
      this.addCover = true;
      this.activePosition = true
    },
    open(){
      this.$refs.chooseCover.modalCover = true
    }
  }
}
</script>

<style scoped>
  .cover-section{
    position: relative;
    padding-top: 60px;
    padding-bottom: 20px;
    transition: all .6s ease-out;
    z-index: 100;
   }
  .cover-section button{
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translateY(15px);
  }
  .cover-section button span{
    display: flex;
    align-items: center;
    padding: 3px 5px;
  }
  .cover-section button span:last-child{
    position: relative;
    z-index: 300;
  }

  .cover-section:hover button{
    opacity: 1;
    position: absolute;
    transform: translateY(15px);
    right: 25%;
    border: none;
    outline: none;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
    background: #f8f8f8;
    box-shadow: 1px 2px 3px #ccc;
  } 
  .cover-section button.activePosition{
    right: 4%;
    bottom: 44px;
    box-shadow: 0 0 0;
  }
  .content-modal{
    position: relative;
  }
</style>