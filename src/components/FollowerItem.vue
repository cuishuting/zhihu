<template>
    <Card class="follower">
        <div style="text-align:left">
            <router-link :to="'/user/' + this.userid"><img :src="head_sculpture" class="head"></router-link>
            <div class="info">
                <p style="font-weight: bold;font-size:21px">
                    <router-link :to="'/user/' + this.userid">{{username}}</router-link>
                </p>
                <p class="intro">{{intro}}</p>
                <p style="color:gray;font-size:15px">{{answer_count}}回答&nbsp;•&nbsp;{{followers_count}}关注者</p>
            </div>
            <Button class="button" :icon="!isFollow ? 'md-add' : ''" :type="type" @click="doFollow"
                    @mouseover.native="over"
                    @mouseout.native="out"
                    :style="style"
            >
                {{Follow}}
            </Button>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "FollowerItem",
        props: ['data'],
        data() {
            return {
                username: this.data.username,
                userid: this.data.userid,
                head_sculpture: this.data.head_sculpture,
                intro: this.data.intro,
                answer_count: this.data.answer_count,
                followers_count: this.data.followers_count,
                isFollow: this.data.isFollow,
                Follow: '点击关注',
                not_follow: '点击关注',
                followed: "已经关注",
                follow_hover: "取消关注",
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
        mounted(){
            if (this.isFollow){
                this.Follow = this.followed;
            }
        },
        methods: {
            doFollow() {
                if (!this.isLogin) {
                    this.$Message.error("登陆才能关注");
                    this.$router.push("/login")
                }
                if (!this.isFollow) {
                    this.axios.post("/api/follow", {"user_id": this.userid}).then((resp) => {
                        let temp = resp.data;
                        if (temp.success) {
                            this.Follow = this.followed;
                            this.isFollow = true;
                        } else {
                            this.$Message.error(temp.error);
                        }
                    })
                } else {
                    this.axios.post("/api/unfollow", {"user_id": this.userid}).then((resp) => {
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
            }
        },
    }
</script>

<style scoped>
    .head {
        float: left;
        margin-left: 1.3%;
        margin-top: 3px;
        width: 90px;
        height: 90px;
    }

    .follower {
        width: 100%;
    }

    .button {
        margin-top: -13%;
        margin-left: 85%;
    }

    .intro {
        font-size: 16px;
        height: 35px;
        overflow: hidden;
        word-break: break-all;
        width: 80%;
    }

    .info {
        line-height: 35px;
        margin-left: 18%;
    }
</style>