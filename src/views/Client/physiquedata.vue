<template>
    <el-row :gutter="20" class="card" style="margin-left:55px; ">
        <el-col :span="8" >
        <el-input
            v-model="queryInfo.query"
            placeholder="请输入内容"
            class="input-with-select"
            clearable
            @clear="searchInfo"
        >
            <template #append>
                <el-button :icon="Search"  @click="searchInfo"></el-button>
            </template>
        </el-input>
        </el-col>
        <!-- <el-col :span="4">
                <el-button type="primary" >添加用户</el-button>
        </el-col> -->
    </el-row>


    <el-table
        :data="tableData"
        style="width: 100%"
        border
        stripe="true"
        class="table"
        :header-cell-style="{background:'#ccc',color:'#606266'}"
    >
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script setup>
import { reactive ,ref,onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { Search,Edit, Delete, Setting,Check, Close   } from '@element-plus/icons-vue';

    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 

    const queryInfo = reactive({
        query:'',
        pagenum:1,
    })

    const searchInfo = () => {

    }



    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]




</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

    :deep(.el-row){
        width: 600px;
        margin-left: 30px !important;
        padding-left: 30px !important;
        position: relative !important;
        left: 40px;
    }


    .table{
        width: 90% !important;
        margin: 20px auto 0;
    }

 





</style>