<template>
    <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
                <p class="card-header-title">
                    {{condition}}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div  v-for="(message,index) in messages" :key="index" class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="subtitle is-6">{{message.message}}</p>
                    </div>
                    <div class="media-right">
                        <!--
                        <button class="button is-info" @click="edit">
                            <b-icon icon="pencil"></b-icon>
                        </button>
                        -->
                        <button class="button is-danger" @click="remove(message.message_id)">
                            <b-icon icon="delete"></b-icon>
                        </button>
                    </div>
                </div>
            </div>
        </b-collapse>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    condition:[
                        {id: 1, name: '正解のとき'},
                        {id: 2, name: '不正解のとき'},
                        {id: 3, name: '連続正解のとき'},
                    ]
                }
            }
        },
        methods:{
            edit(){},
            remove(){
                this.$emit('remove', this.id )
            }
        },
        props:['condition', 'message-call','messages']
    }
</script>