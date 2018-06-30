<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="buttons" v-for="(item, index) in menu_items" :key="index">
            <span class="button full-width" @click="click(index)">{{item.title}}</span>
        </div>
        <app-footer></app-footer>
        <under-tab :index='2'></under-tab>
    </div>
</template>
<script>
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'

export default {
    name :"settings",
    components:{
        UnderTab,
        AppHeader,
        AppFooter
    },
    data() {
        return {
            title:"設定",
            menu_items: [
                { title:'子ども一覧' },
                { title:'メッセージ設定' },
                { title:'ログアウト' }
            ]
        }
    },
    methods:{
        click(index){
            switch (index) {
                case 0:
                    this.$router.push({path:"/children"})
                    break;
                case 1:
                    this.$router.push({path:"/messages"})
                    break;
                case 2:
                    auth.RemoveToken()
                    this.$router.push({path:"/"})
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style>
    .full-width{
        width: 100%;
    }
</style>