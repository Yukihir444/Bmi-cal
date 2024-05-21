function cal(){
    let w = parseInt(document.querySelector('#cal-w').value);
    let h = parseInt(document.querySelector('#cal-h').value)/100;
    let result = "";
    let body = "";
    let bmi = (w/Math.pow(h,2)); 

    if(bmi >=40){
        body = "อ้วนระดับ 3";
    }
    else if(bmi >=30){
        body = "อ้วนระดับ 2";
    }
    else if(bmi >=25){
        body = "อ้วนระดับ 1";
    }
    else if(bmi >=23){
        body = "ท้วม";
    }
    else if(bmi >=18.5){
        body = "สมส่วน";
    }
    else {
        body = "ผอม";
    }
    
    if(!w || !h){
    } else {
        result = "ดัชนีมวลกายของคุณคือ " + bmi.toFixed(2)
        +" ร่างกายของคุณ<strong>"+body +"</strong>"
    }
    document.getElementById('sum').innerHTML = result;
    return;

}
cal();


