var x = document.getElementById("mean");
var y = document.getElementById("weighted");
var z = document.getElementById("letterGrade");

x.addEventListener("click", calcMean);
y.addEventListener("click", calcWeighted);
z.addEventListener("click", calcGrade);


function calcMean(){
  var denominator1 = document.getElementById("denom1").value;
  var numerator1 = document.getElementById("numer1").value;
  var denominator2 = document.getElementById("denom2").value;
  var numerator2 = document.getElementById("numer2").value;
  var denominator3 = document.getElementById("denom3").value;
  var numerator3 = document.getElementById("numer3").value;
  var denominator4 = document.getElementById("denom4").value;
  var numerator4 = document.getElementById("numer4").value;

  var num1 = (numerator1/denominator1);
  var num2 = (numerator2/denominator2);
  var num3 = (numerator3/denominator3);
  var num4 = (numerator4/denominator4);

  var count = 0;
  var sum = 0;

  if(!isNaN(num1)){
    sum = sum + num1;
    count++;
  }
  if(!isNaN(num2)){
    sum = sum + num2;
    count++;
  }
  if(!isNaN(num3)){
    sum = sum + num3;
    count++;
  }
  if(!isNaN(num4)){
    sum = sum + num4;
    count++;
  }

  var meanVal = sum/count;
  if(isNaN(meanVal)){
    document.getElementById("result").innerHTML = "No Input";
  }
  else if(isNaN(num1 || num2 || num3 || num4)){
    document.getElementById("result").innerHTML = "No Input";
  }
  else{
    document.getElementById("result").value = meanVal;
    var numtoFix = meanVal*100;
    var formatMean = numtoFix.toFixed(1);
    document.getElementById("result").innerHTML = meanVal + "->" + formatMean + "/100";
  }
}

function calcWeighted(){
  var weightdenom1 = document.getElementById("denom1").value;
  var weightnumer1 = document.getElementById("numer1").value;

  var weightdenom2 = document.getElementById("denom2").value;
  var weightnumer2 = document.getElementById("numer2").value;

  var weightdenom3 = document.getElementById("denom3").value;
  var weightnumer3 = document.getElementById("numer3").value;

  var weightdenom4 = document.getElementById("denom4").value;
  var weightnumer4 = document.getElementById("numer4").value;

  var percentVal1 = document.getElementById("percentage1").value;
  var percentVal2=  document.getElementById("percentage2").value;
  var percentVal3 = document.getElementById("percentage3").value;
  var percentVal4 = document.getElementById("percentage4").value;

  var weightnum1 = (weightnumer1/weightdenom1)*percentVal1;
  var weightnum2 = (weightnumer2/weightdenom2)*percentVal2;
  var weightnum3 = (weightnumer3/weightdenom3)*percentVal3;
  var weightnum4 = (weightnumer4/weightdenom4)*percentVal4;

  var weightsum = 0;
  var counting = 0;

  if(!isNaN(weightnum1)){
    weightsum = weightsum + weightnum1;
    counting = counting + Number(percentVal1);
  }
  if(!isNaN(weightnum2)){
    weightsum = weightsum + weightnum2;
    counting = counting + Number(percentVal2);
  }
  if(!isNaN(weightnum3)){
    weightsum = weightsum + weightnum3;
    counting = counting + Number(percentVal3);
  }
  if(!isNaN(weightnum4)){
    weightsum = weightsum + weightnum4;
    counting = counting + Number(percentVal4);
  }
  var weightVal = (weightsum/counting);
  if(isNaN(weightVal)){
    document.getElementById("result").innerHTML = "No Input";
  }
  else{
    document.getElementById("result").value = weightVal;
    var numFormat = weightVal*100;
    var nFormat = numFormat.toFixed(1);
    document.getElementById("result").innerHTML = weightVal + "->" + nFormat + "/100";
  }
}

function calcGrade(){
  calcMean();
  calcWeighted();

  var lettercheck = document.getElementById("result").value;

  if(lettercheck > 0.96){
    document.getElementById("result").innerHTML = "A+";
  }
  else if(lettercheck > 0.93){
    document.getElementById("result").innerHTML = "A";
  }
  else if(lettercheck > 0.89){
    document.getElementById("result").innerHTML = "A-";
  }
  else if(lettercheck > 0.86){
    document.getElementById("result").innerHTML = "B+";
  }
  else if(lettercheck > 0.83){
    document.getElementById("result").innerHTML = "B";
  }
  else if(lettercheck > 0.79){
    document.getElementById("result").innerHTML = "B-";
  }
  else if(lettercheck > 0.76){
    document.getElementById("result").innerHTML = "C+";
  }
  else if(lettercheck > 0.73){
    document.getElementById("result").innerHTML = "C";
  }
  else if(lettercheck > 0.55){
    document.getElementById("result").innerHTML = "C-";
  }
  else if(lettercheck >= 0.50){
    document.getElementById("result").innerHTML = "D";
  }
  else if(lettercheck < 0.50){
    document.getElementById("result").innerHTML = "F";
  }
}
