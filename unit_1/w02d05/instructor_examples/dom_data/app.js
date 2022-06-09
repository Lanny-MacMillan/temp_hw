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

const populateData = () => {
    for(let i = 0; i < data.length; i++){
        const $infoContainer = $('<div>').addClass('info-container');
        $('body').append($infoContainer);

        const $nameDiv = $('<div>').addClass('name').text(data[i].name);
        const $addressDiv = $('<div>').addClass('address').text(data[i].address);

        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
    }
}

const addData = (nameParam, addressParam) => {
    data.push({ name: nameParam, address: addressParam });

    const $infoContainer = $('<div>').addClass('info-container');
    const $nameDiv = $('<div>').addClass('name').text(nameParam);
    const $addressDiv = $('<div>').addClass('address').text(addressParam);

    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);

    $('body').append($infoContainer);
}

$(() => {
    $('#submit').on('click', () => {
        const newName = $('#name').val();
        const newAddress = $('#address').val();
        // console.log(newName, newAddress);
        addData(newName, newAddress);
    })

    populateData();
    addData('Bilbo', 'The Shire');
    console.log(data);
})
