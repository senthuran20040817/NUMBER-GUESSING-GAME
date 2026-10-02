let guessedNo = document.getElementById("guessedNo");
let myNo = document.getElementById("myNo");
let message = document.getElementById("message");

function proceedOnAction(){
    let myNoTxt = myNo.value;
    if(myNoTxt!==""){
        guessedNo.innerText=Math.floor(Math.random()*10+1);
        if(guessedNo.innerText==myNoTxt){
            message.innerText="you won";
        }else{
            message.innerText="you lose";
        }
    }
}

function cancelOnAction(){
    guessedNo.innerText="";
    myNo.value="";
    message.innerText="";
}