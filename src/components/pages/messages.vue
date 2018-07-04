<template>
   <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>        
        <div class="contents">
            <card v-for="(message, index) in messages" 
                :key="index"
                :message="message.text"
                :conditions="message.conditions"
                ></card>
        </div>
        <fab :icon="fabIcon" @click="isComponentModalActive = true"></fab>
        <app-footer></app-footer>
        <under-tab :index='2'></under-tab>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form @add="addMessage"></modal-form>
        </b-modal>
    </div>
</template>
<script>
    import http from '../../service/service';
    import UnderTab from '../modules/underTab.vue'
    import AppHeader from '../modules/header.vue'
    import AppFooter from '../modules/footer.vue'
    import Card from '../modules/messageCard.vue'
    import ModalForm from '../modules/addMessageModal.vue'
    import Fab from '../modules/fab.vue'

    export default {
        name :"messages",
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
                title: "メッセージ設定",
                fabIcon: "plus",
                isComponentModalActive: false,
                messages:[
                    {
                        text: "すごーい",
                        conditions: "1問正解"
                    },
                    {
                        text: "半端ないって",
                        conditions: "100問連続不正解"
                    }
                ]
            }
        },
        methods:{
            addMessage(){

            }
        },
    }
</script>

<style>
</style>