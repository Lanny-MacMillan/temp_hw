var pageCounter = 1
var animalContainer = document.getElementById('animal-info')
var btn = document.getElementById('btn')
btn.addEventListener('click', function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
    // console.log(ourData[0])
};
    ourRequest.send();
    pageCounter++
    if(pageCounter > 3) {
        btn.classList.add('hide-me')
    }
})


function renderHTML(data) {
    var htmlString = ''
for(i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + "is a " + data[i].species + "that like to eat" ;
    for(j = 0; j < data[i].foods.likes.length; j++) {
        htmlString += data[i].foods.likes[j]
    }
htmlString =+ '. </p>'
}
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}