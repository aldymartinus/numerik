var txtQuestion = document.querySelector("#question");
var txtResult = document.querySelector("#result");
var btnCalc = document.querySelector("#calc");
var xOne = parseFloat(2^2-5);
var xTwo = Math.pow(2,2.5)-5;


reset();

txtQuestion.value = "2^x-5";

btnCalc.addEventListener('click',solver);


function solver(){
    var text = "";
    var counter = 0;
    var left= 2;
    var right = 2.5;
    var mid = (left+right)/2;
    var answer = Math.abs(Math.pow(left,mid)-5).toFixed(8);
    

    for(counter = 0;counter<25;counter++){
        
        
        text+='Iterasi '+(counter+1)+  "\nf("+left+").f("+right+") ≤ αe ["+left+" , "+right+"] \nAmbil α = c"+(counter+1)+" = ("+left+"+"+right+")/2 = "+mid+"\nf(c"+(counter+1)+") = f("+mid+") = 2^"+mid+"-5 = "+answer+" \n\n";      

        if(counter%2==0){
            left = mid;
        }
        else{
            right = mid;
        }

        var fin = "Jadi harga nol fungsi dari 2^x-5 adalah α = c"+(counter+1)+" = "+mid;
        mid = Math.abs((left+right)/2);
        answer = (Math.pow(2,mid)-5).toFixed(9);
        
    }
    
    txtResult.textContent = 
    "x = 2 f(2) = 2^2-5 = 4-5 = "+xOne + '\n' +
    "x = 2.5 f(2.5) = 2^2.5-5 = "+ Math.pow(2,2.5) + "-5 = "+xTwo.toFixed(9)+"\n\n"+text+fin; 
}        

function reset(){
    question.value="";
    txtResult.textContent="";
}