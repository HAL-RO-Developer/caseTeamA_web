<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{title}}</p>
                    <p class="subtitle is-7">{{description}}</p>
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
    },
    props:['title','description']
   
}
</script>