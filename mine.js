'use strict'


//function that uses fetch to get API
//Read through the API to get an idea about what it contains

const fetchApi = () => {
    fetch(`https://dog.ceo/api/breeds/image/random/3`)
    .then(response => response.json())
    .then(data => console.log(data));
    console.log('fetchApi ran')
}

//function that creates html which contains img
// put html into a variable?
const imgSection = (data) => {
    let section = `
    <div>
    <img src = ${data} class="hidden;
    </div>`
    return section;
    //console.log('imgSection ran');
}


//function that adds the API picture to the html
const addImg = () => {
    $('.js-query').html(imgSection());
    $('.js-query').removeClass('hidden');
    console.log('addImg ran')
}

//function to listen to submit listener
//prevent default behavior
//make a variable that uses find to get specific value that is 
    //entered into submit
//make variable that contians the new value
//return the variable
//call function to add html to page?

const submitListener = () =>{
    $('js-search-form').on('submit', event =>{
        event.preventDefault();
        const submittedValue = $(event.currentTarget).find($('.js-query'));
        const submission = submittedValue.val();
        return submission;
        //fetchApi();
    })
}


//function that calls others when screen is loaded

$(function (){
    console.log('App is loaded');
    submitListener();
})