<template>
 <div>

 </div>
</template>

<script setup>
import {_allExpertInfo} from '@/api/expert'


const getAllExpertInfo = async () => {
    const res = await _allExpertInfo()
    console.log(res)
}
getAllExpertInfo()


</script>

<style scoped>

</style>