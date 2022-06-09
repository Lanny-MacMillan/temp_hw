const addText = () => {
<<<<<<< HEAD
    $('body').append('It seems it has been clicked')
}
=======
    $('body').append('It seems as if it has been clicked');
}

>>>>>>> d0f0028404dd01bcda7ad64b3d4ffda7d3cab739
const changeClass = () => {
    $('body').toggleClass('black');
}

<<<<<<< HEAD

$(()=>{
    // const $btn = $('#btn');
    //button on has 2 parameters a listen 'click' and an event {what you want it to do}
    // $btn.on('click', addText )  


    const $btn = $('#btn');
    //button on has 2 parameters a listen 'click' and an event {what you want it to do}
    $btn.on('click', changeClass)   
  
})
=======
$(() => {
    const $btn = $('#btn');
    // console.log($btn);
    $btn.on('click', addText);
    $btn.on('click', changeClass);
})
>>>>>>> d0f0028404dd01bcda7ad64b3d4ffda7d3cab739
