<template>
    <div class="topic">
        <TopicItem></TopicItem>
    </div>
</template>

<script>
    import TopicItem from '../components/TopicItem'

    export default {
        name: "Topics",
        components: {
            TopicItem
        }
    }
</script>

<style scoped>
    .topic {
        margin-top: 100px;
        width: 60%;
        margin-left: 10%;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
    }
</style>