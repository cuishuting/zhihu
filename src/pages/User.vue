<template>
    <div>
        <Card style="width:90%;text-align: center;margin-left:50px;margin-right:50px;margin-top:-15px">
            <div style="margin-left:0;margin-right:0;width:100%">
                <img src="../img/user.jpg" style="width:1000px;height:200px">
            </div>
            <div style="text-align: left">
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width:150px;height:150px;margin-left:80px;margin-top:-30px;border-radius:10px;border: 5px solid white;"/>
                <Collapse style="width:300px;margin-left:250px;margin-top:-100px">
                    <p style="font-size: 30px;font-weight: bold;border:none">{{username}}</p>
                    <Panel name="1">
                        查看详细资料
                        <p slot="content">{{intro}}</p>
                    </Panel>
                </Collapse>
            </div>
            <br>
            <div style="text-align: right;margin-right:60px;margin-top:-50px" v-if="!isFollow">
                <Button :size="buttonSize" icon="md-add" type="primary" @click="isFollow=true">关注他</Button>
            </div>
            <div style="text-align: right;margin-right:60px;margin-top:-50px" v-else>
                <Button :size="buttonSize" type="success" @mouseOver="cancelFollow = '取消关注'"  @click="isFollow=false">{{cancelFollow}}</Button>
            </div>
        </Card>
    </div>

</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                success: false,
                error: '',
                username: '',
                userid: '',
                head_sculpture: '',
                intro: '',
                isFollow: false,
                cancelFollow: '已关注',
                buttonSize:'large',
            }

        },
        mounted: function () {
            this.fakeData();
            this.axios.get(' /api/user ' + this.$route.params.user_id).then((response) => {
                this.success = response.success;
                if (!this.success) {
                    this.error = response.error;
                }
                else {
                    this.username = response.username;
                    this.userid = response.userid;
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
                this.head_sculpture='';
                this.intro='g个人简介的部分aaaaaaaaaa';
                this.isFollow=false;
            },
        },
    }
</script>

<style scoped>

</style>