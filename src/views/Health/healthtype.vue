<template>
  <div class="box">
    <h1>个人健康状态信息</h1>
    <hr />

    <ul class="ul">
      <li>性别: {{ healthInfo.name }}</li>
      <li>年龄: {{ healthInfo.age }}</li>
      <li>身高: {{ healthInfo.high }}</li>
      <li>体重: {{ healthInfo.weight }}</li>
      <li>籍贯: {{ healthInfo.native }}</li>
      <li>血压: {{ healthInfo.blood }}</li>
      <li>有无重大疾病: {{ healthInfo.isMajorDiseases }}</li>
      <li>有无医疗保险: {{ healthInfo.isMedicalInsurance }}</li>
    </ul>

    <hr class="hr">
    <el-button class="edit" type="primary" @click="showEdit">修改信息</el-button>
  </div>

  <el-dialog v-model="showEditFlag" title="修改信息" width="30%">
    <el-form
      ref="editformRef"
      :model="healthInfo"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="姓名">
        <el-input v-model="healthInfo.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="healthInfo.age"></el-input>
      </el-form-item>
      <el-form-item label="身高" prop="high">
        <el-input v-model="healthInfo.high"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input v-model="healthInfo.weight"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="native">
        <el-input v-model="healthInfo.native"></el-input>
      </el-form-item>
      <el-form-item label="血压" prop="blood">
        <el-input v-model="healthInfo.blood"></el-input>
      </el-form-item>
      <el-form-item label="有无重大疾病" prop="isMajorDiseases">
        <el-input v-model="healthInfo.isMajorDiseases"></el-input>
      </el-form-item>
      <el-form-item label="有无医疗保险" prop="isMedicalInsurance">
        <el-input v-model="healthInfo.isMedicalInsurance"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="showEditFlag = false">取消</el-button>
        <el-button type="primary" @click="editInfo(editformRef)">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from "vue";
import { getCurrentInstance } from "vue";

    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const editformRef = ref(null)
    const healthInfo = reactive({
        name: "张三",
        age: 20,
        high: 170,
        weight: 120,
        native: "四川",
        blood: "60 ~ 120",
        isMajorDiseases: "无",
        isMedicalInsurance: "有",
    });
    const showEditFlag = ref(false);
    const rules = {
        name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        high: [{ required: true, message: "请输入身高", trigger: "blur" }],
        weight: [{ required: true, message: "请输入体重", trigger: "blur" }],
        native: [{ required: true, message: "请输入籍贯", trigger: "blur" }],
        blood: [{ required: true, message: "请输入血压", trigger: "blur" }],
        isMajorDiseases: [{ required: true, message: "请输入是否有重大疾病", trigger: "blur" }],
        isMedicalInsurance: [ { required: true, message: "请输入是否有医疗保险", trigger: "blur" }]
    };
    const showEdit = () => {
        showEditFlag.value = true;
    };
    const editInfo = (editformRef) => {
        editformRef.validate(  (valid) => {
            console.log(valid)
            if (valid) {
                console.log(1)
                // const {data:addRes} = await _addUser(addInfo)
                // if(addRes.meta.status != 201)  proxy.$msg.error('添加用户失败')
                proxy.$msg.success('修改成功')
                showEditFlag.value = false;
            } else {
                return false
            }
        })
    };
</script>




<style lang="less" scoped>
@import "../../style/mixins.less";

.box {
  .wh(60%, 400px);
  margin: 0 auto;
  border: 3px solid blueviolet;
  h1 {
    text-align: center;
    padding: 20px 0;
  }
  .ul {
    .wh(600px, auto);
    .fj();
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      .wh(50%,auto);
      margin: 15px 0;
    }
  }
  .hr{
      margin: 40px 0 0;
  }
  .edit {
    margin: 30px 40%;
  }
}
</style>