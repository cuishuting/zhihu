<template>
    <SingleTopic :topic_name="topic_name" :description="description" :topic_pic="topic_pic"></SingleTopic>
</template>

<script>
    import SingleTopic from "../components/SingleTopic";
    export default {
        name: "DetailedTopic",
        components: {SingleTopic},
        props:['topic_id'],
        data(){
            return {
                start:0,
                end:20,
                success:false,
                error:'',
                topic_name:'',
                description:'',
                topic_pic:'',
                hasMore:false,
                data:[],
            }
        },
        methods: {
            getData(){
                this.axios.get('/api/topic'+'?topic_id='+this.topic_id+'&start='+this.start+'&end='+this.end).then((resp)=>{
                    this.success=resp.success;
                    if(!this.success){
                        this.$Message.error(resp.error);
                    }
                    else {
                        this.topic_id=resp.topic_id;
                        this.topic_name=resp.topic_name;
                        this.description=resp.description;
                        this.topic_pic=resp.topic_pic;
                        this.hasMore=resp.hasMore;
                        this.data=resp.data;
                    }
                })
            },
            fakeData(){
                this.topic_name='BTS';
                this.description='btsbtsbtsbtsbtsbts';
                this.topic_pic='https://i.loli.net/2017/08/21/599a521472424.jpg';
            }
        },
        mounted(){
            this.fakeData();
            // this.getData();
        }
    }
</script>

<style scoped>

</style>