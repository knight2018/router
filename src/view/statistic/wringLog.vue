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
            name: '/statistics/early_warning_list',
            column: [
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
                    title: '类型',
                    key: 'typeStr',
                    align: 'center',
                },
                {
                    title: '预警内容',
                    key: 'content',
                    align: 'center',
                },
                {
                    title: '玩家昵称(id)',
                    key: 'userInfo',
                    align: 'center',
                },
                {
                    title: '数量',
                    key: 'quantity',
                    align: 'center',
                },
            ]
        }
    }
    
}
</script>

<style>

</style>
