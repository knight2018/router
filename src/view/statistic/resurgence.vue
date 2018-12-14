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
            name: '/statistics/lucky_resurrection_list',
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
                    title: '复活总次数',
                    key: 'resurrectionNum',
                    align: 'center',
                },
                {
                    title: '幸运复活次数',
                    key: 'dayLuckyResurrectionNum',
                    align: 'center',
                },
                {
                    title: '非幸运复活次数',
                    key: 'dayResurrectionNum',
                    align: 'center',
                },
                {
                    title: '复活总人数',
                    key: 'resurrectionPersonNum',
                    align: 'center',
                },
                {
                    title: '幸运复活人数',
                    key: 'dayLuckyResurrectionPersonNum',
                    align: 'center',
                },
                {
                    title: '非幸运复活人数',
                    key: 'dayResurrectionPersonNum',
                    align: 'center',
                },
            ]
        }
    }
}
</script>

<style>

</style>
