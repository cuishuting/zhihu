<template>
    <div class="list">
        <ul v-if="data.length">

            <li v-for="(item,key) in data" :key="key" style="margin-top: 3px">
                <AnswerItem :data="item"></AnswerItem>
            </li>
        </ul>
        <div v-if="data.length && hasMore" class="hint" @click="getAnswer()">
            加载更多
        </div>
        <div v-else class="hint">
            没有找到回答, 请稍后再试...
        </div>
    </div>
</template>

<script>
    import AnswerItem from '../components/AnswerItem.vue';

    export default {
        name: "AnswerList",
        props: {
            api: String,
            more_data: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                data: [],
                start: 0,
                end: 20,
                error: '',
                hasMore: true,
            }
        },
        components: {
            AnswerItem,
        },
        methods: {
            getAnswer() {
                this.axios.get(this.api + '?start=' + this.start + '&end=' + this.end + this.more_data).then((response) => {
                    let temp = response.data;
                    if (temp.success) {
                        this.data = temp.data;
                        this.hasMore = temp.hasMore;
                        this.start = this.end;
                        this.end = this.start + 10;
                    } else {
                        this.$Message.error(temp.error);
                    }
                }).catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    this.$Message.error("提交失败,请检查网络后再试...");
                })
            },
            fakeData() {
                let data1 = {
                    question_id: "123",
                    question_title: "测试问题3",
                    answer_id: "1234",
                    answer_author: "name1",
                    answer_author_id: "12345",
                    answer_content: "回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内",
                    answer_author_head_sculpture: "/abc.png",
                    is_agree: 1,
                    agree_count: 100,
                    comment_count: 123,
                    time: 1562480410
                };
                let data2 = {
                    question_id: "1233",
                    question_title: "测试问题4",
                    answer_id: "12345",
                    answer_author: "name2",
                    answer_author_id: "123453",
                    answer_content: "回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 回答的内容 ",
                    answer_author_head_sculpture: "/abc.png",
                    is_agree: -1,
                    agree_count: 123,
                    comment_count: 143,
                    time: 1562481567
                };
                this.data.push(data1);
                this.data.push(data2);
                this.data.push(data2);
            }
        },
        mounted: function () {
            this.getAnswer(this.start, this.end)
            this.fakeData();
        }
    }
</script>

<style scoped>
    .hint {
        margin: 20px;
        font-size: 14px;
    }

    ul li {
        list-style: none;
    }

    .list {
        background-color: #f6f6f6;
    }
</style>