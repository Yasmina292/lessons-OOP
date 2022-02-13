// let a = {
//     "text" : 'test',
//     "color": 'red',
//     "bolt": true,
//     "show": function(){
//         console.log(this.color)
//     }
// }
// let b = {
//     "fontSize": 24,
//     __proto__: a
// }

//  let c = {
//      "fontSixe": 'verdana',
//      __proto__: b
//  }
 
// console.log(c);
// console.log(c.bold)
// console.log(c.hasOwnProperty( "fontSixe"))

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