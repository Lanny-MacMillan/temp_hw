// const addH2 = () => {
<<<<<<< HEAD
//     const $h2 = $('<h2>').text('Just getting started')
//     $('body').append($h2)
// }
// const changeH2 = () => {
//     $('h2').text('Getting warmed up')
// }


$(() => {
// addH2()
//pauses if dev tools is open, neat way to check functions as or before they are invoked
//debugger
// changeH2()

})


//random colors
const randColoRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue}`;
}




//number of squares lets you pick a number to generate
const generateSquares = (numberOfSquares) => {
    for(let i = 1; i <= numberOfSquares; i++) {
        console.log(i);
        const $square = $('<div>').addClass('square');
        
        const color = randColoRGB();
        $square.css('background-color', color);

        $square.text(i)
        $square.attr('id', 'square', +i );
        $('body').append($square);
    }
}
$(() => {
   generateSquares(1000)

})
=======
//     const $h2 = $('<h2>').text('Just getting started');
//     $('body').append($h2);
// }
//
// const changeH2 = () => {
//     $('h2').text('Getting warmed up')
// }
//
// $(() => {
//     addH2();
//     // debugger;
//     changeH2();
// })
const randColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

$(() => {
    const generateSquares = (numberOfSquares) => {
        for(let i = 1; i <= numberOfSquares; i++){
            // console.log(i);
            const $square = $('<div>').addClass('square');

            const color = randColorRGB();
            $square.css('background-color', color)

            $square.text(i);
            $square.attr('id', 'square'+i);
            $('body').append($square);
        }
    }

    generateSquares(1000);
})
>>>>>>> d0f0028404dd01bcda7ad64b3d4ffda7d3cab739
