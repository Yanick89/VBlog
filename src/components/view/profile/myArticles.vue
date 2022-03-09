<template>
  <div>
    <div v-for="(article, index) in articles" :key="index" class="container-article">
      <div>
        <div class="infos">
          <span> Il y a {{article.date}} </span>
        </div>
        <div class="display-description">
          <h3>{{ article.titleArticle}}</h3>
          <div class="discription">
            <p> {{ article.description}} </p>
            <img :src="article.imgArticle" alt="photo de l'article">
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myArticle',
  data (){
    return{
      articles:[
        {
          imgProfile:'"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
          nameWritten: 'Yanick',
          date:'4 jours',
          titleArticle:"l'Etat Ukranien à l'heure actuelle",
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis perspiciatis modi, nobis eaque eius ratione reprehenderit porro beatae minima...',
          imgArticle:'https://miro.medium.com/max/1080/1*u1W_-zNpbacMyrtQcvlV2w.png'
        },
        {
          imgProfile:'"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
          nameWritten: 'Yanick',
          date:'5 min',
          titleArticle:"De l'idée à la conception",
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis perspiciatis modi, nobis eaque eius ratione reprehenderit porro beatae minima',
          imgArticle:'https://www.smallbusinessbonfire.com/wp-content/uploads/2017/10/create-cover-images.jpeg'
        },
        {
          imgProfile:'"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
          nameWritten: 'Yanick',
          date:'2 semaines',
          titleArticle:"Apprendre l'importance du zoning",
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis perspiciatis modi, nobis eaque eius ratione reprehenderit porro beatae minima',
          imgArticle:'https://static.snoweb.io/images/cover-methodologie-article-blog.2e16d0ba.fill-1000x1000.png'
        },
        {
          imgProfile:'"https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
          nameWritten: 'Yanick',
          date:'2 mois',
          titleArticle:"Apprendre les bases du devéloppement Web",
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis perspiciatis modi, nobis eaque eius ratione reprehenderit porro beatae minima',
          imgArticle:'https://digital.mondoblog.org/files/2017/10/dev-web.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .container-article{
    font-size: 1.3rem;
    margin: 8% 0;
  }
  .infos{
    display: flex;
    align-items: center;
  }
  .infos img{
    height: 50px;
    width: 50px;
    border-radius: 10px;
  }
  .infos h4{
    margin: 0 6px;
  }
  .display-description{
    line-height: 1.6;
  }
  .discription{
    display: flex;
    justify-content: space-between;
  }
  .discription img{
    height: 100px;
    width: 100px;
    border-radius: 10px;
  }
</style>