<template>
    <p>{{mycopy}}</p>
</template>

<script>
    export default {
        name: "copy-right",
        data(){
            return{
                mycopy:'All rights reserved; those responsible for unauthorized reproduction will be prosecuted.'
            }
        }
    }
</script>

<style scoped>
    p {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
</style>