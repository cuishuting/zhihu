<template>
    <div>
        <Card class="card">
            <div style="margin-left:0;margin-right:0;width:100%">
                <img src="../img/user.jpg" style="width:100%;height:200px">
            </div>
            <div style="text-align: left">
                <img :src="head_sculpture" class="back-img"/>
                <Collapse style="width:300px;margin-left:250px;margin-top:-100px">
                    <p style="font-size: 30px;font-weight: bold;border:none;margin-left: 15px">{{username}}</p>
                    <Panel name="1">
                        查看详细资料
                        <p slot="content">{{intro}}</p>
                    </Panel>
                </Collapse>
            </div>
            <br>
            <div style="text-align: right;margin-right:60px;margin-top:-50px">
                <Button :size="buttonSize" :icon="!isFollow ? 'md-add' : ''" :type="type" @click="doFollow"
                        @mouseover.native="over"
                        @mouseout.native="out"
                        :style="style"
                >
                    {{Follow}}
                </Button>
            </div>
        </Card>
    </div>

</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                error: '',
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
        computed: {
            type() {
                return this.isFollow ? "success" : "primary";
            },
            isLogin() {
                return this.$store.state.isLogin;
            },
        },
        mounted: function () {
            // this.fakeData();
            this.axios.get('/api/user?user_id=' + this.$route.params.id).then((resp) => {
                let response = resp.data;
                if (!response.success) {
                    this.$Message.error(response.error);
                } else {
                    this.username = response.username;
                    this.user_id = response.userid;
                    this.head_sculpture = response.head_sculpture;
                    this.intro = response.intro;
                    this.isFollow = response.isFollow;
                }
            });
        },
        methods: {
            fakeData() {
                this.success = true;
                this.username = 'cuishuting';
                this.head_sculpture = 'https://i.loli.net/2017/08/21/599a521472424.jpg';
                this.intro = 'g个人简介的部分aaaaaaaaaa';
                this.isFollow = false;
            },
            doFollow() {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能关注")
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
                    this.style = {backgroundColor: "#CCC"}
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
        width: 90%;
        text-align: center;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: -15px
    }
</style>