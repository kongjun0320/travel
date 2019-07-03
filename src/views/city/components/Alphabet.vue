<template>
    <div class="alphabet">
        <span @click="clickHandle" v-for="(item,key) of cities" :key="key">{{ key }}</span>
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    name:'Alphabet',
    props:{
        cities:{
            type:Object
        }
    },
    methods:{
        clickHandle(e){
            const letter = e.target.innerHTML
            PubSub.publish('changeLetter', letter);
        }
    }
}
</script>
<style lang="stylus" scoped>
    .alphabet 
        box-sizing border-box
        padding-top 1rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        width .5rem
        position fixed
        top 0
        right 0
        bottom 0
        span 
            padding .03rem
</style>


