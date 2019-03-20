<template>
    <div id="hello_page">
        <img alt="Symfony logo" src="/img/symfony.png">
        <img alt="Vue logo" src="/img/vue.png">
        <hello-world msg="Welcome to your Symfony and Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld";

    export default {
        name: "HelloPage",
        components: {HelloWorld}
    }
</script>

<style scoped>
    div#hello_page {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto auto;
        max-width: 1000px;
    }
</style>