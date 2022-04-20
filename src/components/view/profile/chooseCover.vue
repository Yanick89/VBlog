<template>
  <div class="bg-link">
    <ul>
        <li v-for="(link, index) in links" :key="index + 'lien'" @click="switchTab(link.component, index)" :class="{'active' : linkActive === index}">
            {{ link.name }}
        </li>
    </ul>
    <keep-alive>
        <component 
            @colorPicker="changeColor"
            @imgPicker="changeImg"
            @sendImg="changeByLink"
            @sendingImg="changeUpload"
            :is="defaultComponent" />
    </keep-alive>
  </div>
</template>

<script>
import defaultChoose from './defaultChoose';
import coverByLink from './coverByLink';
import importCover from './importCover';
export default {
    name: 'chooseCover',
    components:{
        defaultChoose,
        coverByLink,
        importCover
    },
    props:{
        modalCover:{
            type: Boolean,
            default(){
                false
            }
        },
        defaultBanner:{
            type: Object,
            default(){
                {}
            }
        }       
    },
    data (){
        return{
            links:[
                {name: 'Choisir', component:'defaultChoose'},
                {name: 'Importer', component:'importCover'},
                {name: 'Lien', component:'coverByLink'}
            ],
            defaultComponent: 'defaultChoose',
            linkActive: 0
        }
    },
    methods:{
        switchTab(component, index){
            this.defaultComponent = component;
            this.linkActive = index
        },
        changeColor(picker){
            this.defaultBanner.background = picker
        },
        changeImg(img){
            this.defaultBanner.background = `url('${img}')`
        },
        changeByLink(imgByLink){
            this.defaultBanner.background = `url('${imgByLink}')`
        },
        changeUpload(uploadImg){
            this.defaultBanner.background = `url('${uploadImg}')`
           console.log('reussi ', uploadImg);
        }
    },
}
</script>

<style scoped>
    .bg-link{
        position: absolute;
        top: 0;
        right: 48px;
        transform: translate(0, -35px);
        background: #fff;
        width: 30%;
        border-radius: 5px;
        z-index:100;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around; 
        margin: 15px 2px;
        color: #ccc;
        cursor: pointer;
    }
    ul li:hover{
        color: var(--text-dark-tertiary);
        transition: all ease-in-out .2s;
    }
    ul li.active{
        color: var(--text-dark-tertiary);
        transition: all ease .3s;
    }
</style>