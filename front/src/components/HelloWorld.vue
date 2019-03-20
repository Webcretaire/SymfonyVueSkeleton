<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            Your backend code is located in the <b>src</b> folder of your project, and your frontend code is in the <b>front/src</b>
            folder.
        </p>
        <h3>Symfony backend</h3>
        <p>
            All Symfony route have the <b>/api</b> prefix, to make sure there is no collision between Vue routes and
            Symfony routes. </p>
        <p>
            To be able to generate Symfony routes from Vue, you must use the command <b>make
            export_routing</b> to dump all the routing in a JS file.
        </p>
        <h3>Vue.JS frontend</h3>
        <p>
            The frontend uses vue-router and vuex, which are configured by the files <b>front/src/router.js</b> and <b>front/src/store.js</b>.
        </p>
        <p>
            To generate frontend routes, use <b>frontPath</b> from the <b>util/http.js</b> file, and to generate backend
            routes, use <b>apiPath</b> from the same file (those are wrappers for Vue.JS router and FosJsRouting tool).
        </p>
        <p>
            To make a request to the backend, use <a href="https://github.com/axios/axios">axios</a>. For example, this
            data was fetched from the server :
        </p>
        <pre>
            <code>
                {{ JSON.stringify(exampleData) }}
            </code>
        </pre>
    </div>
</template>

<script>
    import axios from "axios";
    import http from "@/util/http";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                exampleData: false
            }
        },
        mounted() {
            axios
                .get(http.apiPath('example_route'))
                .then(response => {
                    this.exampleData = response.data;
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
