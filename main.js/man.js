let count = 0 ;

let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count --;
        
        }
        else if(style.contains('increase')){
            count ++;
        }
        else{
            count = 0;
        }
        if( count < 0 ){
            value.style.color = 'green';
        }
        value.textContent = count;
        
    })
}) 