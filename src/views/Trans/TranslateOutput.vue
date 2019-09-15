<template>
    <div class="translateOutput">

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h3 v-text="translatedTextWhichIsBind"></h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class TranslateOutput extends Vue {

        @Prop()
        translatedTextWhichIsBind: string = '';// ❤❤❤❤ 这里默认值必须为空，否则报错

    }
</script>

<style lang="scss" scoped>

</style>