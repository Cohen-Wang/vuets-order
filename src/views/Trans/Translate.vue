<template>
    <div class="translate">

        <div class="container">
            <!-- 表单 -->
            <TranslateForm @formSubmit="formSubmit"/>

            <hr>

            <!-- 输出 -->
            <TranslateOutput :translatedTextWhichIsBind="translatedText"/>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Provide, Vue } from 'vue-property-decorator';
    import TranslateForm from './TranslateForm.vue';
    import TranslateOutput from './TranslateOutput.vue';

    @Component({
        components: {
            TranslateForm,
            TranslateOutput,
        },
    })
    export default class Translate extends Vue {

        @Provide()
        translatedText: string = '';

        formSubmit (text: string): void {
            (this as any).$axios
                .get(`http://jsonplaceholder.typicode.com/users`
                )
                .then((res: any) => {
                    console.log(res);
                    this.translatedText = '由于没有接API，所以没有翻译结果。';
                })
                .catch((err: any) => {
                    console.log(err);
                    this.translatedText = '由于没有接API，所以没有翻译结果。';
                })

        }

    }
</script>

<style lang="scss" scoped>

</style>