<template>
  <div v-if="modalCover" class="bg-link" v-ousideClick="hide">
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
import importCover from './importCover';
import ousideClick from '../../../directive'
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
            linkActive: 0,
        }
    },
    methods:{
        switchTab(component, index){
            this.defaultComponent = component;
            this.linkActive = index
        },
        hide(){
            alert('Réussi')
        }
    }
}
</script>

<style scoped>
    .bg-link{
        position: absolute;
        top: 0;
        right: 48px;
        transform: translate(0, 235px);
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
    ul li.active{
        color: #2c3e50;
        transition: all ease .3s;
    }
</style>