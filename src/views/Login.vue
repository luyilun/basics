<template>
  <div class="con">
    <div class="formCon">
      <h1 class="title">后台管理系统</h1>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ],
              },
            ]"
            placeholder="用户名"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ],
              },
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { Form, Button, Input, Icon } from "ant-design-vue";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  name: "Login",
  components: {
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-button": Button,
    "a-input": Input,
    "a-icon": Icon,
  },
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped lang="less">
.con {
  width: 100%;
  height: 100vh;
  background: #f8f8f9;
  position: relative;
  .formCon {
    width: 260px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #dcdee2;
    padding: 24px;
    border-radius: 10px;
    .footer {
      margin-bottom: 0;
    }
    .title {
      width: 200%;
      position: absolute;
      top: -30%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
