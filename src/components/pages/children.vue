<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <card v-for="(child, index) in children" 
            :key="index"
            :nickname="child.nickname" 
            :id="child.child_id"
            :selected="selected"
            @remove="removeChild"
            @select="select"></card>
        <fab :icon="fabIcon" @click="isComponentModalActive = true"></fab>
        <app-footer></app-footer>
        <under-tab :index='2'></under-tab>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form @add="addChild"></modal-form>
        </b-modal>
    </div>
</template>
<script>
import moment from "moment";
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'
import Card from '../modules/childCard.vue'
import ModalForm from '../modules/addChildModal.vue'
import Fab from '../modules/fab.vue'

export default {
    name :"children",
    components:{
        UnderTab,
        AppHeader,
        AppFooter,
        Card,
        ModalForm,
        Fab
    },
    data() {
        return {
            title: "子ども一覧",
            fabIcon: "plus",
            children:[
                /*
                {
                    nickname: "John",
                    child_id: "1"
                },
                {
                    nickname: "Taro",
                    child_id: "2"
                }
                */
            ],
            selected: "",
            isComponentModalActive: false
        }
    },
    methods:{
        getChild(){
            http.getChild()
                .then((response)=>{
                    console.log(response)
                    this.children = response.data.children
                })
                .catch((err)=>{
                    console.log(err.response)
                });
        },
        addChild(data){
            this.isComponentModalActive = false
            var birthday = moment(data.birthday)
            console.log(data)
            http.addChild(data.nickname, birthday.format("YYYY-MM-DD"), Number(data))
                .then((response)=>{
                    this.getChild()
                })
                .catch((err)=>{
                    console.log(err.response)
                });
        },
        removeChild(id, nickname){
            this.$dialog.confirm({
                title: '子ども情報削除',
                message: '『'+ nickname +'』を削除しますか？',
                confirmText: '削除',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => 
                    http.removeChild(id)
                        .then((response)=>{
                            var child_id = localStorage.getItem('child_id');
                            if( child_id = id ){
                                localStorage.removeItem('child_id')
                            }
                            this.getChild()
                        })
                        .catch((err)=>{
                            console.log(err.response)
                        })
            })
            
        },
        select(id){
            localStorage.setItem('child_id', id)
            this.selected = id 
        }
    },
    created(){
        this.selected = localStorage.getItem('child_id');
        this.getChild()
    }
}
</script>

<style>
    .full-width{
        width: 100%;
    }
</style>