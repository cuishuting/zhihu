<template>
    <AnswerList api="/api/user_answer" :more_data="'&user_id=' + this.$route.params.id" :preview="400"/>
</template>

<script>
    import AnswerList from "../components/AnswerList"

    export default {
        name: "UserAnswers",
        components: {
            AnswerList
        }
    }
</script>

<style scoped>

</style>