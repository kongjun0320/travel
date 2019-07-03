<template>
    <div class="search">
        <input type="text" name="cityname" placeholder="请输入城市名或拼音" />
    </div>
</template>
<script>
export default {
    name:'Search'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .search 
        padding 0 .1rem
        height .72rem
        background $baColor
        input   
            box-sizing border-box
            height .6rem
            line-height .6rem
            width 100% 
            padding 0 .1rem
            border-radius .06rem;
            text-align center
            color #666
</style>


