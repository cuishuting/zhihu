<template>
    <AnswerList api="/api/hottest"></AnswerList>
</template>

<script>
    import AnswerList from "../components/AnswerList"

    export default {
        name: "Hottest",
        components: {
            AnswerList
        },

    }
</script>

<style scoped>

</style>