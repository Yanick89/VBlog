<template>
  <div class="cover-picker">
      <div class="color-picker">
        <ul>
          <li v-for="(picker, index) in tabCover.color"
           :key="index + 'color'"
           :style="{background : picker}"
           @click="colorPicker(picker)">
          </li>
        </ul>
      </div>      
      <div class="img-picker">
        <ul>
          <li v-for="(picker, index) in tabCover.img"
           :key="index + 'color'"
           :style="{backgroundImage: `url(${picker})`}"
           @click="imgPicker(picker)">
          </li>
        </ul>
      </div>      
  </div>
</template>

<script>
export default {
    name: 'Choisir',
    data(){
      return{
        tabCover:{
          color:['red', 'yellow', 'orange', 'olivedrab', 'orangered', 'orchid', 'midnightblue', 'mediumvioletred', 'firebrick'],
          img:[
           'https://www.adawall.com.tr/resimler/800/Product-Variations/1002-7_S_.jpg',
           'https://www.knowdys.com/wp-content/uploads/2021/05/this-startup-pays-young-people-in-africa-to-learn-to-code-and-connects-them-with-fortune-500-companies.jpg',
           'https://wallpapercave.com/wp/wp3561159.jpg',
           'https://cdn.wallpapersafari.com/75/20/pUeynw.jpg',
           'https://p3.storage.canalblog.com/34/39/1305055/99585695_o.jpg',
           'https://images.unsplash.com/photo-1570828066702-7706220a65f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
           'https://wallpapercave.com/wp/wp9493791.jpg',
           'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-wallpaper-design-template-fc437fecbcbaa96a4cdd3d0d6ae7bc36_screen.jpg?ts=1583140904',
           'https://www.affiches-parisiennes.com/content/articles/29400/main_aivancity-tawhid-tchoui.jpg',
           'https://img.freepik.com/free-photo/african-tribal-pattern-background-colorful-tone_53876-104120.jpg?size=626&ext=jpg&ga=GA1.2.1115350293.1640304000',
            'https://nairametrics.com/wp-content/uploads/2021/08/Startup.jpeg?w=800'
            ]
          },
      }
    },
    methods:{
      colorPicker(picker){
        console.log(picker);
      },
      imgPicker(picker){
        console.log(picker);
      }
    }
}
</script>

<style scoped>
  .cover-picker{
    height: 350px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
  .cover-picker::-webkit-scrollbar{
    width: 10px;
  }
  .cover-picker::-webkit-scrollbar-thumb{
    background: rgba(44, 62, 80, 0.445);
    border-radius: 5px;
  }
  .cover-picker::-webkit-scrollbar-track{
    background: #ddd;
    border-radius: 5px;
  }
  .cover-picker ul{
    list-style: none;
    display: grid;
    background: #fff;
    grid-template-columns: repeat(3, 1fr);
  }
   .cover-picker ul li{
     padding: 25px 50px;
     margin: 3px 8px;
     border-radius: 10px;
   }
    .img-picker{
     margin: 8px 0;
   }
   .cover-picker .img-picker ul li{
     background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
   }
</style>