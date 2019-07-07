<template>
    <div id="register">
        <Row>
            <Col span="18">用户名：
                <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
            </Col>
            <Col span="6" >
                <img src="../img/cap.png">
            </Col>
        </Row>
        <div>

        </div>
        <div style="margin-top: 6px">
            Slots：
            <Input placeholder="Enter name" style="width: auto">
                <Icon type="ios-contact" slot="prefix" />
            </Input>
            <Input placeholder="Enter text" style="width: auto">
                <Icon type="ios-search" slot="suffix" />
            </Input>
        </div>


    </div>
</template>

<script>
    import Iuput from 'iview'
    export default {
        name: "register",
        component:{
            Iuput
        },
        methods:{
            getURL(){
                return "/api/get_captcha?time=" + new Date().getTime()
            }
        }
    }
</script>

<style scoped>

</style>