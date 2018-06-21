import axios from 'axios'
import auth from './auth'

const api = axios.create({
    baseURL: 'https://caseteambserver-tlbxdwyvvc.now.sh/api', // バックエンドB のURL:port を指定する
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
}
var http = new Http()
export default http;
