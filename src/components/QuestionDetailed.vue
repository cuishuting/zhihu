<template>
    <div>
        <ul>
            <li v-for="(item,key) in topics" :key="key" class="topicList"><router-link to="/detailed_topic/:item.topic_id"><Button type="primary" shape="circle">{{item.topic}}</Button></router-link></li>
        </ul>
        <h1>{{question_title}}</h1>
        <p>{{question_desc}}</p>
        <Button type="primary" style="float:left"><Icon type="md-brush" />写回答</Button>
        <Icon type="ios-send" size="20"></Icon><span>分享</span>
    </div>



</template>

<script>
    export default {
        name: "QuestionDetailed",
        data() {
            return {
                question_id: '',
                start: 0,
                end: 20,
                question_title: '',
                question_desc: '',
                topics: [],
                single_topic:{},
                hasMore:false,
                timeslot:'',
            }
        },
        methods: {
            init(){
                this.axios.get('/api/question' + '?question_id=' + this.question_id+'&start='+this.start+'&end='+this.end).then((resp)=>{
                    this.question_id=resp.data.question_id;
                    this.question_title=resp.data.question_title;
                    this.question_desc=resp.data.question_desc;
                    let tmp = resp.data.topics;
                    for(let i=0;i<tmp.length;i++) {
                        this.single_topic.topic=tmp[i].topic;
                        this.single_topic.topic_id=tmp[i].topic_id;
                        this.topics[i]=this.single_topic;
                    }
                    this.timeslot=resp.data.time;
                    if(!resp.data.success){
                        this.$Message.err(resp.data.error);
                    }
                    this.hasMore=resp.data.hasMore;
                })
            },

            fakeData(){
                let data1={
                    topic:''
                }
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
        mounted: function(){
            this.init();
        }
    }
</script>

<style scoped>
    .topicList{
        float:left;
        list-style: none;
        padding:10px;
    }
</style>