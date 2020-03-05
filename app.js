//Create arrays for both the names and sprints
let nameTiles = ['Rakesh', 'Evan', 'Georgia', 'Calvin', 'Smitha', 'Remya', 'Minh', 'Dania', 'Tom'];
let sprintNumbers = ['22.3', '22.4', '22.5&6', '23.1', '23.2', '23.3', '23.4', '23.5&6', '24.1'];

//generate a name tile
function generatedTile(tile) {
    return `<li class="card" data-card="${tile}"><i class="fa ${tile}"></i></li>`;
}

//Select the deck of cards
const tiles = document.getElementById("tiles");

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

initGen();

function initGen() {
    //deck selection and populating with generated card
    let tiles = document.querySelector('.tiles');
    let tilesHTML = shuffle(tiles).map(function(tile) {
        return generatedCard(tile);
    });
    tiles.innerHTML = tilesHTML.join('');
};