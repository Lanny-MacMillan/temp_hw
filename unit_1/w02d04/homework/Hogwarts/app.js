$(() => {
const $container = $('<div>').attr('id', 'container')
const $table = $('<table>')
const $thead = $('<thead>')


const $h1 = $('<h1>').text('Hogwarts')
const $h2 = $('<h2>').text('Lanny MacMillan')
const $h3 = $('<h3>').text('Gryffindor')
const $h4 = $('<h4>').text('Roscoe').addClass('Owl')
const $h5 = $('<h4>').text('Elder Wand with Thestral Hair core')
const $h6 = $('<h5>').text('Spring 2017')
const $h7 = $('<h4>').text('Koa wand with Dragon Heartstring core')


const $ul = $('<ul>').text('Storage').addClass('trunk')
const $li1 = $('<li>').text('butterbeer')
const $li2 = $('<li>').text('invisibility cloak').addClass('secret')
const $li3 = $('<li>').text('magic map').addClass('secret')
const $li4 = $('<li>').text('time turner').addClass('secret')
const $li5 = $('<li>').text('leash')
const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans")

const $th1 = $('<th>').text('day')
const $th2 = $('<th>').text('classes')


const $tr1 = $('<tr>')
const $tr2 = $('<tr>')
const $tr3 = $('<tr>')
const $tr4 = $('<tr>')
const $tr5 = $('<tr>')
const $td1 = $('<td>').text('Monday: ')
const $td2 = $('<td>').text('Divination, History of Magic, Charms')
const $td3 = $('<td>').text('Friday: ')
const $td4 = $('<td>').text('Herbology, Potions, Transfiguration')
const $td5 = $('<td>').text('Tuesday: ')
const $td6 = $('<td>').text('History of Magic, Quidditch practice')
const $td7 = $('<td>').text('Wednesday: ')
const $td8 = $('<td>').text('Herbology, Divination, Transfiguration')
const $td9 = $('<td>').text('Thursday: ')
const $td10 = $('<td>').text('Defense Against the Dark Arts, Divination')
$('body').append($container)

$container.append($h1)
$container.append($h2)
$container.append($h3)
$container.append($h4)
$container.append($h5)
$container.append($ul)
$ul.append($li1)
$ul.append($li2)
$ul.append($li3)
$ul.append($li4)
$ul.append($li5)
$ul.append($li6)
$container.append($h6)
$container.append($table)
$table.append($thead)
$thead.append($tr1)
$table.append($tr1)
$table.append($tr2)
$table.append($tr3)
$table.append($tr4)
$table.append($tr5)
$table.append($tr2)
$thead.append($th1)
$thead.append($th2)
$tr1.append($td1).append($td2)
// $tr1.append($td2)
$tr2.append($td3).append($td4)
// $tr2.append($td4)
$tr3.append($td5).append($td6)
// $tr3.append($td6)
$tr4.append($td7).append($td8)
// $tr4.append($td7)
$tr5.append($td9).append($td10)


// css
$table.css('border', 'solid gray', '1px')
$tr1.css('border', 'solid gray', '1px')
$tr2.css('border', 'solid gray', '1px')
$tr3.css('border', 'solid gray', '1px')
$tr4.css('border', 'solid gray', '1px')
$tr5.css('border', 'solid gray', '1px')

$th1.css('border', 'solid gray', '1px')
$th2.css('border', 'solid gray', '1px')

//remove wand
$h5.remove()

//remove butterbeer
$li1.remove()

//insert new wand
$ul.prepend($h7)

//color new wand indigo
$h7.css('color', 'indigo')

//send pet on mission
$h4.remove()
$container.append($h4)

//bring pet back to original location
$h4.remove()
$ul.prepend($h4)

//hide  from nosey roommate
$container.hide('slow').delay(2000)

//re appear after he falls asleep in 2 second
$container.show('slow').delay(2000)

//leash comes back with a cabbage id class
$li5.addClass('half cabbage')

//remove the class
$li5.removeClass()

//change class schedule to read fall 2018
$h6.text('Fall 2018')

//get more butter beer and put in mu UL
$ul.append($li1)

// remove class trunk and change to chest 
$ul.removeClass('trunk')
$ul.addClass('chest')

$h1.css('border', 'solid gray', '2em')

// replace with function below
// $(selector).replaceWith(newContent);

})


// $(() => {

//     // YEAR 1
// const $container = $('#container')
// // console.log($container)
// const $h1 = $('<h1>').text("Hogwarts")
// $($container).append($h1)

// // YEAR 2  
// $('<h2>').text('Lanny Mac').appendTo($container)
// $('<h3>').text('Gryffindor').appendTo($container)
// $('<h4>').text('Whiskey').addClass('Dog').appendTo$($container).attr("id", "Lannys Dog")

// $('<h4>').text('Elder Wand with Thestral Hair core').appendTo($container)

// // YEAR 3
// const $ul = $('<ul>').attr("storage", "trunk")
// $('<li>').text('butter beer').appendTo($ul)
// $('<li>').text('invis cloak').appendTo($ul).addClass('secret')
// $('<li>').text('map').appendTo($ul).addclass('secret')
// $('<li>').text('time turner').appendTo($ul).addclass('secret')
// $('<li>').text('leash').appendTo($ul).addclass('dog')
// $('<li>').text('jelly beans').appendTo($ul)


// })