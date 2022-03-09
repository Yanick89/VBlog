/**
 * methodologie de la function globale de la directive pour la fermture des modales
 * * Création de la fonction de la directi🇻🇪 
 * ! Mise en exportation de la function vers le main.js
 * ? Construction de la directive 
 * TODO: 
 */

const ousideClick = function (){
    Vue.directive('ousideClick', {
        bind: function (el, binding, vnode){
            el.event = function (event){
                if (!(el == event.target || el.contains(event.target))){
                    vnode.context[binding.expression](event);
                }
            };
            document.body.addEventListener('click', el.event)
        },
        unbind(el) {
            document.body.removeEventListener("click", el.event);
          },
    })
}
export default {
    ousideClick
}