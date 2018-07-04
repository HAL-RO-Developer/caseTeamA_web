<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="contents">
            <div class="lavel">
                <div class="level-center">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            {{date}}
                        </p>
                    </div>
                </div>
            </div>

            <card v-for="(detail, index) in records.detail" 
                :key="index"
                :sentence="detail.sentence" 
                :result="detail.result">
            </card>

        </div>

        <app-footer></app-footer>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
import moment from "moment"
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'
import Card from '../modules/solvedCard.vue'

export default {
    name :"solved-list",
    components:{
        UnderTab,
        AppHeader,
        AppFooter,
        Card
    },
    data() {
        return {
            title: "記録",
            child_id: "",
            date: "",
            filter: "",
            records: {}
        }
    },
    methods:{  
        getDetail(){
            http.getDetail(this.child_id,this.date,this.filter)
                .then((response)=>{
                    console.log(response.data)
                    this.records = response.data.records
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
        } 
    },
    created() {
        this.child_id = localStorage.getItem('child_id')
        this.date = moment(this.$route.params.date,'MMDD').format('YYYY-MM-DD')
        this.getDetail()
    }
}
</script>