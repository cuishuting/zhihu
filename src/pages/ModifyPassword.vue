<template>
    <div class="change_password">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="old_password">
                <Input type="password" v-model="formInline.old_password" placeholder="请输入原密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="new_password">
                <Input type="password" v-model="formInline.new_password" placeholder="请输入新密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="captcha">
                <Row>
                    <Col span="16">
                        <Input type="text" v-model="formInline.captcha" placeholder="验证码">
                            <Icon type="ios-bookmark-outline" slot="prepend"></Icon>
                        </Input>
                    </Col>
                    <Col span="8">
                        <img :src="cap_url" @click="getCheckCode()">
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Submit</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "ModifyPassword",
        data() {
            return {
                cap_url: "",
                formInline: {
                    user: '',
                    old_password: '',
                    new_password: '',
                    captcha: '',
                },
                ruleInline: {
                    user: [
                        {required: true}
                    ],
                }
            }
        },
        mounted() {
            setTimeout(() => {
                if (this.isLogin) {
                    this.getCheckCode();
                } else {
                    this.$router.push('/isLogin')
                }
            }, 100)
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin
            }
        },
        methods: {
            handleSubmit(name) {
                this.axios.post(this.url, {
                    "old_password": name.old_password,
                    "new_password": name.new_password,
                    "captcha": name.captcha,
                    "username": name.user,
                }, {timeout: 2500})
                    .then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.$Message.success('Success!');
                            // this.$router.push('/isLogin')
                        } else {
                            this.$Message.error(temp.error);
                            this.getCheckCode();
                        }
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
            },
            getURL() {
                return "/api/get_captcha?time=" + new Date().getTime()
            },
            getCheckCode() {
                this.cap_url = this.getURL();
            }
        }
    }
</script>

<style scoped>
    .change_password {
        margin: auto;
        width: 300px;
        height: 200px;
    }
</style>