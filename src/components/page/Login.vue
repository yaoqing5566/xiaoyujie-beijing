<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName, ev) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            let loginData = {name: this.ruleForm.username, pwd: this.ruleForm.password};
            let _this = this;
            //测试用
//                      localStorage.setItem('ms_user', JSON.stringify({"id":1,"name":"admin","type":1,"sex":0}));
//                      _this.$router.push('/index');
            $_post('/Views/login.aspx', {
              data: JSON.stringify(loginData)
            }).then(function (response) {
              if (response.code == 1) {
                //_this.$store.commit('getUserByToken',response.data.token)
                localStorage.setItem('ms_user', JSON.stringify(response.data));
                sessionStorage.removeItem("myworkSelect");
                _this.$store.state.userInfo = response.data;
                _this.$router.push('/soundStudio');
              } else {
                _this.$message.error(response.msg);
              }
            })


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    created() {
      let name = this.$route.query.n;
      let pwd = this.$route.query.p;
      if(name&&pwd){
        let loginData = {name: name, pwd: pwd};
        let _this = this;
        $_post('/Views/login.aspx', {
          data: JSON.stringify(loginData)
        }).then(function (response) {
          if (response.code == 1) {
            //_this.$store.commit('getUserByToken',response.data.token)
            localStorage.setItem('ms_user', JSON.stringify(response.data));
            sessionStorage.removeItem("myworkSelect");
            _this.$store.state.userInfo = response.data;
            _this.$router.push('/soundStudio');
          } else {
            _this.$message.error(response.msg);
          }
        })
      }


    }
  }
</script>

<style>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fdeef5 url("../../../static/img/bg.jpg") no-repeat right bottom;
    background-size: cover;
  }

  .ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #000000;

  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
  }
</style>
