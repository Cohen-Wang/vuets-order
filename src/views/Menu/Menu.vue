<template>
    <div class="menu">

        <div class="row">

            <!-- 菜单 -->
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
                        <tr v-for="option in item.options">
                            <td v-text="option.size"></td>
                            <td v-text="option.price"></td>
                            <td>
                                <button type="button"
                                        class="btn btn-sm btn-outline-success"
                                        @click="addToBaskets(item, option)"
                                >
                                    <span class="fa fa-plus"></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 货篮 -->
            <div class="col-sm-12 col-md-6 col-lg-4 ">
                <div class="card">
                    <h5 class="card-header">下单</h5>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-show="baskets.length === 0">
                            <td colspan="5" class="text-muted bg-light text-center"> 暂无内容</td>
                        </tr>
                        <tr v-show="baskets.length !== 0"
                            v-for="item in baskets"
                        ><!--:key="item.name+item.option.size"-->
                            <td>
                                <button type="button"
                                        class="btn btn-sm"
                                        @click="decreaseQuantity(item)"
                                >
                                    <span class="fa fa-minus"></span>
                                </button>
                                <span>{{item.quantity}}</span>
                                <button type="button"
                                        class="btn btn-sm"
                                        @click="increaseQuantity(item)"
                                >
                                    <span class="fa fa-plus"></span>
                                </button>
                            </td>
                            <td v-text="item.name + '-' + item.size"></td>
                            <td v-text="item.price * item.quantity"></td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-body">
                        <p>
                            <span>总结:</span>&nbsp;&nbsp;
                            <b>{{total}}</b>&nbsp;&nbsp;
                            <span>RMB</span>&nbsp;&nbsp;
                        </p>
                        <button class="btn btn-block btn-success">确定</button>
                    </div>
                </div>
            </div>
        </div><!--row-->
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
        baskets: any = [];

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
        };

        // 计算属性：总价
        get total (): number {
            let total = 0;

            for (let key in this.baskets) {
                if (this.baskets.hasOwnProperty(key)) {
                    let item = this.baskets[key];
                    total += item.quantity * item.price;
                }
            }

            return total;
        }

        /**
         * 添加到菜单栏
         * item有name属性
         * option有size和price属性
         */
        addToBaskets (item: any, option: any): void {
            // ❤❤❤❤ 出来当一个对象，而不是直接添加。因此，下面可以写逻辑
            let baskets = {
                name: item.name,
                size: option.size,
                price: option.price,
                quantity: 1,
            };

            // 逻辑
            if (this.baskets.length > 0) {
                // 过滤
                let result = this.baskets.filter( (basket: any) => {
                    return (basket.name === item.name && basket.price === option.price)
                });

                if (result !== null && result.length > 0) {
                    result[0].quantity++;
                } else {
                    this.baskets.push(baskets);
                }
            } else {
                this.baskets.push(baskets);
            }
        };


        decreaseQuantity (item: any): void {
            // 写法一：
            if (!true) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    this.removeFromBaskets(item);
                }
            }
            // 写法二
            else {
                item.quantity--;
                //
                if (item.quantity <= 0) {
                    this.removeFromBaskets(item);
                }
            }
        };

        // removeFromBaskets (index: number): void {
        //     this.baskets.splice(index, 1);
        // }

        removeFromBaskets (item: any): void {
            this.baskets.splice(this.baskets.indexOf(item), 1);
        }

        increaseQuantity (item: any): void {
            item.quantity++;
        }



    }
</script>

<style lang="scss" scoped>

</style>