<template>
    <div class="card">
        <div class="card-content" @click="select">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{nickname}}</p>
                    <p class="subtitle is-6">ID:{{id}}</p>
                </div>
                <b-icon v-if="selected==id" icon="check"></b-icon>
                <div class="media-right">
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
                //selected: localStorage.getItem('child_id')
            }
        },
        methods:{
            remove(){
                this.$emit('remove', this.id, this.nickname )
            },
            select(){
                this.$emit('select', this.id )
            }
        },
        props:['nickname','id','selected']
    }
</script>