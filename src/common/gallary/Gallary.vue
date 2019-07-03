<template>
    <div class="gallary" @click="close">
         <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgList" :key="index">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'gallary',
    props:{
        imgList:Array
    },
    data(){
        return{
             swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type:'fraction'
                },
                loop:true,
                observer:true,
                observeParents:true,
            }
        }
    },
    methods:{
        close(){
            this.$emit('closeImg')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .gallary >>> .swiper-container
        overflow inherit
    .gallary
        position absolute
        display flex
        justify-content center
        align-items center
        top 0
        left 0
        right 0
        bottom 0
        background #000
        .swiper-img
            width 100%
        .swiper-pagination-fraction
            bottom -.8rem
            color #fff
</style>

