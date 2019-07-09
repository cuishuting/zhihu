<template>
    <div>
        <Card class="card">
            <div style="margin-left:0;margin-right:0;width:100%">
                <img src="../img/user.jpg" style="width:100%;height:200px">
            </div>
            <div style="text-align: left">
                <img :src="head_sculpture" class="back-img"/>
                <Card class="pos" v-if="intro.length <= 15">
                    <p style="font-size: 25px;font-weight: bold;border:none;margin-left: 10px" slot="title">
                        {{username}}</p>
                    <p style="font-size: 14px; margin-left: 10px;word-break: break-all">{{intro}}</p>
                </Card>
                <Collapse class="pos" v-model="status" v-else>
                    <p style="font-size: 25px;font-weight: bold;border:none;margin-left: 20px">{{username}}</p>
                    <Panel name="1">
                        <span>{{user_intro}}</span>
                        <p slot="content" style="word-break: break-all">{{intro}}</p>
                    </Panel>
                </Collapse>
            </div>
            <br>
            <div class="btn">
                <Button :size="buttonSize" :icon="!isFollow ? 'md-add' : ''" :type="type" @click="doFollow"
                        @mouseover.native="over"
                        @mouseout.native="out"
                        :style="style"
                >
                    {{Follow}}
                </Button>
            </div>
        </Card>
        <div class="user">
            <div class="user_header">
                <Menu mode="horizontal" theme="light" :active-name="now" width="auto" @on-select="select">
                    <MenuItem name="1">
                        回答
                    </MenuItem>
                    <MenuItem name="2">
                        提问
                    </MenuItem>
                    <MenuItem name="3">
                        关注的人
                    </MenuItem>
                    <MenuItem name="4">
                        粉丝
                    </MenuItem>
                </Menu>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>

</template>

<script>

    export default {
        name: "User",
        data() {
            return {
                selected: '1',
                status: [],
                username: '',
                user_id: '',
                head_sculpture: '',
                intro: '',
                isFollow: false,
                Follow: '点击关注',
                not_follow: '点击关注',
                followed: "已经关注",
                follow_hover: "取消关注",
                buttonSize: 'large',
                style: {}
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            '$route'(to, from) {
                this.get_data()
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            },
            type() {
                return this.isFollow ? "success" : "primary";
            },
            isLogin() {
                return this.$store.state.isLogin;
            },
            user_intro() {
                if ("1" == this.status) {
                    return "点击收起"
                } else {
                    return this.intro.substr(0, 15) + "..."
                }
            },
            now(){
                let path = this.$route.path.split("/");
                if (path.length === 3 || path[path.length - 1] === "" || path[path.length - 1] === "answers")
                    return "1";
                else if (path[path.length - 1] === "ques")
                    return "2";
                else if (path[path.length - 1] === "follow")
                    return "3";
                else if (path[path.length - 1] === "fans")
                    return "3";
                else return ""
            }
        },
        mounted() {
            // this.fakeData();
            this.get_data();
        },
        methods: {
            get_data() {
                this.axios.get('/api/user?user_id=' + this.id).then((resp) => {
                    let response = resp.data;
                    if (!response.success) {
                        this.$Message.error(response.error);
                    } else {
                        this.username = response.username;
                        this.user_id = response.userid;
                        this.head_sculpture = response.head_sculpture;
                        this.intro = response.intro;
                        this.isFollow = response.isFollow;
                        if (this.isFollow){
                            this.Follow = this.followed;
                        }
                    }
                });
            },
            select(value) {
                this.selected = value;
                if (this.selected === "1") {
                    this.$router.push("/user/" + this.id + "/answers")
                } else if (this.selected === "2") {
                    this.$router.push("/user/" + this.id + "/ques")
                } else if (this.selected === "3") {
                    this.$router.push("/user/" + this.id + "/follow")
                } else {
                    this.$router.push("/user/" + this.id + "/fans")
                }
            },
            fakeData() {
                this.success = true;
                this.username = 'cuishuting';
                this.head_sculpture = 'https://i.loli.net/2017/08/21/599a521472424.jpg';
                this.intro = 'g个人简介的部分aaadsaaaaasafsdagfffffffffffagfdsgdfgragasfdfdsafaaaaaaa';
                this.isFollow = false;
            },
            doFollow() {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能关注");
                    this.$router.push("/login")
                }
                if (!this.isFollow) {
                    this.axios.post("/api/follow", {"user_id": this.user_id}).then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.Follow = this.followed;
                            this.isFollow = true;
                        } else {
                            this.$Message.error(temp.error);
                        }
                    })
                } else {
                    this.axios.post("/api/unfollow", {"user_id": this.user_id}).then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.Follow = this.not_follow;
                            this.isFollow = false;
                            this.style = {}
                        } else {
                            this.$Message.error(temp.error);
                        }
                    })
                }
            },
            over() {
                if (this.isFollow) {
                    this.Follow = this.follow_hover;
                    this.style = {backgroundColor: "#CCC", border: "0px"}
                }
            },
            out() {
                if (this.isFollow) {
                    this.Follow = this.followed;
                    this.style = {}
                }
            }
        },
    }
</script>

<style scoped>
    .back-img {
        width: 150px;
        height: 150px;
        margin-left: 80px;
        margin-top: -30px;
        border-radius: 10px;
        border: 5px solid white;
    }

    .card {
        width: 64%;
        min-width: 1000px;
        text-align: center;
        margin: 0 auto;
    }

    .btn {
        float: right;
        margin-top: -60px;
        margin-right: 30px;
    }

    .pos {
        width: 300px;
        margin-left: 250px;
        margin-top: -90px
    }

    .user_header {
        width: 100%;
        z-index: -1;
    }

    .user {
        width: 64%;
        margin: 20px auto;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
        min-width: 1000px;
    }
</style>