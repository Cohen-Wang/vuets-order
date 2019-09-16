<template>
    <div class="login">

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="loginSubmit">
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
                            <button type="submit"
                                    class="btn btn-dark btn-block"
                            >
                                登录
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
    export default class Login extends Vue {

        @Provide()
        email: string = '';

        @Provide()
        password: string = '';

        loginSubmit (): void {
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
                    alert(`由于没有链接后台，我只能假设你用邮箱${this.email}登录成功`);

                    // 跳转
                    (this as any).$router.push({name: 'home'});
                })
                .catch((err: any) => {
                    console.log(err);
                })
        }

    }
</script>

<style lang="scss" scoped>

</style>