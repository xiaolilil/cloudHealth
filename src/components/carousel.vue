<template>
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="v in imgs" :key="v">
        <img :src="v.url" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<script setup>
    import a from '@/imgs/dp.webp'
    import b from '@/imgs/sy.webp'
    import c from '@/imgs/ys.webp'

    const props = defineProps({
        imgs: {
            type:Array,
            default: () => [
                {url:a},
                {url:b},
                {url:c},
            ]
        }
    })


</script>

<style lang="less" scoped>
@import "../style/mixins.less";

.el-carousel{
    width: 50%;
    margin: 20px auto 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
img{
    width: 639px;
    height: 200px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>