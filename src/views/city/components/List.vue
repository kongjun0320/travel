<template>
    <div class="list" ref="wrapper">
       <div>
            <section class="area">
                <header class="title">当前城市</header>
                <button class="border-topbottom">北京</button>
            </section>
            <section class="area">
                <header class="title">热门城市</header>
                <button>北京</button>
                <button>北京</button>
                <button>北京</button>
                <button>北京</button>
                <button>北京</button>
            </section>
            <section class="area">
                <ul>
                    <li class="title">A</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                </ul>
                <ul>
                    <li class="title">A</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                </ul>
                <ul>
                    <li class="title">A</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                    <li class="border-bottom">阿拉尔</li>
                </ul>
            </section>
       </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'   
export default {
    name:'List',
    mounted(){
       this.scroll =  new BScroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .area
            .title
                height .7rem
                line-height .7rem
                background #eee
                padding-left .26rem
                color #333
            button 
                box-sizing border-box
                margin  .2rem 0rem .2rem .26rem
                border .02rem solid #ccc
                padding .04rem .6rem
                background #fff
                border-radius .06rem
            li  
                padding-left .26rem
                height .7rem
                line-height .7rem
                color #666
</style>


