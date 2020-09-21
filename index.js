'use strict'

 //function that uses fetch to get API
 function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(jsonData => 
      displayResults(jsonData))
    .catch(error => alert('Something went wrong. Try again later.'));
}


 //function to create html for new img

 function displayResults(jsonData) {
  console.log(jsonData);
  //replace the existing image with the new one
  let htmlString = "";
  for(let i = 0; i < jsonData.message.length; i++){
    htmlString = htmlString + `<img src="${jsonData.message[i]}" class="results hidden">`
  }
  $('.results').html(htmlString);
  //display the results section
  $('.results').removeClass('hidden');
}

//function to add image to the html
/*const addImg = () => {
  $('.js-query').html(displayResults());
  $('.js-query').removeClass('hidden');
  console.log('addImg ran')
}
*/


//function to listen to subimt
function submitListener() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let submit = $(event.currentTarget).find($('.js-query'));
    let submission = submit.val();
    getDogImage(submission, displayResults);
  });
}
 

//function to call other funciton to load page
$(function (){
  console.log('App is Loaded')
  submitListener();
});