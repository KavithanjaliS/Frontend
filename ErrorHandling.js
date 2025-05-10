//ErrorHandling
let a =undefined;
try{
    console.log(a.name);
}
catch (error){
    console.log('Error has Occured');
}
//Promise
isHalwaThere=false;
function waitInqueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa Finish');
            }
        },1000);
    });
}
function buyHalwa(){
    waitInqueue().then((message)=>{
        console.log(message); 
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Go Home');
    })
}
buyHalwa();
