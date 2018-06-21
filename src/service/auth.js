class Auth{
    constructor(){

    }
    SetToken(t){
        localStorage.setItem("token", t)
    }
    GetToken(){
        return localStorage.getItem("token")
    }
}
var auth = new Auth()
window.auth = auth
export default auth;
