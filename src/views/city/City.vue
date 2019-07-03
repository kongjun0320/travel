<template>
    <div class="city">
        <Hh></Hh>
        <Search></Search>
        <List></List>
        <Alphabet></Alphabet>
    </div>
</template>
<script>
import Hh from './components/Hh'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
    name:'City',
    components:{
        Hh,
        Search,
        List,
        Alphabet
    }
}
</script>
<style lang="stylus" scoped>

</style>


