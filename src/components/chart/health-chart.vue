<template>
    <!-- <div ref="echartsRef"
         id="main" class="chart"
         :style="`height:${$attrs.height || 400}px;width:${$attrs.width + 'px' || '50%'} 600px; `"
         >
    </div>
    <div ref="echartsRef2" 
         id="main" class="chart"
         :style="`height:${$attrs.height || 400}px;width:${$attrs.width + 'px' || '50%'} 600px; `">
    </div> -->
    <div class="box">
        <div ref="echartsRef" style="width:40%;height:400px"></div>
          <div flex="main:center">
                <bv-conical-chart :config="config" style="width:400px;height:200px;margin-top:50px;"></bv-conical-chart>
          </div>
    </div>
</template>

<script setup>
import {ref,  onMounted, onUnmounted} from 'vue';
import {debounce} from '@/utils/debounce.js'
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent,GridComponent } from 'echarts/components';
import { PieChart,BarChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
    TooltipComponent,
    LegendComponent,
    GridComponent,
    PieChart,
    BarChart,
    CanvasRenderer,
    LabelLayout
    ]);

    let echartsRef  = ref();
    let echartsRef2 = ref();

    let chart = null;
    let chart2 = null;

    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle:{
                color:'#fff'
            },
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '亚健康', },
                { value: 735, name: '高血压' },
                { value: 580, name: '健康' },
                { value: 484, name: '眼疲劳' },
                { value: 300, name: '阑尾炎' }
            ]
            }
        ]
    };

    let option2 = {
        xAxis: {
            type: 'category',
            data: ['1940','1950','1960','1970', '1980', '1990', '1900']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [100, 120, 130, 150, 170, 180, 200],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
            }
        ]
    };

    const config = {
          data: [
            { name: '成都', value: 167 },
            { name: '绵阳', value: 123 },
            { name: '德阳', value: 98 },
            { name: '遂宁', value: 89 },
            { name: '达州', value: 68 },
            { name: '巴中', value: 58 },
            { name: '南充', value: 38 },
          ],
          img: [
            'https://wangbin3162.gitee.io/bin-files/other/1st.png',
            'https://wangbin3162.gitee.io/bin-files/other/2st.png',
            'https://wangbin3162.gitee.io/bin-files/other/3st.png',
            'https://wangbin3162.gitee.io/bin-files/other/4st.png',
            'https://wangbin3162.gitee.io/bin-files/other/5st.png',
            'https://wangbin3162.gitee.io/bin-files/other/6st.png',
            'https://wangbin3162.gitee.io/bin-files/other/7st.png',
          ]
        }
    
    onMounted(() => {
        chart = echarts.init(echartsRef.value)
        chart.setOption(option);
        
        // chart2 = echarts.init(echartsRef2.value)
        // chart2.setOption(option2);

        //根据浏览器的大小来改变大小
        window.onresize = debounce(() => {
                chart.resize();
                // chart2.resize();
        }, 200)
    })

    // 卸载页面销毁 window.onresize事件
    onUnmounted(() => {
        window.onresize = null;
    })


</script>

<style scoped>
/* .chart{
    display: inline-block;
} */
.box{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
   
}
</style>