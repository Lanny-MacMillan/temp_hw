$(() => {
const $checkerBoard = $('<div>').attr('id', 'checkerboard')

$('body').append($checkerBoard)
//number of squares lets you pick a number to generate
const generateCheckerBoard = (numberOfSquares) => {
    for(let i = 1; i <= numberOfSquares; i++) {
        console.log(i);
        const $squareRed = $('<div>').addClass('red')
        const $squareBlack = $('<div>').addClass('black')
        $squareRed.attr('id', 'red', +i );
        // $squareRed.css('background-color', 'red');
        $checkerBoard.append($squareRed);
        $squareBlack.attr('id', 'black', +i );
        // $squareBlack.css('background-color', 'rgb(0, 0, 0, 1)');
        $checkerBoard.append($squareBlack);
    }
}
// $checkerBoard.css('display', 'center')
$checkerBoard.css('width', '400px')
$checkerBoard.css('height', '400px')
//    $('body').css('width', '400px')
//    $('body').css('height', '400px')
    generateCheckerBoard(32)

})