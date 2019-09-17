<template>
    <div class="admin">
        <div class="row">
            <div class="col-12 col-md-8">
                <!-- new pizza -->
                <div class="card">
                    <h4 class="card-header">添加</h4>
                    <div class="card-body">
                        <add-new-pizza></add-new-pizza>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <!-- 展示 -->
                <div class="card">
                    <h4 class="card-header">菜单</h4>
                    <table class="table">
                        <thead>
                        <tr>
                            <td>品种</td>
                            <td>删除</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-show="menuItems.length === 0 ">
                            <td class="text-muted text-center bg-light" colspan="5">暂无内容</td>
                        </tr>
                        <tr v-show="menuItems.length !== 0"
                            v-for="item in menuItems"
                        >
                            <td v-text="item.name"></td>
                            <td>
                                <button class="btn btn-sm btn-danger"
                                        @click="deleteItem(item)"
                                >
                                    <span class="fa fa-trash"></span>
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
    import NewPizza from './NewPizza.vue';

    @Component({
        components: {
            'add-new-pizza': NewPizza,
        },
    })
    export default class Admin extends Vue {

        @Provide()
        menuItems: any = [
            {
                name: '榴莲pizza',
                des: '',
            },
            {
                name: '苹果pizza',
                des: '',
            },
        ];

        /** 删除 **/
        deleteItem (item: any): void {
            (this as any).$axios
                .post('', item)
                .then((res: any) => {
                    console.log(res);
                    this.menuItems.splice(this.menuItems.indexOf(item), 1);
                })
                .catch((err: any) => {
                    console.log(err)
                })
        };

    }
</script>

<style lang="scss" scoped>

</style>