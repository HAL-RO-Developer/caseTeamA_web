<template>
    <div class="modal-card" style="width: auto">
        <app-header :title='title'></app-header>
        <div class="contents">

            <section class="modal-card-body" lebel="問題データ">
                <b-input type="number" placeholder="ドリルID" v-model="data.book_id"></b-input>
                <b-input type="number" placeholder="問題No" v-model="data.question_no"></b-input>               
                <b-input type="textarea" maxlength="140" placeholder="問題文" v-model="data.sentence.text"></b-input>
                <b-input type="text" maxlength="30" placeholder="回答1" v-model="data.answer[0].text"></b-input>
                <b-input type="text" maxlength="30" placeholder="回答2" v-model="data.answer[1].text"></b-input>
                <b-input type="text" maxlength="30" placeholder="回答3" v-model="data.answer[2].text"></b-input>
                <b-select placeholder="Select a genre" v-model="data.genre" expanded>
                    <option v-for="option in options.genre"
                        :value="option.id"
                        :key="option.id">
                        {{ option.name }}
                    </option>
                </b-select>
            </section>
            <button class="button is-medium is-primary full-width" type="button" @click="add">追加</button>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import http from '../../../service/service';
import UnderTab from '../../modules/underTab.vue'
import AppHeader from '../../modules/header.vue'
import AppFooter from '../../modules/footer.vue'

export default {
    name :"question",
    components:{
        UnderTab,
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            title: "問題作成",
            data:{
                book_id: null,          // ドリルID
                question_no: null,      // 問題No
                sentence:{              // 問題文
                    tag_id:"",          // タグID
                    text:""             // 本文
                },
                answer:[                // 回答
                    {tag_id: "", text: ""},     // 回答１(タグID, 本文)
                    {tag_id: "", text: ""},     // 回答２(タグID, 本文)
                    {tag_id: "", text: ""}      // 回答３(タグID, 本文)
                ],
                genre:null              // 分野(id)
            },
            options:{
                genre:[
                    {id: 1, name:"国語"},
                    {id: 2, name:"算数"},
                    {id: 3, name:"雑学"},
                ]
            }
        }
    },
    methods:{
        add(){
            
            this.data.sentence.tag_id = "question" + this.data.book_id + "_" + this.data.question_no
            for( var i = 0; i < this.data.answer.length; i++){
                this.data.answer[i].tag_id = "answer" + this.data.book_id + "_" + this.data.question_no + "_" + (i+1)
            }            
            console.log(this.data)
        }
    },
    created(){
    }
}
</script>

<style>
    button{
        display: block;
    }
    .list{
        position: relative;
        overflow: auto;
        height: 43vh;
    }
</style>