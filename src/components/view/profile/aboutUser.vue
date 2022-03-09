<template>
  <div class="about-write">
   <div class="show-comment" v-if="showComment">
     <div class="paragraph">
       <h3> {{ comment.title }} </h3>
       <p> {{ comment.text }} </p>
     </div>
     <div class="show-btn-write">
       <button @click="openComment()">➕</button>
     </div>
   </div>
   <transition name="fade">
    <div v-if="showWriten" class="write-comment">
      <form>
        <textarea v-model="writting" cols="4" rows="5" maxlength="280" placeholder="Mini description de toi..."></textarea>
        <div class="footer-btn">
          <button @click="closeComment">Annuler</button>
          <button @click="save">Enregistrer</button>
        </div>
      </form>
    </div>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'aboutUser',
  data(){
    return{
      comment:{ 
        title: 'Biographie',
        text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum similique atque laudantium quia illum aspernatur quae ducimus, quidem sunt enim esse fugit sit sapiente reiciendis deleniti ipsum. Iure, sunt. quidem sunt enim esse fugit sit sapiente reiciendis deleniti ipsum. Iure, sunt."
      },
      writting: '',
      showWriten: false,
      showComment: true
    }
  },
  methods:{
    openComment(){
      if(this.showComment = true){
        this.showComment= false;
        this.showWriten = true
      }
    },
    closeComment(){
      this.showComment= true;
      this.showWriten = false
    },
    save(){
      this.comment.text = this.writting;
      this.showWriten = false;
      this.showComment = true;
      this.writting = ''
      console.log('commentaire ', this.writting);
    }
  },
}
</script>

<style scoped>
  .about-write{
    width: 100%;
  }
  .about-write .show-comment{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .about-write .show-comment h3{
    text-align: center;
    margin: 8px 0;
  }
  .about-write .show-comment p{
    line-height: 1.5;
    word-spacing: 7.5px;
    font-size: 1.3rem;
    text-align: justify;
  }
  .about-write .write-comment{
    margin: 30px 0;
  }
    .about-write .show-comment .show-btn-write button{
    opacity: 0;
    transition: opacity, .2s;
  }
  .about-write .show-comment:hover .show-btn-write button{
    opacity: 1;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    /* background: transparent; */
    background: #fff;
    cursor: pointer;
    margin-left: 20px;
    color: #ccc;
    border-radius: 50%;
  }
  .about-write .write-comment form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .about-write .write-comment textarea{
    border-radius: 10px;
    resize: none;
    overflow: hidden;
    padding: 8px;
    width: 65%;
    font-size: 1.1rem;
    font-weight: 600;
    color: #424040;
    font-family: 'Nunito Sans', sans-serif;
    outline: #2c3e50;
  } 
  .about-write .write-comment form .footer-btn button{
    padding: 10px 16px;
    border-radius: 20px;
    outline: none;
    border: none;
    background: #fff;
    color: #2c3e50;
    cursor: pointer;
    border: 1px solid #2c3e50;
  }
  .about-write .write-comment form .footer-btn button:last-child{
    background: #663399;
    margin-left: 5px;
    color: #f1f1f1;
    border: none;
  }
 

</style>