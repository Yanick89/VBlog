<template>
  <div>
    <div class="content">
      <div class="section1">
        <h2>
          Découvre une nouvelle expérience dans l'écriture. <span> ✍️</span> 
        </h2>
        <div class="section-card">
          <div class="card">
            <div class="body-card">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="img-content"></div>
      <div class="description-left">
        <div class="tag-description">
          <span>📚</span>
          <h3>Apprend</h3>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eligendi, pariatur dolores? 
            Modi explicabo unde iste repellendus dicta suscipit
          </div>
        </div>
        <div class="tag-description">
          <span>👐</span>
          <h3>Partage ta passion</h3>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eligendi, pariatur dolores? 
            Modi explicabo unde iste repellendus dicta suscipit
          </div>
        </div>
        <div class="tag-description">
          <span>🕵️‍♂️</span>
          <h3>Explore</h3>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eligendi, pariatur dolores? 
            Modi explicabo unde iste repellendus dicta suscipit
          </div>
        </div>
        <div class="tag-description">
          <span>✋ </span>
          <h3>Participe</h3>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eligendi, pariatur dolores? 
            Modi explicabo unde iste repellendus dicta suscipit
          </div>
        </div>
        <div class="tag-description">
          <span>💬</span>
          <h3>Ose avec tes idées</h3>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Eligendi, pariatur dolores? 
            Modi explicabo unde iste repellendus dicta suscipit
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainContenair',
  data(){
    return{

    }
  }

}
</script>
<style scoped>
  .content{
    background: var( --background-purple-color);
    padding: 50px 100px;
  }
  h2{
    flex: 1;
    /* text-align: center; */
    margin: 0 10px;
    font-size: 2.6rem;
    color: #f1f1f1;
  }
 
  .section1{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .section-card{
    display: flex;
    justify-content: end;
    flex: 2;
  }
  .card{
    height: 320px;
    width: 400px;
    /* background: rgba(238, 133, 92, 0.945); */
    /* border-radius: 15px; */
  }
  .body-card{
    height: inherit;
    background: var(--orange-color);
    border-radius: 15px;
  }
  .section2{
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px;
    color: var( --text-dark-primary);
  }
  .section2 .img-content{
    flex: 3;
  }
  .section2 .description-left{
    flex: 2;
  }
  .section2 .description-left .description{
    line-height: 1.6;
    font-size: 18px;
    color: var( --text-dark-primary-light);
  }
  .section2 .description-left .tag-description{
    padding: 10px 0;
  }
  .section2 .description-left .tag-description h3{
    padding: 12px 0;
    font-size: 21px;
  }
  .section2 .description-left .tag-description span{
    font-size: 1.6rem;
  }
</style>