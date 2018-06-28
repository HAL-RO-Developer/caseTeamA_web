<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">子ども一覧</p>
        </header>
        <card v-for="child in children" :nickname="child.nickname" :id="child.child_id"></card>
        
        <footer class="modal-card-foot">
            <button class="button" @click="isComponentModalActive = true">追加</button>
            <div class="buttons  is-right">
                <span class="button" @click="$router.go(-1)">戻る</span>
            </div>
        </footer>
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
import Card from '../modules/childCard.vue'
import ModalForm from '../modules/addChildModal.vue'

export default {
    name :"children",
    components:{
        UnderTab,
        Card,
        ModalForm
    },
    data() {
        return {
            children:[
                    {
                        child_id:1,
                        nickname:"John"
                    },
                    {
                        child_id:2,
                        nickname:"Taro"
                    },
                    {
                        child_id:3,
                        nickname:"Smith"
                    }
            ],
            isComponentModalActive: false
        }
    },
    methods:{
        getChild(){
            http.getChild()
                .then((response)=>{
                    console.log(response)
                    this.children = response.children
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
                    console.log(response)
                    this.children = response.children
                })
                .catch((err)=>{
                    console.log(err.response)
                });
        }
    },
    created(){
        this.getChild()
    }
}
</script>

<style>
    .full-width{
        width: 100%;
    }
</style>