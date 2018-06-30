<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">メッセージ設定</p>
        </header>        
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
    import Card from '../modules/messageCard.vue'

    export default {
        name :"messages",
        components:{
            UnderTab,
            Card
        },
        data() {
            return {
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
    .full-width{
        width: 100%;
    }
</style>