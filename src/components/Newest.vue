<template>
    <AnswerList api="/api/Newest"></AnswerList>
</template>

<script>
    import AnswerList from "../components/AnswerList"
    export default {
        name: "Newest",
        components: {
            AnswerList
        },
    }
</script>

<style scoped>

</style>