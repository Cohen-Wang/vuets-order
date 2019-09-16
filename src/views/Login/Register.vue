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
            // 判断
            if (this.password !== this.confirmPassword) {
                alert('密码不一致');
                return;
            }
            // 准备数据
            const formData = {
                email: this.email,
                password: this.password,
            };
            // 发送
            (this as any).$axios
                .post('http://jsonplaceholder.typicode.com/users', formData)
                .then((res: any) => {
                    console.log(res);
                    alert('注册成功，即将跳转到登录页面');

                    // 跳转
                    (this as any).$router.push('/login');
                })
                .catch((err: any) => {
                    console.log(err);
                })
        }

    }
</script>

<style lang="scss" scoped>

</style>