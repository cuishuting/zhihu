<template>
    <div>
        <QuestionTitle></QuestionTitle>
        <Question :data=this.data></Question>
    </div>
</template>

<script>
    import QuestionTitle from "@/components/QuestionTitle";
    import Question from '../components/Question';
    export default {
        name: "Example",
        components: {QuestionTitle,Question},
        data() {
            return{
               question_title:'',
               answer_count:0,
               data:[],
            }
        },
        methods:{
            fakeData(){
                this.data.question_title='BTS';
                this.data.answer_count=10;
                this.data.question_id='1';
            }
        },
        mounted:function(){
            this.fakeData();
        }
    }

</script>

<style scoped>

</style>