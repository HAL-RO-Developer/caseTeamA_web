import axios from 'axios'

class Http{
    
    constructor(){
        this.Load()
    }

    Load(){
        this.api = axios.create({
            baseURL: 'https://caseteamaserver-mohaomsbmw.now.sh', 
            headers: {
              'ContentType': 'application/json',
              'Authorization': this.GetToken()
            },
            responseType: 'json'  
        })
    }

    SetToken(t){
        localStorage.setItem("token", t)
        http.Load();
    }
    GetToken(){
        return localStorage.getItem("token")
    }
    RemoveToken(){
        localStorage.removeItem("token")
    }
    
    signin(name, pass){
        return  this.api.post('/signin',{
            name,
            pass
        })
    }
    signup(name, pass){
        return  this.api.post('/signup',{
            name,
            pass
        })
    }
    
    registDevice(child_id){
        return  this.api.post('/device',{
            child_id
        })
    }
    getDevice(){
        return  this.api.get('/device')
    }
    removeDevice(device_id){
        return  this.api.delete('/device/'+device_id)
    }
    getChild(){
        return  this.api.get('/child')
    }
    addChild(nickname, birthday, sex){
        return  this.api.post('/child',{
            nickname,
            birthday,
            sex
        })
    }
    removeChild(child_id){
        return  this.api.delete('/child/'+child_id)
    }
    getRecords(child_id, filter){
        return  this.api.get('/work/graph/'+child_id,{
            params:{
                filter
            }
        })
       /*
        return new Promise((res, rej)=>{
            var response = {
                    data:{
                        records: [
                            {
                                date: "2018-07-02T13:35:08+09:00",
                                solved: "10",
                                correct: "5"
                            },
                            {
                                date: "2018-07-03T13:35:08+09:00",
                                solved: "5",
                                correct: "3"
                            },
                            {
                                date: "2018-07-05T13:35:08+09:00",
                                solved: "7",
                                correct: "7"
                            },
                            {
                                date: "2018-07-06T13:35:08+09:00",
                                solved: "15",
                                correct: "2"
                            },
                            {
                                date: "2018-07-08T13:35:08+09:00",
                                solved: "12",
                                correct: "6"
                            },
                            {
                                date: "2018-07-09T13:35:08+09:00",
                                solved: "20",
                                correct: "18"
                            },
                            {
                                date: "2018-07-10T13:35:08+09:00",
                                solved: "12",
                                correct: "0"
                            },
                            {
                                date: "2018-07-13T13:35:08+09:00",
                                solved: "5",
                                correct: "4"
                            }

                        ]
                        
                    }
            }
            res(response)
        })
        */
    }
    getDetail(child_id, date, genre){
        return  this.api.get('/work/detail/'+child_id,{
            params:{
                date,
                genre
            }
        })
        /*
        return new Promise((res, rej)=>{
            var response ={
                data:{
                    records: {
                        date: "2018-07-02T13:35:08+09:00",
                        genre_name: "",
                        detail:[
                            {
                                sentence: "1+1は？",
                                user_answer: "2",
                                correct: "2",
                                result: true
                            },
                            {
                                sentence: "1+3は？",
                                user_answer: "3",
                                correct: "4",
                                result: false
                            },
                            {
                                sentence: "兵庫県の県庁所在地は？",
                                user_answer: "兵庫市",
                                correct: "神戸市",
                                result: false
                              }
                        ]
                    }
                }
            }
            res(response)
        })
        */
    }
    addMessage(child_id, condition, message_call, message ){
        return  this.api.post('/work/message',{
            child_id,
            condition,
            message_call,
            message
        })
    }
    getMessage(child_id){
        return  this.api.get('/work/message/'+child_id)
    }
    removeMessage(message_id){
        return  this.api.delete('/work/message/'+message_id)
    }
}
var http = new Http()
export default http;
