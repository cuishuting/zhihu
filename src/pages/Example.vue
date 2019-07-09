<template>
    <div>
        <QuestionDetailed></QuestionDetailed>
    </div>
</template>

<script>
    import QuestionDetailed from "@/components/QuestionDetailed";
    export default {
        name: "Example",
        components: {QuestionDetailed},
        data() {
            return{
                data :{},
            }
        },
        methods:{
            fakeData(){
                this.data.question_title='BTS';
                this.data.answer_count=10;
                this.data.question_id='1';
                this.data.time=new Date().getTime();
            }
        },
        mounted:function(){
            this.fakeData();
        }
    }

</script>

<style scoped>

</style>