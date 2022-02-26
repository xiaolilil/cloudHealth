<template>

  <div style="width: 100%;height:auto;background-color: #1f2f3d;">
    <bv-border-box name="border10">
    <el-carousel indicator-position="none" >
        <el-carousel-item v-for="v in imgs" :key="v.url">
            <img :src="v.url">
        </el-carousel-item>
   </el-carousel>

    <div class="numbox" style="width: 90%;height:40px;margin:0 auto;">
        <bv-border-box name="border8" >
                <b-tag class="btag" type="primary" dot :tag-style="{width:'100%',fontSize:'20px',color:'rgba(255,255,255,.65)'}">
                    <span>风雨无阻,已陪伴用户: </span> &nbsp
                    <strong>
                        <bv-count-to :startVal='startVal' :endVal='endVal' ref="countTo"></bv-count-to> 
                    </strong>&nbsp
                    <span>天</span>
                </b-tag>
        </bv-border-box>
    </div>

   <HealthChart />
    </bv-border-box>
  </div>

</template>

<script setup>
    import { reactive ,ref } from 'vue'
    import HealthChart from '@/components/chart/health-chart.vue'
    import a from '../../imgs/dp.webp'
    import b from '../../imgs/sy.webp'
    import c from '../../imgs/ys.webp'

    components:{
        HealthChart
    }


    const imgs = [
        {url:a},
        {url:b},
        {url:c},
    ]

    const startVal = 0;
    const endVal = ref(2022)

</script>

<style lang="less" scoped>


.el-carousel--horizontal{
    width: 800px;
    margin: 0 auto;
}
.el-carousel{
    width: 800px;
    margin-bottom: 40px;
}


img{
    width:800px;
    height:300px;
}
.numbox{
    background-color: #515a6e;
}
:deep(.btag){
    width: 800px;
    line-height: 40px;
    text-align: center;
    color: #eee;
    border-radius: 20px;
    padding-left: 450px;
    strong{
        color: rgb(230, 180, 243);
        font-size: 25px;
        vertical-align: bottom;
    }
}
</style>