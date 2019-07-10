<template>
    <div class="questions index">
        <QuestionList api="/api/get_questions"></QuestionList>
    </div>
</template>

<script>
    import QuestionList from "../components/QuestionList"
    export default {
        name: "Questions",
        components :{QuestionList}
    }
</script>

<style scoped>

</style>