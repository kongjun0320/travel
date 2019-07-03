<template>
    <div class="alphabet">
        <span v-for="(item,key) of cities" :key="key">{{ key }}</span>
    </div>
</template>
<script>
export default {
    name:'Alphabet',
    props:{
        cities:{
            type:Object
        }
    }
}
</script>
<style lang="stylus" scoped>
    .alphabet 
        display flex
        flex-direction column
        justify-content center
        align-items center
        width .5rem
        position fixed
        top 0
        right 0
        bottom 0
</style>


