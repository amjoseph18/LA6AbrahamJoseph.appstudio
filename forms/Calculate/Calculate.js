btnCalc.onclick=function(){
  let num1 = parseInt(inptNum1.value)
  let num2 = parseInt(inptNum2.value)
  let sum = num1 + num2
  lblOutput.value = "Your two numbers added together are: " + sum
}

btnResetonclick=function(){
  lbloutput.value = ""
}