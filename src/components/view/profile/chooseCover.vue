<template>
    <div class="cover-section">
      <button @click="showBanner()" :class="{activePosition}">
        <span v-if="changeBtn">📷Ajouter un arrière plan</span>
        <span v-else @click.stop="openDialog">
          📷 Changer l'arrière plan
        </span>
      </button>
      <div v-if="addCover" :style="defaultBanner" class="cover-default">
      </div>
       <!-- =======* choose cover component *=======-->
      <div v-if="modalCover" class="content-modal" >
        <chooseCover
         v-outclick:openDialog="closeDialog"
         :modalCover="modalCover"
         :defaultBanner="defaultBanner"
          ref="chooseCover"/>
      </div>
    </div>
  </template>
  
  <script>
  import chooseCover from './chooseCover';
  import link from './coverByLink'
  import mixin from '../../../mixin'
  export default {
    name: 'bannerCover',
    components:{
      chooseCover,
      link
    },
    mixins:[mixin],
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
        modalCover: false
      }
    },
    methods:{
      changingColor(picker){
        alert('color')
      },
      showBanner(){
        if(this.changeBtn = true){
          this.changeBtn = false
        }
        this.addCover = true;
        this.activePosition = true
      },
      openDialog(value){
        this.modalCover = true
      }, 
      closeDialog(){
        this.modalCover = false
      }
    },
  }
  </script>
  
  <style scoped>
    .cover-section{
      position: relative;
      padding-top: 60px;
      padding-bottom: 20px;
      transition: all .6s ease-out;
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
      /* z-index: 300; */
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
    .cover-section .cover-default{
      background-repeat: no-repeat !important;
      background-size: cover !important;
      background-position: center !important;
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