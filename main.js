function calculate(){
    let height=parseInt(document.getElementById("height").value);
    let weight=parseInt(document.getElementById("weight").value);
    var total=height/100;
    var calc=weight/(total*total);
    let bmi=parseInt(document.getElementById("bmi").value=calc);
    if(bmi<18){
        document.getElementById("extra").style.color="yellow";
        document.getElementById("extra").innerText="underweight";
    }
    else if(bmi>18&&bmi<25){
        document.getElementById("extra").style.color="green";
        document.getElementById("extra").innerText="correct weight";
    }
    else if(bmi>25){
        document.getElementById("extra").style.color="red";
        document.getElementById("extra").innerText="Over weight";
    }
    else{
        document.getElementById("extra").innerText="sorry";
    }
}