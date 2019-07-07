<template>
    <div class="register">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password1" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password2">
                <Input type="password" v-model="formInline.password2" placeholder="请再次确认密码" @on-blur="checkPassword">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <div v-if="status">输入错误</div>
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
                <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: false,
                cap_url: "",
                formInline: {
                    user: '',
                    password1: '',
                    password2: '',
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
            this.getCheckCode()
        },
        methods: {
            handleSubmit(name) {
                this.axios.post(this.url, {
                    "password": name.password1,
                    "captcha": name.captcha,
                    "username": name.user,
                }, {timeout: 2500})
                    .then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.$Message.success('Success!');
                            // this.$router.push('/login')
                        } else {
                            this.$Message.error(temp.error);
                            this.getCheckCode();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
            },
            checkPassword() {
                if (this.formInline.password1 === this.formInline.password2) {
                    this.status = false;
                } else {
                    this.status = true;
                }
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
    .register {
        margin: 50px auto;
        width: 300px;
        height: 200px;
    }
</style>