<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="contents">
            <div>
                <span class="button is-left">＜</span>
                <span class="button is-right ">＞</span>
            </div>
            <graph :chartData='chartData' :options='options' :width="900" :height="500"></graph>
        </div>
        <app-footer></app-footer>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
import moment from "moment";
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'
import Graph from '../modules/graph.vue'

export default {
    name :"records",
    components:{
        UnderTab,
        AppHeader,
        AppFooter,
        Graph
    },
    data() {
        return {
            title: "記録",
            chartData:{},
            options:{},
            records:[],
            values:{
                week:[],
                solved:[],
                collect:[]
            }
        }
    },
    methods:{
        fillData () {
            var bar_data = this.values.solved;
            var line_data = this.values.collect;
            
            var datasets = [
                {
                    label: '回答数',
                    type: 'bar',
                    data: bar_data,
                    borderColor: "rgba(254,97,132,0.8)",
                    backgroundColor: "rgba(254,97,132,0.5)",
                },
                {
                    label: '正答数',
                    type: 'line',
                    data: line_data,
                    borderColor: "rgba(54,164,235,0.8)",
                    pointBackgroundColor: "rgba(54,164,235,0.8)",
                    fill: false
                }
            ]

            this.chartData = {
                labels: this.values.week,
                datasets: datasets                 
            },
            this.options = {
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                min: 0,
                                max: 30,
                            }
                        }
                    ],
                },
                onClick: 
                    (e, el)=>{
                        this.showSolvedList(e, el)
                    }
                   
            }
        },
        showSolvedList(e,el){
            if (! el || el.length == 0) return;
            this.$router.push({path: '/records/' + el[0]._model.label})
        },
        getRecords(){
            http.getRecords()
                .then((response)=>{
                    var records = response.data.records
                    this.records = records
                    this.aggregate()
                })
                .catch((err)=>{
                    if(err){
                        this.$dialog.alert({
                            title: 'Error',
                            message: err.response.data.error,
                            type: 'is-danger',
                            hasIcon: true,
                            icon: 'times-circle',
                            iconPack: 'fa'
                        })
                        switch(err.response.status){
                            case 401:
                                http.RemoveToken()
                                this.$router.push({path:'/'})
                                break;
                            default:
                                break;
                        }
                    }
                });
        },
        aggregate(){
            var day = moment().day(1)
            var records = this.records
            for( var i = 0; i < 7; i++, day.add(1,"day") ){
                this.values.week[i] = day.format('MM.DD')
                this.values.solved[i] = 0
                this.values.collect[i] = 0
                records.forEach((record)=>{
                    if( moment(record.date).isSame(day,'day') ){
                        this.values.solved[i] = Number(record.solved)
                        this.values.collect[i] = Number(record.collect)
                    }
                })                
            }
            this.fillData()
        }
    },
    created() {
        this.getRecords();  
    }
}
</script>

<style>
    .buttons{
        display: block;
        width: auto;
    }
</style>
