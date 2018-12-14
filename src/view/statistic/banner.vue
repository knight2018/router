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
            name: '/statistics/banner_ad_list',
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
                    title: '展示次数',
                    key: 'showNum',
                    align: 'center',
                },
                {
                    title: '点击次数',
                    key: 'clickNum',
                    align: 'center',
                },
            ]
        }
        
    }
}
</script>

<style>

</style>
