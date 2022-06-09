$(() => {



const $bottom = $('<div>').attr('id', 'bottom-container')
const $top= $('<div>').attr('id', 'top-container')

//append to the body
$('body').append($top)
$('body').append($bottom)

// console.log($('body'))


const $h1 = $('<div>').text('Trois couleurs: rouge, blanc, et blue')


$top.append($h1)
$bottom.append($h1)


const $div1 = $('<div>').addClass('couleur')
const $div2 = $('<div>').addClass('couleur')
const $div3 = $('<div>').addClass('couleur')
const $imgContainer = $('<div>').addClass('image-container')
const $image = $('<img>').attr('src', 'http://enchanting-dock.flywheelsites.com/wp-content/uploads/lsp_pin.jpg')


$top.append($div1)
$top.append($div2)
$top.append($div3)
$bottom.append($imgContainer)
$imgContainer.append($image)


$imgContainer.css('background-color', 'pink')
// $imgContainer.css('height', '200px')
// $imgContainer.css('width', '200px')

$div1.css('background-color', 'blue')
$div1.css('display', 'inline-block')
$div1.css('height', '200px')
$div1.css('width', '200px')

$div2.css('background-color', 'white')
$div2.css('display', 'inline-block')
$div2.css('width', '200px')
$div2.css('height', '200px')

$div3.css('background-color', 'red')
$div3.css('height', '200px')
$div3.css('width', '200px')
$div3.css('display', 'inline-block')

$div2.css('background-color', 'black')
$div3.css('background-color', 'orange')
})

