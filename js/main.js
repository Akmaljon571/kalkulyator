let son1 = Number(prompt('1-raqam kiriting'));
let amal = prompt('amalni kiriting kiriting');
let son2 = Number(prompt('2-raqam kiriting'));

if (amal == 0){
  alert('amal kiritmadingiz')  
}

if(son1 && son2){
    
    if (amal == '+'){
        console.log('Natija ', son1+son2)

    } else if (amal == '-'){
        console.log('Natija ',son1 - son2);
    }else if (amal == '*'){
        console.log('Natija ',son1 * son2);
    } else if (amal == '/'){
        console.log('Natija ',son1 / son2);
    } 
     else {
      alert('Hato amal kiritdingiz')
      console.error('xato amal kiritingiz')
    }

}

if (son1){
   
} else {
    alert('1-kiritgan soningiz hato')
}
if (son2){
   
} else {
    alert('2-kiritgan soningiz hato')
}

