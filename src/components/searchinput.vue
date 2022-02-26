<template>
 <div class="box">
     <el-input 
        v-model="query"
        placeholder="请输入内容"
        clearable
        @clear="toSearch"
     ></el-input>
     <el-button @click="toSearch">搜索</el-button>
 </div>
</template>

<script setup>
import {ref,reactive} from 'vue'

    const query = ref('');
    const goodsList = ref({});
    const toSearch = () => {
        // goodsList.value = xxx;
    }

</script>

<style lang="less" scoped>
@import "../style/mixins.less";

.box{
    margin: 20px 0;
    text-align: center;
    .el-input{
        width:400px;
        border:2px #11aebc solid;
    }
    :deep(.el-input__inner){
        border: none;
        outline: none;
    }
    button{
        height: 36px;
        border-radius: 0;
        outline: none;
        border: 2px solid #11aebc;
        border-left: 0;
        background-color: #11aebc;
        color:#fff;
    }
}
</style>