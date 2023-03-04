function display(digit){
    document.getElementById("screen").value += digit;
}

function calculate(){
    var a=document.getElementById("screen").value;
    document.getElementById("screen").value= eval(a);
}

function back(){
    var num=document.getElementById("screen").value;
    num=num.slice(0,-1);
    document.getElementById("screen").value= num;
}

function clrscr(){
    document.getElementById("screen").value="";
}
