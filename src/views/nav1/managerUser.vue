<template>
  <div style='margin-top:20px;'>
      <el-form style='width:400px;' :model="ruleForm" ref="ruleForm" :rules="rules" label-position="left" label-width="80px">
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码" prop="pass">
          <el-input v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="管理员"></el-radio>
            <el-radio label="收银员"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
     </el-form>
  </div>
</template>
<style>


</style>

<script>
export default {
  data(){
    return {
       rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入登陆密码', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入名字', trigger: 'blur' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        },
        ruleForm:{
          account:'',
          pass:'',
          name:'',
          resource:''
        }
    }
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>
