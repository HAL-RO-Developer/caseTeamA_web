<template>
    <div>
        <h1>記録</h1>
        <under-tab :index='1'></under-tab>
    </div>
</template>
<script>
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'

export default {
    name :"records",
    components:{
        UnderTab
    },
    data() {
        return {
        }
    },
    methods:{
    }
}
</script>