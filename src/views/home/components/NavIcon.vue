<template>
    <div class="nav-icon">
    <swiper :options="swiperOption" >
        <swiper-slide class="nav-item" v-for="(lists,index) in resultNavList" :key="index">
            <section class="item" v-for="(list,index) in lists" :key="index">
                <img :src="list.imgUrl" alt="">
                <p>{{ list.desc }}</p>
            </section>
        </swiper-slide>
       
    </swiper>
       
    </div>
</template>
<script>
export default {
    name:'NavIcon',
    data(){
        return {
            navList:[
                {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'北京动植物博物馆'
                },
                 {
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'005',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'006',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'007',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'008',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                },
                 {
                    id:'009',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                    desc:'故宫'
                }
            ],
             swiperOption: {
                loop:true,
            }
        }
    },
    computed:{
        resultNavList(){
            let resultArr = []
            this.navList.forEach((item,index)=>{
                const page = Math.floor(index/8)
                if(!resultArr[page]){
                    resultArr[page] = []
                }
                resultArr[page].push(item)
            })
            return resultArr
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
    .nav-icon
        width 100%;
        padding-top .1rem;
        box-sizing border-box;  
        .nav-item
            font-size 12px;
            display flex;
            flex-wrap wrap;
        .item 
            width 25%;
            height 1.6rem;
            display flex;
            box-sizing border-box;
            flex-direction column;
            justify-content center;
            align-items center;
            img 
                display block;
                width 1.1rem;
                height 1.1rem;
            p 
                width 1.2rem
                text-align center
                ellipsis()
</style>


