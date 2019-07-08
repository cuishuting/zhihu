<template>
    <div  class="topic_item">
            <img :src="topic_pic" class="picture">
            <div class="topic_text">
                <p class="topic_name">{{topic_name}}</p>
                <p class="topic_desc">{{description}}</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "TopicItem",
        props: [
            "data"
        ],
        data() {
            return {
                topic_name: this.data.topic_name,
                topic_id: this.data.topic_id,
                description: this.data.description,
                topic_pic: this.data.topic_pic
            }
        }
    }
</script>

<style scoped>
    .topic_item{
        width:100%;
        height:100%;
    }
    .picture{
        float:left;
        width:100px;
        height:100px;
        margin-top:0;
        margin-bottom:5%;
    }
    .topic_name{
        font-size:25px;
        font-weight:bolder;
    }
    .topic_desc{
        font-size:18px;
    }
    .topic_text{
        text-align: left;
        margin-left:20%;
        padding:25px;
    }
</style>