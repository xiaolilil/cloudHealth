<template>
    <el-alert title="为了您的身体健康,请准确填写各项提问!" type="warning" center effect="dark" :closable="false"> </el-alert>

    <el-form :model="bodyInfo" label-position="top">
        <el-form-item label="1. 最近15天是否有感冒">
            <el-radio v-model="bodyInfo.cold" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.cold" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item label="2. 最近1年是否有鼻炎">
            <el-radio v-model="bodyInfo.nose" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.nose" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item label="3. 最近1年是否有阑尾炎">
            <el-radio v-model="bodyInfo.appendix" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.appendix" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item label="4. 最近1年是否有失眠">
            <el-radio v-model="bodyInfo.insomnia" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.insomnia" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item label="5. 最近1年是否有气喘">
            <el-radio v-model="bodyInfo.asthma" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.asthma" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item label="5. 最近1年是否有持续咳嗽">
            <el-radio v-model="bodyInfo.cough" label="1" size="large">有</el-radio>
            <el-radio v-model="bodyInfo.cough" label="2" size="large">无</el-radio>
        </el-form-item>
        <el-form-item class="btn" >
            <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
            <!-- <el-button type="info" @click="reset(formRef)">重置</el-button> -->
        </el-form-item>
    </el-form>




</template>

<script setup>
import { reactive, ref } from "vue";
import { getCurrentInstance } from "vue";

    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 

    const bodyInfo = reactive({
        cold:false,
        nose:false,
        appendix:false,
        insomnia:false,
        asthma:false,
        cough:false,


    })

    const onSubmit = () => {

    }




</script>


<style lang="less" scoped>
@import "../../style/mixins.less";

.el-form{
    margin: 20px auto;
    padding: 0 20px;
    .wh(60%, auto);
    border: 3px solid blueviolet;
}
</style>