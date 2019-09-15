<template>
    <div class="register">

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="registerSubmit">
                            <div class="form-group">
                                <label>邮箱：</label>
                                <input type="email"
                                       class="form-control"
                                       v-model="email"
                                >
                            </div>
                            <div class="form-group">
                                <label>密码：</label>
                                <input type="password"
                                       class="form-control"
                                       v-model="password"
                                >
                            </div>
                            <div class="form-group">
                                <label>确认密码：</label>
                                <input type="password"
                                       class="form-control"
                                       v-model="confirmPassword"
                                >
                            </div>
                            <button type="submit"
                                    class="btn btn-dark btn-block"
                            >
                                注册
                            </button>
                        </form>
                    </div>
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
    export default class Register extends Vue {

        @Provide()
        email: string = '';

        @Provide()
        password: string = '';

        @Provide()
        confirmPassword: string = '';

        registerSubmit (): void {
            console.log('register');
        }

    }
</script>

<style lang="scss" scoped>

</style>