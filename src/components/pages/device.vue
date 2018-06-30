<template>
    <div>
        <header class="modal-card-head">
            <p class="modal-card-title">デバイス追加</p>
        </header>
        <section class="modal-card-body">
                <b-field label="PINコード:">
                    <b-input
                        type="text"
                        v-model="pin"
                        placeholder="ここにPINコードが表示されます。"
                        readonly>
                    </b-input>
                </b-field>  
        </section>
        <p class="button is-medium is-primary full-width" type="button" @click="registDevice" >PINコード発行</p>
        <footer class="modal-card-foot">
            <div class="buttons is-right">
                <span class="button">デバイス設定方法</span>
                <span class="button" @click="$router.go(-1)">戻る</span>
            </div>
        </footer>
        <under-tab :index='0'></under-tab>
    </div>
</template>

<script>
import auth from '../../service/auth';
import http from '../../service/service';
import UnderTab from '../modules/underTab.vue'

export default {
    name :"device",
    components:{
        UnderTab,
    },
    data() {
        return {
            pin:"",
        }
    },
    methods:{
        registDevice(){
            var child_id = localStorage.getItem('child_id')
            console.log(child_id)
            http.registDevice(Number(child_id))
                .then((response)=>{
                    console.log(response)
                    this.pin = response.data.pin
                })
                .catch((err)=>{
                    console.log(err.response.data.error)
                    this.$dialog.alert({
                        title: 'Error',
                        message: err.response.data.error,
                        type: 'is-danger',
                        hasIcon: true,
                        icon: 'times-circle',
                        iconPack: 'fa'
                    })
                });
        }
    }
}
</script>

<style>
    .full-width{
        width: 100%;
    }
</style>