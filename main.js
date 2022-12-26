function display(value){
    document.getElementById("input_value").value+=value;
}
function clear_field(){
    document.getElementById("input_value").value="";
}
function calculate(){
    var input_value = document.getElementById("input_value").value;
    var answer = eval(input_value);
    document.getElementById("input_value").value=answer;
}