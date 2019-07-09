<template>
    <div class="comments">
        <ul v-if="data.length">
            <li v-for="(item, index) in data" :key="item.comment_id" :answer_id="answer_id">
                <CommentItem :data="item" @add-comment="addComment" :index="data.length - index"
                             :refer_index="getIndex(item.refer)"
                             :answer_id="answer_id"
                />
            </li>
        </ul>
        <div v-else-if="load" class="hint" style="width: 32px;">
            <Spin size="large"></Spin>
        </div>
        <div v-else class="hint">还没有评论哟, 快点发一条吧!</div>
        <Input search enter-button="回复" placeholder="在这里回复~~~" v-model="ref_content" @on-search="sendComment"/>
    </div>
</template>

<script>
    import CommentItem from "./CommentItem"

    export default {
        name: "CommentList",
        props: ["answer_id"],
        components: {
            CommentItem,
        },
        data() {
            return {
                data: [],
                ref_content: "",
                load: true
            }
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            getIndex(id) {
                if (!id) return "";
                for (let i = 0; i < this.data.length; i++) {
                    if (id === this.data[i].comment_id) {
                        return this.data.length - i;
                    }
                }
                return "";
            },
            FakeData() {
                let data1 = {
                    comment_id: "12345",
                    comment_author_id: "sadds",
                    comment_author_name: "tobias",
                    content: "测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 ",
                    refer: null,
                    time: 1562602586870,
                    comment_author_head_sculpture: "https://i.loli.net/2017/08/21/599a521472424.jpg",
                };
                let data2 = {
                    comment_id: "1234f5",
                    comment_author_id: "saddssd",
                    comment_author_name: "tobias2",
                    content: "测试评论2 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 ",
                    refer: "12345",
                    time: 1562602596870,
                    comment_author_head_sculpture: "https://i.loli.net/2017/08/21/599a521472424.jpg",
                };
                let data3 = {
                    comment_id: "1234fd5",
                    comment_author_id: "saddsasdsd",
                    comment_author_name: "tobias3",
                    content: "测试评论3 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 测试评论 ",
                    refer: null,
                    time: 1562603586870,
                    comment_author_head_sculpture: "https://i.loli.net/2017/08/21/599a521472424.jpg",
                };
                this.data.push(data1, data2, data3);
                this.data = this.data.reverse();
            },
            getData() {
                this.load = true;
                this.axios.post("/api/get_comment", {
                    "answer_id": this.answer_id
                }).then((resp) => {
                    if (resp.data.success) {
                        this.data = resp.data.data;
                    } else {
                        this.$Message.error(resp.data.error)
                    }
                    this.load = false;
                }).catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    this.$Message.error("请求错误");
                    this.load = false;
                })
            },
            sendComment() {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能评论");
                    this.$router.push("/login");
                    return;
                }
                this.axios.post("/api/send_comment", {
                    "answer_id": this.answer_id,
                    "content": this.ref_content,
                }).then((resp) => {
                    if (!resp.data.success) {
                        this.$Message.error(resp.data.error)
                    } else {
                        this.$Message.success("评论成功");
                        this.addComment(resp.data.info)
                    }
                }).catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    this.$Message.error("网络连接失败, 请稍后再试")
                })
            },
            addComment(comment) {
                this.data.unshift(comment);
                this.$emit("add-comment", this.data.length)
            }
        },
        mounted() {
            // this.FakeData();
            this.getData();
        }
    }
</script>

<style scoped>

</style>