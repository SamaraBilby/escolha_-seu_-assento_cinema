const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

console.log(ticketPrice)

// salvar a esolha do filme e o preço - localStore

function setMovieData(movieIndex, moviePrice) {
    
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//função para atualização do Valor total e conta

function updateSelectCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //console.log(selectedSeats);

     //cópia do assento selecionado dentro do arr
    // map array
    // retornar um novo array indexes
    //localStorage

    const seatsIndex = [...selectedSeats].map(function(seat) {
            return [...seats].indexOf(seat)
    });

    console.log(seatsIndex);

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));



    const selectedSeatsCount = selectedSeats.length;
    //console.log(selectedSeatsCount);

    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;
}

// Selecionando o filme

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectCount();

});

// Selecionando assento
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');

        updateSelectCount();
    }
    
});
