<template>
  <el-container>
    <div class="left">
      <span class="name">健康云</span>
      <img src="../assets/logo.png" alt="" class="avatar">
    </div>
    <div class="right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i>张三</i>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="push('mycenter')">个人主页</el-dropdown-item>
              <el-dropdown-item @click="push('account')">账号设置</el-dropdown-item>
              <el-dropdown-item @click="push('cart')">购物车</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
    </div>
    
  </el-container>
</template>

<script setup>
  name: "top"
import { useRouter } from "vue-router";
import { getCurrentInstance } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

    const router = useRouter();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 

    const push = (v) => {
      window.sessionStorage.setItem("active", v);
      router.push('/'+ v)
    }

    const logout = () => {
      router.push('/login')
      proxy.$msg.info('退出成功')
    }

</script>

<style lang="less" scoped>
.el-container{
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    height: 66px;
}
.left{
  height: 50px;
  display: flex;
  align-items: center;
}
  .trademark{
    width: 66px;
    height: 66px;
    border-radius: 10px;
  }

  .name{
    color: whitesmoke;
    font-size: 40px;
    line-height: 66px;
    vertical-align:middle;
    letter-spacing: 12px;
    font-family: 隶书;
  }


  .avatar{
    width: 45px;
    height: 45px;
    margin-right: 20px;
    border-radius: 33px;
  }
.right{
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-dropdown{
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    background-color: #F56C6C;
    margin-right: 50px;
    padding-left: 20px;
    color: #fff;
    i{
      font-style: normal;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }

}
</style>