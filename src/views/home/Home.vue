<template>
    <div class="home">
        <Hh></Hh>
        <Sw :swiperList="swiperList"></Sw>
        <nav-icon :iconList="iconList"></nav-icon>
        <Recommend :recommendList="recommendList"></Recommend>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>
<script>
import Hh from './components/Hh'
import Sw from './components/Sw'
import NavIcon from './components/NavIcon'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'

import {mapState} from 'vuex'

export default {
    name:'Home',
    data(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    components:{
        Hh,
        Sw,
        NavIcon,
        Recommend,
        Weekend,  
    },
    computed:{
        ...mapState(['city'])
    },  
    mounted(){
        this.$axios('/api/data.json')
        .then(response=>{
            let resultData = response.data
            if(resultData.ret){
                const data = resultData.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        })
        .catch(error=>{
            console.log(error)
        })
        this.lastCity = this.city
    }
}
</script>
<style scoped>

</style>

