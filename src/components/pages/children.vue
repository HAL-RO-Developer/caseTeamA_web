<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">子ども一覧</p>
        </header>
        <card v-for="(child, index) in children" 
            :key="index"
            :nickname="child.nickname" 
            :id="child.child_id"
            :selected="selected"
            @remove="removeChild"
            @select="select"></card>
        <div id="fab" @click="isComponentModalActive = true">
            <b-icon icon="plus"></b-icon>
        </div>
        <footer class="modal-card-foot">
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
        removeChild(id){
            this.$dialog.confirm({
                title: '子ども情報削除',
                message: '削除しますか？',
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

    #fab {
        font-size: 21px;
        line-height: 55px;
        text-align: center;
        color: white;
        background-color: cyan;
        width: 55px;
        height: 55px;
        position:fixed;
        right: 10px;
        bottom: 50px;
        border-radius: 50%;
        z-index: 10;
        box-shadow:0px 3px 10px rgba(0,0,0, 0.3);
        -webkit-box-shadow: 0px 3px 10px rgba(0,0,0, 0.3);
    }
    #fab b-icon{
        color: white;
        line-height: 56px;
        vertical-align: middle;
        font-size: 18px;
    }
</style>