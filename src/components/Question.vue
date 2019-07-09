<template>
    <Card style="width:100%">
        <div style="text-align:left">
            <h1>{{question_title}}</h1>
            <h3 class="subtext">{{time}}+'•'+{{answer_count}}+'个回答'+</h3>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Question",
        props:['data'],
        data(){
            return{
                question_id:'',
                question_title:'',
                answer_count:0,
            }
        },
        mounted:function(){
            this.question_id=this.data.question_id;
            this.question_title=this.data.question_title;
            this.answer_count=this.data.answer_count;
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
</style>