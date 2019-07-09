<template>
    <div class="index">
        <Card class="top_question">
            <div>
                <div class="content">
                    <ul class="topics" v-if="topics">
                        <li v-for="(item,key) in topics" :key="key" class="topicList">
                            <router-link :to="'/topic/'+item.topic_id">
                                <Button type="primary" shape="circle" size="small">{{item.topic}}</Button>
                            </router-link>
                        </li>
                    </ul>
                    <div style="clear: both"></div>
                    <h1 class="title">{{question_title}}</h1>
                    <p class="ques_desc">{{question_desc}}</p>
                </div>
                <ul class="bottom">
                    <li class="li">
                        <Button type="primary" :ghost="true" class="answer_write" @click="answer = !answer">
                            <Icon type="md-brush"/>
                            写回答
                        </Button>
                    </li>
                    <li class="li">

                    </li>
                    <li class="li">
                        <Button style="border: none" @click="share" class="btn" :data-clipboard-text="copyValue">
                            <Icon type="ios-send" size="20"></Icon>
                            <span>分享</span>
                        </Button>
                    </li>
                    <div class="time">{{time}}</div>
                </ul>
                <div style="clear:both"></div>
            </div>
        </Card>
        <Card class="answer" v-if="answer">
                <Input type="textarea" v-model="answer_text" :autosize="{minRows: 2}" ></Input>
                <Button size="large" style="width: 100%" v-if="answer_text" @click="send_answer">发布</Button>
        </Card>
        <AnswerList api="/api/question" :more_data="'&question_id='+$route.params.id" class="answer" v-if="load"></AnswerList>
    </div>


</template>

<script>
    import AnswerList from "../components/AnswerList";
    import ClipboardJS from 'clipboard'

    export default {
        name: "QuestionDetailed",
        components: {AnswerList},
        data() {
            return {
                question_id: '',
                question_title: '',
                question_desc: '',
                topics: [],
                hasMore: false,
                timeslot: 0,
                answer: false,
                answer_text: "",
                load: true
            }
        },
        methods: {
            send_answer(){
                if (!this.$store.state.isLogin){
                    this.$Message.error("登陆才能发布回答");
                    this.$router.push("/login")
                }
                this.axios.post("/api/send_answer", {
                    "question_id": this.question_id,
                    "content": this.answer_text
                }).then((resp)=>{
                    if (resp.data.success){
                        this.load = false;
                        this.$Message.success("发布成功");
                        setTimeout(()=>{this.load = true}, 100)
                    } else {
                        this.$Message.error(resp.data.error);
                    }
                }).catch((err)=>{
                    // eslint-disable-next-line no-console
                    console.log(err);
                    this.$Message.error("网络连接失败");
                })
            },
            init() {
                this.axios.get('/api/question?question_id=' + this.$route.params.id + '&start=0&end=1')
                    .then((resp) => {
                        if (!resp.data.success) {
                            this.$Message.err(resp.data.error);
                        } else {
                            this.question_id = resp.data.question_id;
                            this.question_title = resp.data.question_title;
                            this.question_desc = resp.data.question_desc;
                            this.topics = resp.data.topics;
                            this.timeslot = resp.data.time;
                        }
                    })
            },
            share() {
                let clipboard = new ClipboardJS('.btn');
                clipboard.on('success', (e)=> {
                    this.$Message.success('已复制链接，粘贴可分享给好友', '提示');
                    e.clearSelection();
                });
                // eslint-disable-next-line no-unused-vars
                clipboard.on('error',(e)=> {
                    this.$Message.error('暂时不支持此浏览器的复制，请手动选择以下链接后再复制分享:\n' + this.clipBoardData, '提示');
                });
            },
            fakeData() {
                let data1 = {
                    topic: 'BTS',
                    topic_id: '1',
                };
                let data2 = {
                    topic: 'BTS',
                    topic_id: '1',
                };
                let data3 = {
                    topic: 'BTS',
                    topic_id: '1',
                };
                this.topics.push(data1);
                this.topics.push(data2);
                this.topics.push(data3);
                this.question_title = 'BTSBTSBTSBTSBTSBTS';
                this.question_desc = 'btsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbtsbts';
                this.timeslot = (new Date()).getTime() - 60 * 3 * 1000;
            }
        },
        computed: {
            time() {
                let date = new Date(this.timeslot);
                let year = date.getFullYear();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let hour = date.getHours();
                let min = date.getMinutes();
                let sec = date.getSeconds();
                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
            },

            copyValue(){
                let a = window.location.href;
                let a2 = a.split('/').slice(0,3).join('/');
                return a2 + '/question/'+ this.$route.params.id+'打开这条链接查看问题详情';
            },
        },
        mounted () {
            this.init();
            // this.fakeData();
        }
    }
</script>

<style scoped>
    .topics {
        margin-left: 13px;
    }

    .time {
        float: right;
        color: #888;
        margin:20px 10px;

    }

    .topicList {
        float: left;
        list-style: none;
        padding: 10px;
    }

    .content {
        text-align: left;
        padding: 0px 0px;
    }

    .title {
        margin-left: 20px;
        margin-top: 10px;
    }

    .answer_write {
        float: left;
        margin-bottom: 0px;
    }

    .bottom {
        width: 100%;
        float: left;
        margin-left: -20px;
    }

    .li {
        float: left;
        margin:15px 0 10px 40px;
    }

    .ques_desc {
        font-size: 18px;
        margin-left: 20px;
        word-break: break-all;
    }

    .whole {
        width: 64%;
        margin: 20px auto;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
        min-width: 1000px;
    }
</style>