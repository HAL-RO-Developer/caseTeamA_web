class Auth{
    constructor(){

    }
    SetToken(t){
        localStorage.setItem("token", t)
    }
    GetToken(){
        return localStorage.getItem("token")
    }
    RemoveToken(){
        localStorage.removeItem("token")
    }
}
var auth = new Auth()
window.auth = auth
export default auth;
