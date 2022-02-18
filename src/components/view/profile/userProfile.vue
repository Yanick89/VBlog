<template>
  <div class="user">
    <h1>Espace Utilisateur</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'userProfile'

}
</script>

<style scoped>
  .user{
    height: 100vh;
    width: 100%;
    background: chocolate;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1{
    color: red;
    font-size: 5rem;
  }
</style>