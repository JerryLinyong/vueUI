<template>
<a-form layout='inline' @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
  <template v-if="form">
    <div>
    <a-form-item
      :validateStatus="userNameError() ? 'error' : ''"
      :help="userNameError() || ''"
      fieldDecoratorId="userName"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
    >
      <label for="">账户名称</label>
      <a-input placeholder='Username'>
        <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    </div>
    <div>
    <a-form-item
      :validateStatus="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
      fieldDecoratorId="password"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}"
    >
      <label for="">登录密码</label>
      <a-input type='password' placeholder='Password'>
        <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    </div>
    <br> 
    <a-form-item>
      <a-button
        type='primary'
        htmlType='submit'
      >
        确定
      </a-button>
    </a-form-item>
  </template>
</a-form>
</template>

<script>
// :disabled="hasErrors(form.getFieldsError())"
// function hasErrors (fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field])
// }
export default {
  data () {
    return {
      hasErrors: true,
      form: null,
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>