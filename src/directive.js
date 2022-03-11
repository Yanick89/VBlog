/**
 * methodologie de la function globale de la directive pour la fermture des modales
 * * Création de la fonction de la directi🇻🇪 
 * ! Mise en exportation de la function vers le main.js
 * ? Construction de la directive 
 */

export default {   
    bind: function (el, binding, vnode){
        window.event = function (event){
            if (!(el == event.target || el.contains(event.target))){
                vnode.context[binding.expression](event);
                // alert('alert')
            }
        };
        document.body.addEventListener('click', window.event)
    },
    unbind(el) {
        document.body.removeEventListener("click", window.event);
        },
}