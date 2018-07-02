<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="contents">
            <graph :chartData='chartData' :options='options' :width="900" :height="500"></graph>
            <button @click="fillData">ランダムデータ入力</button>
        </div>
        <app-footer></app-footer>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
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
            options:{}
        }
    },
    methods:{
        getRandomInt() {
            return Math.floor(Math.random() * 100)
        },
        fillData () {
            var bar_data = [];
            var line_data = [];
            for( var i = 0; i < 12; i++ ){
                bar_data[i] = this.getRandomInt();
                line_data[i] = this.getRandomInt();
            }
            this.chartData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'bar',
                        type: 'bar',
                        data: bar_data,
                        borderColor: "rgba(254,97,132,0.8)",
                        backgroundColor: "rgba(254,97,132,0.5)",
                    },
                    {
                        label: 'line',
                        type: 'line',
                        data: line_data,
                        borderColor: "rgba(54,164,235,0.8)",
                        pointBackgroundColor: "rgba(54,164,235,0.8)",
                        fill: false
                    }
                ]
            },
            this.options = {
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                min: 0,
                                max: 100,
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
        }
    },
    created() {
        this.fillData() 
    }
}
</script>