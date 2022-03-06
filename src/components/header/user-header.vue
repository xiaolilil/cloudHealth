<template>
 <header>
     <div class="header-left">
         <strong>健康云</strong>
         <img src="../../assets/logo.png" alt="" @click="push('home')">
     </div>
     <div class="header-main">
         <ul v-for="v in this.$store.state.permission.clientMenus" :key="v.authName">
             <li>
                 <span>{{v.authName}}</span>
                 <p v-for="j in v.children" :key="j.id">
                     <i @click="toRouter(j.path)">{{j.title}}</i>
                 </p>
             </li>
         </ul>
     </div>
     <div class="header-right">
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
              <el-dropdown-item @click="push('register')">注册</el-dropdown-item>
              <el-dropdown-item @click="push('cart')">购物车</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
     </div>
 </header>






</template>

<script setup>
import { useStore,  } from 'vuex'
import { useRouter } from "vue-router";
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { getCurrentInstance } from 'vue'

    const router = useRouter();
    const store = useStore();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
        console.log(key, keyPath)
    }

    const toRouter = (v) => {
        console.log(v)
        router.push(v)
        store.commit('SET_ISHOME', false);
    }


    const push = (v) => {
        router.push('/'+v)
        if(v === 'home'){
            store.commit('SET_ISHOME', true)
        }
    }
    const logout = () => {
        store.dispatch('user/Logout')
        store.commit('SET_ISHOME', true)
    }






</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

header{
    width: 100%;
    height: 60px;
    background-color: blueviolet;
    .fr();
    .header-left{
        .wh(200px,60px);
        .fr();
        color: #fff;
        padding: 10px;
        box-sizing: border-box;
        strong{
            font-size: 32px;
        }
        img{
            .wh(46px, 46px);
            border-radius: 50%;
        }
    }
    .header-main{
        widows: 600px !important;
        .fr();
        line-height: 60px;
        ul{
            .wh(200px, 60px);
            text-align: center;
            li{
                color: #fff;
                cursor: pointer;
                &:hover{
                    color: rgb(166, 166, 233);
                }
                &:hover p{
                    // background-color: rgb(223, 175, 216);
                    height: 40px;
                }
                p{
                    background-color: rgb(148, 105, 187);
                    height: 0;
                    position: relative;
                    z-index: 2;
                    overflow: hidden;
                    transition: all .3s;
                    padding: 0;
                    &:hover i{
                        color: rgb(168, 178, 233);
                        background-color: rgb(85, 50, 117);
                    }
                }
                i{
                    font-style: normal;
                    display: block;
                    line-height: 40px;
                    cursor: pointer;
                    color: #FFF;
                    
                }
            }
        }
    }

    .header-right{
        // margin-right: 20px;
        cursor: pointer;
        

        .el-dropdown{
            width: 60px;
            height: 30px;
            line-height: 30px;
            border-radius: 7px;
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
        // :deep(.el-dropdown-item:hover){
        //     background-color: rgb(240, 116, 72) !important;
        // }
    }
}


</style>