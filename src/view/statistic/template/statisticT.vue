<template>
<div>
    <div>
            <span class="mg-lf" >平台:</span>
            <Select v-model="model" style="width:100px">
                <Option v-for="item in channelList" :value="item.value" :key="item.value">{{item.value}}</Option>
            </Select>
            <span class="mg-lf" v-if="name ==='/statistics/early_warning_list'">类型:</span>
            <Select v-model="model1" style="width:100px" v-if="name ==='/statistics/early_warning_list'">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
            <span class="mg-lf">日期选择：</span>
            <DatePicker type="daterange" 
                placement="bottom-start" 
                placeholder="Select date" 
                style="width: 200px; "
                :options="options1"
                @on-change="handleDate">
            </DatePicker>
            <Button type="primary" style="margin-left:10px"  @click.native="handleSearch">查询</Button>
        </div>
        <Table 
            :columns="columns" 
            :data="data1">
        </Table>
        <div>
            <Page :total="total" @on-change="handlePage" :page-size="limit" :current="page"></Page>
        </div>
    </div>
</template>

 <script>
    import {
        HTTPget
    } from '@/api/data'
     export default {
         name: 'statisticT',
         props:{
             name:{
                 type: String,
                 default: ''
             },
             column:{
                 type: Array,
                 default: ()=>[]
             }
         },
         data (){
             return {
                 gameName: this.name,
                 columns: this.column,
                 url: this.name,
                 model: '全渠道',
                 model1: 1101,
                 page: 1,
                 limit: 12,
                 data1:[],
                 date: [],
                 total: 0,
                 channelList: [
                    {
                        value: 'QQ',
                        label: 'QQ'
                    },
                    {
                        value: '微信',
                        label: '微信'
                    },
                    {
                        value: '全渠道',
                        label : '全渠道'
                    }
                ],
                typeList: [
                    {
                        value: 1101,
                        label: '复活'
                    },
                    {
                        value: 1201,
                        label: '兑换券'
                    },
                ],
                options1: {
                    disabledDate (date) {
                        return date&&date.valueOf()>=Date.now();
                    },
                    shortcuts :[
                        {
                            text : '今天',
                            value () {
                                const start = new Date();
                                const end = new Date();
                                return [start,end]
                            }
                        },
                        {
                            text : '昨天',
                            value () {
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime()-3600*1000*24)
                                return [start,end]
                            }
                        },
                        {
                            text : '近7日',
                            value () {
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime()-3600*1000*24*7)
                                return [start,end]
                            }
                        },
                        {
                            text : '近30日',
                            value () {
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime()-3600*1000*24*30)
                                return [start,end]
                            }
                        }
                    ]
                },
            }
         },
         methods:{
             handleDate (date){
                 this.date = date;
             },
             handlePage (index){
                this.page = index;
                this.handleSearch();
            },
             handleSearch (){
                 let platform;
                 if(this.model==='全渠道'){
                    platform = '';
                 }else{
                     platform = this.model;
                 }
                 let beginTime = this.date[0],
                     endTime = this.date[1],
                     page = this.page,
                     limit = this.limit,
                     type = this.model1,
                     url = this.url;
                if(url){
                    HTTPget({url,platform,beginTime,type,endTime,page,limit}).then((res) => {
                        this.total = res.data.count;
                        this.data1 = res.data.data;
                        
                    })
                }
                
             }
         },
         created (){
             this.handleSearch()
         }
     }
 </script>

 <style scoped>
     
 </style>