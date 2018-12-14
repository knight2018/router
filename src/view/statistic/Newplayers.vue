<template>
<div>
    <statisticT :name="name" :column="column"></statisticT>
</div>
    
</template>

<script>
import statisticT from "./template/statisticT";
export default {
    components:{statisticT},
    data (){
        return {
            name: '/statistics/new_gamer_funnel_list',
            column:[
                {
                    title: '日期',
                    key: 'createTime',
                    align: 'center',
                },
                {
                    title: '平台',
                    key: 'platform',
                    align: 'center',
                },
                {
                    title: '进入主界面的新玩家',
                    key: 'gamenum',
                    align: 'center',
                },
                {
                    title: '点击挑战的玩家',
                    key: 'playnum',
                    align: 'center',
                },
                {
                    title: '进入第一关',
                    key: 'play1',
                    align: 'center',
                },
                {
                    title: '进入第二关',
                    key: 'play2',
                    align: 'center',
                },
                {
                    title: '进入第三关',
                    key: 'play3',
                    align: 'center',
                },
            ]
        }
    }
}
</script>

<style>

</style>
