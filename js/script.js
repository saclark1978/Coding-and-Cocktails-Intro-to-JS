const addDevSkill = function (skill) {
    let listItem = document.createElement('li');
    listItem.innerHTML = skill;
    document.getElementById("coding-section").appendChild(listItem);
};

const drink = function (item) {
   return 'I\'d like a ' + item + ', please!';
};
 
const Stephanie = 'cocktail';

let numberOfClicks = 0;

const clickHandler = function (text) {
    numberOfClicks = numberOfClicks + 1;
    console.log('numberOfClicks', numberOfClicks);
    alert(text);
};

// Declare brainSkills array below this line

document.addEventListener("DOMContentLoaded", function (event) {

   document.getElementById('cocktail-section').innerHTML = drink(Stephanie);

});
