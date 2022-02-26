<template >
    <el-card>
         <el-row :gutter="20" class="card">
             <el-col :span="8">
                <el-input
                    v-model="queryInfo.query"
                    placeholder="请输入内容"
                    class="input-with-select"
                    clearable
                    @clear="getUserList"
                >
                    <template #append>
                        <el-button :icon="Search" @click="getUserList"></el-button>
                    </template>
                </el-input>
             </el-col>
             <el-col :span="4">
                     <el-button type="primary" @click="showAddBox">添加用户</el-button>
             </el-col>
         </el-row>


        <el-table
            :data="userList"
            style="width: 100%"
            border
        >
            <el-table-column type="index" label="#" width="50" />
            <el-table-column prop="username" label="姓名" width="140" />
            <el-table-column prop="email" label="邮箱" width="220" />
            <el-table-column prop="mobile" label="电话" width="200" />
            <el-table-column  label="操作" >
                <template #default="scope">
                     <el-button type="primary" :icon="Edit" @click="showEditBox(scope.row)"></el-button>
                     <el-button type="danger" :icon="Delete" @click="deleteUser(scope.row)"></el-button>
                     <el-button type="warning" :icon="Setting" @click="showAllotBox(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            background 
            v-model:currentPage="queryInfo.pagenum"
            :page-sizes="[4,6,8]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
    </el-card>

    <!-- 添加用户 -->
    <el-dialog
        v-model="addShow"
        title="添加用户"
        width="40%"
    >
        <el-form ref="addFormRef" :model="addInfo"  :rules="rules" label-width="90px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="addInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="addInfo.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="addInfo.email"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="addInfo.mobile"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button  @click="addShow = false">取消</el-button>
                <el-button type="primary" @click="addUser(addFormRef)">确认</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 编辑用户 -->
    <el-dialog
        v-model="showEdit"
        title="编辑用户"
        width="40%"
    >
        <el-form ref="editformRef" :model="editForm" :rules="rules" label-width="120px">
            <el-form-item label="用户名">
                <el-input v-model="editForm.username" disabled></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="editForm.email"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="mobile">
                <el-input v-model="editForm.mobile"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button @click="showEdit = false">取消</el-button>
            <el-button type="primary" @click="editUser(editformRef)">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>


</template>






<script setup>
import { ref ,reactive, defineAsyncComponent } from 'vue'
import { Search,Edit, Delete, Setting,Check, Close   } from '@element-plus/icons-vue';
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'



    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 

    const queryInfo = reactive({
        query:'',
        pagenum:1,
        pagesize:4,

    })
    const total  = ref(20);
    const userList = ref([
        {username:'abc',email:'123@qq.com',mobile:'123456',id:1},
        {username:'abc1',email:'123@qq.com',mobile:'123456',id:2},
        {username:'abc2',email:'123@qq.com',mobile:'123456',id:3},
        {username:'abc3',email:'123@qq.com',mobile:'123456',id:4},
        {username:'abc4',email:'123@qq.com',mobile:'123456',id:5},
        {username:'abc5',email:'123@qq.com',mobile:'123456',id:6},
    ])
    const getUserList = () => {

    }
    const addShow = ref(false);
    const addFormRef = ref(null);
    const addInfo = reactive({
        username:'admin1',
        password:'123',
        email:'123@qq.com',
        mobile:'12345'
    })
    const rules = {
        username:[{ required: true,message: '请输入用户名',trigger: 'blur'}],
        password:[{ required: true,message: '请输入密码',trigger: 'blur'}],
        email:[{ required: true,message: '请输入邮箱',trigger: 'blur'}],
        mobile:[{ required: true,message: '请输入手机号',trigger: 'blur'}],
    }
    const showAddBox = () => {
        addShow.value = true;
    }
    const addUser = (addFormRef) => {
        addFormRef.validate( async (valid) => {
            if (valid) {
                // const {data:addRes} = await _addUser(addInfo)
                // if(addRes.meta.status != 201)  proxy.$msg.error('添加用户失败')
                userList.value.push(addInfo)
                proxy.$msg.success('添加成功')
                getUserList();
                addShow.value = false;
                // addInfo.username = 'admin';
            } else {
                return false
            }
        })
    }

    const showEdit = ref(false);
    const editForm = reactive({
        username:'',
        password:'',
        email:'',
        mobile:''
    })
    const showEditBox = (v) => {
        console.log(v)
        showEdit.value = true;
        editForm.username = v.username;
        editForm.password = v.password;
        editForm.email = v.email;
        editForm.mobile = v.mobile;
    }
    const editUser = () => {
        userList.value.forEach(i => {
            console.log(i)
        })
        userList.value.username = editForm.username;
        userList.value.password = editForm.password;
        userList.value.email = editForm.email;;
        userList.value.mobile = editForm.mobile;
        showEdit.value = false;
        proxy.$msg.success('编辑用户成功')
    }


    const deleteUser = (v) => {
            ElMessageBox.confirm('此操作将永久删除该角色, 是否继续?', '删除分类',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            },)
            .then( () => {
                console.log(v)
                // const {data:res} = await _deleteUser(id);
                // if(deRes.meta.status != 200) proxy.$msg.error('删除角色失败')
                userList.value.splice(addInfo,1)
                getUserList();
                proxy.$msg.success(deRes.meta.msg)
            })
            .catch(() => {
                // catch error
                return proxy.$msg.info('已取消删除操作!')
            })
    }
    const showAllotBox = () => {

    }
    const handleSizeChange = (val) => {
        console.log(val)
    }
    const handleCurrentChange = (val) => {
        console.log(val)
    }



</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

    .el-card{
        .el-table{
            margin: 20px 0;
        }
    }
</style>