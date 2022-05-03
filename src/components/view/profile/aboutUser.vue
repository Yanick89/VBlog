<template>
  <div class="about-write">
    <div class="show-comment" v-if="showComment">
      <div class="paragraph">
        <h3>{{ comment.title }}</h3>
        <div>
          <!-- <img :src="urlImg" alt /> -->
           <img :src="this.comment.urlImg" alt="">
        </div>
        <p>{{ comment.text }}</p>
      </div>
      <div class="show-btn-write">
        <button @click="openComment()">✍️</button>
      </div>
    </div>
    <!-- create comment -->
    <transition name="fade">
      <div v-if="showWriten" class="write-comment">
        <div class="img-label">
          <label for="img">
            <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#808080" class="bi bi-file-image">
              <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
            </svg>
          </label>
          <input ref="aboutImg" type="file" multiple name id="img" style="display: none" @change="selectImg"/>
          <img :src=" this.comment.urlImg " alt="">
          <p> {{ this.comment.name  }} </p>
        </div>
        <form>
          <div class="text-emoji">
            <textarea
              v-model="writting"
              cols="4"
              rows="5"
              maxlength="280"
              @keyup="colorBtn"
              placeholder="Mini description de toi..."
            ></textarea>
            <div class="emoji-picker">
              <button @click="toogleDialogEmoji">😃</button>
              <VEmojiPicker
                v-if="showDialog"
                :style="{ width: '310px', maxeight: '390px', overflow: 'hidden', top: '28px', right: '0'}"
                labelSearch="Search"
                lang="pt-BR"
                @select="onSelectEmoji"
              />
            </div>
          </div>
          <div class="footer-btn">
            <button @click.prevent="closeComment">Annuler</button>
            <button :class="{btnActive}" @click="save">Enregistrer</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { VEmojiPicker, emojisDefault, categoriesDefault } from "v-emoji-picker";
export default {
  name: "aboutUser",
  components: {
    VEmojiPicker
  },
  data() {
    return {
      comment: {
        urlImg:"",
        name:'',
        title: "Biographie",
        text:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum similique atque laudantium quia illum aspernatur quae ducimus, quidem sunt enim esse fugit sit sapiente reiciendis deleniti ipsum. Iure, sunt. quidem sunt enim esse fugit sit sapiente reiciendis deleniti ipsum. Iure, sunt."
      },
      // writting: "Someting text ",
      // urlImg:  "https://topdata.news/wp-content/uploads/2020/12/Boruto-Chapitre-54.jpg",
      showDialog: false,
      writting: "",
      showWriten: false,
      showComment: true,
      btnActive: false
    };
  },
  methods: {
    toogleDialogEmoji() {
      this.showDialog = !this.showDialog;
    },
    onSelectEmoji(emoji) {
      this.writting += emoji.data;
      console.log("emoji ", this.writting);

      // Optional
      // this.toogleDialogEmoji();
    },
    openComment() {
      if ((this.showComment = true)) {
        this.showComment = false;
        this.showWriten = true;
        this.writting = "";
      }
    },
    closeComment() {
      this.showComment = true;
      this.showWriten = false;
    },
    selectImg(){
      const fileList = this.$refs.aboutImg.files
      for(let e of fileList){
        this.comment.urlImg = URL.createObjectURL(e)
        this.urlImg = this.comment.urlImg
        this.comment.name = e.name
        console.log('image nom ', e.name);        
      }
    },
    save() {
      this.selectImg();
      this.comment.text = this.writting;
      this.showWriten = false;
      this.showComment = true;
      this.writting = "";
    },
    colorBtn() {
      if (this.writting.length > 0) {
        this.btnActive = true;
      } else {
        this.btnActive = false;
      }
    }
  }
};
</script>

<style scoped>
  .about-write {
    width: 100%;
  }
  .about-write .show-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .about-write .show-comment h3 {
    text-align: center;
    margin: 8px 0;
  }
  .about-write .show-comment img {
    width: 100%;
  }
  .about-write .show-comment p {
    line-height: 1.5;
    word-spacing: 7.5px;
    font-size: 1.3rem;
    text-align: justify;
    text-transform: capitalize;
  }
  .about-write .write-comment {
    margin: 30px 0;
  }
  .about-write .write-comment .img-label{
    margin: 10px 0;
    cursor: pointer;
  }
  .about-write .write-comment .img-label img{
    width: 100%;
    /* height: 375px;
    object-fit: cover; */
  }
  .about-write .write-comment .img-label svg{
    fill: rgba(55, 53, 47, 0);
    transition: fill .3s ease-in-out;
  }
  .about-write .write-comment:hover svg{
    fill: rgba(55, 53, 47, 0.35);
    transition: .2s ease-in-out;
  }
  .about-write .show-comment .show-btn-write button {
    opacity: 0;
    transition: opacity, 0.2s;
  }
  .about-write .show-comment:hover .show-btn-write button {
    opacity: 1;
    padding: 10px;
    outline: none;
    font-size: 1.2rem;
    border: 1px solid var(--border-dark-thin);
    background: #fff;
    cursor: pointer;
    margin-left: 20px;
    color: #ccc;
    border-radius: 50%;
  }
  .about-write .write-comment form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .about-write .write-comment .text-emoji {
    position: relative;
    width: 100%;
    display: flex;
    border: 1px solid var(--border-dark-thin);
    width: 65%;
    border-radius: 10px;
    padding: 8px 16px;
  }
  /* section emoji */
  .about-write .write-comment .text-emoji .emoji-picker {
    position: absolute;
    right: 10px;
  }
  .about-write .write-comment .text-emoji .emoji-picker button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    transition: animation 8s ease-in-out;
  }
  .about-write .write-comment .text-emoji .emoji-picker button:hover {
    animation: btn-anime 0.7s forwards;
  }
  @keyframes btn-anime {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(22deg);
    }
    50% {
      transform: rotate(-22deg);
    }
    75% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  #Emojis[data-v-5c988bee] {
    height: 220px !important;
  }
  .container-emoji[data-v-5c988bee] {
    max-height: 324px !important;
  }
  .about-write .write-comment textarea {
    resize: none;
    overflow: hidden;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    color: #424040;
    font-family: "Nunito Sans", sans-serif;
    outline: none;
    border: none;
    padding-right: 1rem;
  }
  .about-write .write-comment form .footer-btn button {
    padding: 10px 16px;
    border-radius: 20px;
    outline: none;
    border: none;
    background: #fff;
    color: var(--text-dark-secondary);
    cursor: pointer;
    border: 1px solid var(--border-dark-thin);
  }
  .about-write .write-comment form .footer-btn button:last-child {
    background: var(--background-btn-dark-light);
    margin-left: 5px;
    color: #f1f1f1;
    border: none;
  }
  .about-write .write-comment form .footer-btn button.btnActive {
    background: var(--background-btn-dark);
  }
</style>