
let btnHeart = document.getElementsByClassName('fa-heart');
let btnDelete = document.getElementsByClassName('fa-trash');

let BtnPlusOne = document.getElementsByClassName('p1')
let BtnPlusTwo = document.getElementsByClassName('p2')
let BtnPlusThree= document.getElementsByClassName('p3')
let BtnMinusOne = document.getElementsByClassName('m1')
let BtnMinusTwo = document.getElementsByClassName('m2')
let BtnMinusThree= document.getElementsByClassName('m3')
let firstNumber = document.getElementById('qty1')
let secondNumber = document.getElementById('qty2')
let thirdNumber = document.getElementById('qty3')
let zeroNumber =document.getElementById('feriel')

zeroNumber.textContent="0";
firstNumber.textContent="0";
secondNumber.textContent="0";
thirdNumber.textContent="0";
let tt = parseInt(zeroNumber.textContent);
let first = parseInt(firstNumber.textContent);
let second = parseInt(secondNumber.textContent)
let third =parseInt(thirdNumber.textContent);

for (let index = 0; index < btnHeart.length; index++) {
    btnHeart[index].addEventListener('click',function(){
        console.log(this.style.color);
        if(this.style.color == 'red'){
            this.style.color = ''
        }else{
            this.style.color = 'red';
        }
    })
}

for (let index = 0; index < btnDelete.length; index++) {
 btnDelete[index].addEventListener('click',function (){
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
      tt-= ( parseFloat(this.parentNode.parentNode.previousElementSibling.innerHTML)
       *( parseInt( this.parentNode.parentNode.previousElementSibling.previousElementSibling.children[1].innerHTML)))
       
        zeroNumber.innerHTML=tt
        
    })
}


for (let index = 0; index < BtnPlusOne.length; index++) {
        
    
    BtnPlusOne[index].addEventListener('click', function (){
            
               first =first+1 ;
               console.log(first)
               qty1.textContent=first ;
               tt=tt+70;
               feriel.textContent=tt;
              
            }) 

            
            BtnMinusOne[index].addEventListener('click', function (){
                if (qty1.textContent>0) {
                   first =first-1 ;
                 qty1.textContent=first ;
                 tt=tt-70;
                 if (tt>0) {
                    feriel.textContent=tt;
                 } else {
                    feriel.textContent=0;   
                 }
                  } else {
                    qty1.textContent=0 ;
                      
                  }
                   
                  
                  
                }) 
                
    
 }


 for (let index = 0; index < BtnPlusTwo.length; index++) {
        
    
    BtnPlusTwo[index].addEventListener('click', function (){
            
               second =second+1 ;
               
               qty2.textContent=second ;
               tt=tt+50;
               feriel.textContent=tt;
              
            }) 

            
            BtnMinusTwo[index].addEventListener('click', function (){
                if (qty2.textContent>0) {
                    second =second-1 ;
                  qty2.textContent=second ;
                  tt=tt-50;
                  if (tt>0) {
                    feriel.textContent=tt;
                  } else {
                    feriel.textContent=0;   
                  }
                   } else {
                     qty2.textContent=0 ;
                       
                   }
                    
                   
                   
                 }) 
                
    
 }


 for (let index = 0; index < BtnPlusThree.length; index++) {
        
    
    BtnPlusThree[index].addEventListener('click', function (){
            
               third=third+1 ;
               
               qty3.textContent=third ;
               tt=tt+100;
               feriel.textContent=tt;
               
              
            }) 

            
            BtnMinusThree[index].addEventListener('click', function (){
                if (qty3.textContent>0) {
                    third =third-1 ;
                    qty3.textContent=third ;
                    tt=tt-100;
                    if (tt>0) {
                        feriel.textContent=tt;
                       } else {
                           feriel.textContent=0;
                           
                       }
                } else {
                    qty3.textContent=0;
                }
                   
        }) 
                
    
 }
