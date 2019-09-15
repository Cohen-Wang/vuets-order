<template>
    <div class="translateForm">

        <div class="row">
            <div class="col-12">
                <form @submit.prevent="formSubmit">
                    <div class="form-group">
                        <label>内容：</label>
                        <input type="text"
                               class="form-control"
                               placeholder="请输入内容"
                               v-model="content"
                        >
                    </div>
                    <div class="form-group">
                        <label>请选择翻译语言：</label>
                        <select class="form-control">
                            <option>en</option>
                        </select>
                    </div>
                    <button type="submit"
                            class="btn btn-block btn-dark"

                    >
                        确定
                    </button>
                </form>
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
    export default class TranslateForm extends Vue {

        @Provide()
        content: string = '';

        formSubmit (): void {
            this.$emit("formSubmit", this.content);
        }

    }
</script>

<style lang="scss" scoped>

</style>