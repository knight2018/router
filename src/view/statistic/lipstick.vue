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
            name: '/statistics/lipstick_lessen_list',
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
                    title: '第一关',
                    align: 'center',
                    children:[
                        {
                            title: '在玩',
                            align: 'center',
                            children:[
                                {
                                    title: '总次数',
                                    key: 'play1Num',
                                    align: 'center'
                                },
                                {
                                    title: '总人数',
                                    key: 'play1PersonNum',
                                    align: 'center'
                                }
                            ]

                        },
                        {
                            title: '减少口红',
                            align: 'center',
                            children:[
                                {
                                    title: '减少口红总次数',
                                    key: 'cutBack1Num',
                                    align: 'center'
                                },
                                {
                                    title: '减少口红总人数',
                                    key: 'cutBackPerson1Num',
                                    align: 'center'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '第二关',
                    align: 'center',
                    children:[
                        {
                            title: '在玩',
                            align: 'center',
                            children:[
                                {
                                    title: '总次数',
                                    key: 'play2Num',
                                    align: 'center'
                                },
                                {
                                    title: '总人数',
                                    key: 'play2PersonNum',
                                    align: 'center'
                                }
                            ]

                        },
                        {
                            title: '减少口红',
                            align: 'center',
                            children:[
                                {
                                    title: '减少口红总次数',
                                    key: 'cutBack2Num',
                                    align: 'center'
                                },
                                {
                                    title: '减少口红总人数',
                                    key: 'cutBackPerson2Num',
                                    align: 'center'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '第三关',
                    align: 'center',
                    children:[
                        {
                            title: '在玩',
                            align: 'center',
                            children:[
                                {
                                    title: '总次数',
                                    key: 'play3Num',
                                    align: 'center'
                                },
                                {
                                    title: '总人数',
                                    key: 'play3PersonNum',
                                    align: 'center'
                                }
                            ]

                        },
                        {
                            title: '减少口红',
                            align: 'center',
                            children:[
                                {
                                    title: '减少口红总次数',
                                    key: 'cutBack3Num',
                                    align: 'center'
                                },
                                {
                                    title: '减少口红总人数',
                                    key: 'cutBackPerson3Num',
                                    align: 'center'
                                }
                            ]
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
