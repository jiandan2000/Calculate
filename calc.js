function init(){
    var num=document.getElementById("num");
    num.value=0;
    num.disabled="disabled";

    var oButton=document.getElementsByTagName("input");
    var btn_num1;
    var opef;
    for(var i=0;i<oButton.length;i++){
        oButton[i].onclick=function(){
            if(isNumber(this.value)){
                if(isNull(num.value)){
                    num.value=this.value;
                }
                else{
                    num.value=num.value+this.value;
                }
            }
            else{
                var ope_num=this.value;
                switch(ope_num){
                    case "+":
                        btn_num1=Number(num.value);
                        num.value=0;
                        opef="+";
                        break;
                    case "-":
                        btn_num1=Number(num.value);
                        num.value=0;
                        opef="-";
                        break;
                    case "*":
                        btn_num1=Number(num.value);
                        num.value=0;
                        opef="*";
                        break;
                    case "/":
                        btn_num1=Number(num.value);
                        num.value=0;
                        opef="/";
                        break;
                    case "+/-":
                        num.value=sign(num.value);
                        break;
                    case "<--":
                        num.value=back(num.value);
                        break;
                    case ".":
                        num.value=dec_number(num.value);
                        break;
                    case "c":
                        num.value="0";
                        break;
                    case "=":
                        switch(opef){
                            case "+":
                                num.value=btn_num1+Number(num.value);
                                break;
                            case "-":
                                num.value=btn_num1-Number(num.value);
                                break;
                            case "*":
                                num.value=btn_num1*Number(num.value);
                                break;
                            case "/":
                                if(Number(num.value)==0){
                                    alert("除数不能为零");
                                    num.value=0;
                                }
                                else{
                                    num.value=btn_num1/Number(num.value);
                                }

                                break;
                        }                       
                        break;
                    case "m":
                        break;
                }
            }
        }
    }
}

//正负号
function sign(n){
    n=Number(n)*(-1);

    return n;
}

//退位键
function back(n){
    n=n.substr(0,n.length-1);
    if(isNull(n)){
        n="0";
    }

    return n;
}

//小数点
function dec_number(n){
    if(n.indexOf(".")==-1){
        n=n+".";
    }
    return n;
}

function isNull(n){
    return (n=="0"||n.length==0);
}

function isNumber(n){
    return !isNaN(n);
}

function init_calc(){
    document.getElementById("calc").onclick=function(){
        window.location.reload();
    }
}