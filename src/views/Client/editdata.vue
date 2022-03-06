<template>
  <h3>修改体质资料</h3>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form"></el-input>
    </el-form-item>
    <el-form-item class="btn">
        <el-button type="primary" @click="editInfo(formRef)">修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { getCurrentInstance } from "vue";

    const { proxy } = getCurrentInstance(); // ctx中有问题，建议使用proxy中获取
    const form = ref({});
    const formRef = ref(null);

    const editInfo = (formRef) => {
        formRef.validate( (valid) => {
            if (valid) {
                proxy.$msg.success('修改成功')
            }else{
                return 
            }
        })
    }



</script>

<style lang="less" scoped>
@import "../../style/mixins.less";
h3 {
  width: 70%;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: coral;
  margin: 0 auto 30px;
  border-radius: 10px;
}
.el-form {
  .wh(80%, auto);
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
:deep(.el-form-item){
    margin-bottom: 30px;
}
.btn{
    text-align: center;
    width: 100%;
    .el-button{
        width: 120px;
        margin-top: 10px;
        margin-left: 30% !important;
    }
}

</style>