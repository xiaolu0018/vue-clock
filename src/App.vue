<template>
    <div id="clock">
        <date>{{newdate}}</date>
        <my-time v-bind:mytimes="newtime"></my-time>
        <copy-right></copy-right>
    </div>
</template>

<script>
    import Date from './components/Date'
    import MyTime from './components/MyTime'
    import CopyRight from './components/CopyRight'
    var app = {
        name: "app",
        components:{
            Date,
            MyTime,
            CopyRight
        },
        props:['mytime','mydate'],
        computed:{
            newtime:function(){
                return this.mytime
            },
            newdate:function(){
                return this.mydate
            }
        }
    }

    export default app;
</script>

<style>
    html, body {
        height: 100%;
    }

    body {
        background: #0f3854;
        background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
        background-size: 100%;
    }

    p {
        margin: 0;
        padding: 0;
    }

    #clock {
        font-family: 'Share Tech Mono', monospace;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    }
</style>