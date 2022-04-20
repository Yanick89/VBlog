<template>
 <div>
    <div class="main">
      <span @click.stop="openDropDown" class="btn">
        <svg width="32px" height="32px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M0 0L16 0L16 16L0 16L0 0Z" id="path_1" />
            <clipPath id="mask_1">
              <use xlink:href="#path_1" />
            </clipPath>
          </defs>
          <g id="Contacts-icon">
          <path d="M0 0L16 0L16 16L0 16L0 0Z" id="Background" fill="none" fill-rule="evenodd" stroke="none" />
          <g clip-path="url(#mask_1)">
            <path d="M8 2C6.34766 2 5 3.34766 5 5C5 6.65234 6.34766 8 8 8C9.65234 8 11 6.65234 11 5C11 3.34766 9.65234 2 8 2L8 2ZM8 8C5.24609 8 3 10.2461 3 13L4 13C4 10.7852 5.78516 9 8 9C10.2148 9 12 10.7852 12 13L13 13C13 10.2461 10.7539 8 8 8L8 8ZM8 3C9.10938 3 10 3.89063 10 5C10 6.10938 9.10938 7 8 7C6.89063 7 6 6.10938 6 5C6 3.89063 6.89063 3 8 3L8 3Z" id="Shape" fill="#000000" fill-rule="evenodd" stroke="none" />
          </g>
        </g>
      </svg>
      </span>
      <div v-if="show" v-outclick:openDropDown="closeDropDown" class="dropdown">
        <ul>
          <li>
            <router-link :to="{ name: 'profilEdite' }">
              <span>✏️</span> Editer le profile
            </router-link>
          </li>
          <li  @click="signOut">👋 Déconnecté</li>
        </ul>
      </div>
    </div>
 </div>
</template>

<script>
import firbase from '../../firebase';
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
export default {
  name: 'user',
  data () {
    return {
      show: false  
    }
  },
  methods:{
    signOut(){
      signOut(auth).then(()=>{
        this.$router.push('/')
        console.log('Déconnexion Réussie');
      }).catch((error) => {
        // An error happened.
      });
    },
    openDropDown(value){
      this.show = true
    },
    closeDropDown(){
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main{
      position: relative;
    }
    .main .dropdown{
      background: var(--background-white-color);
      position: absolute;
      transform: translate(-137px, 32px);
      top: 8px;
      width: 530%;
      height: 195%;
      border-radius: 5px;
      padding: 10px;
      box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 8%) 0px 3px 6px;
    }
    .btn, ul{
      cursor: pointer;
    }
    ul{
      list-style: none;
    }
    ul li a{
      text-decoration: none;
      color: var(--text-dark-primary);
    }
    ul li{
      font-size: 1rem;
      color: var(--text-dark-primary);
      margin: 4px 0;
    }
</style>
