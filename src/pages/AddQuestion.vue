<template>
    <div class="ask">
        <h1 style="color: #175199;">提问</h1>
        <Input type="text" prefix="ios-search" placeholder="填写你的问题" v-model.trim="question" class="input"
               @on-blur="question_mark = question[question.length - 1] !=='?'" @on-focus="question_mark=false"/>
        <div style="height: 30px;line-height: 30px;color: #ed4014"><span v-show="question_mark">问题应该以问号结尾哟~</span></div>
        <Input type="textarea" :autosize="true" placeholder="请输入问题的描述" v-model="desc" class="input"
               style="margin-top: 10px"/>
        <Input type="text" placeholder="搜索话题, 添加话题" v-model="topic_key" search class="input" @on-search="search"/>
        <CheckboxGroup v-model="selected" v-if="topics" @on-change="change">
            <Checkbox :label="topic.topic_id" v-for="topic in topics" :key="topic.topic_id">
                <span>{{topic.topic_name}}</span>
            </Checkbox>
        </CheckboxGroup>
        <Button class="input" @click="ask">现在提问!</Button>
    </div>
</template>

<script>
    export default {
        name: "AddQuestion",
        data() {
            return {
                question_mark: false,
                question: "",
                desc: "",
                topic_key: "",
                topics: [],
                selected: []
            }
        },
        computed:{
            isLogin(){
                return this.$store.state.isLogin;
            }
        },
        mounted(){
            if(!this.isLogin){
                this.$Message.error("登陆才能提问哟");
                this.$router.push("/login");
            }
        },
        methods: {
            ask() {
                if (this.question_mark || !this.question.length) {
                    this.$Message.error("请修改问题再发布哟~");
                }
                this.axios.post("/api/add_question", {
                    "question": this.question,
                    "question_desc": this.question_desc,
                    "topics": this.selected
                }).then((resp)=>{
                    if (resp.data.success){
                        this.$Message.success("发布成功");
                        // let id = resp.data.qusetion_id;
                        //TODO router push
                    } else {
                        this.$Message.error(resp.data.error);
                    }
                })
            },
            change() {
                if (this.selected.length > 3) {
                    this.$Message.error("只能选择三个话题");
                    this.selected.pop()
                }
            },
            search() {
                let a = {
                    topic_name: "test",
                    topic_id: "1",
                    description: "desadsa"
                };
                let ab = {
                    topic_name: "teddsst",
                    topic_id: "1d",
                    description: "desadsa"
                };
                let ac = {
                    topic_name: "d",
                    topic_id: "1dc",
                    description: "dedssadsa"
                };
                let adc = {
                    topic_name: "ds",
                    topic_id: "1dxc",
                    description: "dedcssadsa"
                };
                this.topics.push(a, ab, adc, ac);
                if (!this.topic_key) {
                    this.$Message.error("请输入内容");
                    return
                }
                this.axios.get("/api/get_topic_by_name?name=" + this.topic_key)
                    .then((resp) => {
                        if (resp.data.success) {
                            this.topics = resp.data.data;
                            if (!this.topics) {
                                this.$Message.error("没有找到相关话题");
                            }
                        } else {
                            this.$Message.error(resp.data.error);
                        }
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("网络连接错误");

                    })
            }
        }
    }
</script>

<style scoped>
    .ask {
        width: 30%;
        margin: 40px auto;
        background-color: #FFF;
        box-shadow: 1px 1px 5px lightgrey;
        padding: 20px;
    }

    .input {
        width: 80%;
        margin-top: 30px;
        margin-bottom: 10px;
    }
</style>