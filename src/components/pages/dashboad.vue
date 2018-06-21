<template>
<div>
    <h1>{{pin}}</h1>
    <button class="button" type="button" @click="createButton">foo</button>
</div>
</template>

<script>
import auth from '../../service/auth';
import http from '../../service/service';
export default {
    name :"dashboad",
    data() {
        return {
            pin:"foo!!"
        }
    },
    methods:{
        createButton(){
            http.createButton()
            .then((response) => {
                console.log(response.data.pin);
                this.pin = response.data.pin
            }) 
            .catch((error) =>{
                console.log(error);
            });
        }
    },
    created:()=>{
        console.log("on create + "+ auth.GetToken())
        if(!auth.GetToken()){
            window.location.href = '/login'
        }
    }
}
</script>
