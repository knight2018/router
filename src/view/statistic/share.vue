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
            name:'/statistics/share_list',
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
                    title: '每日分享总次数',
                    key: 'dayShareNum',
                    align: 'center',
                },
                {
                    title: '新增用户分享次数',
                    key: 'addDayShareNum',
                    align: 'center',
                },
                {
                    title: '每日分享总人数',
                    key: 'daySharePersonNum',
                    align: 'center',
                },
                {
                    title: '新增用户分享人数',
                    key: 'addDaySharePersonNum',
                    align: 'center',
                },
                {
                    title: '邀请注册数',
                    key: 'registerNum',
                    align: 'center',
                },
            ]
        }
    }
}
</script>

<style>

</style>
