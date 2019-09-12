<template>
    <div class="contact">
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">联系我们</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-body">
                <router-link :to="{name: 'phone'}" class="card-link">电话</router-link>
                <router-link :to="{name: 'person'}" class="card-link">个人</router-link>
            </div>
            <div class="card-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Contact extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>