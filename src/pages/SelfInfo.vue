<template>
    <div class="getself_info">
        <div v-if="status">
            <Badge :count="message">
                <Avatar src=" head_sculpture" size="large"/>
            </Badge>
        </div>
        <div v-else>
            <Badge :count="message">
                <Avatar icon="ios-person" size="large"/>
            </Badge>
        </div>
        <br/>
        <br/>
        <Collapse simple>
            <Panel name="1">
                用户名
                <p slot="content">{{username}}</p>
            </Panel>
            <Panel name="2">
                用户id
                <p slot="content">{{userid}}</p>
            </Panel>
            <Panel name="3">
                提醒的数量
                <p slot="content">{{tip}}</p>
            </Panel>
        </Collapse>
    </div>

</template>

<script>
    export default {
        name: "SelfInfo",
        data() {
            return {
                status: false,
                username: '',
                userid: '',
                head_sculpture: '',
                tip: '',
                message: '',
            }
        //TODO This code has not been reviewed yet.

        },
        methods: {
            get_head_sculpture() {
                this.axios.get('/api/self_info', {timeout: 2500})
                    .then((resp) => {
                        let tmp = resp.data;
                        this.username = tmp.username;
                        this.userid = tmp.userid;
                        this.head_sculpture = tmp.head_sculpture;
                        this.tip = tmp.tip;
                        this.message = tmp.message;
                        this.status = true;
                    })
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.log(error);
                        this.$Message.err("网络连接失败")
                    });
            },

        }
    }
</script>

<style scoped>
    .getself_info {
        width: 300px;
        height: 500px;
        margin: auto;
    }
</style>