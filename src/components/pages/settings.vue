<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">設定</p>
        </header>
        <div class="buttons" v-for="(item, index) in menu_items" :key="index">
            <span class="button full-width" @click="click(index)">{{item.title}}</span>
        </div>
        <footer class="modal-card-foot">
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

export default {
    name :"settings",
    components:{
        UnderTab
    },
    data() {
        return {
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