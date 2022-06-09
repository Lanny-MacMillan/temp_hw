<<<<<<< HEAD
if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};



// $('div') //query for all divs on the page
// $('<div>')//create new div

//================================================================================================================

// Making sure the web page is loaded before using jQuery
// Everyone probably got this instead: did not find body
// This pesky thing is telling us 'oh hey, I couldn't find that element you wanted, here is this other jQuery object instead.
// But, we can inspect our html and 100% for sure, there is a body element. What happened?
// our app.js ran the query for the body FASTER than the web page could load. Therefore when it queried it, the body was not yet there.
// we need a way to tell jQuery to wait until the page is fully loaded and ready to go.
// a common way to do it is to put the script tag right next to the closing body tag. That way the rest of the page has time to load.
// jQuery has a shorter way
$(() => {
  const $div = $('div>')
  const $h3 = $('<h3')
  // const $body = $('body')
  const $div = $('<div>')
  // console.log($div)
  // console.log($('body'))
  // appends new code to page
  $('body').append($div)
  //is telling $div to append  to .fruit 
  $('.fruit').append($div)
  //assign a class to this new div
  $div.addClass('meat')
})
//================================================================================================================


// $(() => {
//   const $div = $('<div>').addClass('meat')
//   const $h3 = $('<h3>').text('Ostrich')
//   //one way to add text to the h3 before
//   // .text('Ostrich') // full line, const $h3 = $('<h3>').text('Ostrich')

//   // $h3.text('Ostrich')

//   $div.append($h3)
//   $('body').append($div)
//   // one way to add class 
//   // $div.addClass('meat')
// })
// console.log($div)
//query for an element
// $(body).append(content);

//================================================================================================================
// Your turn! ~ 10 minutes
// add another div with a food class and an h3 element with text of the food item
// good practice - typically, appending an element is the last step. Reorder the steps so the appends are happening last
// stretch yourself! See if you can chain some more of the steps together
// stretch even more! See if you can figure out how to prepend your new div, so it is the top div inside the body
=======
// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// $('div') //query for all divs on the page alreadf
// let $div1 = $('<div>')//create a new div for us to be able to append anywhere on the page



>>>>>>> 0ad9924ea561df1f1c7d69b5e2f29261339384a1
$(() => {
  const $div = $('<div>').addClass('meat')
  const $food = $('<div>').addClass('dairy')
  const $h3food = $('<h3>').text('Food')
  const $h3 = $('<h3>').text('Ostrich')

<<<<<<< HEAD
=======

>>>>>>> 0ad9924ea561df1f1c7d69b5e2f29261339384a1
  $food.append($h3food)
  $('body').prepend($food)
  $div.append($h3)
  $('body').append($div)

<<<<<<< HEAD
=======

>>>>>>> 0ad9924ea561df1f1c7d69b5e2f29261339384a1
  // $divs.hide('slow')
  // const $meat = $('.meat')
  // $meat.remove()

<<<<<<< HEAD
  //add image
const $image = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
// prepend image onto the body
$('body').prepend($image)

// can see all divs in google dev tools
const $divs = $('div')
// console.log($divs);

//how to access items within an array that isnt in vanilla JS
// console.log($divs.eq(2).children());
$divs.eq(2).children().text( 'Kohlrabi');





})

=======
  const $image = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  $('body').prepend($image)

  const $divs = $('div')
  console.log($divs.children())
  $divs.children().text('Testing')
  console.log($divs.length);

})
>>>>>>> 0ad9924ea561df1f1c7d69b5e2f29261339384a1
