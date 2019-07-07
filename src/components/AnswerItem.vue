<template>
    <Card class="root">
        <div class="answer" style="text-align:left">
            <h2 class="question">{{title}}</h2>
            <div class="answer_content">
                <p>{{content}}</p>
            </div>
        </div>
        <div class="bottom">
            <Row>
                <Col span="6" style="text-align: left">
                    <Button icon="md-arrow-dropup" type="primary" @click="agree(1)"
                            :class="is_agree === 1?'agreed':'agree'">
                        赞同 <span>{{numFilter(agree_num)}}</span>
                    </Button>
                    &nbsp;
                    <Button type="primary" @click="agree(-1)"
                            :class="is_agree === -1?'agreed':'agree'">
                        <Icon type="md-arrow-dropdown"/>
                    </Button>
                </Col>
                <Col span="4">
                    <Button @click="seeComment" type="default" class="other">
                        <Icon type="ios-text" size="20"></Icon>
                        <span>{{numFilter(comment_num)}}条评论</span>
                    </Button>
                </Col>
                <Col span="3">
                    <Button @click="seeComment" type="default" class="other">
                        <Icon type="ios-send" size="20"></Icon>
                        分享
                    </Button>

                </Col>
            </Row>
        </div>
        <div v-if="see_com">
            <Comment></Comment>
        </div>

    </Card>
</template>

<script>
    import Button from 'iview';
    import Icon from 'iview';
    import Menu from 'iview';
    import Comment from "./Comment";

    export default {
        name: "AnswerItem",
        components: {
            Comment
        },
        props: [
            'data'
        ],
        computed: {
            content_fragment() {
                return this.content.substr(0, 50) + '...';
            },
            isLogin() {
                return this.$store.isLogin;
            }
        },
        data() {
            return {
                read_all: false,
                see_com: false,
                question_id: this.data.question_id,
                title: this.data.question_title,
                answer_id: this.data.answer_id,
                content: this.data.answer_content,
                author_name: this.data.answer_author,
                author_id: this.data.answer_author_id,
                author_head: this.data.answer_author_head_sculpture,
                is_agree: this.data.is_agree,
                agree_num: this.data.agree_count,
                comment_num: this.data.comment_count,
                answer_num: this.data.answer_id,
                timeslot: this.data.time
            }
        },
        component: {
            Button,
            Icon,
            Menu,
            Comment,
        },
        methods: {
            seeComment() {
                this.see_com = !this.see_com;
            },
            numFilter(num) {
                if (num > 1000) {
                    return (num / 1000).toFixed(1) + "k"
                } else {
                    return num
                }
            },
            agree(num) {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能点赞");
                    return;
                }
                let val;
                if (num == this.is_agree) {
                    val = 0;
                } else {
                    val = num;
                }
                this.axios.post("/api/agree", {
                    answer_id: this.answer_id,
                    agree: val
                }).then((resp) => {
                    if (resp.data.success) {
                        this.is_agree = val;
                    } else {
                        this.$Message.error(resp.data.error);
                    }
                }).catch((err) => {
                    this.$Message.error("网络连接失败, 请检查网络后再试");
                    // eslint-disable-next-line no-console
                    console.log(err);
                })
            }
        },
    }

</script>

<style scoped>
    .show_count {
        width: 41px;
        height: 32px;
        float: left;
        border: transparent;
        position: absolute;
        margin-left: 75px;
        margin-top: -21px;
        background-color: #2d8cf0;
    }

    .bottom {
        margin-top: 20px;
        line-height: 33px;
    }

    .answer {
        width: auto;
    }

    .root {
        width: 100%;
        height: auto;
        margin: auto;
    }

    .agree {
        background-color: rgba(0, 132, 255, .15);
        border: 0px;
        color: #0084ff;
        font-size: 14px;
    }

    .other {
        border: none;
        color: #888;
    }


    .answer_content {
        margin-top: 10px;
    }

    .agreed {
        background-color: #0084ff;
        color: #FFF;
    }
</style>