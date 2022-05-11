let btnHeart = document.getElementsByClassName('fa-heart');
let btnDelete = document.getElementsByClassName('fa-trash');
let BtnPlus = document.getElementsByClassName('fa-plus-circle')
let BtnMinus = document.getElementsByClassName('fa-minus-circle')

for (let index = 0; index < btnHeart.length; index++) {
    btnHeart[index].addEventListener('click',function (){
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
    })
}


for (let index = 0; index < btnHeart.length; index++) {
    BtnPlus[index].addEventListener('click',function (){
        let x = x+1; 
        return x;
    })
}
