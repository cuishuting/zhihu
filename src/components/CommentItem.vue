<template>
    <Card class="root" @mouseover.native="button = true" @mouseout.native="button = false">
        <div class="head">
            <Avatar shape="square" :src="comment_author_head_sculpture" size="small" style="float:left"/>
        </div>
        <Time :time="timeslot" class="time"/>
        <p class="author">{{comment_author_name}}
            <span class="indexes">#{{index}}</span>
            <span class="indexes" v-if="refer_index" style="color: darkgray">
                <Icon type="md-share-alt" />
                {{refer_index}}
            </span>
        </p>
        <p class="content">{{content}}</p>
        <div class="search">
            <Input search enter-button="回复" placeholder="在这里回复~~~" v-show="search" v-model="ref_content"
                   @on-search="sendComment"/>
        </div>
        <div class="bottom" v-show="button||search"  @click="referComment" :class="search? 'act' : 'top-m'" >
            <Icon type="ios-undo" />&nbsp;
            <span>{{referText}}</span>
        </div>
        <div style="height: 32px" v-if="!search"></div>
        <div style="clear: both"></div>
    </Card>
</template>

<script>
    export default {
        name: "CommentItem",
        props: ["data", "answer_id", "index", "refer_index"],
        data() {
            return {
                comment_id: this.data.comment_id,
                comment_author_id: this.data.comment_author_id,
                comment_author_name: this.data.comment_author_name,
                content: this.data.content,
                refer: this.data.refer,
                timeslot: this.data.time,
                comment_author_head_sculpture: this.data.comment_author_head_sculpture,
                button: false,
                search: false,
                ref_content: ""
            }
        },
        computed: {
            referText() {
                if (this.search)
                    return "取消回复";
                else
                    return "回复";
            },
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            referComment() {
                this.search = !this.search;
            },
            sendComment() {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能评论");
                    this.$router.push("/login");
                    return;
                }
                this.axios.post("/api/send_comment", {
                    "answer_id": this.answer_id,
                    "refer": this.comment_id,
                    "content": this.ref_content,
                }).then((resp) => {
                    if (!resp.data.success) {
                        this.$Message.error(resp.data.error)
                    } else {
                        this.$Message.success("评论成功");
                        this.$emit("add-comment", resp.data.info);
                    }
                }).catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    this.$Message.error("网络连接失败, 请稍后再试")
                })
            }
        }
    }
</script>

<style scoped>
    .act {
        margin-top: -25px;
    }

    .top-m{
        margin-top: 7px;
    }

    .bottom {
        float: right;
        margin-right: 33px;
        color: #8590a6;
    }


    .root {
        text-align: left;
        margin: 10px auto;
    }

    .author {
        font-size: 15px;
        color: #1a1a1a;
        margin-left: 33px;
        line-height: 24px;
    }

    .content {
        margin: 20px 33px;
        word-break: break-all;
        line-height: 1.5;
        font-size: 15px;
    }

    .time {
        float: right;
        margin-right: 33px;
        color: #555555;
        font-size: 14px;
        line-height: 24px;
    }

    .search {
        width: 70%;
        margin-left: 33px;
    }

    .indexes {
        margin-left: 30px;
        font-size: 13px;
        color: #666666;
        line-height: 24px;
    }

</style>