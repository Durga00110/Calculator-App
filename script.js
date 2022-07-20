var values=document.getElementById('values');
let button= document.querySelectorAll('button');

let scrvalues=0;

for(i=0;i<button.length;i++){
    button[i].addEventListener('click',(e)=>{
        // console.log(e.target);
        // console.log(e.target.innerHTML);
        var numberentred = e.target.innerHTML;
        // console.log(numberentred);
        if(numberentred=='C'){
            values.value= 0;
            scrvalues =0;
        }else if(numberentred == "="){
            values.value=eval(scrvalues);
        }else{
            scrvalues += numberentred;
            console.log(numberentred);
            values.value = scrvalues;
        }
        
    })
}
