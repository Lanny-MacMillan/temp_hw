const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];
// function for adding data (input parameters)
const addData = (nameParam, addressParam) => {
    data.push({
        name: nameParam,
        address: addressParam,
    });
    //empties the body of names so there is not two lists when it repopulates
    $('body').empty();
    populateData();
}



const populateData = () => {
    for(let i = 0; i < data.length; i++) {
        //console.log data
    console.log(data[i].name);
       //create info container and append to body
    const $infoContainer = $('<div>').addClass('info-container');
    $('body').append($infoContainer)
        // create name and address div
    const $nameDiv = $('<div>').addClass('name').text(data[i].name);
    const $addressDiv = $('<div>').addClass('name').text(data[i].address);

    $infoContainer.append($nameDiv)
    $infoContainer.append($addressDiv)
}


    $('body').append("<input type='text' id='name' />");
    $('body').append("<input type='text' id='address' />");
    $('body').append("<input type='submit' id='submit' value='Add Data' />");
//                         (event)
    $('#submit').on('click', () => {
        const newName = $('#name').val();
        const newAddress = $('#address').val();

        addData(newName, newAddress);
    })

}







$(() => {

    populateData()
    addData('Bilbo', 'The Shire')
  
    // console.log(data)

})