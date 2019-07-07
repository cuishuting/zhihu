<template>
    <div class="header">
        <Row>
            <Col span="8">
                <div class="layout_logo"><p>LOGO</p></div>
                <div class="layout_nav">
                    <Menu mode="horizontal" theme="light" active-name="1" width="auto" @on-select="select">
                        <MenuItem name="1">
                            首页
                        </MenuItem>
                        <MenuItem name="2">
                            话题
                        </MenuItem>
                        <MenuItem name="3">
                            关注
                        </MenuItem>
                    </Menu>
                </div>
            </Col>
            <Col span="2">
            </Col>
            <Col span="8">
                <Input search  @on-search="handleSearch" placeholder="搜索一下，遇见新鲜" size="default" class="search" v-model="search_text"/>
            </Col>
            <Col span="2">
                <Button type="primary" class="question" @click="Question">提问</Button>
            </Col>
            <Col span="2">
            </Col>
            <template v-if="isLogin">
                <Col span="4">
                    <div class="head_sculpture">
                        <Badge :count="tip">
                            <Avatar :src="head_sculpture"/>
                        </Badge>
                    </div>
                </Col>
            </template>
            <template v-else>
                <Col span="2">
                    <div class="login">
                        <router-link to="/login">
                            登陆
                            <Icon type="ios-contact"/>
                        </router-link>
                    </div>
                </Col>
                <Col span="2">
                    <div class="login">
                        <router-link to="/register">
                            注册
                            <Icon type="md-key"/>
                        </router-link>
                    </div>
                </Col>
            </template>
        </Row>

    </div>

</template>

<script>
    import Menu from 'iview'
    import Input from 'iview'
    import Button from 'iview'

    export default {
        name: "Header",
        component: {
            Menu,
            Input,
            Button,
        },
        data() {
            return {
                username: "",
                userid: "",
                head_sculpture: "",
                tip: "",
                search_text: ""
            }
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            select(value) {
                if (value == 1) {
                    this.$router.push("/index")
                } else if (value == 2) {
                    this.$router.push("/topic")
                } else {
                    this.$router.push("/following")
                }
            },
            handleSearch() {
                if (!this.search_text) {
                    this.$Message.error("请输入查询内容");
                } else {
                    this.$router.push("/search/" + this.search_text)
                }
            },
            Question(){

            }
        },
        mounted() {
            if (this.isLogin) {
                this.axios.get('/api/self_info').then((resp) => {
                    let data = resp.data;
                    if (data.success) {
                        this.username = data.username;
                        this.userid = data.userid;
                        this.head_sculpture = data.head_sculpture;
                        this.tip = data.tip;
                        this.$store.commit('setUsername', this.username);
                        this.$store.commit('setUserID', this.userid);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .layout_logo {
        float: left;
        font-size: 30px;
        width: 80px;
        height: 60px;
        color: #2d8cf0;
        margin-top: 18px;
    }

    .layout_nav {
        margin-top: 8px;
        margin-left: 100px;
    }

    .header {
        margin: 0px;
        width: 100%;
        position: fixed;
        top: 0px;
        border-bottom: lightgray solid 1px;
        height: 80px;
        overflow: hidden;
        box-shadow: 1px 1px 1px lightgray;
        font-size: 16px;
        background-color: #FFF;
        z-index: 1000;
    }

    .search {
        margin-top: 25px;
    }

    .question {
        margin-top: 25px;
    }

    .ivu-row {
        margin-left: 50px;
    }

    .head_sculpture {
        margin: 22px auto;
    }

    .login {
        margin: 30px auto;
        font-size: 16px;
    }

    .ivu-menu-horizontal.ivu-menu-light:after {
        height: 0px;
    }
</style>