<template>
 <div class="box">
     <div class="box-left">
         <img src="https://img2.baidu.com/it/u=2945453006,1814818261&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360" alt="">
         <el-button type="warning" @click="avatarBox = true">编辑头像</el-button>
     </div>
     <div class="box-right">
         <ul>
             <li><strong>姓名:</strong> {{editForm.name}}</li>
             <li><strong>年龄:</strong> {{editForm.age}}</li>
             <li><strong>性别:</strong> {{editForm.gender}}</li>
             <li><strong>电话:</strong> {{editForm.phonenumber}}</li>
             <li><strong>密码:</strong> {{editForm.password ? '******' : ''}}</li>
             <li><strong>地址:</strong> {{allAddress}}</li>
         </ul>
         <el-button class="btn" type="primary" @click="showEditBox">编辑资料</el-button>
     </div>
 </div>




    <!-- 编辑用户 -->
    <el-drawer v-model="editBox" title="编辑资料" :direction="direction">
        <el-form ref="editformRef" :model="editForm" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="editForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="editForm.age" clearable></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-input v-model="editForm.gender" clearable></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phonenumber">
                <el-input v-model="editForm.phonenumber" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="editForm.password"  show-password></el-input>
            </el-form-item>
            <el-form-item label="省市区" prop="address">
                    <el-cascader
                    v-model="address1"
                    :options="addressData"
                    :props="trigger"
                    @change="handleChange"
                    ></el-cascader>
            </el-form-item>
            <el-form-item label="地址" prop="specificAddress">
                <el-input v-model="editForm.specificAddress"  clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="editBox = false">取消</el-button>
                <el-button type="primary" @click="editInfo(editformRef)">确定</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>


    <!-- 上传头像 -->
    <el-dialog
        v-model="avatarBox"
        title="上传头像"
        width="30%">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
        </el-upload>
        <div class="bd">
            <el-button type="info" @click="avatarBox = false">取消</el-button>
            <el-button type="primary">上传</el-button>
        </div>

    </el-dialog>

</template>

<script setup>
import {ref,reactive,computed} from 'vue';
import { getCurrentInstance } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import cityData from "./citydata.js";

    const value = ref(new Date())
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const editBox = ref(false);
    let addressData = cityData;
    const address1 = ref([])
    const trigger = {
    expandTrigger: 'hover',
    }
    const direction = ref('rtl')
    const editForm = reactive({
        name:'木子',
        age:22,
        gender: '男',
        phonenumber:13256632876,
        password:12345,
        address:'',
        specificAddress:''
    })
    const rules = {
        name :[{ required: true, message: '请输入姓名',trigger: 'blur'}],
        age :[{ required: true, message: '请输入年龄',trigger: 'blur'}],
        gender :[{ required: true, message: '请输入性别',trigger: 'blur'}],
        phonenumber :[{ required: true, message: '请输入电话',trigger: 'blur'}],
        password :[{ required: true, message: '请输入密码',trigger: 'blur'}],
        address :[{ required: true, message: '请选择地址',trigger: 'blur'}],
        specificAddress :[{ required: true, message: '请输入具体地址',trigger: 'blur'}],
    }
    const showEditBox = () => {
        editBox.value = true;
    }

    const handleChange = (val) => {
        // if(address1){
        //      if(address1.length == 2){
        //         editForm.address = '' + val[0] +val[1]
        //     }else {
        //         editForm.address = '' + val[0] + val[1] + val[2]
        //     }
        // }
    }

     const allAddress = computed(() => {
         if(address1 && editForm.specificAddress){
            //  console
            if(address1.value.length == 2){
                console.log(1)
                editForm.address = '' + address1.value[0] +address1.value[1] + editForm.specificAddress;
                return editForm.address
            }else {
                console.log(2)
                editForm.address = '' + address1.value[0] + address1.value[1] + address1.value[2] + editForm.specificAddress;
                return editForm.address
            }
         }
         
    })

    const editInfo = () => {
        editBox.value = false;
        proxy.$msg.success('修改成功')
    }

    const avatarBox = ref(false);
    const imageUrl = ref('')
    const handleAvatarSuccess = (res, file) => {
    imageUrl.value = URL.createObjectURL(file.raw)
    }
    const beforeAvatarUpload = (file) => {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2

    return isJPG && isLt2M
    }









</script>

<style lang="less" scoped>
@import "../../style/mixins.less";


.box{
    .wh(70%, auto);
    border: 3px solid blueviolet;
    margin: auto;
    display: flex;
    padding: 10px 20px ;
    .box-left{
        display: flex;
        flex-direction: column;
        margin-right: 100px;
        img{
            .wh(100px,100px);
            border-radius: 50%;
            margin-bottom: 20px;
        }

    }
    .box-right{
        flex: 1;
        ul{
            padding-top: 10px;
            .fj();
            flex-wrap: wrap;
            li{
                width: 50%;
                margin-bottom: 20px;
            }
        }
        .btn{
            margin-top: 50px;
            position: relative;
            left: 30%;
            // transform: translateX(-50%);
            text-align: center;
        }
    }
}

.bd{
    text-align: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
:deep(.el-cascader .el-input .el-input__inner){
    width: 360.8px !important;
}

</style>