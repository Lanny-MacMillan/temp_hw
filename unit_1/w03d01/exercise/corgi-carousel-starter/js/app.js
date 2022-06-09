// console.log("corgi carousel connected to app.js!");
$(() => {

let currentImgIndex = 0
// const numOfImages = $('.carosel-images').children().length -1
$('.next').on('click', () => {
    $('.carosel-images').children().eq(currentImgIndex).css('display', 'none')
    currentImgIndex ++
    $('.carosel-images').children().eq(currentImgIndex).css('display', 'block')
    // if(currentImgIndex < numOfImages) {
    //    currentImgIndex ++
    // } else {
    //     currentImgIndex = 0
    // $('.carosel-images').children().eq(currentImgIndex).css('display', 'block')
    // }
})
// $('.previous').on('click', () => {
// console.log('previous')
// }



// $('.previous').on('click', () => {
//     $('.carosel-images').children().eq(currentImgIndex).css('display', 'none')
//     if(currentImgIndex > 0) {
//         currentImgIndex --
//         } else {
//         currentImgIndex = numOfImages
//         }
//     $('.carosel-images').children().eq(currentImgIndex).css('display', 'block')
// })


// let currentImgIndex = 0
// const numOfImages = $('.carosel-images').children().length -1




















});
