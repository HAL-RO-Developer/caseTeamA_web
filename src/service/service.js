import axios from 'axios'

class Http{
    
    constructor(){
        this.Load()
    }

    Load(){
        this.api = axios.create({
            baseURL: 'https://caseteambserver-ecfxityefq.now.sh', 
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
}
var http = new Http()
export default http;
