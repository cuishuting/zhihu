<template>
    <AnswerList api="/api/search" :more_data="'&text='+this.text"></AnswerList>
</template>

<script>
    import AnswerList from "../components/AnswerList"

    export default {
        name: "SearchAnswer",
        computed:{
            text(){
                return this.$route.params.str;
            }
        },
        components: {
            AnswerList
        }
    }
</script>

<style scoped>

</style>