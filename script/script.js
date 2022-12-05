const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

console.log(ticketPrice)

//função para atualização do Valor total e conta

function updateSelectCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //console.log(selectedSeats);

    const selectedSeatsCount = selectedSeats.length;

    //console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;
}

// Selecionando o filme

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

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
