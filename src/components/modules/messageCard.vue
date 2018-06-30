<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{conditions}}</p>
                    <p class="subtitle is-6">{{message}}</p>
                </div>
                <div class="media-right">
                    <button class="button is-info" @click="edit">編集</button>
                    <button class="button is-danger" @click="remove">削除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods:{
            edit(){},
            remove(){}
        },
        props:['message','conditions']
    }
</script>