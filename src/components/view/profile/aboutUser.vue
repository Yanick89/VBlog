<template>
  <div class="about-write">
    <input v-model="text" type="text" name="" class="editeur">
    <!-- <form>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </form> -->
  </div>
</template>

<script>
export default {
  name: 'aboutUser',
  data(){
    return{
      text: ''
    }
  },
  mounted(){
    let enterText = document.querySelector('.editeur')
    enterText
    document.querySelector('.editeur').addEventListener('keyup', function(e){
      if(e.key === "Enter"){
        // console.log('merci ', e.key, enterText);
        enterText.style.height = '20px'
      }
     
    })
    }
   
}
</script>

<style scoped>
  .about-write input{
    width: 100%;
  }
</style>