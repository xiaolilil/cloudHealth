<template>
  <div class="flyline-chart-wrap" style="height:90vh">
    <bv-flyline-chart :dev="true" :config="config" style="width:100%;height:100%;"></bv-flyline-chart>
  </div>
  
</template>

<script setup>

    const  config = {
          points: [
            {
              name: '四川',
              coordinate: [0.46, 0.61],

              halo: {
                show: true,
              },
              icon: {
                src: 'https://wangbin3162.gitee.io/bin-files/other/mapPoint.png',
                width: 30,
                height: 30
              }
            },
            { name: '北京', coordinate: [0.65, 0.40],
              halo: {
                show: true,
                color: '#8378ea'
              } },
            { name: '上海', coordinate: [0.71, 0.62],
              halo: {
                show: true,
                color: '#8378ea'
              } },
            { name: '南京', coordinate: [0.68, 0.59] },
            { name: '广州', coordinate: [0.61, 0.80] },
            { name: '黑龙江', coordinate: [0.75, 0.23] },
            { name: '郑州', coordinate: [0.59, 0.55] },
            { name: '荣成', coordinate: [0.69, 0.47] },
            { name: '青海', coordinate: [0.38, 0.50] },
            { name: '西藏', coordinate: [0.25, 0.62] },
            { name: '内蒙古', coordinate: [0.51, 0.39] },
            { name: '呼和浩特', coordinate: [0.19, 0.43],
              halo: {
                show: true,
                color: '#8378ea'
              } },
            { name: '海南', coordinate: [0.56, 0.88],
              halo: {
                show: true,
                color: '#8378ea'
              } },
            { name: '武汉', coordinate: [0.54, 0.65] },
            // { name: '四川', coordinate: [0.46, 0.61] },
          ],
          lines: [
            // { source: '徐州', target: '四川' },
            { source: '北京', target: '四川' },
            { source: '上海', target: '四川' },
            { source: '南京', target: '四川' },
            { source: '广州', target: '四川' },
            { source: '黑龙江', target: '四川' },
            { source: '郑州', target: '四川' },
            { source: '荣成', target: '四川' },
            { source: '青海', target: '四川' },
            { source: '西藏', target: '四川' },
            { source: '内蒙古', target: '四川' },
            { source: '呼和浩特', target: '四川' },
            { source: '海南', target: '四川' },
            { source: '武汉', target: '四川' },
            // { source: '四川', target: '四川' }
          ],
          icon: {
            show: true,
            src: 'https://wangbin3162.gitee.io/bin-files/other/mapPoint.png',
          },
          text: {
            show: true
          },
          bgImgSrc:'https://wangbin3162.gitee.io/bin-files/other/china.png'
        }

</script>

<style scoped>

</style>