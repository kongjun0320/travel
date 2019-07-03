<template>
    <div class="list" ref="wrapper">
       <div>
            <section class="area">
                <header class="title">当前城市</header>
                <button class="border-topbottom">{{ city }}</button>
            </section>
            <section class="area">
                <header class="title">热门城市</header>
                <button @click="changeCityName(item.name)" v-for="(item) in hotCities" :key="item.id">{{ item.name }}</button>
            </section>
            <section class="area">
                <ul v-for="(item,key) in cities" :key="key">
                    <li class="title" :ref="key">{{ key }}</li>
                    <li class="border-bottom" v-for="(i) in item" :key="i.id" @click="changeCityName(i.name)">{{ i.name }}</li>
                </ul>
            </section>
       </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'   
import PubSub from 'pubsub-js'
import {mapState,mapActions} from 'vuex'
export default {
    name:'List',
    props:{
        hotCities:{
            type:Array
        },
        cities:{
            type:Object
        }
    },
    methods:{
        ...mapActions(['changeCity']),
        changeCityName(cityname){
            this.changeCity(cityname)
            this.$router.push('/home')
        },
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
       this.scroll =  new BScroll(this.$refs.wrapper,{
           click:true
       })
       PubSub.subscribe('changeLetter', (msg,data)=>{
           const letter = data
           const element = this.$refs[letter][0]
           this.scroll.scrollToElement(element)
       });
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


