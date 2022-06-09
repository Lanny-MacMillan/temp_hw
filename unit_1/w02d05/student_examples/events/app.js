const addText = () => {
    $('body').append('It seems it has been clicked')
}
const changeClass = () => {
    $('body').toggleClass('black');
}


$(()=>{
    // const $btn = $('#btn');
    //button on has 2 parameters a listen 'click' and an event {what you want it to do}
    // $btn.on('click', addText )  


    const $btn = $('#btn');
    //button on has 2 parameters a listen 'click' and an event {what you want it to do}
    $btn.on('click', changeClass)   
  
})
