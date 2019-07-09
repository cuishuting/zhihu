<template>
    <Card class="root" @mouseover.native="button = true" @mouseout.native="button = false">
        <div class="head">
            <Avatar shape="square" :src="comment_author_head_sculpture" size="small" style="float:left"/>
        </div>
        <Time :time="timeslot" class="time"/>
        <p class="author">{{comment_author_name}}</p>
        <p class="content">{{content}}</p>
        <div class="search">
            <Input search enter-button="回复" placeholder="在这里回复~~~" v-show="search"/>
        </div>
        <div class="bottom" v-show="button||search" @click="referComment" :class="search? 'act' : ''">
            <Icon type="ios-redo"/>
            <span>{{referText}}</span>
        </div>
        <div style="height: 32px" v-if="!search"></div>
        <div style="clear: both"></div>
    </Card>
</template>

<script>
    export default {
        name: "CommentItem",
        props: ["data", "answer_id"],
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
            }
        },
        computed: {
            referText() {
                if (this.search)
                    return "取消回复";
                else
                    return "回复";
            },
        },
        methods: {
            referComment() {
                this.search = !this.search;
            },
            sendComment(){
                this.axios.post("/api/send_comment", {

                })
            }
        }
    }
</script>

<style scoped>
    .act {
        margin-top: -25px;
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

</style>