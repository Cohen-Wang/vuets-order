<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div class="container">
            <!-- LOGO -->
            <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false">
                    <title>Product</title>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                </svg>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">主页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="menu">菜单</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="admin">管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="translate">在线翻译</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">关于我们</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="login">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="register">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Navbar extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>