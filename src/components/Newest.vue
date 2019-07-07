<template>
    <AnswerList api="/api/newest"></AnswerList>
</template>

<script>
    import AnswerList from "../components/AnswerList"
    export default {
        name: "newest",
        components: {
            AnswerList
        },
    }
</script>

<style scoped>

</style>