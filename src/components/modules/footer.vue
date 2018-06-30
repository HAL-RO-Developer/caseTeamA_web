<template>
    <footer id="app-footer" class="modal-card-foot">
        <div class="buttons is-right">
            <span class="button" @click="$router.go(-1)">戻る</span>
        </div>
    </footer>
</template>

<script>
export default {
    name :"app-footer",
    props:[],
    data() {
        return {
        }
    }
}
</script>

<style>
    #app-footer{
        position: fixed;
        width: 100%;
        bottom: 40px;
    }
</style>