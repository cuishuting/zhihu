<template>
        <div class="topguide" style="position: fixed">
            <Row>
                <Col span="8">
                    <div class="layout_logo"><p>LOGO</p></div>
                    <div class="layout_nav">
                        <Menu mode="horizontal" :theme="theme1" active-name="1" width="auto">
                            <MenuItem name="1">
                                <router-link to="">首页</router-link>
                            </MenuItem>
                            <MenuItem name="2">
                                话题
                            </MenuItem>
                            <MenuItem name="4">
                                关注
                            </MenuItem>
                        </Menu>
                    </div>
                </Col>
                <Col span="8">
                    <Input search placeholder="搜索一下，遇见新鲜" size="default" class="search"/>
                </Col>
                <Col span="2">
                    <Button type="primary" class="question">提问</Button>
                </Col>
                <Col span="2">
                    <div class="headsculpture">
                        <Badge :count="get_tips">
                        <Avatar src="get_headsculpture" />
                        </Badge>
                    </div>
                </Col>
                <Col span="2">
                </Col>
                <Col span="2">
                </Col>
            </Row>

        </div>

</template>

<script>
    import Menu from 'iview'
    import Input from 'iview'
    import Button from 'iview'

    export default {
        name: "topguide",
        component: {
            Menu,
            Input,
            Button,
        },
        methods:{
            get_headsculpture() {
                this.axios.get(' /api/self_info ')
                    .then((response)=>{
                        return response.head_sculpture;
                    })
            },
            get_tips() {
                this.axios.get('/api/self_info')
                    .then((response)=>{
                        return response.tip;
                    })
            }
        }
    }
</script>

<style scoped>
    .layout_logo{
        float:left;
        font-size:30px;
        width:80px;
        height:60px;
        color:#2d8cf0;
        margin-top:18px;
    }
    .layout_nav{
        margin-top:8px;
        margin-left:100px;
    }
    .topguide{
        margin-top:-50px;
        margin-left:50px;
        margin-right:50px;
        width: 100%;
    }
    .search{
        margin-top:25px;
    }
    .question{
        margin-top:25px ;
    }
    .headsculpture{
        margin-top:22px;
        margin-right:100px;
    }
</style>