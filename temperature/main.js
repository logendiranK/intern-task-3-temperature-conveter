document.getElementById('convert').addEventListener('click', function(){
  const degrees = parseFloat(document.getElementById('degrees').value);
  const type = document.getElementById('type').value
  let result='';

if (isNaN(degrees)){
  result = 'Invalid input';
}
else if(type === 'fahrenheit'){
  result=((degrees-32)*5/9).toFixed(4) + 'C';
}
else
{
  result=((degrees*9/5)+32).toFixed(4) + 'F';
}
document.getElementById('result').value = result;
});
