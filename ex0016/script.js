var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
var res = document.getElementById('res')
setInterval(function() { ObserveInputValue($('num1').val()); }, 100);
setInterval(function() { ObserveInputValue($('num2').val()); }, 100);
var num1 = Number(num1)
var num2 = Number(num2)
function mult(){
    res.innerHTML = `${num1*num2}`
}
function soma(){
    res.innerHTML = `${num1+num2}`
}
function sub(){
    res.innerHTML = `${num1-num2}`
}
function div(){
    res.innerHTML = `${num1/num2}`
}
