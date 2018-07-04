<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <span class="title is-6">メッセージ</span>
        </header>
        <section class="modal-card-body">
            <b-field label="条件:">
                <b-select placeholder="Select a condition" required expanded>
                    <option
                        v-for="option in options.condition"
                        v-model="condition"
                        :value="option.id"
                        :key="option.id">
                        {{ option.name }}
                    </option>
                </b-select>
            </b-field>
            <b-field label="回数">
                <b-input type="number" disabled></b-input>
            </b-field>
            <b-field label="メッセージ:">
                <b-input maxlength="140" type="textarea" required></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">キャンセル</button>
            <button class="button is-primary" @click="add">追加</button>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                condition: null,
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
            add(){
                
            }
        },
        created() {
        },
        props:['detail']
    }
</script>