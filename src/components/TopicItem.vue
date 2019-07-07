<template>
    <div class="item">
        <img :src="topic_pic" alt="">
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "TopicItem",
        props: [
            "data"
        ],
        data(){
            return{
                topic_name: this.data.topic_name,
                topic_id : this.data.topic_id,
                description: this.data.description,
                topic_pic: this.data.topic_pic
            }
        }
    }
</script>

<style scoped>

</style>