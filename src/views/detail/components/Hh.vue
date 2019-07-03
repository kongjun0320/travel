<template>
   <div class="container">
        <div class="hh" @click="handleImgShow">
            <img src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" alt="">
            <section class="info" >
                <span class="title">北京欢乐谷AAAA景区</span>
                <span class="icon">
                    <i class="iconfont icon-img">&#xe632;</i>22
                </span>
             </section>
    </div>
    <Gallary :imgList="imgList" @closeImg="close" v-show="isShowImg"></Gallary>
   </div>
</template>
<script>
import Gallary from '@/common/gallary/Gallary'
export default {
    name:'Hh',
    data(){
        return {
            imgList:[
                'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg',
                'http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_r_800x800_9969540b.png',
                'http://img1.qunarzz.com/sight/p0/1507/b0/debf337993099d34013807df5cf5545b.water.jpg_r_800x800_73c0f11b.jpg'
            ],
            isShowImg:false
        }
    },
    components:{
        Gallary
    },
    methods:{
        close(){
            this.isShowImg = false
        },
        handleImgShow(){
            this.isShowImg = true
        }
    }
}
</script>
<style lang="stylus" scoped>
    .hh
        position relative
        img 
            display block
            height 4.66rem
            width 100%
        .info 
            position absolute
            left 0
            right 0
            bottom 0
            display flex
            justify-content space-between
            padding .2rem .2rem
            background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
            height .4rem
            color #fff
            .title
                font-size .4rem
            .icon
                    width: 1.2rem;
                    height: .4rem;
                    background: rgba(0,0,0,.5);
                    border-radius: .2rem;
                    font-size: .24rem;
                    color: #fff;
                    line-height: .4rem;
                    text-align: center;
                .icon-img 
                    font-size .2rem                   
</style>


