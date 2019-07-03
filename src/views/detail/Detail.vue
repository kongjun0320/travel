<template>
    <div class="detail">
        <Hh></Hh>
        <TopBar></TopBar>
        <List :arrList="arrList"></List>
    </div>
</template>
<script>
import Hh from './components/Hh'
import TopBar from './components/TopBar'
import List from './components/List'
export default {
    name:'Detail',
    components:{
        Hh,
        TopBar,
        List
    },
    data(){
        return {
              arrList:[
                {
                    title:'成人票',
                    children:[
                        {
                            title:'成人三馆联票'
                        },
                         {
                            title:'成人四馆联票'
                        }
                    ]
                },
                 {
                    title:'学生票'
                },
                 {
                    title:'儿童票',
                    children:[
                        {
                            title:'成人三馆联票'
                        },
                         {
                            title:'成人四馆联票'
                        }
                    ]
                },
                 {
                    title:'特惠票'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .c 
        height 2000px
</style>

