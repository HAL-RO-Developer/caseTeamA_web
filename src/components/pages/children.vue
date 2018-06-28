<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">子ども一覧</p>
        </header>
        <card v-for="child in children" :nickname="child.nickname" :id="child.child_id"></card>
        
        <footer class="modal-card-foot">
            <button class="button">追加</button>
            <div class="buttons  is-right">
                <span class="button" @click="$router.go(-1)">戻る</span>
            </div>
        </footer>
        <under-tab :index='2'></under-tab>
    </div>
</template>
<script>
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import Card from '../modules/childCard.vue'

export default {
    name :"children",
    components:{
        UnderTab,
        Card,
    },
    data() {
        return {
           children:[
                {
                    child_id:1,
                    nickname:"Jhon"
                },
                {
                    child_id:2,
                    nickname:"Taro"
                },
                {
                    child_id:3,
                    nickname:"Smith"
                }
           ]
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