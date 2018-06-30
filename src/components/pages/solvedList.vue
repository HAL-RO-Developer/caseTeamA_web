<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div>
            <p>{{date}}</p>
        </div>
        <app-footer></app-footer>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'
import AppHeader from '../modules/header.vue'
import AppFooter from '../modules/footer.vue'

export default {
    name :"solved",
    components:{
        UnderTab,
        AppHeader,
        AppFooter
    },
    data() {
        return {
            title: "記録",
            date: this.$route.params.date
        }
    },
    methods:{   
    },
    created() {
    }
}
</script>