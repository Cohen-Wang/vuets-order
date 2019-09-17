<template>
    <div class="newPizza">

        <form action="">
            <div class="form-group">
                <label>名称：</label>
                <input type="text"
                       class="form-control"
                       v-model="newPizza.name"
                >
            </div>
            <div class="form-group">
                <label>描述：</label>
                <textarea class="form-control"
                          cols="10"
                          rows="5"
                          style="resize: none;"
                          v-model="newPizza.des"
                >
                </textarea>
            </div>

            <p><strong>选项1</strong></p>
            <div class="form-group">
                <label>尺寸：</label>
                <input type="text"
                       class="form-control"
                       v-model.number="newPizza.size1"
                >
            </div>
            <div class="form-group">
                <label>价格：</label>
                <input type="text"
                       class="form-control"
                       v-model.number="newPizza.price1"
                >
            </div>

            <p><strong>选项2</strong></p>
            <div class="form-group">
                <label>尺寸：</label>
                <input type="text"
                       class="form-control"
                       v-model.number="newPizza.size2"
                >
            </div>
            <div class="form-group">
                <label>价格：</label>
                <input type="text"
                       class="form-control"
                       v-model.number="newPizza.price2"
                >
            </div>
            <div class="form-group">
                <button type="button"
                        class="btn btn-block btn-success"
                        @click="addMenuItem()"
                >
                    添加
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Provide, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class NewPizza extends Vue {

        @Provide()
        newPizza : {
            name: string,
            des: string,
            size1: number | null,
            price1: number | null,
            size2: number | null,
            price2: number | null,
        } = {
            name: '',
            des: '',
            size1: null,
            price1: null,
            size2: null,
            price2: null,
        };

        addMenuItem (): void {
            let item: any = {
                name: this.newPizza.name,
                des: this.newPizza.des,
                options: [
                    {
                        size: this.newPizza.size1,
                        price: this.newPizza.price2,
                    },
                    {
                        size: this.newPizza.size2,
                        price: this.newPizza.price2,
                    }
                ]
            };

            // 模拟发送后端
            (this as any).$axios
                .post('', item)
                .then((res: any) => {
                    console.log(res);
                })
                .catch((err: any) => {
                    console.log(err);
                })

        }


    }
</script>

<style lang="scss" scoped>

</style>