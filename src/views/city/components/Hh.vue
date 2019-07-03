<template>
    <header class="hh">
        <i class="iconfont icon-back" @click="$router.go(-1)">&#xe624;</i>
        城市选择
    </header>
</template>
<script>
export default {
    name:'Hh'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .hh
        position relative
        height .86rem
        line-height .86rem
        background $baColor
        color #fff
        text-align center
        .icon-back
            position absolute
            top 0
            left 0
            width .7rem
            font-size .4rem
</style>

