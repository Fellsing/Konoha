

function IsValidForm() {
    
    if(isValidComms()==false && isValidMail()==false && isValidMark()==false){
    
    let a = document.createElement("li");
    let email = document.getElementById("mail").value;
    a.innerText = "Your email: " + email+ " .\n";
    let mm;
    var i = 0;
    for(i=0;i<5;i++){
        var comms = document.getElementsByName('mark');
            if(comms[i].checked==true){
                mm =i+1;
            }
        
    }
//        let d  = document.createElement("span");
    let d = new Date();
    let b = document.createElement("span");
    let comm = document.getElementById("comm").value;
    b.innerText = "Your Comment:   " + comm + " .\n" + "Your mark is - "+ mm+" .\n" + "Date: " +d+"\n";
    a.appendChild(b);
    document.getElementById("sps").appendChild(a);
    document.getElementById("comm").value = "";
    document.getElementById("mail").value = "";
    comms[mm-1].checked=false;
    }
    else{
        isValidComms();
        isValidMail();
        isValidMark();
    }
}

function isValidMail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("mail").value)==false){
        document.getElementById("emailError").innerHTML = "Веели некорректный E-mail";
        document.getElementById("emailError").style.color = "red";
        return true;
    }else{return false;}
}
function isValidComms(){
    var count = document.getElementById("comm").value;
    if (count.length < 3 || count.length > 100) {
    document.getElementById("comentError").innerHTML = "Вы ввели недопустимое количество символов";
        document.getElementById("comentError").style.color = "red";
        return true;
    }else{
        return false;
    }
}
function isValidMark(){
    var k = 0;
    var i = 0;
    for(i=0;i<5;i++){
        var comms = document.getElementsByName("mark");
            if(comms[i].checked==false){
                k+=1;
            }
    }
    if(k==5){
        document.getElementById("markError").innerHTML = "Вы не выбрали ни одну оценку. Исправьте это уже!";
        document.getElementById("markError").style.color = "red";
        return true;
    }else{return false;}
}


