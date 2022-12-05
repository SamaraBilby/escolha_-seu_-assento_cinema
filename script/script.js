const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

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

// Pegando dados do localStorage e populate UI

function populateUI() {

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0)
    {
        seats.forEach((seat, index) =>{
            if(selectedSeats.indexOf(index) > -1 ) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
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

// puxando a seleção de assento e o valor total

updateSelectCount();


