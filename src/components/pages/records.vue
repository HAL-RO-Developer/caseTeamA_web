<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="contents">
            <b-field>
                <b-select placeholder="Select a filter" v-model="filter"> 
                    <option v-for="option in options.filter" :key="option.value" :value="option.value">{{option.name}}</option>
                </b-select>
            </b-field>
            <by-date v-if="filter=='date'" :records="records"></by-date>
            <by-genre v-if="filter=='genre'"></by-genre>
        </div>
        <fab :icon="fabIcon" @click="getRecords"></fab>    
        <app-footer></app-footer>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'
import Fab from '../modules/fab.vue'
import ByDate from '../modules/recordsByDate.vue'
import ByGenre from '../modules/recordsByGenre.vue'

export default {
    name :"records",
    components:{
        UnderTab,
        AppHeader,
        AppFooter,
        Fab,
        ByDate,
        ByGenre
    },
    data() {
        return {
            title: "記録",
            child_id: "",
            filter: this.$route.params.filter,
            //filter: 'genre',
            records: [],
            fabIcon: "sync",
            options:{
                filter:[
                    {name: '日付別', value: 'date'},
                    {name: '分野別', value: 'genre'}
                ]
            }
        }
    },
    methods:{
        getRecords(){
            this.isLoading = true
            http.getRecords(this.child_id,this.filter)
                .then((response)=>{
                    console.log(response)
                    var records = response.data.records
                    this.records = records
                })
                .catch((err)=>{
                    this.isLoading = true
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
        this.getRecords()
    }
}
</script>

<style>
</style>
