<template>
    <div class="list">
        <ul>
            <li class="list-item border-bottom" v-for="(item,index) in arrList" :key="index">
                {{ item.title }}
                <ul v-if="item.children">
                    <List :arrList="item.children"></List>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'List',
    props:{
        arrList:{
            type:Array
        }
    }
}
</script>
<style lang="stylus" scoped>
    .list-item
        line-height .6rem
        padding-left .5rem
        &::before
            content ''
            top .03rem
            left .03rem
            position: absolute;
            width: .36rem;
            height: .36rem;
            background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            background-size: .4rem 3rem;
</style>


