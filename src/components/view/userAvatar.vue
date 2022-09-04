<template>
 <div>
    <div class="img-profile" v-if="userInfos.profilPhoto">
      <img :src="userInfos.profilPhoto" alt="profil photo">
    </div>
    <span v-else>
      <h3 class="img-letter">
        {{ firstLetter + '' +  secondLetter}}
      </h3>
    </span>
 </div>
</template>

<script>
export default {
  name: 'user',
  props:{
      firstLetter:{
        default: null,
        type: String
      },
      secondLetter:{
        default: null,
        type: String
      },
      userInfos:{
        default: {}
      }
  },
  data () {
    return {
      // msg: "Bienvenue dans l'Appli Vue.js"
    }
  }
}
</script>

