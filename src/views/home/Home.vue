<template>
    <div class="home">
        <Hh></Hh>
        <Sw></Sw>
        <nav-icon></nav-icon>
    </div>
</template>
<script>
import Hh from './components/Hh'
import Sw from './components/Sw'
import NavIcon from './components/NavIcon'
export default {
    name:'Home',
    components:{
        Hh,
        Sw,
        NavIcon
    }
}
</script>
<style scoped>

</style>

