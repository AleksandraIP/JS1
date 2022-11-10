//ex2
let fruit = ['Apple','Kiwi','Avocado','Banana','Orange'];

for (i=0; i<fruit.length;i++){
  let opt1 = document.createElement('p');
  let opt2 = document.createElement('p');

  if(fruit[i] === fruit[0] || fruit[i] === fruit[2] || fruit[i] === fruit[4]){
    opt1.innerHTML = 'I like '+ fruit[i];
} else {
  opt1.innerHTML ='I don\'t like '+fruit[i];
}
  
 switch (fruit[i]){
    case('Orange'): opt2.innerHTML ='I like '+ fruit[i]; break;
    case('Avocado'): opt2.innerHTML ='I like '+ fruit[i]; break;
    case('Apple'): opt2.innerHTML ='I like '+ fruit[i]; break;
    default: opt2.innerHTML ='I don\'t like '+fruit[i]; break;
} 
document.getElementById('ex2_opt1').appendChild(opt1);
document.getElementById('ex2_opt2').appendChild(opt2);
}