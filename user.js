let user = {
    "login": '',
    "password": '',
    "validate": function(){
        if(this.password.length > 6){
            return true;
        }
        else{
            return false;
        }
    }
}