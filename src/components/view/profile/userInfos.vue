<template>
    <div>
        <div class="user-photo" v-if="userInfos.profilPhoto">
            <img :src="userInfos.profilPhoto" alt="profil photo" title="">
        </div>
        <div class="user-photo" v-else>
          <h1>
            {{ firstLetter + '' +  secondLetter}}
          </h1>
        </div>
        <ul>
          <li v-for="(infos, index) in userInfos.infoUser" :key="index">
            <strong> {{ infos }} </strong>
          </li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
      name: 'UserInfomation',
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
      }
  }
  </script>
  
  <style scoped>
  
   .user-photo{
      position: relative;
      width: 250px;
      height: 250px;
      background: var(--background-purple-color);
      border-radius: 50%;
    }
    .user-photo h1{
      font-weight: 800;
      font-size: 96px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      color: #fff;
      -webkit-text-stroke: 6px;
    }
    .user-infos ul{
      list-style: none;
      margin: 10px 20px;
      font-size: 1.2rem;
    }
    .user-infos ul li{
      line-height: 1.5;
      text-transform: capitalize;
    }

    .user-photo img{
      position: absolute;
      height: inherit;
      width: 100%;
      object-fit: cover;
      border-radius: 50%
    }
  </style>