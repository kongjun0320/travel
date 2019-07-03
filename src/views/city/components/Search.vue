<template>
    <div class="search">
        <input type="text" v-model="keyWords" name="cityname" placeholder="请输入城市名或拼音" />
        <div class="content" v-show="keyWords" ref="wrapper">
            <ul>
                <li v-show="!list.length" class="search-item">没找到匹配数据</li>
                <li class="search-item border-bottom" v-for="(item,index) in list" :key="index">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
    name:'Search',
    data(){
        return {
            keyWords:'',
            list:[]
        }
    },
    props:{
        cities:{
            type:Object
        }
    },
    watch:{
        keyWords(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyWords){
                this.list = []
                return false
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach(item=>{
                        if(item.spell.indexOf(this.keyWords)>-1||item.name.indexOf(this.keyWords)>-1){
                            result.push(item)
                        }
                    })
                }
                this.list = result
            }, 100);
        }
    },
    mounted(){
        const ele = this.$refs.wrapper
        this.scroll = new BScroll(ele)
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .search 
        padding 0 .1rem
        height .72rem
        background $baColor
        input   
            box-sizing border-box
            height .6rem
            line-height .6rem
            width 100% 
            padding 0 .1rem
            border-radius .06rem;
            text-align center
            color #666
        .content
            overflow hidden
            z-index 1
            position absolute
            top 1.58rem
            left 0
            right 0
            bottom 0
            background #eee
            .search-item
                line-height .62rem
                padding-left .2rem
                color #666
                background #fff
</style>


