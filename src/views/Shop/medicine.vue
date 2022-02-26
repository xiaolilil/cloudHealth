<template>
  <Carousel :imgs="imgs" />
  <SearchInput />
</template>

<script setup>
import Carousel from '@/components/carousel.vue'
import SearchInput from '@/components/searchinput.vue'

    components:{
        Carousel,
        SearchInput
    }

    const imgs = [
        {url:'https://img13.360buyimg.com/n7/jfs/t1/139153/33/21820/453480/621883cfEdd1962dd/74b6a9424e288bde.jpg'},
        {url:'https://img10.360buyimg.com/n7/jfs/t1/144164/22/22055/451308/6204f2c9E9166f32e/991814730aed21e2.jpg'},
        {url:'https://img14.360buyimg.com/n7/jfs/t1/144453/8/21815/174989/6217b959E257b0f95/257f10c59fb96210.jpg'},
        {url:'https://img12.360buyimg.com/n7/jfs/t1/173896/11/1486/196715/60655f4fEd9ef4f0d/398411a5165cd214.jpg'},
        {url:'https://img12.360buyimg.com/n7/jfs/t1/124865/38/14412/197879/5f880128Ee5d69e19/a43541efa54ac311.jpg'},
    ]




</script>

<style>

</style>