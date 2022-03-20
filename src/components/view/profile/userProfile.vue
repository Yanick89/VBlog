<template>
  <div class="user">
    <topMenuUser ref="topMenuUser"/>
    <bannerCover ref="bannerCover" />
    <div class="items-section">
      <div class="user-infos">
        <div class="user-photo">
          <img :src="userInfos.profilPhoto" alt="profil photo">
        </div>
        <ul>
          <li v-for="(infos, index) in userInfos" :key="index">
            <strong> {{ infos }} </strong>
          </li>
        </ul>
      </div>
      <div class="user-tab">
        <div class="btn-content">
          <button v-for="(tab, index) in tabs" :key="index" @click.prevent="setCurrentComponent(tab.      component, index)" class="btn-tabs" :class="{'active' : isActive === index}">
            {{tab.name}}
          </button>
        </div>       
        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import aboutUser from './aboutUser'
  import myArticles from './myArticles'
  import topMenuUser from './topMenuUser'
  import bannerCover from './bannerCover'

  export default {
    name: 'userProfile',
    components:{
      aboutUser,
      myArticles,
      topMenuUser,
      bannerCover
    },
    data (){
      return{
        userInfos:{
          profilPhoto:'https://avatoon.me/wp-content/uploads/2020/07/Cartoon-Pic-Ideas-for-DP-Profile-03.png', 
          name: 'MOUSSOUNDA',
          firstName:'Yanick',
          profession:'Dev Frontend'
        },
        tabs:[{name:'A Propos de moi', component:'aboutUser'},
        {name:'Mes Articles', component:'myArticles'}],
        currentComponent: "aboutUser",
        isActive: 0,
      }
    },
    methods:{
      setCurrentComponent(component, index) {
        this.currentComponent = component
        this.isActive = index
      },
    }
  }
</script>

<style scoped>
  /* .user{
    position: relative;
    background: #f8f8f8;
  } */
  
  /* partie du conténu user-infos */
  .items-section{
    display: flex;
    align-items: start;
    margin: 2% 10%;
  }
  .items-section .user-infos {
    flex: 1;
  }
  .items-section .user-tab{
    flex: 2;
  }
  .items-section .user-photo{
    position: relative;
    width: 250px;
    height: 250px;
    background: var(--orange-color);
    border-radius: 50%;
  }
  .items-section .user-infos ul{
    list-style: none;
    margin: 10px 20px;
    font-size: 1.2rem;
  }
  .items-section .user-infos ul li{
    line-height: 1.5;
  }
  .items-section .user-tab ul{
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1.5rem ;
    cursor: pointer;
  }
  .items-section .user-tab ul li{
   margin: 0 10px;
  }
  .items-section .user-photo img{
    position: absolute;
    height: inherit;
    width: 100%;
    object-fit: cover;
    border-radius: 50%
  }

  .btn-content{
    display: flex;
    justify-content: first baseline;
    margin-bottom: 10%;
    position: relative;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--border-gray-thin);
    z-index: 1;
  }
  .btn-content button{
    padding: 8px 15px;
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
  }
  .btn-content button:hover{
    color: var(--hover-link-gray);
    transition: all ease-in-out .3s;
  }
  .btn-content button.active{
    position: relative;
    color: var( --active-color-purple);
  }
  .btn-content button.active::before{
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    transform: translate(-15px, 10px);
    background: var(--background-btn-purple-light);
  }
</style>