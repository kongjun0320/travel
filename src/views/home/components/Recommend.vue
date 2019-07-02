<template>
    <div class="recommend">
        <header>热销推荐</header>
        <ul>
            <li class="border-bottom" v-for="(item,index) in recommendList" :key="index">
                <img :src="item.imgUrl" alt="">
                <section class="desc">
                    <h1 class="title">{{ item.title }}</h1>
                    <p>{{ item.desc }}</p>
                    <button>查看详情</button>
                </section>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Recommend',
    props:{
        recommendList:{
            type:Array
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
    .recommend
        header  
            padding-left .1rem
            font-size 12px
            height .8rem
            line-height .8rem
            background #eee
        li
            padding .1rem
            display flex
            box-sizing border-box
            img 
                display block
                width 2rem
                height 2rem
            .desc 
                min-width 0 
                padding 0 .2rem
                flex 1
                display flex
                flex-direction column
                justify-content space-around
                box-sizing border-box
                .title
                    font-size 16px
                    ellipsis()
                p 
                    color #ccc
                    ellipsis()
                button 
                    background orange 
                    padding .1rem 0
                    width 2rem 
                    border-radius .1rem
        

</style>


