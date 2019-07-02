<template>
    <div class="weekend">
        <header>周末去哪儿</header>
        <ul>
             <li class="border-bottom" v-for="(item,index) in weekendList" :key="index">
                <img :src="item.imgUrl" alt="">
                <h1 class="title">{{ item.title }}</h1>
                <p>{{ item.desc }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Weekend',
    props:{
        weekendList:{
            type:Array
        }
    }
}
</script>
<style lang="stylus" scoped>
    .weekend
        header  
            font-size 12px
            height .8rem
            line-height .8rem
            background #eee
            padding-left .2rem
        li
            display flex
            flex-direction column
            box-sizing border-box
            img     
                display block
                width 100%
            .title
                padding-left .2rem
                color #212121
                line-height .5rem
            p
                padding-left .2rem
                color #616161
                font-size 12px
                line-height .5rem

</style>


