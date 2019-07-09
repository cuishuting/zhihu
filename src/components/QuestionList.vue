<template>
    <div class="ques">
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <Question :data="item"></Question>
            </li>
        </ul>
        <Button long v-if="data.length && hasMore" class="hint" @click="getData()">
            加载更多
        </Button>
        <Button long v-else class="hint" @click="getData()">
            没有找到问题, 请稍后再试...
        </Button>
    </div>
</template>

<script>
    import Question from './Question'

    export default {
        name: "QuestionList",
        components: {
            Question
        },
        props:[
            "api"
        ],
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        data() {
            return {
                data: [],
                hasMore: true,
                start: 0,
                end: 20
            }
        },
        mounted() {
            // this.fake();
            this.getData()
        },
        methods: {
            fake() {
                let data = {
                    question_id: "sdsda",
                    question_title: "hello",
                    answer_count: 143,
                    time: 1234332445
                };
                let data2 = {
                    question_id: "sdsdsda",
                    question_title: "hedsllo",
                    answer_count: 3143,
                    time: 1235332445
                };
                let data3 = {
                    question_id: "sdsdda",
                    question_title: "heldlo",
                    answer_count: 143,
                    time: 1834332445
                };
                this.data.push(data, data2, data3)
            },
            getData() {
                this.axios.get(this.api + "?user_id=" + this.id + "&start=" + this.start + "&end=" + this.end)
                    .then((resp) => {
                        if (resp.data.success) {
                            for (let i = 0; i < resp.data.data.length; i++) {
                                this.data.push(resp.data.data[i]);
                            }
                            this.hasMore = resp.data.hasMore;
                            if (this.hasMore) {
                                this.start = this.end;
                                this.end = this.start + 10;
                            } else {
                                this.start = this.data.length;
                                this.end = this.start + 10
                            }
                        }
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("连接错误")
                    })
            }
        }
    }
</script>

<style scoped>
    .ques{
    }
</style>