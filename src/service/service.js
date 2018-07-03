import axios from 'axios'

class Http{
    
    constructor(){
        this.Load()
    }

    Load(){
        this.api = axios.create({
            baseURL: 'https://caseteambserver-bfgpqrphqg.now.sh', 
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
    getRecords(){
       // return  this.api.get('/Records')
       return new Promise((res, rej)=>{
           var response ={
                data:{
                    records: [
                        {
                            date: "2018-07-02T13:35:08+09:00",
                            solved: "10",
                            collect: "5"
                        },
                        {
                            date: "2018-07-03T13:35:08+09:00",
                            solved: "5",
                            collect: "3"
                        },
                        {
                            date: "2018-07-05T13:35:08+09:00",
                            solved: "7",
                            collect: "7"
                        },
                        {
                            date: "2018-07-06T13:35:08+09:00",
                            solved: "15",
                            collect: "2"
                        },
                        {
                            date: "2018-07-08T13:35:08+09:00",
                            solved: "12",
                            collect: "6"
                        }
                    ]
                      
                }
           }
           res(response)
       });
    }
}
var http = new Http()
export default http;
