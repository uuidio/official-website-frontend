<template>
  <div class="home" style="width: 1200px;margin: 0 auto">
    <div class="block">
      <div style="text-align: center;margin-top: 80px;"><img src="https://rescdn.www.smartconns.com/assets/img/05_welcome.png" alt="" style="margin-left: 125px;"></div>
      <div style="width: 550px;margin-top: 20px;margin: 0 auto">
        <el-form :model="add_param" :rules="add_rules" ref="add_from" label-width="150px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model.trim="add_param.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="mobile" style="margin-top: 40px;">
            <el-input maxlength="11" show-word-limit v-model.trim="add_param.mobile" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="公司" prop="company" style="margin-top: 40px;">
            <el-input show-word-limit v-model.trim="add_param.company" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" style="margin-top: 40px;">
            <el-input  show-word-limit v-model.trim="add_param.email" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="需求描述" prop="content" style="margin-top: 40px;">
            <el-input  :autosize="{ minRows: 6}" type="textarea" maxlength="300" show-word-limit v-model.trim="add_param.content" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit_add('add_from')" style="width:403px;">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
    },
    data () {
        return {
            add_param: {
                name: '',
                mobile: '',
                company: '',
                email: '',
                content: '',
            },
            //校验规则
            add_rules: {
                name: [
                    { required: true, message: '必填', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '必填', trigger: 'blur' },
                    { pattern: /(^(\d{3,4}-)?\d{7,8})$|(1[3|5|7|8]\d{9})/, message: '请输入正确手机号码' }
                ],
                company: [
                    { required: true, message: '必填', trigger: 'blur' },
                ],
                email: [
                    { type: 'email', message: '请填写正确的邮箱', trigger: 'blur' },
                ],
                content: [
                    { required: true, message: '必填', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        //新增提交
        submit_add (formName) {
            const self = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const url = '/jhg/busCooperation'
                    this.$api.post(this, url, self.add_param, res => {
                        if (res.data.code == 0) {
                            this.$message.success('提交成功');
                            setTimeout(() => {
                                this.$refs[formName].resetFields();
                            },1000)
                        } else {
                            this.$message.error('网络错误');
                        }
                    })
                }
            })
        },
    },
    computed: {},
    watch: {},
    created () {

    },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
  .square {
    background-color: #00b0e1;
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .hover_blue>div>div {
    cursor: pointer;
  }
  .hover_blue>div>div:hover {
    box-shadow: 1px 1px 16px #aaecff!important;
  }
</style>
