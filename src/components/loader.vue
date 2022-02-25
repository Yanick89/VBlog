<template>
    <div v-if="isLoading" >
        <h3>VBlog en cours...</h3>
    </div>
</template>

<script>
export default {
    name: 'loader',
    data(){
    return{
      isLoading: true
    }
  },
  mounted(){
    setInterval(()=>{
      this.isLoading = false
    },10000)
  }
}
</script>

<style scoped>
    div{
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100%;
        background: forestgreen;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h3{
        color: #fff;
        animation: loading 3s linear infinite;
    }
    @keyframes loading {
        0%{
            transform: scale(0);
        }
        100%{
            transform: scale(10px);
            opacity: 0;
        }
    }
</style>