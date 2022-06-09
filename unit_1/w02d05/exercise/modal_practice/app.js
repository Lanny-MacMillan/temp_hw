// console.log($);
// console.log('modal practice app.js is linked to this index.html');

// on window load function
$(() => {
    const $openBtn = $('#openModal')
    const $modal = $('#modal')
    const $closeBtn = $('#close')
    
    const openModal = () => {
        $modal.css('display', 'block')
    }
    const closeModal = () => {
        $modal.css('display', 'none')
    }
    // function on its own needs (). a function within a function doesnt need the () as below
    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
    //timeout    (what function we want, mms 1000=1 second)
    setTimeout(openModal, 2000)


})