<template>
    <div class="topBar">
        <section class="abs" v-show="isShow" @click="$router.push('/')">
            <div class="icon_back">
                <i class="iconfont">&#xe624;</i>
            </div> 
        </section>
        <section class="fixed" v-show="!isShow" :style="opacityClass">
            景点详情
            <i class="iconfont">&#xe624;</i>
        </section>
    </div>
</template>
<script>
export default {
    name:'TopBar',
    data(){
        return {
            isShow:true,
            opacityClass:{opacity:0}
        }
    },
    activated(){
        window.addEventListener('scroll',()=>{
            const scrollTop = document.documentElement.scrollTop
            if(scrollTop>60){
                let opacity = scrollTop/140
                opacity=opacity>1?1:opacity
                this.opacityClass = {opacity}
                this.isShow = false
            }else{
                this.isShow = true  
            }
        })
    }
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/styles/varibles.styl';
    .abs
        position absolute
        top .08rem
        left .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        color #fff
        border-radius .4rem
        background rgba(0,0,0,.3)
    .fixed
        position relative
        height .86rem
        line-height .86rem
        background $baColor
        position fixed
        text-align center
        top 0
        left 0 
        right 0
        color #fff
        .iconfont 
            position absolute
            top 0
            left 0
            height .86rem
            line-height .86rem
            text-align center
            width  .86rem
            font-size .4rem
</style>

