<template>
    <QuestionList api="/api/user_ques"></QuestionList>
</template>

<script>
    import QuestionList from "../components/QuestionList"

    export default {
        name: "UserQuestion",
        components: {QuestionList}
    }
</script>

<style scoped>

</style>