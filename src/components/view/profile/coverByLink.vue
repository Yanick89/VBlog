<template>
    <div>
        <form>
            <input type="text" v-model="linkImg" name="" placeholder="Colle un lien image">
            <button @click.prevent="sendImg">Envvoyer</button>
        </form>
    </div>
  </template>
  
  <script>
  export default {
      name: 'link',
      data(){
          return{
              linkImg: ''
          }
      },
      methods:{
          sendImg(){
              this.$emit('sendImg', this.linkImg)
              this.linkImg = ''
          }
      }
  }
  </script>
  
  <style scoped>
      form{
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      form input{
          width: 90%;
          padding: 4px 15px;
          font-size: .8rem;
          outline: none;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid var(--border-dark-thin);
      }
      form input::placeholder{
          font-weight: 400;
      }
      form button{
          border: none;
          outline: none;
          margin: 5px 0;
          padding: 5px 20px;
          border-radius: 10px;
          font-size: .9rem;
          font-weight: 700;
          color: var( --text-purple-color);
          background: var(--background-btn-purple-light);
      }
  </style>