<template>
    <div class="login">
        <h1 style="margin-bottom: 20px">登录</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit(formInline)">登陆</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                },
                ruleInline: {
                    user: [
                        {required: true}
                    ],
                },
                url: "/api/login"
            }
        },
        mounted() {
            if (this.$store.state.isLogin) {
                this.$router.push("/")
            }
        },
        methods: {
            handleSubmit(name) {
                this.axios.post(this.url, {
                    "password": name.password,
                    "username": name.user,
                }, {timeout: 2500})
                    .then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.$Message.success('Success!');
                            this.$store.commit('login');
                            this.$router.go(-1);
                        } else {
                            this.$Message.error(temp.error);
                        }
                    })
                    .catch((err) => {

                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
            },
        }
    }
</script>

<style scoped>
    .login {
        width: 300px;
        margin: 50px auto;
        background-color: #FFF;
        color: #175199;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 10px;
        padding: 30px;
    }
</style>