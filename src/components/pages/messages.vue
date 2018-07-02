<template>
   <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>        
        <div class="contents">
            <!--
            <b-field grouped group-multiline>
                <b-select>
                    <option value="asc">Default sort direction: ASC</option>
                    <option value="desc">Default sort direction: DESC</option>
                </b-select>
                <b-select>
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                </b-select>
            </b-field>
            -->
            <card v-for="(message, index) in messages" 
                :key="index"
                :message="message.text"
                :conditions="message.conditions"
                ></card>
        </div>
        <app-footer></app-footer>
        <under-tab :index='2'></under-tab>
    </div>
</template>
<script>
    import http from '../../service/service';
    import UnderTab from '../modules/underTab.vue'
    import AppHeader from '../modules/header.vue'
    import AppFooter from '../modules/footer.vue'
    import Card from '../modules/messageCard.vue'

    export default {
        name :"messages",
        components:{
            UnderTab,
            AppHeader,
            AppFooter,
            Card
        },
        data() {
            return {
                title: "メッセージ設定",
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
        },
    }
</script>

<style>
</style>