<template>
    <Card class="single_topic_top">
        <div style="text-align:left">
            <img :src="this.topic_pic" class="picture">
            <div class="topic_text">
                <p class="topic_name">{{this.topic_name}}</p>
                <p class="topic_desc">{{this.description}}</p>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "SingleTopic",
        props:['topic_name','description','topic_pic'],
    }

</script>

<style scoped>
    .single_topic_top{
        width:90%;
        height:250px;
        margin-left:5%;
        margin-right:5%;
    }
    .picture{
        float:left;
        width:180px;
        height:180px;
        margin-top:1%;
        margin-bottom:5%;
        margin-left:6%;
    }
    .topic_text{
        text-align: left;
        margin-left:20%;
        padding:40px;
    }
    .topic_name{
        font-size:40px;
        font-weight:bolder;
    }
    .topic_desc{
        font-size:30px;
    }
</style>