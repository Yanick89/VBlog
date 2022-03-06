<template>
  <div class="bg-link">
    <ul>
        <li v-for="(link, index) in links" :key="index + 'lien'" @click="switchTab(link.component, index)" :class="{'active' : linkActive === index}">
            {{ link.name }}
        </li>
    </ul>
    <keep-alive>
        <component :is="defaultComponent" />
    </keep-alive>
  </div>
</template>

<script>
import defaultChoose from './defaultChoose';
import coverByLink from './coverByLink';
import importCover from './importCover'
export default {
    name: 'chooseCover',
    components:{
        defaultChoose,
        coverByLink,
        importCover
    },
    data (){
        return{
            links:[
                {name: 'Choisir', component:'defaultChoose'},
                {name: 'Importer', component:'importCover'},
                {name: 'Lien', component:'coverByLink'}
            ],
            defaultComponent: 'link',
            linkActive: 0
        }
    },
    methods:{
        switchTab(component, index){
            this.defaultComponent = component;
            this.linkActive = index
        }
    }
}
</script>

<style scoped>
    .bg-link{
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0, 25px);
        background: #fff;
        width: 250%;
        /* height: 300px; */
        border-radius: 5px;
        z-index:100;
        box-shadow: 1px 2px 3px #000;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around; 
        margin: 15px 2px;
        color: #ccc;
    }
    ul li.active{
        color: #2c3e50;
        transition: all ease .3s;
    }
</style>