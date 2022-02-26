<template>
  <div class="box">
  <div flex="main:center">
    <bv-scroll-table :config="config" style="width: 70%; height: 300px;margin:0 auto;"></bv-scroll-table>
  </div>

  <div class="rank" flex="main:center">
    <bv-scroll-rank :config="config2" style="width: 70%; height: 300px;margin:20px auto;"></bv-scroll-rank>
  </div>
  </div>

</template>

<script setup>
import {ref,reactive} from 'vue'


const config = {
          header: ['姓名', '年龄', '健康状况'],
          data: [
            ['张三', '24', '良好'],
            ['李四', '26', '健康'],
            ['王五', '23', '亚健康'],
            ['周六', '27', '良好'],
            ['贞芪', '30', '感冒'],
            ['张思', '21', '亚健康'],
            ['李五', '32', '健康'],
            ['王室', '45', '良好'],
            ['张天', '22', '新冠'],
            ['夏明', '19', '甲肝']
          ],
          index: true,
          columnWidth: [50],
          align: ['center']
    }
const config2 =  {
          data: [
            { name: '四川', value: 26700 },
            { name: '重庆', value: 20700 },
            { name: '湖南', value: 18700 },
            { name: '湖北', value: 17800 },
            { name: '上海', value: 16756 },
            { name: '江苏', value: 12343 },
            { name: '江西', value: 9822 },
            { name: '浙江', value: 8912 },
            { name: '福建', value: 6834 },
            { name: '安徽', value: 5875 },
            { name: '陕西', value: 3832 },
            { name: '贵州', value: 1811 },
          ],
          valueFormatter({ value }) {
            const reverseNumber = (value + '').split('').reverse()
            let valueStr = ''
            while (reverseNumber.length) {
              const seg = reverseNumber.splice(0, 3).join('')
              valueStr += seg
              if (seg.length === 3) valueStr += ','
            }
            return valueStr.split('').reverse().join('')
          }
        }


</script>

<style scoped>
.box{
  background-color: #1f2f3d;
  padding: 10px 0;
}
</style>