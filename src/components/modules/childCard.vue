<template>
    <div class="card">
        <div class="card-content">
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
                <div class="media-right">
                    <button class="button is-danger" @click="remove">削除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '../../service/service';
export default {
    data() {
        return {
        }
    },
    methods:{
        remove(){
            http.removeChild(this.id)
                .then((response)=>{
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err.response)
                });
        }
    },
    props:['nickname','id']
   
}
</script>