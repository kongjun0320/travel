<template>
    <div class="hh">
        <section class="left">
            <div class="icon_back">
                <i class="iconfont">&#xe624;</i>
            </div> 
        </section>
        <section class="input">
            <i class="iconfont">&#xe632;</i>
            输入城市/景点/主题
        </section>
        <section class="right">
            城市
            <i class="iconfont arrow-down">&#xe6aa;</i>
        </section>
    </div>
</template>
<script>
export default {
    name:'Hh'
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .hh 
        height .86rem;
        line-height .86rem;
        background $baColor;
        color #fff;
        display flex;
        .left 
            width .64rem;
            float left;
            .icon_back
                text-align center;
                font-size .2rem
        .input 
            flex 1;
            border-radius .1rem;
            margin-top .12rem;
            margin-left .2rem
            padding-left .2rem
            background #fff;
            height .64rem;
            line-height .64rem;
            color #ccc;
        .right 
            width 1.24rem;
            float right;
            text-align center;
            .arrow-down
                margin-left -.04rem;
                font-size .30rem;
</style>


