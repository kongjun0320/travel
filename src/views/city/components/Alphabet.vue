<template>
    <div class="alphabet">
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
    </div>
</template>
<script>
export default {
    name:'Alphabet'
}
</script>
<style lang="stylus" scoped>
    .alphabet 
        display flex
        flex-direction column
        line-height .5rem
        justify-content center
        align-items center
        width .5rem
        position fixed
        top 0
        right 0
        bottom 0
</style>


