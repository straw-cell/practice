var input = document.getElementById("text");
var search = document.getElementById("search");
var noti = document.getElementById("noti");

function checkInput(){
    let x=input.ariaValue
    if(x.length < 10){
        search.classList.add("error");
        noti.style.display="flex";
    }

    else{
        search,classlist.remove("error");
        noti.style.display="none";
    }
}