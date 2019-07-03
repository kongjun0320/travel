<template>
    <div class="detail">
        <Hh></Hh>
        <TopBar></TopBar>
        <div class="c"></div>
    </div>
</template>
<script>
import Hh from './components/Hh'
import TopBar from './components/TopBar'
export default {
    name:'Detail',
    components:{
        Hh,
        TopBar
    }
}
</script>
<style lang="stylus" scoped>
    .c 
        height 2000px
</style>

