<template>
    <div class="login">
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
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
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
                }
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
                            this.$store.login();
                            this.$router.push('/index')
                        } else {
                            this.$Message.error(temp.error);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
            },
        }
    }
</script>

<style scoped>
    .login{
        width: 300px;
        margin: 50px auto;
    }
</style>