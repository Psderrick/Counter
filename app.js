const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

let counter = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let check = e.currentTarget.classList;
        if (check.contains('increase')){
            counter++;
        } else if (check.contains('reset')){
            counter = 0;
        } else if  (check.contains('decrease')){
             counter--;}

             if (counter > 0){
                value.style.color = 'green';
             } else if (counter === 0){
                value.style.color = 'gold';
             } else {
                value.style.color = 'red';
             }
       value.textContent = counter;
    }

    )
});