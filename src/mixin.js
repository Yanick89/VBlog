// Functions à Usage global

export default{
    created(){
        this.$root.$on('openDialog', this.closeDialog)
    },
    methods:{
        closeDialog(){
            this.modalCover = false
        }
    }
}