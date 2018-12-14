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
        return{
            name: '/statistics/home_behavior_list',
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
                    title: '挑战按钮',
                    align: 'center',
                    children:[
                        {
                            title: '点击次数',
                            key: 'btnPlayNum',
                            align: 'center',
                        },
                        {
                            title: '人数',
                            key: 'btnPlayPeople',
                            align: 'center'
                        }
                    ]
                },
                {
                    title: '兑换',
                    align: 'center',
                    children:[
                        {
                            title: '兑换券数量',
                            key: 'coinNum',
                            align: 'center',
                        },
                        {
                            title: '兑换券人数',
                            key: 'coinPersonNum',
                            align: 'center'
                        }
                    ]
                },
            ]
        }
        
    }
}
</script>

<style>

</style>
