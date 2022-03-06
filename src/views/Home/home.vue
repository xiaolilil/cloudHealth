<template>
    
    <Header v-if="this.$store.state.user.userInfo.roles == 'admin'" />
    <UserHeader v-else />
    <el-container class="home" ref="home">
      <el-aside 
              class="aside" :style="{height:asideHeight}"  
              :class="[isCollapse == true ? 'col' : '']"
              v-if="this.$store.state.user.userInfo.roles == 'admin'" >
        <el-scrollbar>
          <div class="op-cl" @click="zhedie">| | |</div>
          <el-menu
            :unique-opened="true"
            :default-openeds="['0']"
            :default-active="activePath"
            :collapse="isCollapse"
            v-for="(v, i) in this.$store.state.permission.clientMenus" :key="v.id"
          >
            <el-sub-menu :index="'i'" >
              <template #title>
                <i class="icon" :class="iconsObj[v.id]"></i>
                <span>{{ v.authName }}</span>
              </template>
              <el-menu-item-group v-for="(o, i) in v.children" :key="i">
                <el-menu-item
                  index=""
                  :class="[activeClass == o.path ? 'activeClass' : '']"
                  @click="activeItem(o.path)"
                  >{{ o.title }}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
         



          <div v-if="!this.$store.state.isHome">
            <router-view></router-view>
          </div>
      </el-main>
    </el-container>

</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive ,ref,onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import UserHeader from '@/components/header/user-header.vue'
import Header from '@/components/header.vue'
// import store from '@/store'
import { useStore,  } from 'vuex'
    components:{
        UserHeader,
        Header
    }
    const home = ref(null);
    let asideHeight;
    onMounted(() => {
        // 获取元素的总高度
         asideHeight = home.value.$el.offsetHeight;
    })

    const router = useRouter();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 
    const internalInstance = getCurrentInstance() // 有效
    // 折叠菜单栏
    let isCollapse = ref(false);
    const zhedie = () => {
      isCollapse.value = !isCollapse.value;
    };
    const iconsObj = {
      // 一级菜单的icon图标
      147: "iconfont icon-huanyingye",
      125: "iconfont icon-jurassic_user",
      103: "iconfont icon-quanxian",
      101: "iconfont icon-dingdan",
      102: "iconfont icon-goods-copy",
      145: "iconfont icon-baobiao-xianxing",
    };
    const welcome = [
{
      id: 147,
      authName: "健康",
      path: "welcome",
      children: [
        {
          authName: "healthchart",
          id: 124,
          order: 1,
          path: "healthchart",
          children: [],
        },
        {
          authName: "健康状态",
          id: 123,
          order: 1,
          path: "healthtype",
          children: [],
        },
        {
          authName: "实时天气", 
          id: 123,
          order: 1,
          path: "weather",
          children: [],
        },
      ],
      order: 1,
    },
    {
      id: 125,
      authName: "检查",
      path: "welcome",
      children: [
        {
          authName: "身体检查",
          id: 124,
          order: 1,
          path: "bodytest",
          children: [],
        },
        {
          authName: "心理检查",
          id: 123,
          order: 1,
          path: "hearttest",
          children: [],
        },
      ],
      order: 1,
    },
    {
      id: 103,
      authName: "健康商城",
      path: "welcome",
      children: [
        {
          authName: "保健药物",
          id: 124,
          order: 1,
          path: "medicine",
          children: [],
        },
        {
          authName: "保健器械",
          id: 123,
          order: 1,
          path: "apparatus",
          children: [],
        },
      ],
      order: 1,
    },
    {
      id: 101,
      authName: "疫苗",
      path: "welcome",
      children: [
        {
          authName: "Welcome",
          id: 124,
          order: 1,
          path: "welcome",
          children: [],
        },
        {
          authName: "地图",
          id: 123,
          order: 1,
          path: "map",
          children: [],
        },
      ],
      order: 1,
    },
        {
      id: 145,
      authName: "人员",
      path: "welcome",
      children: [
        {
          authName: "user",
          id: 124,
          order: 1,
          path: "user",
          children: [],
        },
        {
          authName: "健康状态",
          id: 123,
          order: 1,
          path: "scroll",
          children: [],
        },
        {
          authName: "分布",
          id: 123,
          order: 1,
          path: "local",
          children: [],
        },
      ],
      order: 1,
    }
    ] 



    // console.log()


    const activeClass = ref('');
    activeClass.value = window.sessionStorage.getItem("active");
    const activePath = ref('');
    const activeItem = (val) => {
      // console.log(i,idx)
      activeClass.value = val;
      activePath.value = val;
      router.push(val);
      window.sessionStorage.setItem("active", val);
    }


</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

section{
    height: 100%;
}
      .home{
          display:flex;
          height: 100%;
          min-height: calc(100vh - 66px);
          overflow-y: hidden;
          .col{
            width: 60px ;
            transition: all .5s;
          }
      }
     :deep(.el-aside)  {
        width: 200px ;
        // height: calc(100vh - 60px);
        overflow-y: hidden;
        color: var(--el-text-color-primary);
        background: rgb(164, 110, 214) !important;
        border-right: solid 1px #e6e6e6;
        box-sizing: border-box;
        transition: all .5s;
        cursor: pointer;
        
      }
      .op-cl{
        color: #fff;
        text-align: center;
        line-height: 26px;
        background-color: skyblue;
      }
      .el-scrollbar{
          background-color: rgb(164, 110, 214);
      }
      .icon, .iconfont{
        font-size: 20px;
        margin-right: 10px;
      }
      .menu{
        line-height: 50px !important;
        text-align: center;
        background-color:  rgb(133, 99, 165) !important;
        
      }
      .menu:hover{
        background-color: rgb(75, 53, 110) !important;
        color: #409eff !important;
      }
      :deep(.el-menu) {
        border-right: none;
        background-color: rgb(133, 99, 165) !important;
      }
      :deep(.el-menu-item:hover) {
        border-right: none;
        background-color:  rgb(75, 53, 110) !important;
      }
      .activeClass{
        line-height: 50px;
        text-align: center;
        background-color: rgb(75, 53, 110);
        color: #409eff !important;
      }

      .el-sub-menu .el-menu-item{
          color: #fff;
          padding-left: 70px !important;
      }
    //   .el-menu-item-group .is-active{
          // background-color: #3e7ab6;
    //   }
      :deep(.el-sub-menu__title){
            color: #fff;
     }
      :deep(.el-sub-menu__title:hover){
          background-color: rgb(75, 53, 110);
      }

      .el-sub-menu.is-opened>.el-sub-menu__title .el-sub-menu__icon-arrow{
        transform: rotateZ(180deg) !important;
      }

      :deep(.el-menu-item-group__title) {
          display: none !important;
      }

      :deep(.el-main){
        // padding: 20px;
        height: calc(100% - 60px);
      }
      .toolbar {
        position: absolute;
        display: inline-flex;
        align-items: center;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
      }

</style>