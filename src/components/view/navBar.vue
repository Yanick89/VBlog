<template>
  <div>
    <nav>
      <span>VBlog</span>
      <ul>
        <li @click="openSignUp">Inscription</li>
        <li @click="openSignIn">Connexion</li>
        <li>
         <userAvatar ref="user"/>
        </li>
      </ul>
    </nav>
    <logUser ref="logUser"/>
  </div>
</template>

<script>
  import userAvatar from './userAvatar'
  import logUser from './log'
  export default {
    name: 'navBar',
    components:{
      userAvatar,
      logUser
    },
    // data () {
    //   return {
    //   }
    // },
    methods:{
      openSignUp(){
        this.$refs.logUser.showModalSignUp = true
        this.$refs.logUser.showModalSignIn = false
      },
      openSignIn(){
        this.$refs.logUser.showModalSignIn = true
        this.$refs.logUser.showModalSignUp = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #663399;
    color: #fff;
  }
  nav span{
    font-size: 2rem;
    text-shadow: 6px 0px 2px #221231, 6px 3px 50px #221231f0;
    -webkit-text-stroke: 4px;
  }
  nav span, ul{
    cursor: pointer;
    margin: 15px 100px;
  }
  nav ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;  
  }
  nav ul li{
    margin: 0 10px;
  }
  nav ul li:nth-child(2){
    /* border: 1px solid #fff; */
    padding: 5px 10px;
    border-radius: 20px;
    color: #663399;
    background: #fff;
  }
 
</style>
