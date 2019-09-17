<template>
    <div class="menu">

        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-8">
                <div class="card">
                    <h4 class="card-header">菜单</h4>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>尺寸</th>
                            <th>价格</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems" :key="item.name">
                        <tr>
                            <td><strong v-text="item.name"></strong></td>
                        </tr>
                        <tr v-for="typeItem in item.options">
                            <td v-text="typeItem.size"></td>
                            <td v-text="typeItem.price"></td>
                            <td>
                                <button type="button"
                                        class="btn btn-sm btn-outline-success"
                                >
                                    <span class="fa fa-plus"></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 ">
                <div class="card">
                    <h5 class="card-header">下单</h5>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>尺寸</th>
                            <th>价格</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems" :key="item.name">
                        <tr>
                            <td><strong v-text="item.name"></strong></td>
                        </tr>
                        <tr v-for="typeItem in item.options">
                            <td v-text="typeItem.size"></td>
                            <td v-text="typeItem.price"></td>
                            <td>
                                <button type="button"
                                        class="btn btn-sm btn-outline-success"
                                >
                                    <span class="fa fa-plus"></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Provide, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Menu extends Vue {

        @Provide()
        getMenuItems: object = {
            1: {
                name: '榴莲Pizza',
                des: '这是吃榴莲的朋友的最佳选择',
                options: [
                    {
                        size: 9,
                        price: 38,
                    },
                    {
                        size: 12,
                        price: 48,
                    }
                ]
            },
            2: {
                name: '芝士Pizza',
                des: '这是吃榴莲的朋友的最佳选择',
                options: [
                    {
                        size: 5,
                        price: 22,
                    },
                    {
                        size: 7,
                        price: 29,
                    }
                ]
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>