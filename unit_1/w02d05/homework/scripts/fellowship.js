// console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  // console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");
  // console.log('Trying to make middle earth.');
  // 1. create a section tag with an id of middle-earth
  const $middleEarth = $('<section>').attr('id', 'middle-earth')
  // 2. append the section to the body of the DOM.
  $('body').append($middleEarth)
  // 3. use a for loop to iterate over the lands array that does the following:
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  //   3b. gives each land article an `id` tag of the corresponding land name
  //   3c. includes an h1 with the name of the land inside each land article
  //   3d. appends each land to the middle-earth section
  for(let i = 0; i < lands.length; i++){
    // console.log(lands[i])
    var $articleTag = $('<article>').attr('id', lands[i])
    var $addH1 = $('<h1>').text(lands[i])
    $middleEarth.append($articleTag)
    $articleTag.append($addH1)
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const $hobbitList = $('<ul>') 
  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
    // 3. also, give each hobbit (`li`) a class of "hobbit
    for(let i = 0; i < hobbits.length; i++){
      // console.log(hobbits[i])
      var $hobbits = $('<li>').attr('class', 'hobbit').text(hobbits[i])
      $hobbitList.append($hobbits)
  // 4. append theul to the shire
    // hint: get 'The-Shire' by using its id
      $('article').eq(0).append($hobbitList)
      // OR
      for(let hobbit of hobbits) {
        const $li = $('<li>')
        $li.text(hobbit).addClass('hobbit').appendTo($ul)
      }
    }$ul.appendTo($('#The-Shire'))
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const theRing = $('<div>').attr('id', 'the-ring');
  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    $('li').eq(0).append(theRing);
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  const $baddiesList = $('<ul>') 
  // 1. display an unordered list of baddies in Mordor
  for(let i = 0; i < baddies.length; i++){
    // console.log(baddies[i])
    var $baddies = $('<li>').attr('class', 'baddy').text(baddies[i])
    $baddiesList.append($baddies)
    $('article').eq(2).append($baddiesList)
  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append the ul to Mordor
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = $('<aside>')
  $('body').children(2).append($aside)
  // 2. display an unordered list of buddies in the aside
  const $buddiesList = $('<ul>')
  for(let i = 0; i < buddies.length; i++){
    var $buddies = $('<li>').attr('class', 'buddy').text(buddies[i])
    $buddiesList.append($buddies)
    $aside.append($buddiesList)
  }
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
      // console.log($('article').children(1))
      // console.log($('article').eq(1))
      $('article').eq(1).append($('article').eq(0).find('ul').children())
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // console.log($('article').eq(3).children())
  // console.log($('aside'))
  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
    // console.log($('aside').find('ul').children(3))
    // $('aside').find('ul').children(3).text('Aragorn')
    $('aside').find('li').eq(3).text('Aragorn')
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const $theFellowship = $('<div>').attr('id', 'the-fellowship')
  
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $addH1 = $('<h1>').text('The Fellowship')
  $theFellowship.append($addH1)

  // 3. append the fellowship to middle-earth
  $('section').append($theFellowship)

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  $theFellowship.append($('aside').children())
  $theFellowship.append($('article').eq(1).find('li'))
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  $('div').eq(1).find('li').eq(0).text('Gandalf the White').attr('class', 'the-white')

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('The horn of Gondor has blown')
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('div').eq(1).find('li').eq(4).css('text-decoration', 'line-through')
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $('article').eq(2).find('li').eq(2).remove()
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // mordor - $('article').eq(2)
  // Gandalf - $('div').eq(1).find('li').eq(0)
  // Frodo - $('div').eq(1).find('li').eq(5)
  // Sam - $('div').eq(1).find('li').eq(6)
  // console.log($('div').eq(1).find('li').eq(5))
  
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
   //sam
  $('article').eq(2).append($('div').eq(1).find('li').eq(6))
  //frodo
  $('article').eq(2).append($('div').eq(1).find('li').eq(5))

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mountDoom = $('<div>').attr('id', 'mount-doom')
  $('article').eq(2).append($mountDoom)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = $('<div>').attr('id', 'gollum')
  $('article').eq(2).append($gollum)
  
  // 2. Move the ring from Frodo and give it to Gollum
  // The ring - $('article').eq(2).find('li').eq(4).find('div')
  $theRing = $('article').eq(2).find('li').eq(4).find('div')
  $gollum.append($theRing)
  // 3. Move Gollum into Mount Doom
  $('article').eq(2).find('div').eq(0).append($gollum)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  // gollum - $('article').eq(2).find('div').eq(1)
  // the ring - $('article').eq(2).find('div').eq(2)
  $('article').eq(2).find('div').eq(2).remove()
  $('article').eq(2).find('div').eq(1).remove()

  // 2. remove all the baddies from the DOM
  $('article').eq(2).find('li').eq(2).remove()
  $('article').eq(2).find('li').eq(1).remove()
  $('article').eq(2).find('li').eq(0).remove()
  
  // 3. Move all the hobbits back to the shire
  $('article').eq(0).append($('article').eq(2).find('li'))
  
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});