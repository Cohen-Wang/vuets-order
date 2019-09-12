<template>
    <div class="about">
        <div class="container">
            <div class="row mb-5">
                <!-- 导航 -->
                <div class="col-4 mb-5">
                    <div class="list-group">
                        <router-link :to="{name: 'contact'}" class="list-group-item list-group-item-action">联系我们</router-link>
                        <router-link :to="{name: 'delivery'}" class="list-group-item list-group-item-action">发送包裹</router-link>
                        <router-link :to="{name: 'history'}" class="list-group-item list-group-item-action">历史订单</router-link>
                        <router-link :to="{name: 'guide'}" class="list-group-item list-group-item-action">新手引导</router-link>
                    </div>
                </div>

                <!-- 内容 -->
                <div class="col-8">
                    <router-view></router-view>
                </div>
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
    export default class About extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>