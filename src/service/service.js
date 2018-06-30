import axios from 'axios'
import auth from './auth'

const api = axios.create({
    baseURL: 'https://caseteambserver-skeqoxkijp.now.sh', // バックエンドB のURL:port を指定する
    headers: {
      'ContentType': 'application/json',
      'Authorization': auth.GetToken()
    },
    responseType: 'json'  
  });

class Http{
    constructor(){
    }
    createButton(){

    }
    signin(name, pass){
        return  api.post('/signin',{
            name,
            pass
        })
    }
    signup(name, pass){
        return  api.post('/signup',{
            name,
            pass
        })
    }
    createButton(){
        return api.post('/button')
    }
    registDevice(child_id){
        return  api.post('/device',{
            child_id
        })
    }
    getChild(){
        return  api.get('/child')
    }
    addChild(nickname, birthday, sex){
        return  api.post('/child',{
            nickname,
            birthday,
            sex
        })
    }
    removeChild(child_id){
        return  api.delete('/child/'+child_id)
    }
}
var http = new Http()
export default http;
