<template>
    <div>
        <ul v-if="data.length">
            <li v-for="(item,key) in data" :key="key">
                <AnswerItem :data="item"></AnswerItem>
            </li>
        </ul>
        <div v-else class="hint">
            没有找到回答, 请稍后再试...
        </div>
    </div>
</template>

<script>
    import AnswerItem from '../components/AnswerItem.vue';

    export default {
        name: "Newest",
        data() {
            return {
                data: [],
                start: 0,
                end: 20,
                error: '',
                hasMore: false,
            }
        },
        components: {
            AnswerItem,
        },
        methods: {
            getAnswer(start, end) {
                this.axios.get(' /api/Newest?start=' + start + '&end=' + end).then((response) => {
                    let temp = response.data;
                    if (temp.success) {
                        this.data = temp.data;
                        this.hasMore = temp.hasMore;
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
                    question_title: "测试问题1",
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
                    question_title: "测试问题2",
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
                this.data.push(data2)
            }
        },
        mounted: function () {
            // this.getAnswer(this.start, this.end)
            this.fakeData();
        }
    }
</script>

<style scoped>
    .hint {
        margin: 20px;
        font-size: 14px;
    }

    ul li{
        list-style: none;
    }
</style>