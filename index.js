const output = document.getElementById("input");

function display(num){
    output.value +=num;
}
function calculate(){
    try{
        output.value =  eval(output.value);
    }
    catch(err){
        alert("invalid")
    }
}
function clr(){
    output.value = " ";
}
function del(){
   output.value = output.value.slice(0,-1);
}

