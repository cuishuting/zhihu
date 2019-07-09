<template>
    <div class="whole">
        <Card class="top_question">
            <div>
                <div class="content">
                    <ul>
                        <li v-for="(item,key) in topics" :key="key" class="topicList"><router-link :to="'/detailed_topic/'+item.topic_id"><Button type="primary" shape="circle" size="large">{{item.topic}}</Button></router-link></li>
                    </ul>
                    <br><br><br>
                    <h1 class="title">{{question_title}}</h1>
                    <p class="ques_desc">{{question_desc}}</p>
                </div>
                <ul class="bottom">
                    <li class="li"><Button type="primary"  ghost="true" class="answer_write"><Icon type="md-brush" />写回答</Button></li>
                    <li class="li"><Time :time="timeslot" /></li>
                    <li class="li"><Icon type="ios-send" size="20"></Icon><span>分享</span></li>
                </ul>
                <div style="clear:both"></div>
            </div>
        </Card>
        <AnswerList api="/api/question" class="answer"></AnswerList>
    </div>




</template>

<script>
    import AnswerList from "@/components/AnswerList";
    export default {
        name: "QuestionDetailed",
        components: {AnswerList},
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
                    topic:'BTS',
                    topic_id:'1',
                };
                let data2={
                    topic:'BTS',
                    topic_id:'1',
                };
                let data3={
                    topic:'BTS',
                    topic_id:'1',
                };
                this.topics.push(data1);
                this.topics.push(data2);
                this.topics.push(data3);
                this.question_title='BTSBTSBTSBTSBTSBTS';
                this.question_desc='btsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbts';
                this.timeslot=(new Date()).getTime() - 60 * 3 * 1000;
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
            // this.init();
            this.fakeData();
        }
    }
</script>

<style scoped>
    .topicList{
        float:left;
        list-style: none;
        padding:10px;
    }
    .content{
        text-align:left;
        padding:0px 0px;
    }
    .title{
        margin-left:20px;
    }
    .answer_write{
        float:left;
        margin-bottom:0px;
    }
    .bottom{
        width:100%;
        float:left;
        margin-left:-20px;
    }
    .li{
        float:left;
        margin-left:0px;
        padding:0px 40px;
    }
    .ques_desc{
        font-size:25px;
        margin-left:20px;
        word-break:break-all;
    }
    .whole{
        width: 64%;
        margin: 20px auto;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
        min-width: 1000px;
    }
</style>