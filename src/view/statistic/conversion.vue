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
            name: '/statistics/mall_exchange_list',
            column:[
                {
                    title: '日期',
                    key: 'createTime',
                    align: 'center',
                },
                // {
                //     title: '平台',
                //     key: 'platform',
                //     align: 'center',
                // },
                {
                    title: '话费卷',
                    align: 'center',
                    children:[
                        {
                            title: '总次数',
                            key: 'propOneNum',
                            align: 'center'
                        },
                        {
                            title: '总人数',
                            key: 'propOnePersonNum',
                            align: 'center'
                        }
                    ]
                },
                {
                    title: 'Q币',
                    align: 'center',
                    children:[
                        {
                            title: '总次数',
                            key: 'propTwoNum',
                            align: 'center'
                        },
                        {
                            title: '总人数',
                            key: 'propTwoPersonNum',
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
