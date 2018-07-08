<template>
    <div style="position:relative;">
        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
        <graph :chartData='chartData' :options='options' :width="900" :height="750"></graph>
    </div>
</template>
<script>
import http from '../../service/service';
import Graph from '../modules/graph.vue'
import Fab from '../modules/fab.vue'

export default {
    components:{
        Graph,
    },
    data() {
        return {
            child_id: "",
            chartData:{},
            options:{},
            values:{
                genre:[
                    {id: 1, name: '国語'},
                    {id: 2, name: '算数'},
                    {id: 3, name: '理科'},
                    {id: 4, name: '社会'},
                ],
                solved:[],
                correct:[]
            },
        }
    },
    methods:{
        fillData () {
            var solved_data = this.values.solved
            //var solved_data = [10,20,30,40]
            var correct_data = this.values.correct            
            var datasets = [
                {
                    label: '回答数',
                    type: 'bar',
                    data: solved_data,
                    borderColor: "rgba(254,97,132,0.8)",
                    backgroundColor: "rgba(254,97,132,0.5)",
                    yAxisID: "count-axis"
                },
                {
                    label: '正答数',
                    type: 'line',
                    data: correct_data,
                    borderColor: "rgba(54,164,235,1.0)",
                    pointBackgroundColor: "rgba(54,164,235,1.0)",
                    fill: false,
                    lineTension: 0,
                    yAxisID: "count-axis"
                }
            ]

            var labels=[];
            this.values.genre.forEach((item)=>{
                labels.push(item.name)
            })

            this.chartData = {
                labels: labels,
                datasets: datasets,
            }

            this.options = {
                scales:{
                    yAxes:[
                        {
                            id: "count-axis",
                            position: "left",
                            ticks:{
                                min: 0,
                                max: 100,
                            }
                        }
                    ],
                },
            }
            this.$emit('isLoading')
        },
        aggregate(){
            var records = this.records
            for( var i = 0; i < this.values.genre.length; i++){
                this.values.solved[i] = 0
                this.values.correct[i] = 0
                records.forEach((record)=>{
                    if(Number(record.genre)==this.values.genre[i].id){
                        this.values.solved[i] = Number(record.solved)
                        this.values.correct[i] = Number(record.correct)
                    }
                })                
            }
            this.fillData()
        },             
    },
    created() {
        this.child_id = localStorage.getItem('child_id')
        this.aggregate()
    },
    props: ['records',"isLoading"]
}
</script>

<style>
</style>
