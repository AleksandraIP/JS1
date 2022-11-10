//ex3
let number = Math.floor(Math.random()*100) - Math.floor(Math.random()*100);
let res = document.getElementById('ex3');

if(number%2==0 && number > 0){
  res.innerHTML = number+' is even and greater than 0';
}else if (number % 2 == 0 && number < 0){
  res.innerHTML = number+' is even and smaller than 0'; 
}else if (number % 2 !== 0 && number > 0){
  res.innerHTML = number+' is uneven and greater than 0';
} else{
  res.innerHTML = number+' is uneven and smaller than 0';
}