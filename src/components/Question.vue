<template>
    <Card class="question">
        <div class="question_content">
            <h1 class="title">BTS</h1>
            <h3 class="subtext">2019-7-9 11:18:32 • 10个回答</h3>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Question",
        props:['data'],
        data(){
            return{
                question_id:this.data.question_id,
                question_title:this.data.question_title,
                answer_count:this.data.answer_count,
                timeslot:this.data.time,
            }
        },


        computed:{
            time() {
                let date = new Date(this.timeslot * 1000);
                let year = date.getFullYear();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let hour = date.getHours();
                let min = date.getMinutes();
                let sec = date.getSeconds();
                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
            },
        },
    }
</script>

<style scoped>
    .subtext{
        color:grey;
    }
    .question{
        width:90%;
        margin-left:5%;
        margin-right:5%;
        height:120px;
    }
    .question_content{
        text-align: left;
    }
    .title{
        font-size:30px;
    }
    .subtext{
        margin-top: 10px;
        margin-bottom:-10px;
        font-size:20px;
    }
</style>