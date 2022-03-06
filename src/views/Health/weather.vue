<template>
            <div class="weather">
                <div class="weather-top">
                    <h2>{{weatherData.city}}  </h2>
                    <ul v-for="v in first" :key="v.air">
                        <h4>{{v.day}} {{v.week}} {{v.wea}}</h4>
                        <li><strong>{{v.tem1}}</strong> ~ <strong>{{v.tem2}}</strong></li>
                        <li class="info">{{v.air_tips}}</li>
                        <i :class="['iconfont ','icon1',getIcon(v.wea)]"></i>
                    </ul>
                    <hr />
                    <div class="weather-bottom">
                        <ul v-for="v in weatherData.data" :key="v.day">
                            <li>
                                <span>{{v.day}}</span>
                                <span>{{v.week}}</span>
                                <i :class="['iconfont ','icon2',getIcon(v.wea)]"></i>
                                <span>{{v.tem1}} ~ {{v.tem2}}</span> 
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';

        const weatherData = ref([]);
        const first = ref({});
        const getWeather = async () => {
        //    const {data:res} = await axios.get('http://wthrcdn.etouch.cn/weather_mini?city=成都');
           const res = await axios.get('http://www.tianqiapi.com/api?version=v1&appid=23035354&appsecret=8YvlPNrz');
           if(res.data.city != "成都")ElMessage.error('获取天气信息失败');
           res.data.data.forEach(i => {
               i.day = i.day.split('（')[0];
           })
           first.value = res.data.data.slice(0,1);
           res.data.data = res.data.data.slice(1,7);
           weatherData.value = res.data;
        }
        getWeather();

        const icons = ['icon-duoyun','icon-31qing','icon-xiaoyu','icon-yin'];
        const getIcon = (v) => {
            let icon;
            if( v.indexOf('多云') != -1){
                icon = icons[0]
            }else if(v.indexOf('雨') != -1){
                icon = icons[2]
            }else if(v.indexOf('晴') != -1){
                icon = icons[1]
            }else if(v.indexOf('阴') != -1){
                icon = icons[3]
            }
            return icon
        }

</script>

<style lang="less" scoped>
        .weather{
            width:600px;
            height:320px;
            margin: 0 auto;
            padding:20px;
            border: 3px solid blueviolet;
            box-shadow: 0 0 30px #ccc;
            border-radius: 10px;
        }
        .weather-top{
            position: relative;
        }
        .info{
            width: 350px;
        }
        .icon1{
            position: absolute;
            top: 6px;
            right: 20px;
            font-size: 80px !important;
        }
        hr{
            margin: 20px 0 40px;
        }
        .weather-bottom {
            display: flex;
            
        }
        .weather-bottom ul{
            width: 100px;

        }
        .weather-bottom ul li{
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .weather-bottom ul li span:nth-child(2){
            margin: 10px 0;
        }
        .weather-bottom ul li i{
            margin-bottom: 10px ;
        }
        .iconfont{
            font-size: 40px;
        }

</style>