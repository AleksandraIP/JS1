//11*26 ex1
let x = 26;
for(let i=0; i<10; i++){
  x +=26;
}
document.getElementById('ex1_opt1').innerHTML ='Option 1: ' + x;

let k = 26;
let y = 1;
while(y<11){
  k += 26;
  y++;
} 
document.getElementById('ex1_opt2').innerHTML ='Option 2: ' + k;

