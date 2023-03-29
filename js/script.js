
// creo le variabili collegandomi al bottone e container
const container = document.querySelector('.container');
const bottone = document.getElementById('bottone');



bottone.addEventListener('click',function(){
    container.classList.toggle('hide');

    for (let i = 0; i < 100; i++) {
        const elementi = addSquare();
        container.append(elementi);
        elementi.addEventListener('click', function(){
            this.classList.toggle('press');
            console.log(i);
        })
    }


})

function addSquare() {
    const square = document.createElement('div');
    square.classList.add('box');

    return square;
}