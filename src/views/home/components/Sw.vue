<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide>
            <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc62e131afb380e98e4beac33e751c6c.jpg_750x200_2e248116.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img  class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img  class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
         <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
    name:'Sw',
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true,
            }
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
