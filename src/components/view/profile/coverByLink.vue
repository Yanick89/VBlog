<template>
  <div>
      <form>
          <input type="text" name="" placeholder="Colle un lien image">
          <button>Envvoyer</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'link'
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
        padding: 3px 15px;
        font-size: .8rem;
        outline: none;
        font-weight: 600;
        border-radius: 3px;
        border: 1px solid #221f14;
    }
    form input::placeholder{
        font-weight: 400;
    }
    form button{
        border: none;
        outline: none;
        margin: 5px 0;
        padding: 5px 20px;
        border-radius: 3px;
        font-size: .9rem;
        font-weight: 700;
        color: hsla(270, 50%, 40%, 100);
        background: hsla(270, 50%, 40%, 0.322);
    }
</style>