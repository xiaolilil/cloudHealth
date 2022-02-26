<template>
  <Carousel :imgs="imgs" />
</template>

<script setup>
import Carousel from '@/components/carousel.vue'

    components:{
        Carousel
    }

    const imgs = [
        {url:'https://img14.360buyimg.com/n6/jfs/t6250/272/1619639270/275334/fd7175f6/5954b68aN3cc3243b.jpg!q95.jpg'},
        {url:'https://img12.360buyimg.com/n6/jfs/t3256/95/1930656486/96370/596c11a6/57d68b51Nefe93393.jpg!q95.jpg'},
        {url:'https://img14.360buyimg.com/cms/jfs/t26194/241/903556703/75203/532443c8/5bc00486N1bbb27f6.jpg!q95.jpg'},
        {url:'https://img13.360buyimg.com/cms/jfs/t4627/274/4196708623/23708/d5658896/590be6a5N962127e5.jpg!q95.jpg'},
        {url:'https://img11.360buyimg.com/cms/jfs/t15394/105/1617746626/26190/7ba3d278/5a541f47N7b151ddf.jpg!q95.jpg'},
    ]


</script>

<style>

</style>