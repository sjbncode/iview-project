<template>
    <Menu mode="vertical" :theme="theme1" active-key="3-1">
        <Menu-item key="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </Menu-item>
        <Menu-item key="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </Menu-item>
        <Submenu key="4">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                Sample
            </template>
            <Menu-group title="form">
                <Menu-item key="4-1"><router-link to="/t/form">from1</router-link></Menu-item>
                <Menu-item key="4-2"><router-link to="/t/form2">from2</router-link></Menu-item>
                <Menu-item key="4-3"><router-link to="/t/form3">from3</router-link></Menu-item>
            </Menu-group>
        </Submenu>
        <Submenu key="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item key="3-1">新增和启动</Menu-item>
                <Menu-item key="3-2">活跃分析</Menu-item>
                <Menu-item key="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item key="3-4">用户留存</Menu-item>
                <Menu-item key="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
        <Menu-item key="4">
            <Icon type="settings"></Icon>
            综合设置
        </Menu-item>
    </Menu>
    <!-- <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme1">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
        <Radio value="primary"></Radio>
    </Radio-group> -->
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
