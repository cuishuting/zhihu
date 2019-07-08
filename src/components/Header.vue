<template>
    <div class="header">
        <Row>
            <Col span="8">
                <div class="layout_logo"><p>LOGO</p></div>
                <div class="layout_nav">
                    <Menu mode="horizontal" theme="light" :active-name="pos" width="auto" @on-select="select">
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
                <Input search @on-search="handleSearch" placeholder="搜索一下，遇见新鲜" size="default" class="search"
                       v-model="search_text"/>
            </Col>
            <Col span="2">
                <Button type="primary" class="question" @click="Question">提问</Button>
            </Col>
            <Col span="2">
            </Col>
            <template v-if="isLogin">
                <Col span="2" class="head_sculpture tip">
                    <Badge :count="tip">
                        <Avatar icon="md-notifications" class="tips"/>
                    </Badge>
                </Col>
                <Col span="1">
                    <Dropdown>
                        <div class="head_sculpture">
                            <Avatar shape="square" :src="head_sculpture"/>
                        </div>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
                tip: 0,
                search_text: "",
            }
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin;
            },
            pos() {
                if (this.$route.path === "/index" || this.$route.path === "/")
                    return "1";
                else if (this.$route.path === "/topic")
                    return "2";
                else if (this.$route.path === "/following")
                    return "3";
                else return ""
            }
        },
        watch: {
            isLogin() {
                if (this.isLogin) this.get_self_info();
            }
        },
        methods: {
            select(value) {
                if (value === '1') {
                    this.$router.push("/index")
                } else if (value === '2') {
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
            Question() {

            },
            get_self_info() {
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
        },
        mounted() {
            this.get_self_info();
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
        overflow: visible;
        box-shadow: 1px 1px 1px lightgray;
        font-size: 16px;
        background-color: #FFF;
        z-index: 1000;
        min-width: 1000px;
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

    .tips {
        background-color: #FFF;
        color: #8590a6;
        font-size: 26px;
    }

    .tip {
        text-align: right;
        margin-right: 15px;
    }
</style>