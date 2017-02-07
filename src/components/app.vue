<style scoped>
    @import '../styles/common.css';
    .wrapper{
        background-color: #eee;
        padding: 1px;
    }
    .wrapper-header{
        height: 30px;
    }
    .wrapper-navigate{
        float: left;
        height: 0px;
    }
    .wrapper-container {
    background: #fff;
    padding: 10px;
    margin:0px 5px 10px 240px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="wrapper">
        <div class="wrapper-header"></div>
        <div class="wrapper-navigate">
            <!-- <img src="../images/logo.png">     -->
            <mainnav></mainnav>
        </div>
        <div class="wrapper-container">
            <router-view></router-view>
        </div>
    </div>
    <div class="footer"></div>
</template>
<script>
    import mainnav from './mainnav.vue';
    export default {
        data () {
            return {}
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {

        },
        components:{mainnav}
    }
</script>
