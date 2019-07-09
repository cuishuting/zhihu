<template>
    <div class="nav">
        <div class="card" v-if="!isLogin">
            <p><router-link to="/login">登陆</router-link>查看更多信息！</p>
            <p>没有账号？点击<router-link to="/register">注册</router-link></p>
        </div>
        <div class="card" v-if="isLogin">
            <Row class="add">
                <Col span="8">
                    <a class="add-item">
                        <div class="add-icon">
                            <Icon type="ios-paper"/>
                        </div>
                        <div class="add-title">写回答</div>
                    </a>
                </Col>
                <Col span="8">
                    <a class="add-item">
                        <div class="add-icon">
                            <Icon type="ios-search"/>
                        </div>
                        <div class="add-title">提问题</div>
                    </a>
                </Col>
                <Col span="8">
                    <a class="add-item">
                        <div class="add-icon">
                            <Icon type="ios-home"/>
                        </div>
                        <div class="add-title">看主页</div>
                    </a>
                </Col>
            </Row>
        </div>
        <div class="card" v-if="isLogin">
            <ul>
                <li class="li-item"><router-link :to="'/user/'+id+'/answers'"><Icon type="ios-paper"/>&nbsp;&nbsp;我的回答</router-link></li>
                <li class="li-item"><router-link :to="'/user/'+id+'/ques'"><Icon type="ios-search"/>&nbsp;&nbsp;我的提问</router-link></li>
                <li class="li-item"><router-link :to="'/user/'+id+'/follow'"><Icon type="ios-person" />&nbsp;&nbsp;我的关注</router-link></li>
                <li class="li-item"><router-link :to="'/user/'+id+'/fans'"><Icon type="ios-contacts" />&nbsp;&nbsp;我的粉丝</router-link></li>
            </ul>
        </div>
        <div class="info">
            <p>违法和不良信息举报：010-82716601</p>
            <p>Design By Tobias and Cui Shuting In July 2019.</p>
            <p>Get More Info to visit project page in Github.</p>
            <a href="https://github.com/TobiasYin/zhifou">@Backend</a>&nbsp;<a href="https://github.com/cuishuting/zhihu">@Frontend</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightNav",
        computed:{
            id(){
                return this.$store.state.userID
            },
            isLogin(){
                return this.$store.state.isLogin
            }
        }

    }
</script>

<style scoped>
    .nav {
        width: 20%;
        right: 16%;
        position: fixed;
        min-width: 280px;
    }

    .add {
        margin: 20px auto;
        width: 80%;
    }

    .add-icon{
        color: #8590a6;
        font-size: 22px;
    }
    .card {
        background-color: #FFF;
        border: #FFFFFF solid 1px;
        border-radius: 5px;
        box-shadow: 1px 1px 4px lightgrey;
        margin-bottom: 20px;
    }

    .add-item {
        font-size: 16px;
        color: #444;
    }

    .add-title{
        margin-top: 10px;
    }

    .li-item{
        margin: 30px auto;
        padding: 0px 40px;
        font-size: 16px;
        text-align: left;
        line-height: 24px;
        color: #8590a6;
    }

    .li-item a{
        color: #8590a6;
    }

    .info{
        color: #8590a6;
        text-align: left;
        line-height: 1.67;
    }
    .info a{
        color: #8590a6;
    }

    .card p{
        font-size: 16px;
        margin: 30px auto;
    }
</style>