<template>
  <div class="main-content">
    <form>
    <!-- Inscription -->
    <div v-if="showModalSignUp" :class="{isActive}">
      <div class="log">
        <button class="close-icon" @click="showModalSignUp= false">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path d="M0 0L16 0L16 16L0 16L0 0Z" id="path_1" />
              <clipPath id="mask_1">
                <use xlink:href="#path_1" />
              </clipPath>
            </defs>
            <g id="Delete-icon">
            <path d="M0 0L16 0L16 16L0 16L0 0Z" id="Background" fill="none" fill-rule="evenodd" stroke="none" />
            <g clip-path="url(#mask_1)">
              <path d="M2.75 2.04297L2.04297 2.75L2.39844 3.10156L7.29297 8L2.04297 13.25L2.75 13.957L8 8.70703L12.8945 13.6055L13.25 13.957L13.957 13.25L13.6055 12.8945L8.70703 8L13.957 2.75L13.25 2.04297L8 7.29297L3.10156 2.39844L2.75 2.04297Z" id="Shape" fill="#111111" stroke="none" />
            </g>
            </g>
          </svg>
        </button>
        <div class="formulaire">         
          <label for="name">
            Nom:
            <input type="text" v-model="createUser.firstName" id="name" placeholder="Nom">
          </label>
          <label for="subname">
            Prénom:
            <input type="text" v-model="createUser.surName" id="subname" placeholder="Prénom">
          </label>
          <label for="mail">
            Email:
            <input type="email" v-model="createUser.email" id="mail" placeholder="mouzx@y.com">
          </label>
          <label for="password">
            Mot de passe:
            <input type="password" v-model="createUser.passWord" id="password" placeholder="mot de passe">
          </label>
          <div class="submit">
            <button type="submit" @click="signUp()"> Enregister</button>
          </div>        
        </div>
        <div class="description">
          <p>Vous avez déjà un compte? <span @click="openLinks">Incrivez-vous</span></p>
        </div>
      </div>
    </div>
    <!-- Connexion -->
    <div v-if="showModalSignIn" :class="{isActive}">
      <div class="log">
        <button class="close-icon" @click="showModalSignIn= false">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path d="M0 0L16 0L16 16L0 16L0 0Z" id="path_1" />
              <clipPath id="mask_1">
                <use xlink:href="#path_1" />
              </clipPath>
            </defs>
            <g id="Delete-icon">
            <path d="M0 0L16 0L16 16L0 16L0 0Z" id="Background" fill="none" fill-rule="evenodd" stroke="none" />
            <g clip-path="url(#mask_1)">
              <path d="M2.75 2.04297L2.04297 2.75L2.39844 3.10156L7.29297 8L2.04297 13.25L2.75 13.957L8 8.70703L12.8945 13.6055L13.25 13.957L13.957 13.25L13.6055 12.8945L8.70703 8L13.957 2.75L13.25 2.04297L8 7.29297L3.10156 2.39844L2.75 2.04297Z" id="Shape" fill="#111111" stroke="none" />
            </g>
            </g>
          </svg>
        </button>
        <div class="formulaire">         
          <label for="mail">
            Email:
            <input type="email" v-model="connectUser.email" id="mail" placeholder="mouzx@y.com">
          </label>
          <label for="password">
            Mot de passe:
            <input type="password" v-model="connectUser.passWord" id="password" placeholder="mot de passe">
          </label>
          <div class="submit">
            <button type="submit"> Connexion</button>
          </div>         
        </div>
        <div class="description">
          <p>Vous n'avez pas de compte? <span @click="openLinkConnexion">Cliquez-vous ici</span></p>
        </div>
      </div>
    </div>
    </form>
    <!-- <loader ref="loader" /> -->
  </div>
</template>

<script>
// import loader from '../loader'
import firbase from '../../firebase';
import {auth, db} from '../../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
export default {
  name: 'logUser',
  // components:{loader},
  data () {
    return {
      showModalSignUp: false,
      showModalSignIn: false,
      isActive: true,
      createUser:{
        firstName: '',
        surName: '',
        email:'',
        passWord:''
      },
      connectUser:{
        email:'',
        passWord:''
      }
    }
  },
  methods:{
    openLinks(){
      if(this.showModalSignUpfalse){
        this.showModalSignUp = false,
        this.showModalSignIn = true        
        console.log('Inscription ');
      } 
    },
    openLinkConnexion(){
      if(this.showModalSignIn = true){
        this.showModalSignIn = false,
        this.showModalSignUp = true        
        console.log('Connexion ');
      } 
    },
    signUp(){
      createUserWithEmailAndPassword(auth, this.createUser.email, this.createUser.passWord)
      .then( async (response) =>{
        const user = response.user
        console.log('User Created ', user, 'infos user ', user.displayName);
        this.$router.push('/components/view/profile/userProfile')
        this.showModalSignUp = false
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('erreur ', errorCode, errorMessage);
      });
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .isActive{
    position: fixed;  
    width: 350px;
    background: var(--background-white-primary);
    border-radius: 15px;
    padding: 20px;
    z-index: 20;
    box-shadow: 0 0 10px var( --shadow-color-primary-light), 100px 100px 100px 9000em rgb(48 47 47 / 74%);
    transform: translateY(-150%);
    animation-name: appear;
    animation-duration: .3s;
    animation-delay: .1s;
    animation-duration: alternate;
    animation-fill-mode: forwards;
  }

  @keyframes appear {
    0%{
      transform: translate(150%, -90%);
    }
    100%{
      transform: translate(150%, 10%);
    }
  }

  .log .formulaire{
    width: 100%;
  }
  .log .formulaire label{
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin: 15px 0;
  }
  .log .formulaire label input{
    width: 100%;
    padding: 10px 5px;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    background: var(--background-input-purple-thin);
    border: none;
  }
  button{
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .log button.close-icon{
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
  }
  .log button.close-icon svg{
    height: 32;
    width: 32px;
  }
  .formulaire button{
    background: var(--background-purple-color);
    color: var( --text-white-primary);
    width: 100%;
    margin: 0 0 15px 0;
    padding: 10px 5px;
    font-size: 16px;
  }
  .description span{
    font-size: 13px;
    font-weight: 700;
    color: var(--text-purple-color);
    cursor: pointer;
  }

</style>
