<template>
    <AnswerList api="/api/search" :more_data="'&text='+this.text"></AnswerList>
</template>

<script>
    import AnswerList from "../components/AnswerList"

    export default {
        name: "SearchAnswer",
        props: [
            "text"
        ],
        components: {
            AnswerList
        }
    }
</script>

<style scoped>

</style>