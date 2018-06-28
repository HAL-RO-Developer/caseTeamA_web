<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">メッセージ設定</p>
        </header>        
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

export default {
    name :"children",
    components:{
        UnderTab,
    },
    data() {
        return {
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