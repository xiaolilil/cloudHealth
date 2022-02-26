<template>
  <Header />

    <el-container class="home">
      <el-aside class="aside" :class="[isCollapse == true ? 'col' : '']" >
        <el-scrollbar>
          <div class="op-cl" @click="zhedie">| | |</div>
          <el-menu
            :unique-opened="true"
            :default-openeds="['0']"
            router=""
            :default-active="activePath"
            :collapse="isCollapse"
            v-for="(v, i) in welcome" :key="v.id"
          >
            <el-sub-menu :index="'i'">
              <template #title>
                <i class="icon" :class="iconsObj[v.id]"></i>
                <span>{{ v.authName }}</span>
              </template>
              <el-menu-item-group v-for="(o, i) in v.children" :key="i">
                <el-menu-item
                  index=""
                  :class="[activeClass == o.path ? 'activeClass' : '']"
                  @click="activeItem('/' + o.path, o.path, $event)"
                  >{{ o.authName }}</el-menu-item
                >
              </el-menu-item-group>
            </el-sub-menu>

          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive ,ref } from 'vue'
import { getCurrentInstance } from 'vue'
import Header from '@/components/header.vue'

    components:{
        Header
    }

    const router = useRouter();
    const { proxy } = getCurrentInstance();// ctx中有问题，建议使用proxy中获取 

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


    const activeClass = ref('health');
    activeClass.value = window.sessionStorage.getItem("active");
    const activePath = ref('');
    const activeItem = (i, idx, e) => {
      activeClass.value = idx;
      activePath.value = idx;
      router.push( i);
      window.sessionStorage.setItem("active", activeClass.value);
    // console.log(i)
    }



</script>

<style lang="less" scoped>
@import "../../style/mixins.less";

      .home{
          display:flex;
          height: 100%;
          overflow-y: hidden;
          .col{
            width: 60px ;
            transition: all .5s;
          }
      }
     :deep(.el-aside)  {
        width: 200px ;
        height: calc(100vh - 60px);
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
      :deep(.el-menu) {
        border-right: none;
        background-color: rgb(133, 99, 165) !important;
      }
      :deep(.el-menu-item:hover) {
        border-right: none;
        background-color:  rgb(75, 53, 110) !important;
      }
      .activeClass{
        background-color: rgb(75, 53, 110);
        color: #409eff !important;
      }

      .el-sub-menu .el-menu-item{
          color: #fff;
          padding-left: 70px !important;
      }
      .el-menu-item-group .is-active{
          // background-color: #3e7ab6;
      }
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
        padding: 20px;
        // height: calc(100% - 60px);
        // height: 100%;
        // background-color: rgb(134, 99, 167);
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