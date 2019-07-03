<template>
    <div class="city">
        <Hh></Hh>
        <Search :cities="cities"></Search>
        <List :hotCities="hotCities" :cities="cities"></List>
        <Alphabet :cities="cities"></Alphabet>
    </div>
</template>
<script>
import Hh from './components/Hh'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
    name:'City',
    data(){
        return {
            hotCities:[],
            cities:{}
        }
    },
    components:{
        Hh,
        Search,
        List,
        Alphabet
    },
    mounted(){
        this.$axios.get('/api/city.json')
            .then(response=>{
                const resultData = response.data
                if(resultData.ret){
                    let data = resultData.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            })
            .catch(error=>{

            })
    }
}
</script>
<style lang="stylus" scoped>

</style>


