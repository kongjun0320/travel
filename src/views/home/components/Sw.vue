<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index" >
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'Sw',
    props:{
        swiperList:{
            type:Array
        }
    },
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    delay: 2000,
                    disableOninteraction: true
                },
                loop:true,
            }
        }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length?true:false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff;
    .wrapper
        width 100%;
        overflow hidden;
        height auto;
        background #eee;
        .swiper-img 
            width 100%
    </style>
